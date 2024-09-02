<?php

use App\Http\Controllers\Api\v1\Auth\CreateTokenController;
use App\Http\Controllers\Api\v1\Products\ShowProductController;
use App\Http\Controllers\Api\v1\Products\ShowProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('token', CreateTokenController::class);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/products')->group(function () {
    Route::get('/', ShowProductsController::class);
    Route::get('/{product}', ShowProductController::class);
});
