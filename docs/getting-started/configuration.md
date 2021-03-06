# Configuration

## Publish the config file

You can publish the config file by executing:

```bash
php artisan vendor:publish --tag="time-series-config"
```

The `time-series.php` file is then accessible in the config folder at the root level.

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
     * When enabled, Time Series will process the projections on a queue.
     */
    'queue' => false,

    /*
     * The specific queue name used by Time Series.
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

By default, Time Series will resolve your model's namespace following the Laravel conventions: `App\Models`.

You can overwrite this behavior by setting the `models_namespace` attributes to something else.

## Enable the queue

:::info

Make sure the queues are set up correctly at the [framework level](https://laravel.com/docs/8.x/queues#running-the-queue-worker) before enabling this option.

:::

Time Series can compute your projections in background jobs by setting the `enable_queue` attribute to `true`.

When enabled, each projection will be created/updated in the `TimothePearce\TimeSeries\Jobs\ComputeProjection` job.

## Dispatch your jobs to a specific queue

If you enabled the queue, Time Series would use the default one unless you provide something else to the `queue_name` attribute.

## Set up the first day of the week

The day defined in the `beginning_of_the_week` attribute will be used to resolve the `start_date` of the weekly Projections.  By default, this attribute is set up on Monday.