<?php

use App\Http\Controllers\Api\v1\Auth\LoginController;
use App\Http\Controllers\Api\v1\Auth\LogoutController;
use App\Http\Controllers\Api\v1\Products\ShowProductController;
use App\Http\Controllers\Api\v1\Products\ShowProductsController;
use App\Http\Controllers\Products\CreateProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('login', LoginController::class);
    Route::middleware('auth:sanctum')->post('logout', LogoutController::class);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/products')->group(function () {
    Route::get('/', ShowProductsController::class);
    Route::get('/{product}', ShowProductController::class);
    Route::put('/{product}', function () {});

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/', CreateProductController::class);
    });
});
