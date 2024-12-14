<script setup lang="ts">
const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()
async function play() {
    await video.value.player.playVideo()
}
function stateChange(event: { data: number; }) {
    isPlaying.value = event.data === 1
}
</script>



<template>
    <div class="container mx-auto px-2 md:lg:xl:px-64 md:lg:xl:pt-24">
        <div class="">
            <h3 class="text-gray-900 text-2xl md:lg:xl:text-5xl font-semibold text-center py-4 md:lg:xl:py-10">Check Out How I Generate A voiceover Using
                Speechelo</h3>

            <div class="flex gap-2 justify-center">
                <h5 class="text-gray-900 text-xs md:lg:xl:text-xl font-semibold text-center p-2">
                    the #1 text to voice tool <span class="text-amber-500 font-bold">Watch The Demo Video Below!</span>
                </h5>
                <NuxtImg src="/img/arrow3.png" title="company-logo" alt="logo-image" class="hidden md:lg:xl:flex h-12 pt-3" />
            </div>

            <div class="py-">
                <div class="relative">
                    <NuxtImg src="/img/video.png" title="company-logo" alt="logo-image" class="w-full" />
                    <div
                    class="absolute top-1/2 left-1/2 md:lg:xl:top-12 md:lg:xl:left-14 w-[48px] md:w-[68px] lg:xl:w-full h-[48px] md:h-[68px] lg:xl:h-full">
                        <ScriptYouTubePlayer ref="video" video-id="d_IFKP1Ofq0" @ready="isLoaded = true"
                            @state-change="stateChange">
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
                    <div class="absolute top-12 right-[-264px]">
                        <NuxtImg src="/img/tag2.png" title="company-logo" alt="logo-image" class="w-full hidden md:lg:xl:flex" />
                     </div>
                </div>
            </div>
        </div>
        <AnimateArrowBtn />
    </div>
</template>
