<?php

namespace App\Http\Controllers\api\v1\Products;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Products\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ShowProductController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Product $product): ProductResource
    {
        return new ProductResource($product);
    }
}
