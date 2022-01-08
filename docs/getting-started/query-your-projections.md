# Query your projections

A projection is an Eloquent model and is queried the same way, but keep in mind that the projections are all stored in a single table called `quasar_projections` . That means you'll have to use scope methods to get the correct projections regarding the period or even the key you defined earlier. 

## Query a named projection

You can build your query in three different ways:

### Using your projection class

To query a projection with a specific name, use your projection class:

```php
MyProjection::all();
```

This query will return all your items in a `TimothePearce\Quasar\Collections\ProjectionCollection` collection, which will help you when you want to generate a [time-series](/getting-started/format-as-time-series).

### Using the model relationship

Each projection has a [many to many (polymorphic)](https://laravel.com/docs/8.x/eloquent-relationships#many-to-many-polymorphic-relations) relationship with the bound model(s):

```php
$myModel = MyModel::first();

$myModel->projections(MyProjection::class);
```

Depending on the projections you wish to query, the given parameter can also be `null` or an `array` of projections.

### Using the parent class

As an alternative, you can use the `name` scope method of the `TimothePearce\Quasar\Models\Projection` class:

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

## Scope between two dates

:::caution

The `TimothePearce\Quasar\Exceptions\MissingProjectionPeriodException` exception will rise if you use the `between` scope method without specifying a period.

:::

When you want to query the projections between two dates, use the `between` scope method with the `Carbon $startDate` and `Carbon $endDate` arguments:

```php
MyProjection::period('1 day')
    ->between(
        today()->subDay(), // start date
        today(), // end date
    )
    ->get();
```

The `between` method parameters must be of `Illuminate\Support\Carbon` type.

Each date is rounded to the floor by the given period, which means that you don't have to provide the exact dates you want, Quasar will solve it for you!