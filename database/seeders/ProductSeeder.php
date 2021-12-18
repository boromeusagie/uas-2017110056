<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('id_ID');

        $categories = [
            'Beer',
            'Soju',
            'Spirit'
        ];

        $products = [
            [
                'name' => 'Anker',
                'category_slug' => 'beer',
                'price' => 46000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Anker Beer',
                'image' => 'anker-bottle.jpg'
            ],
            [
                'name' => 'Bali Hai',
                'category_slug' => 'beer',
                'price' => 46000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Bali Hai Beer',
                'image' => 'balihai-bottle.jpg'
            ],
            [
                'name' => 'Bintang',
                'category_slug' => 'beer',
                'price' => 49000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Bintang Beer',
                'image' => 'bintang-bottle.jpg'
            ],
            [
                'name' => 'Guiness',
                'category_slug' => 'beer',
                'price' => 59000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Guiness Beer',
                'image' => 'guiness-bottle.jpg'
            ],
            [
                'name' => 'Heineken',
                'category_slug' => 'beer',
                'price' => 62000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Heineken Beer',
                'image' => 'heineken-bottle.jpg'
            ],
            [
                'name' => 'Prost',
                'category_slug' => 'beer',
                'price' => 46000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Prost Beer',
                'image' => 'prost-bottle.jpg'
            ],
            [
                'name' => 'Soju Grapefruit',
                'category_slug' => 'soju',
                'price' => 160000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Soju Grapefruit',
                'image' => 'soju-grapefruit.jpg'
            ],
            [
                'name' => 'Soju Greengrape',
                'category_slug' => 'soju',
                'price' => 160000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Soju Greengrape',
                'image' => 'soju-greengrape.jpg'
            ],
            [
                'name' => 'Soju Original',
                'category_slug' => 'soju',
                'price' => 160000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Soju Original',
                'image' => 'soju-original.jpg'
            ],
            [
                'name' => 'Soju Plum',
                'category_slug' => 'soju',
                'price' => 160000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Soju Plum',
                'image' => 'soju-plum.jpg'
            ],
            [
                'name' => 'Soju Strawberry',
                'category_slug' => 'soju',
                'price' => 160000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Soju Strawberry',
                'image' => 'soju-strawberry.jpg'
            ],
            [
                'name' => 'Captain Morgan',
                'category_slug' => 'spirit',
                'price' => 550000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Captain Morgan',
                'image' => 'captain-morgan.jpg'
            ],
            [
                'name' => 'Imperial Black',
                'category_slug' => 'spirit',
                'price' => 550000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Imperial Black',
                'image' => 'imperial-black.jpg'
            ],
            [
                'name' => 'Jack Daniels',
                'category_slug' => 'spirit',
                'price' => 1200000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Jack Daniels',
                'image' => 'jack-daniels.jpg'
            ],
            [
                'name' => 'Jagermeister',
                'category_slug' => 'spirit',
                'price' => 900000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Jagermeister',
                'image' => 'jagermeister.jpg'
            ],
            [
                'name' => 'Jose Cuervo Tequila',
                'category_slug' => 'spirit',
                'price' => 1200000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Jose Cuervo Tequila',
                'image' => 'jose-cuervo.jpg'
            ],
            [
                'name' => 'Smirnoff Vodka',
                'category_slug' => 'spirit',
                'price' => 550000,
                'stock' => $faker->numberBetween(50, 100),
                'description' => 'Smirnoff Vodka',
                'image' => 'smirnoff-vodka.jpg'
            ],
        ];

        foreach ($categories as $category) {
            $newCategory = new ProductCategory();
            $newCategory->create(
                [
                    'name' => $category,
                    'slug' => Str::slug($category, '-')
                ]
            );

            $thisCategory = ProductCategory::where('name', $category)->first();
            Storage::makeDirectory('public/images/products/'.$thisCategory->slug);
        }

        foreach ($products as $product) {
            $newProduct = new Product();
            $newProduct->create(
                [
                    'name' => $product['name'],
                    'slug' => Str::slug($product['name'], '-'),
                    'category_slug' => $product['category_slug'],
                    'price' => $product['price'],
                    'stock' => $product['stock'],
                    'description' => $product['description'],
                    'image' => $product['image'],
                ]
            );

            $thisProduct = Product::where('name', $product['name'])->first();
            Storage::copy('seeder/product-image/'.$product['image'], 'public/images/products/'.$thisProduct->category_slug.'/'.$product['image']);
        }
    }
}
