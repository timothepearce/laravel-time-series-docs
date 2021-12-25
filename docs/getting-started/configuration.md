# Configuration

## Publish the config file

You can publish the config file by executing:

```bash
php artisan vendor:publish --tag="quasar-config"
```

The `quasar.php` file is then accessible in the config folder at the root level.

This is the default content of the config file:

```php
<?php

use Carbon\CarbonInterface;

return [

    /*
     * Your models' namespace.
     */
    'models_namespace' => 'App\\Models',

    /*
     * When enabled, Quasar will process the projections on a queue.
     */
    'queue' => false,

    /*
     * The specific queue name used by Quasar.
     * Leave empty to use the default queue.
     */
    'queue_name' => '',

    /*
     * The first day of the week.
     */
    'beginning_of_the_week' => CarbonInterface::MONDAY,
];
```

## Set up your model namespace

By default, Quasar will resolve your model's namespace following the Laravel conventions: `App\Models`.

You can overwrite this behavior by setting the `models_namespace` attributes to something else.

## Enable the queue

Quasar can compute your projections in background jobs by setting the `enable_queue` attribute to `true`.

When enabled, each projection will be created/updated in the `TimothePearce\Quasar\Jobs\ComputeProjection` job.

## Dispatch your jobs to a specific queue

If you enabled the queue, Quasar would use the default one unless you provide something else to the `queue_name` attribute.

## Set up the first day of the week

The day defined in the `beginning_of_the_week` attribute will be used to resolve the `start_date` of the weekly Projections.  By default, this attribute is set up on Monday.