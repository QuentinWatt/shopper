<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Products\CreateProductRequest;
use App\Http\Resources\v1\Products\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class CreateProductController extends Controller
{
    public function __invoke(CreateProductRequest $request)
    {
        $product = Product::create(
            array_merge(
                $request->except('price'),
                ['price_cents' => $request->input('price')]
            )
        );

        return (new ProductResource($product))->response()->setStatusCode(201);
    }
}
