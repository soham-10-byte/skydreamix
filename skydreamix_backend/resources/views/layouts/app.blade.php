<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Scripts -->
        <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
        <script src="{{ asset(mix('js/app.js')) }}" defer></script>
    </head>
    <body class="font-sans antialiased bg-primary text-white">
        <div class="min-h-screen bg-surface-300">
            @include('layouts.navigation')

            <!-- Page Heading -->
            <header class="bg-surface-200 border-b border-white/5 shadow-2xl">
                <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    {{ $header }}
                </div>
            </header>

            <!-- Page Content -->
            <main>
                {{ $slot }}
            </main>
        </div>
    </body>
</html>
