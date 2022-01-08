# Implement a projection

## Create a projection

To create a projection, executes the following command by replacing `MyProjection` with the name you chose:

```bash
php artisan make:projection MyProjection
```

Your newly created Projection will be accessible in the `app/models/projections` folder.

It is defined as follows:

```php title="app/Models/Projections/MyProjection.php"
<?php

namespace App\Models\Projections;

use Illuminate\Database\Eloquent\Model;
use TimothePearce\Quasar\Contracts\ProjectionContract;
use TimothePearce\Quasar\Models\Projection;

class MyProjection extends Projection implements ProjectionContract
{
    /**
     * The projected periods.
     */
    public array $periods = [];

    /**
     * The projection default content.
     */
    public function defaultContent(): array
    {
        return [];
    }

    /**
     * The "created" hook for projectable models.
     */
    public function projectableCreated(array $content, Model $model): array
    {
        return [];
    }
}
```

## Define your projection periods

The `periods` attribute let you define the life period of each projection. Let's walk through this with an example:

```php title="app/Models/Projections/MyProjection.php" {8}
...

class MyProjection extends Projection implements ProjectionContract
{
    /**
     * The projected periods.
     */
    public array $periods = ['1 day'];

    ...
}
```

By defining your projection's periods like that, each time a bound model is created/updated or whatever lifecycle event you listened to, a `MyProjection` model with a creation date between now and yesterday at the same time will be queried. If this projection exists it will be updated, if not, it will be created.

You can define as many periods as you like, the available one are listed in the [Available periods](/getting-started/available-periods) section.

## Define the default content of your projection

The default content is defined through the method of the same name which must return an array.

```php title="app/Models/Projections/MyProjection.php" {10,11,12,13,14,15}
...

class MyProjection extends Projection implements ProjectionContract
{
    ...

    /**
     * The projection default content.
     */
    public function defaultContent(): array
    {
        return [
            'update_count' => 0,
            'my_projection_metric' => 0,
        ];
    }

    ...
}
```

Note that you can also return an array with a dynamic structure if necessary.

## Implement the binding

You can implement this logic in the two different ways listed below.

### The model hook method

To bind a model to a projection, you must define a method composed of your model name (camel cased) followed by the event name you want to listen to.

```php title="app/Models/Projections/MyProjection.php" {12,13,14,15,16,17}
...

use App\Models\MyModel;

class MyProjection extends Projection implements ProjectionContract
{
    ...

    /**
     * The MyModel "updated" hook.
     */
    public function myModelUpdated(array $content, MyModel $model): array
    {
        return [
            'update_count' => $content['update_count'] + 1,
        ];
    }

    ...
}
```

Note that you don't need to return an array with the exact same structure as the default content. The result of your hook method will be merged to the actual projection content (or the default one in case it is created).

### The projectable hook method

You have probably noticed the `projectableCreated` method when you generate a new projection. Event-specific variations can also be used. eg: `projectableUpdated`, `projectableDeleted`, etc.

This method should be helpful if you treat all bound models in the same way, for example, when your projection does not use specific data from each model.

It can also be considered a fallback for models without a specific implementation.

```php title="app/Models/Projections/MyProjection.php" {12,13,14,15,16,17}
...

use App\Models\MyModel;

class MyProjection extends Projection implements ProjectionContract
{
    ...

    /**
     * The "updated" hook for all bound models.
     */
    public function projectableUpdated(array $content, Model $model): array
    {
        return [
            'update_count' => $content['update_count'] + 1,
        ];
    }

    ...
}
```

The [Available events](/getting-started/available-events) section list all the event you can use.

## Add a key to your projection

:::caution

In case you bound multiple models to your projection you must use the `Illuminate\Database\Eloquent\Model` type as first parameter of the `key` method.

:::

Sometimes you need to restrict your projection to a unique identifier (e.g: You want a projection scoped **by Team ID**).

In that case, Quasar lets you define a `key` method in your projection:

```php title="app/Models/Projections/MyProjection.php" {10,11,12,13}
...

class MyProjection extends Projection implements ProjectionContract
{
    ...

    /**
     * The projection key.
     */
    public function key(MyModel $model): string
    {
        return $myModel->team->id;
    }
}
```


Now, each time a `MyProjection` is queried, created or updated, a `WHERE key = ?` clause will be added to the query.  

To understand how to query a projection with a key, look at the [Query your projection](/getting-started/query-your-projections) section.