# Query your projections

A projection is an Eloquent model and is queried the same way, but keep in mind that the projections are all stored in a single table called `quasar_projections` . That means you'll have to use scope methods to get the correct projections regarding the period or even the key you defined earlier. 

## Query a named projection

You can build your query in three different ways:

### Using your projection class

To query a projection with a specific name, use your projection class:

```php
use App\Models\Projections\MyProjection;

MyProjection::all();
```

This query will return all your items in a `TimothePearce\Quasar\Collections\ProjectionCollection` collection, which will help you when you want to generate a [time-series](/getting-started/format-as-time-series).

### Using the model relationship

Each projection has a [many to many (polymorphic)](https://laravel.com/docs/8.x/eloquent-relationships#many-to-many-polymorphic-relations) relationship with the bound model(s):

```php
use App\Models\MyModel;
use App\Models\Projections\MyProjection;

$myModel = MyModel::first();

$myModel->projections(MyProjection::class);
```

Depending on the projections you wish to query, the given parameter can also be `null` or an `array` of projections.

### Using the parent class

As an alternative, you can use the `name` scope method of the `TimothePearce\Quasar\Models\Projection` class:

```php

use App\Models\Projections\MyProjection;
use TimothePearce\Quasar\Models\Projection;

Projection::name(MyProjection::class)
    ->get();
```

## Scope your query to a period

## Scope your query to a key

## Scope between two dates