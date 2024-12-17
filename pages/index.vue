<script setup lang="ts">
useSeoMeta({
    title: 'Text To Speech Software, Transforming Text to Voice Instantly -  Speechelo',
})



const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()
async function play() {
    await video.value.play()
}

</script>

<template>
    <main>
        <!-- Hero Section -->
        <section class="bg-section_banner  h-full-screen">
            <div class="xl:px-96">
                <div class="flex justify-center items-center p-4 md:lg:xl:p-6">
                    <div class="bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-white font-semibold px-4 rounded">
                        <h3 class="text-xs md:lg:xl:text-lg font-custom text-gray-50 text-center p-2">NEW
                            AI Text To Voice Tool</h3>
                    </div>
                </div>

                <div class="xl:px-32">
                    <h2
                        class="text-gray-50 font-custom font-semibold text-center text-3xl md:lg:xl:text-5xl leading-tight md:lg:xl:leading-tight px-1">
                        Instantly Generate <span class="underline underline-offset-8 font-bold">Voice from Text</span>
                        <br>
                        <span class="font-bold">100% Human-Sounding voiceover</span><br>
                        with only <span class="font-bold">3 clicks!</span>
                    </h2>

                    <p class="text-orange-600 font-bold text-lg md:lg:xl:text-xl text-center px-4 py-8 md:lg:xl:py-10">
                        We GUARANTEE no one will tell your voiceover is A.I. generated with a text to voice tool</p>
                </div>

                <div class="px-8 md:lg:xl:px-48">
                    <div class="bg-green-700 flex justify-center p-1 md:lg:xl:pt-2">
                        <p class="text-white uppercase text-center text-xs md:lg:xl:text-sm">Click the
                            <span class="font-bold px-1">Play Button Below</span> To Find Out More
                        </p>
                    </div>
                    <div class="w-full border-4 border-green-700">
                        <div class="flex items-center justify-center">
                            <ScriptVimeoPlayer :id="331567154" ref="video" class="group" @loaded="isLoaded = true"
                                @play="isPlaying = true" @pause="isPlaying = false">
                                <template #awaitingLoad>
                                    <div
                                        class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 group-hover:bg-red-700 transition rounded px-6 py-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" class="w-10 h-10 text-white"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z"
                                                fill="currentColor" />
                                        </svg>
                                    </div>
                                </template>
                            </ScriptVimeoPlayer>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row justify-center gap-8 md:lg:xl:px-52 pt-8 px-8 pb-4">
                    <div class="flex-1 text-gray-50">
                        <ul class="list-none space-y-6 font-semibold">
                            <li class="flex items-center gap-3">
                                <NuxtImg src="/img/check1.png" title="icon" alt="icon-image" class="w-6 h-6" />
                                <p class="text-sm md:lg:xl:text-lg">Generate voice from text</p>
                            </li>
                            <li class="flex items-center gap-3">
                                <NuxtImg src="/img/check1.png" title="icon" alt="icon-image" class="w-6 h-6" />
                                <p class="text-sm md:lg:xl:text-lg"> <span class="text-orange-400">Male & Female</span>
                                    voices
                                    included</p>
                            </li>
                            <li class="flex gap-3">
                                <NuxtImg src="/img/check1.png" title="icon" alt="icon-image" class="w-6 h-6" />
                                <p class="text-sm md:lg:xl:text-lg">
                                    The only text to voice tool that <span class="text-orange-400"> adds
                                        inflections</span> in the voice
                                </p>
                            </li>
                            <li class="flex items-center gap-3">
                                <NuxtImg src="/img/check1.png" title="icon" alt="icon-image" class="w-6 h-6" />
                                <p class="text-sm md:lg:xl:text-lg">Over <span class="text-orange-400">30
                                        human-sounding</span>
                                    voices</p>
                            </li>
                        </ul>
                    </div>
                    <div class="hidden md:block">
                        <div class="h-[25vh] w-[0.1vw] bg-gray-700"></div>
                    </div>

                    <div class="flex-1 text-gray-50">
                        <ul class="list-none space-y-6 font-semibold">
                            <li class="flex items-center gap-3">
                                <NuxtImg src="/img/check1.png" title="icon" alt="icon-image" class="w-6 h-6" />
                                <p class="text-sm md:lg:xl:text-lg">Read the text in <span class="text-orange-400">3
                                        ways:</span> normal tone,
                                    joyful tone, serious tone</p>
                            </li>
                            <li class="flex items-center gap-3">
                                <NuxtImg src="/img/check1.png" title="icon" alt="icon-image" class="w-6 h-6" />
                                <p class="text-sm md:lg:xl:text-lg">Works in <span class="text-orange-400"> [English]
                                        and
                                        23</span> other
                                    languages</p>
                            </li>
                            <li class="flex gap-3">
                                <NuxtImg src="/img/check1.png" title="icon" alt="icon-image" class="w-6 h-6" />
                                <p class="text-sm md:lg:xl:text-lg"><span class="text-orange-400">Works with any video
                                        creation
                                        software:</span>
                                    Camtasia, Adobe Premier,
                                    iMovie, Audacity,
                                    etc.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <AnimateArrowBtn />
            </div>
        </section>

        <!-- Second Section -->
        <section
            class="bg-[url('https://speechelo.com/images2/section3.png')] bg-gray-100 h-full-screen bg-center bg-no-repeat">

            <SpecialOffer />

        </section>

        <!-- Three Steps Section -->
        <section class="bg-[url('https://speechelo.com/images2/section10.png')] h-full bg-center bg-no-repeat">
            <Steps />
        </section>

        <!-- use Speechelo Section -->
        <section class="bg-[url('https://speechelo.com/images2/section12.jpg')] h-full bg-center bg-no-repeat">
            <UseOfSpeechelo />
        </section>

        <!--Demo Voices Section -->
        <section class="bg-gray-100">
            <DemoVoices />
        </section>

        <!--Full List Of Our Voices Section -->
        <section class="bg-gray-100">
            <ListOfOurVoices />
        </section>


        <!-- Generate A Voiceover Section -->
        <section class="bg-[url('https://speechelo.com/images2/section15.jpg')] h-full-screen bg-center bg-no-repeat">
            <GenerateAVoiceover />
        </section>

        <!--UNMATCHED FEATURES Section -->
        <section class="bg-gray-50 shadow-t-xl">
            <UnmatchedFeatures />
        </section>

        <!--Guaranteed Section -->
        <section class="bg-[#1e1242]">
            <Guaranteed />
        </section>

        <!-- Most Popular Section -->
        <section
            class="bg-[url('https://speechelo.com/images2/section21.jpg')] bg-gray-200 h-full-screen bg-center bg-no-repeat">
            <MostPopular />
        </section>

        <!--FAQ Section -->
        <section class="bg-[#1a1135]">
            <FAQ />
        </section>

       <!--Comment Review Section -->
       <section
            class="bg-[url('https://speechelo.com/images2/section4a.png')] bg-gray-200 h-full-screen bg-center bg-no-repeat">
            <Testimonial />
        </section>

    </main>
</template>
