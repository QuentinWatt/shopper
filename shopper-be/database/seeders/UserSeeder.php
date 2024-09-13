<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Test User',
                'email' => 'test@example.test',
            ],
            [
                'name' => 'Admin user',
                'email' => 'admin@example.test',
            ],
        ];

        collect($users)->each(function ($user) {
            User::factory()->create($user);
        });
    }
}
