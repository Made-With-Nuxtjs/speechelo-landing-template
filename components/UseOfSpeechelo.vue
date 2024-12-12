<template>
    <!-- Title -->
    <div class="container mx-auto xl:px-48">
        <!-- Title Section -->
        <div class="flex flex-col p-4 md:pt-14 xl:px-32">
            <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-gray-950 capitalize leading-relaxed">
                You can use Speechelo
                <span class="text-gray-850 font-semibold">to create AI voiceovers for your:</span>
            </h2>
        </div>

        <!-- Sales Videos Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <!-- Text Content -->
            <div class="flex flex-col gap-4 md:gap-6 px-4 md:px-8">
                <h3 class="text-gray-800 text-2xl md:lg:xl:text-3xl font-bold">
                    Sales Videos
                </h3>
                <p class="text-gray-700 text-md md:lg:xl:text-lg">
                    A good sales video in order to convert needs a trust-worthy voice. We offer a variety of SERIOUS
                    voices that
                    will capture your attention and win your confidence!
                </p>
            </div>
            <!-- Image -->
            <div class="flex justify-center">
                <NuxtImg src="/img/voiceover1.png" title="Sales Video Image" alt="Sales Video"
                    class="w-full max-w-md" />
            </div>
        </div>

        <!-- Training Videos Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-4">
            <!-- Image -->
            <div class="flex justify-center order-last md:order-none">
                <NuxtImg src="/img/voiceover2.png" title="Training Video Image" alt="Training Video"
                    class="w-full max-w-md" />
            </div>
            <!-- Text Content -->
            <div class="flex flex-col gap-4 md:gap-6 px-4 md:px-8">
                <h3 class="text-gray-800 text-2xl md:lg:xl:text-3xl font-bold">
                    Training Videos
                </h3>
                <p class="text-gray-800 text-md md:lg:xl:text-lg">
                    Various tests proved that people like FEMALE voices for training videos. Speechelo comes with a
                    variety of FEMALE voices for your training or demo videos.
                </p>
            </div>
        </div>
        <div class="flex justify-center p-2">
            <h5 class="text-2xl font-bold">or for any type of video!</h5>
        </div>
    </div>
    <AnimateArrowBtn />
</template>