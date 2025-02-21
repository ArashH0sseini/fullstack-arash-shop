<?php

use App\Models\User;
use Laravel\Sanctum\Sanctum;
use function Pest\Laravel\postJson;

it('logs the user out and deletes their tokens', function () {
    // ایجاد یک کاربر
    $user = User::factory()->create();

    // ایجاد یک توکن برای کاربر
    $token = $user->createToken('Test Token')->plainTextToken;

    // ارسال درخواست لاگ‌اوت با استفاده از توکن معتبر
    $response = postJson('/api/auth/logout')->withToken($token);

    // بررسی که پاسخ 200 است و پیام صحیح باز می‌گردد
    $response->assertStatus(200)
        ->assertJson(['message' => 'شما خارج شدید.']);

    // بررسی که توکن کاربر از دیتابیس حذف شده باشد
    expect(\App\Models\PersonalAccessToken::where('tokenable_id', $user->id)->count())->toBe(0);
});
