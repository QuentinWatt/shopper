<?php

describe('Create token test', function () {
    test('it has a token endpoint', function () {
        $response = $this->post('/api/auth/token');
        $response->assertStatus(200);
    });

    test('it has token resource keys', function () {
        $response = $this->post('/api/auth/token');
        $response->assertStatus(200);
        $token = json_decode($response->getContent());

        expect($token)->toHaveProperty('data');
        expect($token->data)->toHaveProperties(['token', 'user']);
    });
});
