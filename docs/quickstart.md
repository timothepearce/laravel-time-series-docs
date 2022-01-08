# Quickstart

This tutorial will let you discover what Laravel Quasar can do for you in less than 10 minutes.

:::info

For the sake of understanding, the upcoming tutorial will focus on a trivial Projection's implementation. More advanced use cases will be documented soon.

:::

## Installation

We start by executing the following commands at **the root directory** of your Laravel app:

```
composer require timothepearce/quasar

php artisan migrate
```

## Create your projection

Next, we create a `Projection`, an Eloquent model with hidden capabilities we will explore in a minute.

In this example, we will project the `User` model but feel free to use any model you prefer.

```shell
php artisan quasar:projection UserProjection
```

## Make your model projectable

Now let's add the `Projectable` trait to the model and assign to the `$projections` attribute an array containing the projection classes you just created

```php title="app/Models/User.php" {10,12,13,14}
...

use App\Models\Projections\UserProjection;
use TimothePearce\Quasar\Projectable;

class User extends Authenticatable
{
    ...

    use Projectable;

    protected array $projections = [
        UserProjection::class,
    ];

    ...
}
```

## Implement your projection

It's now time to implement the logic of your projection.

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
            'users_count' => 0,
        ];
    }
}
```

:::tip

You can define multiple periods which are documented in the [available periods](/getting-started/available-periods) section. 

:::

## Hook the projection to your model

Then we will hook our Projection to our model by defining a `userCreated` method:
```php title="app/Models/Projections/UserProjection.php" {7,8,9,10,11,12}
...

class UserProjection extends Projection implements ProjectionContract
{
    ...

    public function userCreated(array $content, User $user): array
    {
        return [
            'users_count' => $content['users_count'] + 1,
        ];
    }
}
```

That's it! Every time a `User` is created, a projection containing the `user_count` value will be created (or updated) as well.

You get it, you can store anything you want in your projection and bind it to any Model events you're interested in! 

## Seed some data

For the purpose of this example, we will generate fake data with Tinker:

```
php artisan tinker --execute="User::factory()->count(4)->create()"
```

## Query your time series

Thanks to Eloquent and Quasar, we can fluently query your projection and convert it to obtain a time series:

```php
use App\Models\Projections\UserProjection;

UserProjection::period('1 hour') // acts as a scope
    ->toTimeSeries(
        now()->subHour(), // 2022-01-01 00:04:25
        now(), // 2022-01-01 01:04:25
    ); // executes your query and converts it to a custom collection
```

Based on the provided period and dates, this code will output a `Collection` filled with your projected data.

In case data is missing (no user has been created in the last hour), Quasar will fill the period with the default content of your projection:

```php
TimothePearce\Quasar\Collections\ProjectionCollection {
    items: [
        0 => [
            // the start date is rounded to the floor given the '1 hour' period
            "start_date" => "2022-01-01 00:00:00",
            "end_date" => "2022-01-01 00:59:59",
            "content" => [
                "users_count" => 0,
            ]
        ],

        1 => [
            "start_date" => "2022-01-01 01:00:00",
            "end_date" => "2022-01-01 01:59:59",
            "content" => [
                "users_count" => 4,
            ]
        ],
    ],
}
```

This example walks you through the general structure of a Projection, now it's up to you to store the content of your choice from any model!

You only scratched the surface of Laravel Quasar, if you want to know more about the use cases it can solve, read the [What is Quasar?](/) section.