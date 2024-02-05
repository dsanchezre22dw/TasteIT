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
        Schema::create('follows', function (Blueprint $table) {

            $table->unsignedBigInteger('followed_id');
            $table->unsignedBigInteger('follower_id');

            $table->foreign('followed_id')->references('id')->on('users');
            $table->foreign('follower_id')->references('id')->on('users');

            $table->unique(['followed_id', 'follower_id']);

            $table->boolean('blocked')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('follows');
    }
};
