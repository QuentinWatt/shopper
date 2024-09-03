<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

describe('Create token test', function () {
    test('it has a token endpoint', function () {
        $response = $this->postJson('/api/auth/login');
        $this->assertNotEquals(404, $response->getStatusCode());
    });

    test('it has validation on an empty request', function () {
        $response = $this->postJson('/api/auth/login', [
            'email' => '',
            'password' => '',
        ]);

        $response->assertStatus(422);
        $json = $response->getContent();
        expect($json)->toBeJson();

        $data = json_decode($json);
        expect($data)->toHaveProperty('errors');
        expect($data->errors)->toHaveproperties([
            'email' => [
                'The email field is required.'
            ],
            'password' => [
                'The password field is required.'
            ]
        ]);
    });

    test('it has an error if the user does not exist', function () {
        $response = $this->postJson('/api/auth/login', [
            'email' => 'notexists@example.test',
            'password' => 'password',
        ]);

        $response->assertStatus(422);
        $json = $response->getContent();
        expect($json)->toBeJson();

        $data = json_decode($json);
        expect($data)->toHaveProperty('errors');
        expect($data->errors)->toHaveproperties([
            'email' => [
                'Could not find a user with that email/password combination.'
            ],
        ]);
    });

    test('it throws an error on the wrong password', function () {
        User::factory()->create([
            'email' => 'barney@example.test',
        ]);

        $response = $this->postJson('/api/auth/login', [
            'email' => 'barney@example.test',
            'password' => 'some-secure!password',
        ]);

        $response->assertStatus(422);
        $json = $response->getContent();
        expect($json)->toBeJson();

        $data = json_decode($json);
        expect($data)->toHaveProperty('errors');
        expect($data->errors)->toHaveproperties([
            'email' => [
                'Could not find a user with that email/password combination.'
            ],
        ]);
    });

    test('it returns a token and a user on success', function () {
        User::factory()->create([
            'name' => 'Quentin Watt',
            'email' => 'quentin@shopper.test',
            'password' => Hash::make('password'),
        ]);

        $response = $this->postJson('/api/auth/login', [
            'email' => 'quentin@shopper.test',
            'password' => 'password',
        ]);

        $response->assertStatus(201);
        expect($response->getContent())->toBeJson();

        $json = json_decode($response->getContent());
        expect($json)->toHaveProperty('data');
        expect($json->data)->toHaveProperties(['token', 'user']);

        expect($json->data->user)->toHaveProperties([
            'id',
            'name' => 'Quentin Watt',
            'email' => 'quentin@shopper.test',
        ]);
    });
});
