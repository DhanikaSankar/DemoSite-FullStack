<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name' =>'required|max:20|string',
            'last_name'=>'required|max:20|string',
            'email'=>'required|email|unique:users,email',
            'phone'=>'required|numeric|digits:10|unique:users,phone',
            'day'=>'required|numeric',
            'month'=>'required|numeric',
            'year'=>'required|numeric',
        ];
    }
}
