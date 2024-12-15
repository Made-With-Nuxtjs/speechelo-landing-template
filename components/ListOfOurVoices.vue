<template>
    <!-- Title -->
    <div class="">
        <div class="flex justify-center p-2">
            <h2 class="text-3xl md:lg:xl:text-5xl text-center md:lg:xl:py-8 text-gray-800 capitalize leading-relaxed">
                Full List Of Our Voices:
            </h2>
        </div>

        <!-- Image Section -->
        <div class="flex justify-center">
            <NuxtImg src="/img/list.png" title="Full List Of Voices" alt="Full List Of Voices" class="w-full" />
        </div>
        <div class="md:lg:xl:pb-48">
            <h3 class="text-2xl md:lg:xl:text-5xl px-8 font-semibold text-center">None of our voices sound Robotic!</h3>
        </div>
        <div class="border-2 bg-white rounded-xl shadow-lg m-2 md:lg:xl:hidden">
            <div class="">
                <NuxtImg src="/img/robotic.png" title="Full List Of Voices" alt="Full List Of Voices" class="w-full" />
            </div>
            <div class="flex flex-col gap-4 p-4">
                <p class="text-lg text-center"><span class="font-bold">98%</span> of the people hearing a voiceover generated with Speechelo</p>
                <p class="text-lg text-center font-bold">can’t tell it’s not a real human voice!</p>
                <p class="text-lg text-center pt-2">All our voices have elements that make a <span class="font-bold">voice
                    sound real</span>  and have
                    all the expressions that needed to <span class="font-bold">make people more engaged</span> in your content and sound professional!
                </p>

            </div>
        </div>
    </div>

    <div class="bg-[#140D28] mt-16 relative">
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

        <div class="bg-white border-2 hidden md:lg:xl:flex rounded-xl shadow-xl absolute top-[-220px] right-[450px]">
            <div class="flex flex-row">
                <div class="flex flex-col gap-4 p-8 w-[650px]">
                    <p class="text-2xl"> <span class="font-bold">98%</span> of the people hearing a voiceover generated
                        with Speechelo</p>
                    <p class="text-2xl font-bold">can’t tell it’s not a real human voice!</p>
                    <p class="text-2xl pt-8">All our voices have elements that make a <span class="font-bold">voice
                            sound real</span> and have all the expressions that needed to <span class="font-bold">make people more engaged</span> in
                        your content and sound professional!</p>
                </div>
                <div class="flex justify-end">
                    <NuxtImg src="/img/robotic.png" title="Full List Of Voices" alt="Full List Of Voices"
                        class="w-full" />
                </div>
            </div>
        </div>
        <AnimateArrowBtn />
    </div>

</template>