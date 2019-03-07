<?php

use Illuminate\Database\Seeder;

use App\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $data = "admin";
        $user->username = $data;
        $user->password = Hash::make($data);
        $user->name = $data;
        $user->api_token = str_random(100);
        $user->save();
    }
}
