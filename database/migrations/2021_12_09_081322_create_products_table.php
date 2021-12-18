<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('category_slug');
            $table->foreign('category_slug')
                ->references('slug')
                ->on('product_categories')
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->string('name');
            $table->string('slug')->unique();
            $table->bigInteger('price');
            $table->integer('stock')->default(0);
            $table->text('description')->nullable();
            $table->string('image')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
