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
        Schema::create('users', function (Blueprint $table) {
            $table->id();

            $table->string('username')->unique();
            $table->string('firstname');
            $table->string('surname')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('profileImg')->nullable();
            $table->enum('type',['standard','chef','admin'])->default('standard');
            $table->boolean('enabled')->default(true);
            $table->rememberToken();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        /*
         Trigger for creating a fridge and shopping list
         
        DB::unprepared('
            CREATE TRIGGER new_fridge_shopping_list
            AFTER INSERT ON users
            FOR EACH ROW
            BEGIN
                insert into fridges values (new.id);
                update users 
            END;
        ');*/
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
