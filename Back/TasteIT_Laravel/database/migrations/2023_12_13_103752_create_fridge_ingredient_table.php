<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fridge_ingredient', function (Blueprint $table) {
            $table->foreignId('fridge_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('ingredient_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->integer('amount');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fridge_ingredient');
    }
};
