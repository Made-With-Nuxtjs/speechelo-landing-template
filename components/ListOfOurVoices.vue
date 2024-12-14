<template>
    <!-- Title -->
    <div class="">
        <div class="flex justify-center p-2">
            <h2 class="text-2xl md:lg:xl:text-5xl text-center text-gray-800 capitalize leading-relaxed">
                Full List Of Our Voices:
            </h2>
        </div>

        <!-- Image Section -->
        <div class="flex justify-center">
            <NuxtImg src="/img/list.png" title="Full List Of Voices" alt="Full List Of Voices" class="w-full" />
        </div>
        <div class="pb-64">
            <h3 class="text-2xl md:lg:xl:text-5xl font-semibold text-center">None of our voices sound Robotic!</h3>
        </div>
    </div>

    <div class="bg-[#140D28] mt-16">
        <div class="container mx-auto p-4 md:lg:xl:px-64 pt-4 md:lg:xl:pt-64">
            <div class="p-4 md:lg:xl:px-48">
                <h3 class="text-gray-50 text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-snug">
                    <span class="font-bold">Speechelo</span> Works With Any
                    <span class="font-bold">Video Creation</span> Software.
                </h3>
                <p class="text-gray-50 text-sm md:text-base lg:text-lg text-center py-4 md:py-6">
                    Just generate voice from text with Speechelo, download the MP3, and import it into your favorite
                    video editor.
                </p>
            </div>
            <div class="">
                <NuxtImg src="/img/software.png" title="Full List Of Voices" alt="Full List Of Voices" class="w-full" />
            </div>
            <div class="flex justify-center pt-8 md:lg:xl:pb-4">
                <h5 class="text-gray-50 text-lg md:text-base lg:xl:text-3xl">or any video creation software</h5>
            </div>
        </div>
        <AnimateArrowBtn />
    </div>

</template>