---
sidebar_position: 2
---

# Quickstart

This tutorial will let you discover what Laravel Quasar can do for you in less than 10 minutes.

## Installation

We start by executing the following commands at **the root directory** of your Laravel app:

```
composer require timothepearce/quasar

php artisan migrate
```

## Create your first projection

:::info

During this tutorial, we will project the `User` model with `UserProjection`, fill free to use the model of your choice.

:::

Next we create a `Projection`, an Eloquent model with hidden capabilities we will explore later.


```shell
php artisan quasar:projection UserProjection
```

## Make your model projectable

Now let's add the `Projectable` trait to the model of your choice.

Then define the `$projections` class attribute by giving him the projection you just created.

```php {10,12,13,14}
<?php

namespace App\Models;

use App\Models\Projections\UserProjection;
use TimothePearce\Quasar\Projectable;

class User extends Authenticatable
{
    use Projectable;

    protected array $projections = [
        UserProjection::class,
    ];
}
```

## Implement your projection

It's now time to implements the projection logic.

// @todo