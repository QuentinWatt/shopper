<?php

use App\Models\Product;

describe('Product show test', function () {
    test('it has a product endpoint', function () {
        $product = Product::factory()->create();
        $response = $this->get('/api/products/' . $product->id);
        $response->assertStatus(200);
    });

    test('it returns correct product data', function () {
        $product = Product::factory()->create([
            'name' => 'Vintage style coffee table',
            'description' => 'Wooden coffee table with vintage appearance.',
            'price_cents' => '999900',
        ]);

        $response = $this->get('/api/products/' . $product->id);
        $response->assertStatus(200);

        $content = json_decode($response->getContent());

        expect($content)->toHaveProperty('data');
        expect($content->data)->toHaveProperties([
            'id',
            'sku',
            'name' => 'Vintage style coffee table',
            'description' => 'Wooden coffee table with vintage appearance.',
            'price_cents' => '999900',
            'created_at',
            'updated_at'
        ]);
    });
});
