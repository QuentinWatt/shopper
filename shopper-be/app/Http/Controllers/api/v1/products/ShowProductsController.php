<?php

namespace App\Http\Controllers\api\v1\products;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Products\ProductResourceCollection;

class ShowProductsController extends Controller
{
    public function __invoke(Request $request): ProductResourceCollection
    {
        return new ProductResourceCollection(Product::paginate(20));
    }
}
