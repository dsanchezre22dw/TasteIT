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
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('shopping_list_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('fridge_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['shopping_list_id']);
            $table->dropColumn('shopping_list_id');

            $table->dropForeign(['fridge_id']);
            $table->dropColumn('fridge_id');
        });
    }
};