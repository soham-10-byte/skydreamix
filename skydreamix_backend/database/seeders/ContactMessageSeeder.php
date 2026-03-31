<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ContactMessage;

class ContactMessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $samples = [
            [
                'name' => 'Elon Tusk',
                'email' => 'elon@nebula-x.space',
                'phone' => '+1 (555) 042-2024',
                'address' => 'Starbase, TX',
                'service' => 'Custom Software',
                'budget' => 50000.00,
                'description' => 'Looking for a distributed AI architecture to manage fleet communications across orbits. Low latency is critical.',
            ],
            [
                'name' => 'Sarah Connor',
                'email' => 'sarah@resistance.tech',
                'phone' => '+1 (999) 888-0000',
                'address' => 'Los Angeles, CA',
                'service' => 'Digital Marketing',
                'budget' => 12500.00,
                'description' => 'We need an aggressive expansion campaign for our cybersecurity awareness platform before August 29.',
            ],
            [
                'name' => 'Tony Stauk',
                'email' => 'tony@stauk-solutions.com',
                'phone' => '+44 7700 900000',
                'address' => 'Malibu Point 10880, CA',
                'service' => 'Cloud Solutions',
                'budget' => 35000.00,
                'description' => 'Migrating entire legacy server architecture to a proprietary clean energy cloud grid. High redundancy required.',
            ],
            [
                'name' => 'Katniss Everdeep',
                'email' => 'katniss@district12.org',
                'phone' => '+1 (123) 456-7890',
                'address' => 'Seam, District 12',
                'service' => 'Web Development',
                'budget' => 8000.00,
                'description' => 'Building a community portal for independent artisans to showcase and sell their crafts globally.',
            ],
            [
                'name' => 'Bruce Wane',
                'email' => 'bruce@wane-ent.com',
                'phone' => '+1 (555) 123-4444',
                'address' => 'Gotham City',
                'service' => 'Mobile Apps',
                'budget' => 45000.00,
                'description' => 'Encrypted mobile platform for secure internal logistics and high-risk operative tracking.',
            ]
        ];

        foreach ($samples as $sample) {
            ContactMessage::create($sample);
        }
    }
}
