<x-app-layout>
    <x-slot name="header">
        <h2 class="font-bold text-2xl text-white leading-tight tracking-tight">
            {{ __('Admin Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12 min-h-screen" x-data="{ open: false, selectedMessage: {} }">
        <style>
            [x-cloak] { display: none !important; }
            .cyber-table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
            }
            .cyber-table th {
                padding: 0 24px 30px 24px;
                text-align: left;
                font-size: 10px;
                font-weight: 950;
                text-transform: uppercase;
                letter-spacing: 0.3em;
                color: #00E5FF;
                opacity: 0.5;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            .cyber-table td {
                padding: 40px 24px;
                vertical-align: middle;
                border-bottom: 1px solid rgba(255, 255, 255, 0.03);
                transition: all 0.3s ease;
            }
            .cyber-table tr:hover td {
                background: rgba(255, 255, 255, 0.02);
            }
            .identity-stack {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            .identity-name {
                font-size: 1.1rem;
                font-weight: 900;
                color: white;
                text-transform: uppercase;
                letter-spacing: -0.02em;
            }
            .identity-id {
                font-size: 9px;
                font-weight: 800;
                color: rgba(255, 255, 255, 0.2);
                letter-spacing: 0.1em;
            }
            .contact-stack {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            .contact-primary {
                font-size: 0.9rem;
                font-weight: 500;
                color: rgba(255, 255, 255, 0.8);
            }
            .contact-secondary {
                font-size: 10px;
                font-weight: 700;
                color: rgba(255, 255, 255, 0.2);
                font-family: monospace;
            }
            .protocol-pill {
                display: inline-flex;
                align-items: center;
                padding: 10px 20px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 100px;
                color: white;
                font-size: 10px;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 0.2em;
                white-space: nowrap;
            }
            .investment-text {
                font-size: 1.25rem;
                font-weight: 900;
                color: white;
                letter-spacing: -0.04em;
                text-align: right;
            }
            .timestamp-text {
                font-size: 0.85rem;
                color: rgba(255, 255, 255, 0.3);
                font-weight: 500;
            }
            
            /* Modal Specifics */
            .blueprint-modal {
                background: #05050a;
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 0 100px rgba(0, 0, 0, 1);
                max-width: 1000px;
                width: 100%;
                border-radius: 40px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                margin: auto;
            }
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.98);
                backdrop-filter: blur(40px);
                -webkit-backdrop-filter: blur(40px);
                z-index: 9998;
            }
            .modal-wrapper {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2.5rem;
            }
            .modal-header {
                padding: 3rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                position: relative;
            }
            .pill-row {
                display: flex;
                align-items: center;
                gap: 20px;
                flex-wrap: wrap;
                margin-bottom: 15px;
            }
            .pill {
                display: inline-flex;
                align-items: center;
                padding: 8px 18px;
                border-radius: 100px;
                font-size: 10px;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 0.15em;
                background: rgba(255,255,255,0.05);
                border: 1px solid rgba(255,255,255,0.1);
            }
            .pill-cyan {
                background: rgba(0, 229, 255, 0.1);
                border-color: rgba(0, 229, 255, 0.2);
                color: #00E5FF;
            }
            .grid-container {
                display: flex;
                flex-wrap: wrap;
                gap: 50px;
                padding: 3rem;
            }
            .grid-item-left {
                flex: 1 1 350px;
                display: flex;
                flex-direction: column;
                gap: 40px;
            }
            .grid-item-right {
                flex: 2 1 450px;
            }
            .detail-box {
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.05);
                border-radius: 20px;
                padding: 25px;
            }
            .heading-label {
                font-size: 10px;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 0.4em;
                color: rgba(255,255,255,0.3);
                margin-bottom: 25px;
                display: flex;
                align-items: center;
                gap: 15px;
            }
            .heading-label::after {
                content: "";
                height: 1px;
                flex: 1;
                background: rgba(255,255,255,0.05);
            }
            @media (max-width: 768px) {
                .blueprint-modal { border-radius: 24px; }
                .grid-container { padding: 1.5rem; gap: 30px; }
                .modal-header { padding: 2rem; }
                .text-giant { font-size: 2.75rem !important; }
                .pill-row { justify-content: center; }
                .cyber-table th:nth-child(1), .cyber-table td:nth-child(1) { display: none; }
                .cyber-table th, .cyber-table td { padding: 20px 10px; }
            }
        </style>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="glass-panel cyber-border overflow-hidden shadow-[0_32px_128px_-32px_rgba(0,0,0,0.5)] rounded-[40px]">
                <div class="p-8 sm:p-14">
                    <div class="flex justify-between items-center mb-16">
                        <div class="h-px flex-1 bg-gradient-to-r from-[#00E5FF]/20 to-transparent"></div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="cyber-table">
                            <thead>
                                <tr>
                                    <th style="width: 150px;">Timestamp</th>
                                    <th style="width: 200px;">Identity</th>
                                    <th>Contact Network</th>
                                    <th style="text-align: center;">Protocol</th>
                                    <th style="text-align: right; width: 150px;">Investment</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($messages as $message)
                                    <tr @click="open = true; selectedMessage = {{ $message->toJson() }};" class="group cursor-pointer">
                                        <td><span class="timestamp-text">{{ $message->created_at->format('M d, H:i') }}</span></td>
                                        <td>
                                            <div class="identity-stack">
                                                <span class="identity-name group-hover:text-[#00E5FF] transition-colors">{{ $message->name }}</span>
                                                <span class="identity-id">ID: {{ $message->id }}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="contact-stack">
                                                <span class="contact-primary">{{ $message->email }}</span>
                                                <span class="contact-secondary">{{ $message->phone ?? 'SIGNAL LOST' }}</span>
                                            </div>
                                        </td>
                                        <td style="text-align: center;">
                                            <span class="protocol-pill group-hover:border-[#00E5FF]/30 transition-all">
                                                {{ $message->service }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="investment-text">
                                                <span style="color: rgba(0, 229, 255, 0.4); font-size: 1rem; margin-right: 2px;">$</span>{{ number_format($message->budget) }}
                                            </div>
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="5" style="padding: 100px 0; text-align: center; color: rgba(255,255,255,0.1); font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; font-style: italic;">
                                            Null Sector: No incoming signals detected
                                        </td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- BLUEPRINT DETAIL MODAL -->
        <template x-if="open">
            <div @keydown.escape.window="open = false">
                <!-- Backdrop -->
                <div 
                    x-show="open"
                    @click="open = false"
                    class="modal-overlay"
                ></div>

                <!-- Modal Wrapper -->
                <div 
                    x-show="open" 
                    x-cloak
                    class="modal-wrapper"
                >
                    <!-- Blueprint Modal -->
                    <div 
                        x-show="open"
                        x-transition
                        class="blueprint-modal"
                    >
                        <!-- Header -->
                        <div class="modal-header">
                            <!-- Glow Backdrop -->
                            <div style="position: absolute; top: 0; right: 0; width: 300px; height: 300px; background: rgba(0, 229, 255, 0.05); filter: blur(100px); border-radius: 50%; pointer-events: none;"></div>
                            
                            <!-- Close Button (Top Right) -->
                            <button @click="open = false" style="position: absolute; top: 30px; right: 30px; z-index: 50; padding: 12px; border-radius: 50%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.4); cursor: pointer; transition: all 0.2s;" onmouseover="this.style.color='white';this.style.borderColor='rgba(255,255,255,0.3)'" onmouseout="this.style.color='rgba(255,255,255,0.4)';this.style.borderColor='rgba(255,255,255,0.1)'">
                                <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>

                            <div style="position: relative; z-index: 10; text-align: center; padding-top: 20px;">
                                <!-- Signal Info Row -->
                                <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 25px;">
                                    <span class="pill pill-cyan" style="margin-right: 20px;">Verified Blueprint</span>
                                    <span style="font-size: 10px; font-weight: 900; color: rgba(255,255,255,0.2); text-transform: uppercase; letter-spacing: 0.2em;" x-text="'Signal ID: ' + selectedMessage.id"></span>
                                </div>

                                <!-- Identity Title -->
                                <h3 class="text-giant" style="font-size: 4.5rem; font-weight: 900; color: white; text-transform: uppercase; letter-spacing: -0.05em; line-height: 0.85; margin: 35px 0;" x-text="selectedMessage.name"></h3>

                                <!-- Project Metrics Row -->
                                <div style="display: flex; align-items: center; justify-content: center; margin-top: 25px;">
                                    <div class="pill" style="margin-right: 20px;">
                                        <span style="width: 6px; height: 6px; border-radius: 50%; background: #00E5FF; margin-right: 10px; display: inline-block;"></span>
                                        <span x-text="selectedMessage.service"></span>
                                    </div>
                                    <div class="pill">
                                        <span style="color: #00E5FF; margin-right: 6px; font-weight: 900;">$</span>
                                        <span x-text="Number(selectedMessage.budget).toLocaleString()"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Content Area -->
                        <div class="flex-1 overflow-y-auto">
                            <div class="grid-container">
                                <!-- Left Column -->
                                <div class="grid-item-left">
                                    <div style="margin-bottom: 40px;">
                                        <h4 class="heading-label">Contact Node</h4>
                                        <div style="display: flex; flex-direction: column; gap: 20px;">
                                            <div class="detail-box">
                                                <label class="block text-[8px] font-black text-white/20 uppercase mb-2 tracking-widest">Protocol: Email</label>
                                                <p class="text-lg font-bold text-white tracking-tight" x-text="selectedMessage.email"></p>
                                            </div>
                                            <div class="detail-box">
                                                <label class="block text-[8px] font-black text-white/20 uppercase mb-2 tracking-widest">Network: Signal</label>
                                                <p class="text-lg font-bold text-white tracking-tight" x-text="selectedMessage.phone || 'NO DATA'"></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 class="heading-label">Origin Point</h4>
                                        <div class="detail-box" style="background: rgba(0, 229, 255, 0.05); border-color: rgba(0, 229, 255, 0.1);">
                                            <p class="text-gray-300 text-sm font-medium leading-relaxed" x-text="selectedMessage.address || 'Broadcasting from non-static origin.'"></p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Right Column -->
                                <div class="grid-item-right">
                                    <h4 class="heading-label">Project Blueprint</h4>
                                    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 40px; padding: 40px; min-height: 100%; display: flex; flex-direction: column;">
                                        <svg class="w-10 h-10 text-[#00E5FF]/20" style="margin-bottom: 30px;" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703V14H12.017C13.1216 14 14.017 13.1046 14.017 12V9C14.017 7.89543 13.1216 7 12.017 7H5.01703V21H14.017ZM21.017 21V11.0101C21.017 8.79401 19.223 7 17.0069 7H14.017V21H21.017Z" /></svg>
                                        <p class="text-gray-200 text-xl lg:text-2xl font-medium leading-relaxed italic" x-text="selectedMessage.description"></p>
                                        <div style="margin-top: auto; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center; opacity: 0.3;">
                                            <span class="text-[9px] font-black uppercase tracking-[0.5em]" x-text="'ENTRY: ' + new Date(selectedMessage.created_at).toLocaleDateString()"></span>
                                            <span class="text-[9px] font-black uppercase tracking-[0.3em]">Operational</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div style="padding: 40px; border-top: 1px solid rgba(255,255,255,0.05); background: rgba(0,0,0,0.5); text-align: center;">
                            <button @click="open = false" style="background: white; color: black; padding: 20px 60px; border-radius: 100px; font-weight: 950; font-size: 11px; text-transform: uppercase; letter-spacing: 0.4em; border: none; cursor: pointer; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
                                Close Terminal View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
    </div>
    </div>
</x-app-layout>
