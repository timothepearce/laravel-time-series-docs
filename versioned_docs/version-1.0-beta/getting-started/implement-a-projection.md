# Implement a projection

## Create a projection

To create a projection, executes the following command by replacing `MyProjection` with the name you chose:

```bash
php artisan make:projection MyProjection
```

Your newly created Projection will be accessible in the `app/models/projections` folder.

It is defined as following:

```php title="app/Models/Projections/MyProjection.php"
<?php

namespace App\Models\Projections;

use Illuminate\Database\Eloquent\Model;
use TimothePearce\Quasar\Contracts\ProjectionContract;
use TimothePearce\Quasar\Models\Projection;

class MyProjection extends Projection implements ProjectionContract
{
    /**
     * Lists the available periods.
     */
    public array $periods = [];

    /**
     * The default projection content.
     */
    public function defaultContent(): array
    {
        return [];
    }

    /**
     * Compute the projection each time a bound model is created.
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
     * Lists the available periods.
     */
    public array $periods = ['1 day'];

    ...
}
```

By defining your projection's periods like that, each time a bound model is created/updated or whatever lifecycle event you listened to, a `MyProjection` model with a creation date between now and yesterday at the same time will be queried. If this projection exists it will be updated, if not, it will be created.

You can define as many periods as you like, the available one are listed in the [Available periods](/getting-started/available-periods) section.

## Define the default content of your projection

## Implement the binding logic

## Add a key to your projection