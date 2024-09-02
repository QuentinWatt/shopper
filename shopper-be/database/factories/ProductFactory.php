<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'sku' => Str::upper(fake()->randomLetter()) . fake()->randomDigit() . fake()->randomDigit() . fake()->randomDigit(),
            'name' => fake()->words(3, true),
            'description' => fake()->sentences(5, true),
            'price_cents' => fake()->numberBetween(99, 9999) . '00',
        ];
    }
}
