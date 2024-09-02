<?php

namespace App\Http\Controllers\Api\v1\Products;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Products\ProductResourceCollection;
use App\Models\Product;
use Illuminate\Http\Request;

class ShowProductsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): ProductResourceCollection
    {
        return new ProductResourceCollection(Product::paginate(20));
    }
}
}
