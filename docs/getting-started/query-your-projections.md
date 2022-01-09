# Query your projections

A projection is an Eloquent model and is queried the same way, but keep in mind that the projections are all stored in a single table called `quasar_projections` . That means you'll have to use scope methods to get the correct projections regarding the period or even the key you defined earlier. 

## Query a named projection

You can build your query in three different ways:

### Using your projection class

To query a projection with a specific name, use your projection class:

```php
MyProjection::all();
```

This query will return an instance of the `ProjectionCollection` collection, which will help you generate a [time-series](/getting-started/query-your-projections#converts-your-projections-to-a-time-series) if needed.

### Using the model relationship

Each projection has a [many to many (polymorphic)](https://laravel.com/docs/8.x/eloquent-relationships#many-to-many-polymorphic-relations) relationship with the bound model(s):

```php
$myModel = MyModel::first();

$myModel->projections(MyProjection::class);
```

Depending on the projections you wish to query, the given parameter can also be `null` or an `array` of projections class names.

### Using the parent class

As an alternative, you can use the `name` scope method of the `Projection` class:

```php
use TimothePearce\Quasar\Models\Projection;

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

## Get the projections between two dates

:::caution

The `MissingProjectionPeriodException` exception will rise if you use the `between` scope method without specifying a period.

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

Each date is rounded to the floor by the given period, which means that you **don't have to provide the exact dates**, Quasar will do the maths for you.

Note that this method **does not fill the missing projections** between the given dates, instead it returns a query builder. 

## Fill the missing projection between two dates

// @todo

Parler des collections

```php
MyProjection::period('1 day')
    ->fillBetween(
        today()->subDay(),
        today(),
    );
```

The `defaultContent` method from the projection queried will be use a fallback content value.

## Time-series

Quasar defines a time-series as the final representation of your projections' data which is represented as an array of `segments`.

### Time-series segment

A `segment` is a projection instance converted to an array containing all the data you need to easily draw a chart.

You can convert a projection instance with the `segment` method:

```php
$projection = MyProjection::period('1 day')->first();

$projection->segment();

[
    "projection_name" => "App\Models\Projections\MyProjection"
    'period' => '1 day',
    'start_date' => '',
    'end_date' => '',
    'content' => [
        ''
    ]
]
```

### Convert a projection collection to a time-series

When you execute a query from a projection class, you get an instance of the `TimothePearce\Quasar\Collections\ProjectionCollection` class.

This custom collection comes with the `fillBetween` method which as its name suggests fill the missing projections of the collection between two dates given as parameters:

// @todo

To convert a collection obtained with one of the above methods, use the `toTimeSeries` method:

```php
MyProjection::period('1 day')
    ->toTimeSeries(
        today()->subDay(),
        today(),
    );
```

### Query a time-series from a projection model

On top of that, A time-series can be queried straight from the projection model class after specified the period your want and provided the two between dates:

```php
MyModel::::period('1 day')
    ->toTimeSeries(
        today()->subDay(),
        today()
    );
```

// @todo