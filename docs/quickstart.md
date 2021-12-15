---
sidebar_position: 2
---

# Quickstart

This tutorial will let you discover what Laravel Quasar can do for you in less than 10 minutes.

:::info

For the sake of understanding, the upcoming tutorial will only focus on some core features of Quasar. More advanced use cases are documented in the getting started section.

:::

## Installation

We start by executing the following commands at **the root directory** of your Laravel app:

```
composer require timothepearce/quasar

php artisan migrate
```

## Create your first projection

Next we create a `Projection`, an Eloquent model with hidden capabilities we will explore in a minute.

In this example, we will project the `User` model but fill free to use the model of your choice.

```shell
php artisan quasar:projection UserProjection
```

## Make your model projectable

Now let's add the `Projectable` trait to the model and define the `$projections` attribute by giving him the projection you just created.

```php title="app/Models/User.php" {8,10,11,12}
...

use App\Models\Projections\UserProjection;
use TimothePearce\Quasar\Projectable;

class User extends Authenticatable
{
    use Projectable;

    protected array $projections = [
        UserProjection::class,
    ];

    ...
}
```

## Implement your projection

It's now time to implements the logic of your projection.

Start by defining the `$periods` attribute and the `defaultContent` method as following:

```php title="app/Models/Projections/UserProjection.php" {8,10,11,12,13,14,15}
...

use TimothePearce\Quasar\Contracts\ProjectionContract;
use TimothePearce\Quasar\Models\Projection;

class UserProjection extends Projection implements ProjectionContract
{
    public array $periods = ['1 hour'];

    public function defaultContent(): array
    {
        return [
            'user_count' => 0,
        ];
    }
}
```

## Hook the projection to your model

Then we will hook our Projection to our model by defing a `UserCreated` method:
```php title="app/Models/Projections/UserProjection.php" {7,8,9,10,11,12}
...

class UserProjection extends Projection implements ProjectionContract
{
    ...

    public function UserCreated(array $content, User $user): array
    {
        return [
            'user_count' => $content['user_count'] + 1,
        ];
    }
}
```

That's it! Now every time a `User` is created, a projection containing the `user_count` value will be created (or updated) as well.

## Query your projection

// @todo