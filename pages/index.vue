<script setup lang="ts">
useSeoMeta({
    title: 'Text To Speech Software, Transforming Text to Voice Instantly -  Speechelo',
})

const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()
async function play() {
    await video.value.player.playVideo()
}
function stateChange(event: any) {
    isPlaying.value = event.data === 1
}

export interface YouTubeProps {
    videoId: string;
    playerVars?: YT.PlayerVars;
    width?: number;
    height?: number;
}

// Example props with default values
const youTubeProps: YouTubeProps = {
    videoId: 'd_IFKP1Ofq0',
    playerVars: {
        autoplay: 1,
        controls: 1,
    },
    width: 750, // Optional width
    height: 360, // Optional height
};

// const isLoaded = ref(false);

// const stateChange = (state: YT.PlayerState) => {
//     console.log('Player state changed:', state);
// };

</script>

<template>
    <main>
        <!-- Hero Section -->
        <section class="bg-section_banner min-h-screen">
            <div class="xl:px-96">
                <div class="flex justify-center items-center p-4 md:lg:xl:p-6">
                    <div class="bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-white font-semibold px-4 rounded">
                        <h3 class="text-sm md:lg:xl:text-lg font-custom text-gray-50 text-center p-2">NEW
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

                <div class="px-4 md:lg:xl:px-48">
                    <div class="bg-green-700 flex justify-center p-1 md:lg:xl:pt-2">
                        <p class="text-white uppercase text-center text-xs md:lg:xl:text-sm">Click the
                            <span class="font-bold px-1">Play Button Below</span> To Find Out More
                        </p>
                    </div>
                    <div class="w-full border-4 border-green-700">
                        <div class="flex items-center justify-center">
                            <!-- <iframe src="https://www.youtube.com/embed/msizPweg3kE" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe> -->
                            <ScriptYouTubePlayer ref="video" :video-id="youTubeProps.videoId"
                                :player-vars="youTubeProps.playerVars" :width="youTubeProps.width"
                                :height="youTubeProps.height" @ready="isLoaded = true" @state-change="stateChange">
                                <template #awaitingLoad>
                                    <div
                                        class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
                                        <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                                            <path
                                                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                                fill="#f00" />
                                            <path d="M 45,24 27,14 27,34" fill="#fff" />
                                        </svg>
                                    </div>
                                </template>
                            </ScriptYouTubePlayer>
                        </div>
                    </div>

                </div>

                <div class="flex justify-center px-1 md:lg:xl:px-52 py-4">
                    <div class="text-white h-96">
                        <ul class="list-none space-y-6 my-4 font-semibold">
                            <li class="flex items-center gap-3">
                                <NuxtImg src="/img/check1.png" title="company-logo" alt="logo-image" class="w-5 h-5" />
                                <p class="text-lg">Generate voice from text</p>
                            </li>
                            <li class="flex gap-3">
                                <NuxtImg src="/img/check1.png" title="company-logo" alt="logo-image" class="w-5 h-5" />
                                <p class="text-lg"> Male & Female voices included</p>
                            </li>
                            <li class="flex gap-3">
                                <NuxtImg src="/img/check1.png" title="company-logo" alt="logo-image" class="w-5 h-5" />
                                <p class="text-lg">The only text to voice tool that adds inflections in the voice</p>
                            </li>
                            <li class="flex gap-3">
                                <NuxtImg src="/img/check1.png" title="company-logo" alt="logo-image" class="w-5 h-5" />
                                <p class="text-lg"> Over 30 human-sounding voices</p>
                            </li>
                        </ul>
                    </div>
                    <div class="text-white h-96">
                        <ul class="list-none space-y-6 my-4 font-semibold">
                            <li class="flex gap-3">
                                <NuxtImg src="/img/check1.png" title="company-logo" alt="logo-image" class="w-5 h-5" />
                                <p class="text-xl">Read the text in 3 ways: normal tone, joyful tone, serious tone.</p>
                            </li>
                            <li class="flex gap-3">
                                <NuxtImg src="/img/check1.png" title="company-logo" alt="logo-image" class="w-5 h-5" />
                                <p class="text-xl">  Works in [English] and 23 other languages</p>
                            </li>
                            <li class="flex gap-3">
                                <NuxtImg src="/img/check1.png" title="company-logo" alt="logo-image" class="w-5 h-5" />
                                <p class="text-xl">Works with any video creation software: Camtasia, Adobe Premier, iMovie, Audacity, etc.</p>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                <div class="h-[800px]">
                    -------
                </div>


            </div>


        </section>
    </main>


</template>
