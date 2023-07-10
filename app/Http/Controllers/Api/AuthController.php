<?php

namespace App\Http\Controllers\Api;

use App\Helpers\UserSystemInfoHelper;
use App\Http\Controllers\Controller;
// use App\Http\Requests\AddressRequest;
use App\Http\Requests\LoginRequest;
use App\Models\SystemInfo;
use App\Models\User;
// use App\Models\UserAddress;
// use App\Models\UserInfo;
// use Illuminate\Http\Request;


class AuthController extends Controller
{
    public function register(LoginRequest $request)
    {
        $data   =   $request->validated();
        $dob    =   $data['year'] . '/' . $data['month'] . '/' . $data['day'];
        $user   =   User::create([
            'first_name' =>  $data['first_name'],
            'last_name'  =>  $data['last_name'],
            'email'      =>  $data['email'],
            'phone'      =>  $data['phone'],
            'dob'        =>  $dob,
        ]);

        $token    = $user->createToken('main')->plainTextToken;

        // return response(compact('user', 'token'));
        return response()->json([
            'success'=>true,
            'message'=>'User Registered Successfully',
            'data'=>[
                'user'=>$user,
                'token'=>$token,]
            ]);
    }

    public function saveSystemInfo()
    {
        $clientIP      = request()->ip();
        $userAgent     = request()->userAgent();
        // $clientIP      = UserSystemInfoHelper::get_ip();
        $clientBrowser = UserSystemInfoHelper::get_browsers();
        $clientDevice  = UserSystemInfoHelper::get_device();

        $systemInfo = SystemInfo::create([
            'ip_address'  => $clientIP,
            'device_type' => $clientDevice,
            'browser'     => $clientBrowser,
            'user_agent'  => $userAgent,
        ]);

        return response()->json([
            'success'=>true,
            'message'=>'System Info stored successfully',
            'data'=>[
                'info'=>$systemInfo ,
                ]
            ]);
    }
}
