# Available events

:::info

If you want to use an event that is not implemented by Quasar feel free to contribute to the library.

:::

Each time a projection is updated, it comes from an event triggered by a projectable Eloquent model. These events belong to those defined by [the framework](https://laravel.com/docs/8.x/eloquent#events).

Currently, Laravel Quasar gives you access to these different types of events:
* `created`
* `updating`
* `updated`
* `deleting`
* `deleted`