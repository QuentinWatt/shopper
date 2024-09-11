<?php

namespace App\Http\Controllers\Api\v1\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Products\EditProductRequest;
use App\Http\Resources\v1\Products\ProductResource;
use App\Models\Product;

class EditProductController extends Controller
{
    public function __invoke(EditProductRequest $request, Product $product): ProductResource
    {
        $product->update(array_merge(
            $request->except('price'),
            ['price_cents' => $request->input('price')]
        ));

        return new ProductResource($product);
    }
}
