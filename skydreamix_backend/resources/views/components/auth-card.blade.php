<div class="flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
    <div class="mb-8">
        {{ $logo }}
    </div>

    <div class="w-full sm:max-w-md px-10 py-12 bg-surface-200 border border-white/5 shadow-2xl overflow-hidden sm:rounded-[2rem] backdrop-blur-3xl">
        {{ $slot }}
    </div>
</div>
