# Query your projections

A projection is an Eloquent model and is **queried the same way**, but keep in mind that the projections are all stored in a single table called `quasar_projections`.

That means **you'll have to use scope methods** to get the correct projections regarding the period or even the key you defined earlier. 

## Query a named projection

You can build your query in three different ways:

### Using your projection class

To query a projection with a specific name, use your projection class:

```php
MyProjection::all();
```

This query will return an instance of the `ProjectionCollection` collection, which will help you generate a [time series](/getting-started/query-your-projections#converts-your-projections-to-a-time series) if needed.

### Using the model relationship

Each projection has a [many to many (polymorphic)](https://laravel.com/docs/8.x/eloquent-relationships#many-to-many-polymorphic-relations) relationship with the bound model(s):

```php
MyModel::first()
    ->projections(MyProjection::class)
    ->get();
```

Depending on the projection(s) you wish to query, the given parameter can also be `null` or an `array` of projections class names.

### Using the parent class

As an alternative, you can use the `name` scope method of the `Projection` class:

```php
use TimothePearce\TimeSeries\Models\Projection;

Projection::name(MyProjection::class)
    ->get();
```

## Restrict your query to a period

To restrict your query to a period use the `period` scope method:

```php
MyProjection::period('1 day')
    ->get();
```

## Restrict your query to a key

To restrict your query to a key use the `key` scope method:

```php
$teamId = Team::first()->id;

MyProjection::key($teamId)
    ->get();
```

## Query the projections between two dates

:::caution

The `MissingProjectionPeriodException` exception will rise if you use the `between`, `fillBetween` or `toTimeSeries` method without specifying a period.

:::

When you want to query projections between two dates, use the `between` scope method with the `Carbon $startDate` and `Carbon $endDate` arguments:

```php
MyProjection::period('1 day')
    ->between(
        today()->subDay(), // start date
        today(), // end date
    )
    ->get();
```

The `between` method parameters must be instances of the `Illuminate\Support\Carbon` class.

Each date is rounded to the floor by the given period, which means that you **don't have to provide the exact dates**, Time Series will do the maths for you.

Note that this method **does not fill the missing projections** between the given dates, instead it returns a query builder.

## Get and fill the missing projection between two dates

If you wish to obtain projections between two dates but also fill the missing ones, Time Series provides the `fillBetween` method.

```php
MyProjection::period('1 day')
    ->fillBetween(
        today()->subDay(),
        today(),
    );
```

It works the same way as the `between` method but returns an instance of the `ProjectionCollection` class filled with **a merge of the projections stored in your database and the missing ones**.

The `defaultContent` method from the projection queried will be use a fallback content value for the missing projections.

## Query a time series

Time Series defines a "time series" as the **final representation of your projections' data**, represented as an array of `segments`.

Before going any further, let's look at how a `segment` looks like.

### The time series segment

A `segment` is a projection instance converted to an array with **all the data you need to easily draw a chart**.

You can convert a instance of a projection with the `segment` method:

```php
$projection = MyProjection::period('1 day')->first();

$projection->toSegment();

[
    "projection_name" => "App\Models\Projections\MyProjection"
    "period" => "1 day",
    "start_date" => "2022-01-06 00:00:00",
    "end_date" => "2022-01-06 23:59:59",
    "content" => [
        "update_count" => 12
    ]
]
```

The `start_date` and `end_date` let you **plot your segment on a time axis**, as well as the `content` array which is the entry point to all data stored by the projection. 

### Get a time series from the projection model

To get a time series from a projection model, use the `toTimeSeries` method:

```php
MyProjection::period('1 day')
    ->toTimeSeries(
        today()->subDay(),
        today(),
    );
```

This method return a collection of `segments`, ordered by date.

### Convert a collection to a time series

:::caution

Note that the collection must be only filled with projections instances.

:::

If you previously queried a projections and get an instance of the `ProjectionCollection`, it is very likely that you want to convert the projections instances in `segments`.
To do that, you can use the `toSegments` method:

```php
$projections = MyProjection::period('1 day')
    ->fillBetween(
        today()->subDay(),
        today(),
    );

$projections->toSegments();
```