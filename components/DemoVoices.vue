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
    <!-- Title -->
    <div class="container mx-auto px-1 md:lg:xl:px-32">
        <!-- Title Section -->
        <div class="flex md:lg:xl:pt-20 md:lg:xl:pb-8 md:lg:xl:px-24">
            <h2
                class="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-950 capitalize leading-relaxed">
                Listen To Some
                <span class="text-gray-850 font-bold">Breathtaking Demo Voices
                    From Speechelo:</span>
            </h2>
        </div>

        <!-- Sales Videos Section -->
        <div class="grid justify-center grid-cols-1 md:lg:xl:grid-cols-3 gap-4 md:lg:xl:gap-16 md:lg:xl:py-8 px-4">
            <div class="flex flex-col gap-4 justify-center">
                <div>
                    <ScriptYouTubePlayer ref="video" video-id="d_IFKP1Ofq0" @ready="isLoaded = true"
                        @state-change="stateChange">
                        <template #awaitingLoad>
                            <div
                                class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
                                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                                    <path
                                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                        fill="#525153" />
                                    <path d="M 45,24 27,14 27,34" fill="#fff" />
                                </svg>
                            </div>
                        </template>
                    </ScriptYouTubePlayer>
                </div>

                <div class="bg-white rounded-full px-6 mx-8 py-1 shadow-lg flex items-center space-x-1">
                    <span class="font-bold text-black">Portuguese Brazil</span>
                    <span class="text-gray-500">– Female</span>
                </div>
            </div>

            <div class="flex flex-col gap-4 justify-center">
                <div>
                    <ScriptYouTubePlayer ref="video" video-id="d_IFKP1Ofq0" @ready="isLoaded = true"
                        @state-change="stateChange">
                        <template #awaitingLoad>
                            <div
                                class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
                                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                                    <path
                                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                        fill="#525153" />
                                    <path d="M 45,24 27,14 27,34" fill="#fff" />
                                </svg>
                            </div>
                        </template>
                    </ScriptYouTubePlayer>
                </div>

                <div class="bg-white rounded-full px-6 mx-8 py-1 shadow-lg flex items-center space-x-1">
                    <span class="font-bold text-black">Portuguese Brazil</span>
                    <span class="text-gray-500">– Female</span>
                </div>
            </div>

            <div class="flex flex-col gap-4 justify-center">
                <div>
                    <ScriptYouTubePlayer ref="video" video-id="d_IFKP1Ofq0" @ready="isLoaded = true"
                        @state-change="stateChange">
                        <template #awaitingLoad>
                            <div
                                class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
                                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                                    <path
                                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                        fill="#525153" />
                                    <path d="M 45,24 27,14 27,34" fill="#fff" />
                                </svg>
                            </div>
                        </template>
                    </ScriptYouTubePlayer>
                </div>

                <div class="bg-white rounded-full px-6 mx-8 py-1 shadow-lg flex items-center space-x-1">
                    <span class="font-bold text-black">Portuguese Brazil</span>
                    <span class="text-gray-500">– Female</span>
                </div>
            </div>

            <div class="flex flex-col gap-4 justify-center">
                <div>
                    <ScriptYouTubePlayer ref="video" video-id="d_IFKP1Ofq0" @ready="isLoaded = true"
                        @state-change="stateChange">
                        <template #awaitingLoad>
                            <div
                                class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
                                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                                    <path
                                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                        fill="#525153" />
                                    <path d="M 45,24 27,14 27,34" fill="#fff" />
                                </svg>
                            </div>
                        </template>
                    </ScriptYouTubePlayer>
                </div>

                <div class="bg-white rounded-full px-6 mx-8 py-1 shadow-lg flex items-center space-x-1">
                    <span class="font-bold text-black">Portuguese Brazil</span>
                    <span class="text-gray-500">– Female</span>
                </div>
            </div>
            <!-- Text Content -->
            <div class="flex flex-col gap-4 justify-center">
                <div>
                    <ScriptYouTubePlayer ref="video" video-id="d_IFKP1Ofq0" @ready="isLoaded = true"
                        @state-change="stateChange">
                        <template #awaitingLoad>
                            <div
                                class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
                                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                                    <path
                                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                        fill="#525153" />
                                    <path d="M 45,24 27,14 27,34" fill="#fff" />
                                </svg>
                            </div>
                        </template>
                    </ScriptYouTubePlayer>
                </div>

                <div class="bg-white rounded-full px-6 mx-8 py-1 shadow-lg flex items-center space-x-1">
                    <span class="font-bold text-black">Portuguese Brazil</span>
                    <span class="text-gray-500">– Female</span>
                </div>
            </div>

            <div class="flex flex-col gap-4 justify-center">
                <div>
                    <ScriptYouTubePlayer ref="video" video-id="d_IFKP1Ofq0" @ready="isLoaded = true"
                        @state-change="stateChange">
                        <template #awaitingLoad>
                            <div
                                class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
                                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                                    <path
                                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                        fill="#525153" />
                                    <path d="M 45,24 27,14 27,34" fill="#fff" />
                                </svg>
                            </div>
                        </template>
                    </ScriptYouTubePlayer>
                </div>

                <div class="bg-white rounded-full px-6 mx-8 py-1 shadow-lg flex items-center space-x-1">
                    <span class="font-bold text-black">Portuguese Brazil</span>
                    <span class="text-gray-500">– Female</span>
                </div>
            </div>
        </div>
        <AnimateArrowBtn />
    </div>
</template>