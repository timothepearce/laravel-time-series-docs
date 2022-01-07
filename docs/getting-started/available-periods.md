# Available periods

A period is usually composed of two parts, a **duration**, and a **type**; the only exception is the [global period](#the-global-period).

This section will guide you through the process of composing your period.

## Examples of valid periods

Here is a list of valid periods: `*`, `1 day`, `2 hours`, `3 months`, `1 year`, `12 hours`, etc.

## Types of periods

Laravel Quasar gives you access to these different types of periods:
* `*`
* `second`
* `minute`
* `hour`
* `day`
* `week`
* `month`
* `year`

You can pluralize the period's type if the duration is greater than `1`.

## Period duration

A period duration is a simple number: `1`, `2`, `3`, `4`, etc.

## The global period

In case you want to build a projection with an unlimited lifetime, add the period `*` to your projection.

A projection with an unlimited lifetime will be unique (regarding the `*` period) and continuously updated by the bound projectable models.