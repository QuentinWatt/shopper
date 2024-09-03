<?php

use App\Models\User;

describe('Log out test', function () {
    test('it has a logout endpoint', function () {
        $response = $this->postJson('api/auth/logout');
        $this->assertNotEquals('404', $response->getStatusCode());
    });

    test('the logout endpoint is protected by auth middleware', function () {
        $response = $this->postJson('api/auth/logout');
        $response->assertStatus(401);
    });

    test('an authenticated user recieves a 204', function () {
        $user = User::factory()->create();
        $token = $user->createToken('TestToken')->plainTextToken;

        $response = $this->withHeaders([
            'Authorization' => "Bearer {$token}",
        ])->postJson('api/auth/logout');

        $response->assertStatus(204);
    });

    test('the authenticated user\'s tokens are deleted', function () {
        $user = User::factory()->create();
        $token = $user->createToken('TestToken')->plainTextToken;

        $response = $this->withHeaders([
            'Authorization' => "Bearer {$token}",
        ])->postJson('api/auth/logout');

        $response->assertStatus(204);

        $this->assertDatabaseMissing('personal_access_tokens', [
            'tokenable_id' => $user->id,
            'tokenable_type' => User::class,
        ]);
    });
});
