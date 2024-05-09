<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
                // Obtener empleados y crear usuarios para cada uno de ellos
                $employees = Employee::all();

                foreach ($employees as $employee) {
                    User::factory()->create();
                }
    }
}
