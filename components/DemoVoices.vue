<template>
    <!-- Title -->
    <div class="container mx-auto xl:px-48">
        <!-- Title Section -->
        <div class="flex md:lg:xl:pt-20 md:lg:xl:px-20">
            <h2 class="text-2xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-950 capitalize leading-relaxed">
                Listen To Some
                <span class="text-gray-850 font-bold">Breathtaking Demo Voices
                    From Speechelo:</span>
            </h2>
        </div>

        <!-- Sales Videos Section -->
        <div class="grid grid-cols-1 md:lg:xl:grid-cols-4 justify-center items-center gap-8 py-8">
            <!-- Text Content -->
            <div class="flex flex-col">
                <NuxtImg src="/img/voiceover1.png" title="Sales Video Image" alt="Sales Video"
                    class="w-full max-w-md" />
                <p class="text-gray-700 text-md md:lg:xl:text-lg">
                    A good sales video
                </p>
            </div>
            <div class="flex flex-col">
                <NuxtImg src="/img/voiceover1.png" title="Sales Video Image" alt="Sales Video"
                    class="w-full max-w-md" />
                <p class="text-gray-700 text-md md:lg:xl:text-lg">
                    A good sales video
                </p>
            </div>
            <div class="flex flex-col">
                <NuxtImg src="/img/voiceover1.png" title="Sales Video Image" alt="Sales Video"
                    class="w-full max-w-md" />
                <p class="text-gray-700 text-md md:lg:xl:text-lg">
                    A good sales video
                </p>
            </div>
        </div>
    </div>
    <AnimateArrowBtn />
</template>