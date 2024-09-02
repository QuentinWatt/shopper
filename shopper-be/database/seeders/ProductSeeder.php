<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $productList = [
            ['name' => "Tranquil Treasures Candle Set"],
            ['name' => "Artisanal Chocolate Delights Box"],
            ['name' => "Enchanting Aromatherapy Diffuser"],
            ['name' => "Coastal Charm Seashell Frame"],
            ['name' => "Celestial Crystal Jewelry Collection"],
            ['name' => "Whimsical Wonderland Fairy Garden Kit"],
            ['name' => "Gourmet Coffee Lover's Gift Basket"],
            ['name' => "Zen Serenity Relaxation Kit"],
            ['name' => "Vintage-Inspired Tea Set"],
            ['name' => "Adventure Awaits Travel Journal"],
            ['name' => "Musical Melodies Wind Chime"],
            ['name' => "Rustic Woodland Coasters Set"],
            ['name' => "Botanical Bliss Plant Pot Collection"],
            ['name' => "Handcrafted Leather Journal"],
            ['name' => "Starry Night Sky Projection Lamp"],
            ['name' => "Scented Bath Bomb Sampler"],
            ['name' => "Inspirational Quote Wall Art"],
            ['name' => "Cozy Cabin Blanket and Pillow Set"],
            ['name' => "Crystal Clear Picture Frame"],
            ['name' => "Succulent Paradise Planter"],
            ['name' => "Personalized Name Keychain"],
            ['name' => "Ocean Breeze Room Spray Trio"],
            ['name' => "Puzzle Enthusiast Puzzle Set"],
            ['name' => "Decadent Dessert Sampler Box"],
            ['name' => "Timeless Pocket Watch"],
            ['name' => "Wine Connoisseur Corkscrew Set"],
            ['name' => "Tropical Paradise Beach Towel"],
            ['name' => "Whiskey Lover's Tasting Set"],
            ['name' => "Customized Monogrammed Coasters"],
            ['name' => "Elegant Executive Desk Set"],
            ['name' => "Soothing Lavender Scented Candle"],
            ['name' => "Luxurious Artisan Chocolate Box"],
            ['name' => "Essential Oil Reed Diffuser Set"],
            ['name' => "Nautical Adventure Photo Frame"],
            ['name' => "Starlight Elegance Crystal Jewelry"],
            ['name' => "Enchanted Fairy Tale Bookends"],
            ['name' => "Deluxe Tea Sampler Gift Set"],
            ['name' => "Mindfulness Meditation Kit"],
            ['name' => "Antique Inspired Porcelain Teapot"],
            ['name' => "Wanderlust Explorer's Journal"],
            ['name' => "Harmonious Wind Chime Symphony"],
            ['name' => "Rustic Wilderness Coaster Collection"],
            ['name' => "Trendy Succulent Terrarium"],
            ['name' => "Vintage Leather Bound Journal"],
            ['name' => "Galactic Star Projector Lamp"],
            ['name' => "Fizzy Bath Bomb Variety Pack"],
            ['name' => "Motivational Canvas Wall Art"],
            ['name' => "Soft and Plush Travel Blanket"],
            ['name' => "Elegant Glass Picture Frame"],
            ['name' => "Zen Garden Succulent Planter"],
            ['name' => "Personalized Engraved Keyring"],
            ['name' => "Ocean Breeze Linen Room Spray"],
            ['name' => "Challenging Jigsaw Puzzle Set"],
            ['name' => "Indulgent Dessert Sampler Tray"],
            ['name' => "Classic Pocket Watch Keepsake"],
            ['name' => "Wine Lover's Accessories Set"],
            ['name' => "Tropical Sunset Beach Towel"],
            ['name' => "Whiskey Tasting Set"],
            ['name' => "Monogrammed Coaster Collection"],
            ['name' => "Executive Desk Organizer Set"],
        ];

        collect($productList)->each(function ($product) {
            Product::factory()->create([
                'name' => $product['name'],
            ]);
        });
    }
}
