<?php

namespace App\Http\Controllers;

use App\Soal;

class SoalController extends Controller
{
    public function __construct(Soal $soal)
    {
        $this->soal = $soal;
    }

    public function index(){
        $data = $this->soal->all();
        return response()->json(['soal' => $data], 200);
    }
}
