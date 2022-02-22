# Make a model projectable

## The Projectable trait

When you want to make your model projectable, you must add it the `Projectable` trait:

```php title="app/Models/MyProjectableModel.php" {6,10}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use TimothePearce\TimeSeries\Projectable;

class MyProjectableModel extends Model
{
    use Projectable;
}
```

Under the hood, this trait will listen for the model's lifecycle events in order to bind them to the projections you will define in the next paragraph.

It also defines a `MorphToMany` relation with the generic `TimothePearce\TimeSeries\Models\Projection` model, which allows you to query your projections following the Eloquent conventions you already know.

## Bind your model to projections

After making your model projectable, you have to bind it to the projections of your choice:

```php title="app/Models/MyProjectableModel.php" {5,13,14,15}
<?php

namespace App\Models;

use App\Models\Projections\MyProjection;
use Illuminate\Database\Eloquent\Model;
use TimothePearce\TimeSeries\Projectable;

class MyProjectableModel extends Model
{
    use Projectable;

    protected array $projections = [
        MyProjection::class,
    ];
}
```

As you see, the `projections` class attribute is a type `array`, which means you can bind your model to multiple projections in case you need it.
