<?php

use App\Models\User;

test('it has a create product endpoint', function () {
    $response = $this->postJson('/api/products');
    $this->assertNotEquals(404, $response->getStatusCode());
});

test('The Product create route is protected', function () {
    $response = $this->postJson('/api/products');
    $response->assertStatus(401);
});

describe('Authorized Create', function () {
    beforeEach(function () {
        $user = User::factory()->create();
        $this->actingAs($user);
    });

    test('It returns a 422 data is submitted empty', function () {
        $response = $this->postJson('/api/products');
        $response->assertStatus(422);
    });

    test('It has validation on the required fields', function () {
        $response = $this->postJson('/api/products');
        $response->assertStatus(422);

        expect($response->getContent())->toBeJson();
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
            ],
        ]);
    });

    test('it creates a product with minimum required fields', function () {
        $response = $this->postJson('/api/products', [
            'name' => 'Antique porcelain lamp stand',
            'description' => 'An antique porcelain lamp stand decorated with blue and white painting.',
            'price' => '120000',
        ]);

        $response->assertStatus(201);

        expect($response->getContent())->toBeJson();
        $json = json_decode($response->getContent());
        expect($json)->toHaveProperty('data');
        expect($json->data)->toHaveProperties([
            'id',
            'sku' => null,
            'name' => 'Antique porcelain lamp stand',
            'description' => 'An antique porcelain lamp stand decorated with blue and white painting.',
            'price_cents' => '120000',
        ]);

        $createdProductId = $json->data->id;

        $this->assertDatabaseHas('products', [
            'id' => $createdProductId,
            'name' => 'Antique porcelain lamp stand',
            'description' => 'An antique porcelain lamp stand decorated with blue and white painting.',
            'price_cents' => '120000',
        ]);
    });
});
