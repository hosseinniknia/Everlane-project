<template>
  <section class="container mx-auto px-16 py-16 text-center">
    <!-- Header -->
    <h2 class="text-2xl md:text-3xl font-medium mb-2">Everlane On You</h2>
    <p class="text-gray-600 text-sm md:text-base mb-4">
      Share your latest look with 
      <span class="font-semibold text-gray-800">#EverlaneOnYou</span> 
      for a chance to be featured.
    </p>
    <a href="#" class="text-sm text-gray-800 underline hover:text-black">
      Add Your Photo
    </a>

    <!-- Carousel -->
    <div class="mt-10">
      <UCarousel
        :items="models"
        loop
        arrows
        :ui="{
          item: 'basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 px-2',
          arrows: {
            base: 'absolute top-1/2 -translate-y-1/2 text-gray-700 hover:text-black bg-white rounded-full shadow-md p-2 transition-opacity',
            left: '-left-8',
            right: '-right-8'
          }
        }"
        class="relative"
      >
        <template #default="{ item }">
          <div class="relative group rounded-lg overflow-hidden">
            <img
              :src="item.url"
              :alt="item.name"
              class="w-full h-full object-cover aspect-square"
            />
            <!-- Hover Cart Icon -->
            <div
              class="absolute top-2 right-2 bg-white rounded-full shadow-md p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <i class="fa-solid fa-bag-shopping text-gray-700"></i>
            </div>
          </div>
        </template>
      </UCarousel>
    </div>
  </section>
</template>

<script setup>
const models = [
  { id: 1, name: 'Model 1', url: '/src/assets/images/buyers/image1.png' },
  { id: 2, name: 'Model 2', url: '/src/assets/images/buyers/image2.png' },
  { id: 3, name: 'Model 3', url: '/src/assets/images/buyers/image3.png' },
  { id: 4, name: 'Model 4', url: '/src/assets/images/buyers/image4.png' },
  { id: 5, name: 'Model 5', url: '/src/assets/images/buyers/image5.png' },
  { id: 6, name: 'Model 6', url: '/src/assets/images/buyers/image6.jpg' },
  { id: 7, name: 'Model 7', url: '/src/assets/images/buyers/image7.jpg' },
  { id: 8, name: 'Model 8', url: '/src/assets/images/buyers/image8.jpg' },
  ]
</script>