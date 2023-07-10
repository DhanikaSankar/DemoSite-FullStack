<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddressRequest;
use App\Models\UserAddress;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function storeAddress(AddressRequest $request, $id)
    {
        if(!empty($request->data && count($request->data))){
            foreach($request->data as $data){
                  UserAddress::create([
                    'user_id' => $id,
                    'previous_address_1' => $data->previous_address_1,
                    'previous_address_2' => $data->previous_address_2,
                    'previous_address_3' => $data->previous_address_3,
                ]);
            }
        }

        return response()->json([
            'success'=>true,
            'message'=>'User Address Stored Successfully',
        ]);


    }
}
