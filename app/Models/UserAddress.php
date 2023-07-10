<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAddress extends Model
{
    use HasFactory;

    protected $primaryKey = 'address_id';

    protected $table = 'user_addresses';

    protected $fillable = ['user_id','previous_address_1','previous_address_2','previous_address_3'];

}
