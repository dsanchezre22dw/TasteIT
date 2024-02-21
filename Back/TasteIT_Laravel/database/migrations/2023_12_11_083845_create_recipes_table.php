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
        Schema::create('recipes', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->string('description',1024);
            $table->integer('duration_mins');
            $table->enum('difficulty',['beginner','medium','expert']);
            $table->decimal('rating', 8, 2)->default(0)->nullable(); // 'rating' como valor decimal con 2 decimales
            $table->string('image'); 
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipes');
    }
};
