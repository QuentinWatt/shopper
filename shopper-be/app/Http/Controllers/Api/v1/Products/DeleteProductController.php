<?php

namespace App\Http\Controllers\Api\v1\Products;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DeleteProductController extends Controller
{
    public function __invoke(Product $product): JsonResponse
    {
        $product->delete();

        return response()->json(null, 204);
    }
}
