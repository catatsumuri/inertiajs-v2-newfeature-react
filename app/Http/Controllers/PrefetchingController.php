<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PrefetchingController extends Controller
{

    public function index(): Response
    {
        return Inertia::render('Prefetching-index');
    }

    public function users()
    {
        sleep(2);
        $users = User::all();
        return Inertia::render('Prefetching-users', ['users' => $users]);
    }
}
