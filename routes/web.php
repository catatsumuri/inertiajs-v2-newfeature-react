<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DeferredPropsController;
use App\Http\Controllers\PollingController;
use App\Http\Controllers\LoadWhenVisibleController;
use App\Http\Controllers\PartialReloadController;
use App\Http\Controllers\MergingPropsController;
use App\Http\Controllers\InfiniteScrollController;
use App\Http\Controllers\PrefetchingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        // 'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/polling', PollingController::class)->name('polling');
Route::get('/deferred-props', DeferredPropsController::class)->name('deferred-props');
Route::get('/load-when-visible', LoadWhenVisibleController::class)->name('load-when-visible');
Route::get('/partial-reload', [PartialReloadController::class, 'index'])->name('partial-reload');
#Route::get('/partial-reload/filter', [PartialReloadController::class, 'filter'])->name('partial-reload-filter');
Route::get('/merging-props', MergingPropsController::class)->name('merging-props');
Route::get('/infinite-scroll', InfiniteScrollController::class)->name('infinite-scroll');
Route::get('/prefetching', [PrefetchingController::class, 'index'])->name('prefetching.index');
Route::get('/prefetching/users', [PrefetchingController::class, 'users'])->name('prefetching.users');






/*
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
 */
