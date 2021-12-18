<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $categories = ProductCategory::all();
        $products = Product::with('category')->get();
        return Inertia::render('Product', [
            'categories' => $categories,
            'products' => $products
        ]);
    }
}
