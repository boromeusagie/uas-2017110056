<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\ProductCategory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_slug',
        'name',
        'slug',
        'price',
        'stock',
        'description',
        'image'
    ];

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'category_slug', 'slug');
    }
}
