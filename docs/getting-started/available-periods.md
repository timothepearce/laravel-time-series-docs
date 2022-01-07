# Available periods

When a projection is created, Quasar assigns it a `start_date` and an `end_date`, the interval between these two values is called a **period**. Therefore, you can consider it as the "life span" of your projection.

A period is usually composed of two parts, a **number** followed by a **type**; the only exception is regarding the [global period](#the-global-period).

Here is a list of valid periods: `*`, `1 day`, `2 hours`, `3 months`, `1 year`, `12 hours`.

## Types of periods

Laravel Quasar gives you access to these different types of periods:
* `*`
* `minute`
* `hour`
* `day`
* `week`
* `month`
* `year`

Note that you should pluralize the period's type if the duration is greater than `1`.

## The global period

In case you want to build a projection with an unlimited lifetime, add the `*` period to your projection.

A projection with a global period will be unique (regarding the `*` period) and continuously updated by the bound projectable models.

## How a projection's start date is defined?

A projection's `start_date` is defined regarding its period and the current date. Each time a new one is created, its `start_date` will equal **the current date rounded to the floor by the period**.

For example, let's say the current date is `2022-01-07 11:04:25`:

* Given a `1 hour` period, the start date equals `2022-01-07 11:00:00`.
* Given a `2 hours` period, the start date equals `2022-01-07 10:00:00`.
* Given a `1 day` period, the start date equals `2022-01-07 00:00:00`.
* Given a `2 days` period, the start date equals `2022-01-06 00:00:00`.
* Given a `1 week` period, the start date equals `2022-01-03 00:00:00`.
