<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $userData = [
            [
                'username' => 'admin',
                'firstname' => 'admin',
                'surname' => 'admin',
                'email' => 'admin@fake.io',
                'password' => 'changeme1A',
                'profileImg' => '/assets/img/logos/LogoTasteIT_free.png',
                'type' => 'admin',
                'enabled' => 1,
                'remember_token' => null,
                'email_verified_at' => now(),
                'configuration_id' => null,
            ],
            [
                'username' => 'dsanchez',
                'firstname' => 'David',
                'surname' => 'Sánchez',
                'email' => 'dsanchezre22dw@ikzubirimanteo.com',
                'password' => 'changeme1A',
                'profileImg' => '/assets/img/profile/avatars/david_avatar.jpg',
                'type' => 'standard',
                'enabled' => 1,
                'remember_token' => null,
                'email_verified_at' => now(),
                'configuration_id' => 1,
            ],
            [
                'username' => 'chef',
                'firstname' => 'chef',
                'surname' => 'chef',
                'email' => 'chef@fake.io',
                'password' => 'changeme1A',
                'profileImg' => '/assets/img/profile/avatars/chef_avatar.png',
                'type' => 'chef',
                'enabled' => 1,
                'remember_token' => null,
                'email_verified_at' => now(),
                'configuration_id' => 2,
            ],
            [
                'username' => 'jmartindi',
                'firstname' => 'Jurgi',
                'surname' => 'Martín',
                'email' => 'jmartindi@gmail.com',
                'password' => 'changeme1A',
                'profileImg' => '/assets/img/profile/avatars/avatar1.jpg',
                'type' => 'standard',
                'enabled' => 1,
                'remember_token' => null,
                'email_verified_at' => now(),
                'configuration_id' => 3,
            ],
            [
                'username' => 'oslimani',
                'firstname' => 'Oussama',
                'surname' => 'Slimani',
                'email' => 'oslimani@gmail.com',
                'password' => 'changeme1A',
                'profileImg' => '/assets/img/profile/avatars/avatar2.jpeg',
                'type' => 'standard',
                'enabled' => 1,
                'remember_token' => null,
                'email_verified_at' => now(),
                'configuration_id' => 4,
            ],
            [
                'username' => 'aalvarezpe',
                'firstname' => 'Ane',
                'surname' => 'Álvarez',
                'email' => 'aalvarezpe@gmail.com',
                'password' => 'changeme1A',
                'profileImg' => '/assets/img/profile/avatars/avatar3.jpg',
                'type' => 'standard',
                'enabled' => 1,
                'remember_token' => null,
                'email_verified_at' => now(),
                'configuration_id' => 5,
            ],
            [
                'username' => 'asegoviaci',
                'firstname' => 'Ametz',
                'surname' => 'Segovia',
                'email' => 'asegoviaci@gmail.com',
                'password' => 'changeme1A',
                'profileImg' => '/assets/img/profile/avatars/avatar4.jpg',
                'type' => 'standard',
                'enabled' => 1,
                'remember_token' => null,
                'email_verified_at' => now(),
                'configuration_id' => 6,
            ],
            [
                'username' => 'lgarmendiadi',
                'firstname' => 'Leire',
                'surname' => 'Garmendia',
                'email' => 'lgarmendiadi@gmail.com',
                'password' => 'changeme1A',
                'profileImg' => '/assets/img/profile/avatars/avatar5.jpg',
                'type' => 'standard',
                'enabled' => 1,
                'remember_token' => null,
                'email_verified_at' => now(),
                'configuration_id' => 7,
            ],
            [
                'username' => 'arguiñano',
                'firstname' => 'Karlos',
                'surname' => 'Arguiñano',
                'email' => 'k.arguiñano@gmail.com',
                'password' => 'changeme1A',
                'profileImg' => '/assets/img/chefs/chefs-4.jpg',
                'type' => 'chef',
                'enabled' => 1,
                'remember_token' => null,
                'email_verified_at' => now(),
                'configuration_id' => 8,
            ],
            [
                'username' => 'berasategui',
                'firstname' => 'Martín',
                'surname' => 'Berasategui',
                'email' => 'm.berasategui@gmail.com',
                'password' => 'changeme1A',
                'profileImg' => '/assets/img/chefs/chefs-5.jpg',
                'type' => 'chef',
                'enabled' => 1,
                'remember_token' => null,
                'email_verified_at' => now(),
                'configuration_id' => 8,
            ],
            [
                'username' => 'ramsay',
                'firstname' => 'Ramsay',
                'surname' => 'Bolton',
                'email' => 'r.bolton@gmail.com',
                'password' => 'changeme1A',
                'profileImg' => '/assets/img/chefs/chefs-6.jpg',
                'type' => 'chef',
                'enabled' => 1,
                'remember_token' => null,
                'email_verified_at' => now(),
                'configuration_id' => 8,
            ],
        ];

        foreach ($userData as $user) {
            $user['created_at'] = Carbon::now()->subDays(rand(0, 365));
            User::create($user);
        }
    }
}
