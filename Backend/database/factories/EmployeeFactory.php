<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $state=$this->faker->randomElement(['Casado','Divorciado','Viudo','Soltero']);
        return [
            //
            'name'=>$this->faker->name(),
            'lastname'=>$this->faker->lastName(),
            'state'=>$state,
            'age'=>$this->faker->numberBetween(18,60),
            'dui'=>$this->faker->numerify('########-#'),
            'address'=>$this->faker->address()
        ];
    }
}
