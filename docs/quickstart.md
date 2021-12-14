---
sidebar_position: 2
---

# Quickstart

This tutorial will let you discover what Laravel Quasar can do for you in less than 10 minutes.

## Installation

We start by executing the following commands at **the root directory** of your Laravel app:

```shell
composer require timothepearce/quasar

php artisan migrate
```

## Make your model projectable

Now let's add the `Projectable` trait to one of your model.

During this tutorial, we will project the `User` model.

```php {9}
<?php

namespace App\Models;

use TimothePearce\Quasar\Projectable;

class User extends Authenticatable
{
    use Projectable;
}
```

## Create your first projection

Next we create a `Projection`, an Eloquent model with hidden capabilities, .

```shell
php artisan quasar:projection UserProjection
```

## 