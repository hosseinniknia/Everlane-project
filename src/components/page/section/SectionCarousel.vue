<template>
  <section class="container mx-auto px-4 py-30 text-center relative">
    <h2 class="text-xl font-medium mb-6">Beautifully Functional.</h2>
    <span class="block mb-6">
      Beautifully Functional. Purposefully Designed. Consciously Crafted.
    </span>

    <UCarousel
      :items="products"
      loop
      arrows
      dots
      :autoplay="{ delay: 6000 }"
      :ui="uiConfig"
      class="relative"
    >
      <template #default="{ item }">
        <div class="flex flex-col items-center space-y-3">
          <div class="aspect-[3/4] w-full overflow-hidden bg-gray-50 rounded-lg">
            <img
              :src="item.url"
              :alt="item.productName"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div class="text-center space-y-1 mt-2">
            <h3 class="text-sm font-medium text-gray-900">{{ item.productName }}</h3>
            <p class="text-xs text-gray-500">{{ item.color }}</p>
            <p class="text-sm text-gray-800 font-semibold">{{ item.price }}</p>
          </div>
        </div>
      </template>
    </UCarousel>
  </section>
</template>

<script setup lang="ts">
const products = [
  { id: 1, url: '/src/assets/images/carousel/carousel1.png', productName: 'The Essential Organic Crew', color: 'Vintage Black', price: '$30' },
  { id: 2, url: '/src/assets/images/carousel/carousel2.png', productName: 'UrbanCraft Linen Shirt', color: 'Yellow Red', price: '$40' },
  { id: 3, url: '/src/assets/images/carousel/carousel3.png', productName: 'TrailEdge Cargo Pants', color: 'Sky Blue', price: '$20' },
  { id: 4, url: '/src/assets/images/carousel/carousel4.png', productName: 'AeroFlex Performance Tee', color: 'Modern Black', price: '$60' },
  { id: 5, url: '/src/assets/images/carousel/carousel5.png', productName: 'NordicLayer Wool Jacket', color: 'Violet Blue', price: '$10' },
  { id: 6, url: '/src/assets/images/carousel/carousel6.png', productName: 'EverDenim Classic Jeans', color: 'Light Pink', price: '$90' },
  { id: 7, url: '/src/assets/images/carousel/carousel7.png', productName: 'LunaFlow Midi Dress', color: 'Dark Orange', price: '$100' },
  { id: 8, url: '/src/assets/images/carousel/carousel8.png', productName: 'Velora Knit Sweater', color: 'Light Pink', price: '$80' },
  { id: 9, url: '/src/assets/images/carousel/carousel9.png', productName: 'Sienna Satin Blouse', color: 'Vintage Red', price: '$70' },
  { id: 10, url: '/src/assets/images/carousel/carousel10.png', productName: 'Crescent Lounge Set', color: 'Vintage Blue', price: '$120' },
]

// cast to any so TypeScript stops validating the shape
const uiConfig = {
  item: 'basis-1/2 sm:basis-1/3 lg:basis-1/4 px-3',
  // define separate classes for prev / next arrows so they sit left/right
  arrows: {
    prev: 'absolute top-1/2 -translate-y-1/2 -left-6 text-gray-600 hover:text-black bg-white rounded-full shadow-md p-2 transition',
    next: 'absolute top-1/2 -translate-y-1/2 -right-6 text-gray-600 hover:text-black bg-white rounded-full shadow-md p-2 transition'
  },
  // dots configuration
  dots: {
    wrapper: 'flex justify-center mt-6 space-x-2',
    base: 'w-2.5 h-2.5 rounded-full bg-gray-300 transition-all',
    active: 'bg-gray-800 w-3 h-3'
  }
} as any
</script>
