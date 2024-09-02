<?php

use App\Http\Controllers\api\v1\products\ShowProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/products')->group(function () {
    Route::get('/', ShowProductsController::class);
});
