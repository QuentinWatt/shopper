<?php

use App\Models\Product;

test('it has a products show endpoint', function () {
    $response = $this->getJson('/api/products');
    $response->assertStatus(200);
});

test('it returns json', function () {
    $response = $this->getJson('/api/products');
    $response->assertStatus(200);
    $content = $response->getContent();
    expect($content)->toBeJson();
});

test('it returns an empty array with no data', function () {
    $response = $this->getJson('/api/products');
    $response->assertStatus(200);
    $content = json_decode($response->getContent());

    expect($content)->toHaveProperties([
        'data',
        'meta'
    ]);

    expect($content->data)->toBeArray();
    expect($content->data)->toHaveLength(0);
});

test('it has an array of product results', function () {
    $product = Product::factory()->create([
        'sku' => 'W314K900',
        'name' => 'Bees wax candle set',
        'description' => 'Organic bees wax candle set of 3.',
    ]);

    $response = $this->getJson('/api/products');
    $response->assertStatus(200);
    $content = json_decode($response->getContent());

    expect($content->data[0])->toHaveProperties([
        'id' => $product->id,
        'sku' => 'W314K900',
        'name' => 'Bees wax candle set',
        'description' => 'Organic bees wax candle set of 3.'
    ]);
});
