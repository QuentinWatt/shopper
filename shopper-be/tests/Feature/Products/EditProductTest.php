<?php

use App\Models\Product;

describe('EditProduct', function () {
    test('it has an edit endpoint', function () {
        $product = Product::factory()->create();
        $response = $this->putJson('/api/products/' . $product->id);
        $this->assertNotEquals(404, $response->getStatusCode());
    });

    test('it expects a put request', function () {
        $product = Product::factory()->create();
        $response = $this->putJson('/api/products/' . $product->id);
        $this->assertNotEquals(405, $response->getStatusCode());
    });

    test('it has validation for the required fields', function () {
        $product = Product::factory()->create();
        $response = $this->putJson('/api/products/' . $product->id);
        $response->assertStatus(422);

        $json = json_decode($response->getContent());
        expect($json)->toHaveProperty('errors');
        expect($json->errors)->toHaveProperties([
            'name' => [
                'The name field is required.'
            ],
            'description' => [
                'The description field is required.'
            ],
            'price' => [
                'The price field is required.'
            ]
        ]);
    });

    test('it returns the edited product data', function () {
        $product = Product::factory()->create([
            'name' => 'Quentin\'s test product',
            'price_cents' => '1000',
            'description' => 'Don\'t want this description later.',
        ]);
        $response = $this->putJson('/api/products/' . $product->id, [
            'name' => 'coaster set',
            'description' => 'a set of coasters',
            'price' => '30000',
        ]);

        $response->assertStatus(200);
        $json = json_decode($response->getContent());
        expect($json)->toHaveProperty('data');

        expect($json->data)->toHaveProperties([
            'id' => $product->id,
            'name' => 'coaster set',
            'description' => 'a set of coasters',
            'price_cents' => '30000',
        ]);
    });
});
