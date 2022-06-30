<?php

namespace App\Modules\Groups\Models;


use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'group_role',
        'permissions',
    ];
}
