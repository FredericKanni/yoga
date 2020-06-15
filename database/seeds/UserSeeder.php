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
                "name" => "prof1",
                //"firstname" => "Krishna",
                "email" => "prof1@gmail.com",
                "password" => bcrypt('prof'),
                "id_role" => "2"

            ],
            [
                "id" => 3,
                "name" => "prof2",
                //"firstname" => "Krishna",
                "email" => "prof2@gmail.com",
                "password" => bcrypt('prof'),
                "id_role" => "2"

            ],

            [
                "id" => 4,
                "name" => "prof3",
                //"firstname" => "Krishna",
                "email" => "prof3@gmail.com",
                "password" => bcrypt('prof'),
                "id_role" => "2"

            ],

            [
                "id" => 5,
                "name" => "prof4",
                //"firstname" => "Krishna",
                "email" => "prof4@gmail.com",
                "password" => bcrypt('prof'),
                "id_role" => "2"

            ],

        
            [
                "id" => 6,
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
