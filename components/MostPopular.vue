<template>
    <!-- Title -->
    <div class="container mx-auto px-4 md:lg:xl:px-32 py-6 md:lg:xl:py-16">
        <!-- Title Section -->
        <div class="flex flex-row">
            <div class="basic-1/4 mx-auto">
                <div class="md:lg:xl:w-[600px]">
                    <div class="bg-[#1c1448] rounded-t-xl h-96 w-full relative">
                        <div class="flex justify-center md:lg:xl:py-8 py-16">
                            <NuxtImg src="/img/tableCover.png" title="special offer" alt="special-offer"
                                class="w-full" />
                        </div>
                        <h4 class="text-gray-50 text-center text-3xl">Founders Special Offer</h4>
                        <p class="text-gray-50 text-center text-sm">ONE TIME PAYMENT – no monthly fees</p>
                        <div>
                            <NuxtImg src="/img/most.png" title="most-popular" alt="most-popular"
                                class="w-32 absolute top-0" />
                        </div>
                    </div>
                </div>
                <div class="rounded-b-lg shadow-xl bg-white">
                    <div class="flex justify-center py-8">
                        <a href="/">
                            <h3 class="font-bold">YES, I UNDERSTAND THAT:</h3>
                        </a>
                    </div>
                    <div class="flex gap-8 px-4">
                        <div class="max-w-lg mx-auto">
                            <ul class="space-y-4 text-sm md:lg:xl:text-lg">
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        class="text-green-500 text-xl w-6 h-6" fill="currentColor">
                                        <path
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-133.837-76.837L214.627 334.627l-84.69-84.69c-9.373-9.373-24.569-9.373-33.941 0l-11.314 11.314c-9.373 9.373-9.373 24.569 0 33.941l115.276 115.276c9.373 9.373 24.569 9.373 33.941 0l181.276-181.276c9.373-9.373 9.373-24.569 0-33.941l-11.314-11.314c-9.372-9.373-24.568-9.373-33.941 0z" />
                                    </svg>
                                    <span class="text-gray-900/75">I’ll be able to create <span
                                            class="font-bold text-gray-900">HIGH-QUALITY voiceovers</span>
                                        for a one time fee</span>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        class="text-green-500 text-xl w-8 h-8" fill="currentColor">
                                        <path
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-133.837-76.837L214.627 334.627l-84.69-84.69c-9.373-9.373-24.569-9.373-33.941 0l-11.314 11.314c-9.373 9.373-9.373 24.569 0 33.941l115.276 115.276c9.373 9.373 24.569 9.373 33.941 0l181.276-181.276c9.373-9.373 9.373-24.569 0-33.941l-11.314-11.314c-9.372-9.373-24.568-9.373-33.941 0z" />
                                    </svg>
                                    <span class="text-gray-900/75">I will be able to use the <span
                                            class="font-bold text-gray-900">automated AI engine</span>,
                                        to generate human-like voiceovers</span>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        class="text-green-500 text-xl w-6 h-6" fill="currentColor">
                                        <path
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-133.837-76.837L214.627 334.627l-84.69-84.69c-9.373-9.373-24.569-9.373-33.941 0l-11.314 11.314c-9.373 9.373-9.373 24.569 0 33.941l115.276 115.276c9.373 9.373 24.569 9.373 33.941 0l181.276-181.276c9.373-9.373 9.373-24.569 0-33.941l-11.314-11.314c-9.372-9.373-24.568-9.373-33.941 0z" />
                                    </svg>
                                    <span class="text-gray-900/75">I will get full training, free support, and <span
                                            class="font-bold text-gray-900">free
                                            updates!</span></span>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        class="text-green-500 text-xl w-8 h-8" fill="currentColor">
                                        <path
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-133.837-76.837L214.627 334.627l-84.69-84.69c-9.373-9.373-24.569-9.373-33.941 0l-11.314 11.314c-9.373 9.373-9.373 24.569 0 33.941l115.276 115.276c9.373 9.373 24.569 9.373 33.941 0l181.276-181.276c9.373-9.373 9.373-24.569 0-33.941l-11.314-11.314c-9.372-9.373-24.568-9.373-33.941 0z" />
                                    </svg>
                                    <span class="text-gray-900/75">I’ll have total editing and <span
                                            class="font-bold text-gray-900">customization
                                            freedom</span> of the text that I use in Speechelo</span>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        class="text-green-500 text-xl w-6 h-6" fill="currentColor">
                                        <path
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-133.837-76.837L214.627 334.627l-84.69-84.69c-9.373-9.373-24.569-9.373-33.941 0l-11.314 11.314c-9.373 9.373-9.373 24.569 0 33.941l115.276 115.276c9.373 9.373 24.569 9.373 33.941 0l181.276-181.276c9.373-9.373 9.373-24.569 0-33.941l-11.314-11.314c-9.372-9.373-24.568-9.373-33.941 0z" />
                                    </svg>
                                    <span class="text-gray-900/75">I will get <span class="font-bold text-gray-900">30
                                            human-sounding voices</span> in over 23
                                        languages!</span>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        class="text-green-500 text-xl w-6 h-6" fill="currentColor">
                                        <path
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-133.837-76.837L214.627 334.627l-84.69-84.69c-9.373-9.373-24.569-9.373-33.941 0l-11.314 11.314c-9.373 9.373-9.373 24.569 0 33.941l115.276 115.276c9.373 9.373 24.569 9.373 33.941 0l181.276-181.276c9.373-9.373 9.373-24.569 0-33.941l-11.314-11.314c-9.372-9.373-24.568-9.373-33.941 0z" />
                                    </svg>
                                    <span class="text-gray-900/75">I understand that I will not have to pay the regular
                                        <span class="font-bold text-gray-900">$100 PRICE</span></span>
                                </li>
                            </ul>


                            <div class="mt-8 py-1 px-1 md:lg:xl:mx-20 border-dotted border-2 border-gray-400 text-center">
                                <span class="text-gray-900">Founders Special Offer: <span class="font-bold">$53 Discount</span> </span>
                            </div>
                            <div class="mt-8 text-center">
                                <p class="text-lg md:lg:xl:text-3xl font-bold">ONE TIME PAYMENT:</p>
                                <p class="text-lg md:lg:xl:text-3xl font-bold">ONLY $47</p>
                            </div>
                            <div class="flex justify-center items-center p-8">
                                <div
                                    class="flex justify-center items-center gap-6 w-full cursor-pointer bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] hover:bg-gradient-to-l font-bold rounded">
                                    <NuxtImg src="/img/cartIcon.png" title="Cart" alt="cartIcon"
                                        class="w-6 md:lg:xl:w-12 h-6 md:lg:xl:h-12" />
                                    <h3
                                        class="text-xl md:lg:xl:text-4xl font-custom text-gray-50 text-center p-2 md:lg:xl:p-4">
                                        Buy Now</h3>
                                </div>
                            </div>
                            <div class="flex justify-center pb-8">
                                <NuxtImg src="/img/compatible.png" title="compatible" alt="compatible"
                                    class="w-80 h-12 text-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
