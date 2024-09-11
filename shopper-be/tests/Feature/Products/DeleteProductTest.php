<?php

use App\Models\Product;

describe('Delete Product Test', function () {
    test('it accepts a delete request', function () {
        $product = Product::factory()->create();
        $response = $this->deleteJson('/api/products/' . $product->id);

        expect($response->getStatusCode())->not()->toBe(404);
        expect($response->getStatusCode())->not()->toBe(405);
    });

    test('it returns a 204 with empty data', function () {
        $product = Product::factory()->create();
        $response = $this->deleteJson('/api/products/' . $product->id);
        expect($response->getStatusCode())->toBe(204);

        $content = json_decode($response->getContent());
        expect($content)->toBe(null);
    });

    test('the data is removed from the database', function () {
        $product = Product::factory()->create();
        $this->assertDatabaseHas('products', [
            'id' => $product->id,
        ]);

        $response = $this->deleteJson('/api/products/' . $product->id);
        expect($response->getStatusCode())->toBe(204);

        $this->assertDatabaseMissing('products', [
            'id' => $product->id,
        ]);
    });
});
