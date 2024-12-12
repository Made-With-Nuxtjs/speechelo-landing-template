<template>
    <div class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 flex flex-col justify-center gap-4 p-8 md:lg:xl:py-10">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-custom text-center px-4">
            Grab Full Access to Speechelo Today…
        </h2>
        <h5 class="text-lg sm:text-2xl md:text-3xl font-custom text-center px-8">
            No Monthly Fees – One Time Investment
        </h5>
        <h6 class="text-base sm:text-lg md:text-xl font-bold font-custom text-center pt-2 md:lg:xl:pt-8">
            Founders Special Offer Ends Soon!
        </h6>
    </div>

    <div class="sm:px-8 md:px-16 lg:px-32 xl:px-72 py-2">
        <div class="bg-white offer-box">
            <div class="flex flex-col md:flex-row">
                <!-- Image Section -->
                <div class="flex-1 px-16 py-2 md:lg:xl:py-20 flex justify-center">
                    <NuxtImg src="https://placehold.co/300x350" title="Product" alt="product-image"
                        class="w-full h-[400px]" />
                </div>

                <!-- Content Section -->
                <div class="flex-1 p-8 md:lg:xl:p-16 flex flex-col gap-6 justify-center">
                    <h3 class="text-3xl  md:lg:xl:text-5xl font-bold text-center">Special Offer</h3>
                    <h6 class="text-lg sm:text-xl text-center">One Time Payment | No Monthly Fees</h6>
                    <div class="px-2 md:lg:xl:px-16">
                        <div class="border-dashed border border-red-400 rounded-md">
                            <h3 class="text-lg sm:text-2xl md:text-3xl text-center font-bold p-2 md:lg:xl:p-6 line-through">Normal
                                Price:
                                $97</h3>
                            <div class="px-16 md:lg:xl:px-16">
                                <div
                                    class="border-dashed border-2 border-red-600 rounded-sm bg-orange-200 h-10 flex items-center justify-center relative">
                                    <h2 class="text-sm sm:text-lg md:text-xl font-bold uppercase">Get 53% DISCOUNT</h2>
                                    <NuxtImg src="/img/cut.png" title="cut" alt="cut-image"
                                        class="w-4 absolute right-4 top-[-8px]" />
                                </div>
                            </div>
                            <div class="px-2 md:lg:xl:px-4 py-6 md:lg:xl:py-12">
                                <h5 class="text-sm md:lg:xl:text-xl text-center font-bold text-red-600">
                                    Get Speechelo Now For Only $47!
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center items-center">
                        <div
                            class="flex justify-center items-center gap-6 w-full cursor-pointer bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] hover:bg-gradient-to-l font-bold rounded">
                            <NuxtImg src="/img/cartIcon.png" title="Cart" alt="cartIcon"
                                class="w-6 md:lg:xl:w-12 h-6 md:lg:xl:h-12" />
                            <h3 class="text-xl md:lg:xl:text-5xl font-custom text-gray-50 text-center p-2 md:lg:xl:p-4">
                                Buy Now</h3>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <NuxtImg src="/img/compatible.png" title="compatible" alt="compatible"
                            class="w-80 h-12 text-center" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AnimateArrowBtn />
</template>