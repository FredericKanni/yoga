<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = [
            [
                "id" => 1,
                "name" => "admin",
                //"firstname" => "Krishna",
                "email" => "admin@gmail.com",
                "password" => bcrypt('admin'),
                "id_role" => "1"

            ],
            [
                "id" => 2,
                "name" => "auth",
                //"firstname" => "Krishna",
                "email" => "auth@gmail.com",
                "password" => bcrypt('auth'),
                "id_role" => "2"

            ],
            [
                "id" => 3,
                "name" => "toto",
                //"firstname" => "Krishna",
                "email" => "toto@gmail.com",
                "password" => bcrypt('toto'),
                "id_role" => "3"

            ]
        ];

        DB::table('users')->insert(
            $array
        );
    }
}
