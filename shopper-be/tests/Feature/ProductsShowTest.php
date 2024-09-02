<?php

use App\Models\Product;

describe('Show Products Test', function () {
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

    test('it has an array of product results', function () {
        $product = Product::factory()->create([
            'name' => 'Bees wax candle set',
            'description' => 'Organic bees wax candle set of 3.',
        ]);

        $response = $this->getJson('/api/products');
        $response->assertStatus(200);
        $content = json_decode($response->getContent());

        expect($content->data[0])->toHaveProperties([
            'id' => $product->id,
            'sku' => $product->sku,
            'name' => 'Bees wax candle set',
            'description' => 'Organic bees wax candle set of 3.'
        ]);
    });
});
