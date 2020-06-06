<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
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
                "name" => "Admin",

            ],
            [
                "id" => 2,
                "name" => "Prof",
            ],
            [
                "id" => 3,
                "name" => "Client",
            ],
        ];

        DB::table('roles')->insert(
            $array
        );
    }
}
