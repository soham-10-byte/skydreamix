<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\Request;

class ContactMessageController extends Controller
{
    public function index()
    {
        $messages = ContactMessage::latest()->paginate(10);
        return view('dashboard', compact('messages'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'address' => 'nullable|string|max:1000',
            'service' => 'nullable|string|max:255',
            'budget' => 'nullable|numeric',
            'description' => 'required|string',
            'message' => 'nullable|string',
        ]);

        ContactMessage::create($validated);

        return response()->json(['message' => 'Message sent successfully!'], 201);
    }
}
