
<template>
    <div class="bg-[#140D28]">
        <div class="container mx-auto px-4 md:px-8 lg:xl:px-24">
            <!-- Main Section -->
            <div class="flex flex-wrap gap-8 justify-between py-12">
                <!-- Logo and Social Links -->
                <div class="w-full md:w-1/4 flex flex-col gap-6">
                    <a href="/">
                        <NuxtImg src="https://placehold.co/200x50" title="company-logo" alt="logo-image"
                            class="w-[200px] h-[60px]" />
                    </a>
                    <div class="flex gap-4">
                        <a href="/" class="bg-gray-100 rounded-full p-3 w-10 h-10">
                            <NuxtImg src="/img/fb-icon.png" title="facebook-icon" alt="facebook-icon" class="w-6" />
                        </a>
                        <a href="/" class="bg-gray-100 rounded-full p-3 w-10 h-10">
                            <NuxtImg src="/img/vsyoutube.png" title="youtube" alt="youtube" class="w-6" />
                        </a>
                    </div>
                </div>

                <!-- Links Section -->
                <div class="w-full md:w-1/5 flex flex-col gap-4">
                    <a href="/" class="text-sm text-gray-50 hover:text-red-600">Speechelo</a>
                    <a href="/" class="text-sm text-gray-50 hover:text-red-600">Text to Voice</a>
                    <a href="/" class="text-sm text-gray-50 hover:text-red-600">AI Voice-Over Generator</a>
                </div>

                <div class="w-full md:w-1/5 flex flex-col gap-4">
                    <a href="/" class="text-sm text-gray-50 hover:text-red-600">Speechelo Blog</a>
                    <a href="/" class="text-sm text-gray-50 hover:text-red-600">Voice Samples</a>
                </div>

                <div class="w-full md:w-1/5 flex flex-col gap-4">
                    <a href="/" class="text-sm text-gray-50 hover:text-red-600">Privacy Policy</a>
                    <a href="/" class="text-sm text-gray-50 hover:text-red-600">Terms & Condition</a>
                    <a href="/" class="text-sm text-gray-50 hover:text-red-600">Disclaimer</a>
                    <a href="/" class="text-sm text-gray-50 hover:text-red-600">Cookie Policy</a>
                    <a href="/" class="text-sm text-gray-50 hover:text-red-600">Speechelo Support</a>
                </div>
            </div>

            <!-- Divider -->
            <hr class="border-t border-gray-50/50">

            <!-- Footer Text -->
            <div class="text-center py-8">
                <div class="flex flex-col gap-4">
                    <p class="text-xs text-gray-50/50">
                        This site is not a part of the Facebook website or Facebook INC. Additionally, this site is NOT
                        endorsed by Facebook in ANY WAY. FACEBOOK is a trademark of Facebook INC.
                    </p>
                    <p class="text-xs text-gray-50/50">
                        We are not affiliated, associated, authorized, endorsed by, or in any way officially connected
                        with Google, or any of its subsidiaries or its affiliates.
                    </p>
                </div>
            </div>

            <!-- Copyright -->
            <div class="text-center pb-8">
                <p class="text-xs text-gray-50/50">Copyright © 2024 Speechelo.com – All Rights Reserved</p>
            </div>
        </div>
    </div>
</template>
