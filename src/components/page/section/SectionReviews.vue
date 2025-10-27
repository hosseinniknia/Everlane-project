<template>
  <section class="container mx-auto lg:px-16 py-20">
    <UCarousel
      :items="reviews"
      loop
      arrows
      dots
      :autoplay="{ delay: 4000 }"
      :ui="{
        item: 'basis-full px-4',
        arrows: {
          base: 'absolute top-1/2 -translate-y-1/2 text-gray-600 hover:text-black bg-white rounded-full shadow-md p-2 transition-opacity',
          left: '-left-8',
          right: '-right-8'
        },
        dots: {
          wrapper: 'flex justify-center mt-10 space-x-2',
          base: 'w-2.5 h-2.5 rounded-full bg-gray-300 transition-all',
          active: 'bg-gray-800 w-3 h-3'
        }
      }"
      class="relative"
    >
      <template #default="{ item }">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 max-w-6xl mx-auto"
        >
          <!-- LEFT: Text content -->
          <div
            class="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left"
          >
            <h4 class="uppercase text-sm text-gray-500 tracking-wide">
              People Are Talking
            </h4>

            <!-- Rating -->
            <div class="flex justify-center md:justify-start text-amber-500 space-x-1">
              <template v-for="n in Math.floor(item.rating)" :key="n">
                <i class="fa-solid fa-star text-amber-500"></i>
              </template>
              <template v-if="item.rating % 1 !== 0">
                <i class="fa-solid fa-star-half-stroke text-amber-500"></i>
              </template>
            </div>

            <!-- Review -->
            <p class="text-xl md:text-2xl text-gray-800 leading-relaxed font-light italic">
              {{ item.review }}
            </p>

            <!-- Reviewer Info -->
            <p class="text-sm text-gray-600">
              — {{ item.userName }},
              <span
                class="text-gray-900 underline underline-offset-2 hover:text-black"
              >
                {{ item.product }}
              </span>
            </p>
          </div>

          <!-- RIGHT: Image -->
          <div
            class="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div
              class="w-[320px] sm:w-[300px] md:w-[360px] lg:w-[400px] aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 shadow-md"
            >
              <img
                :src="item.imgUrl"
                :alt="item.product"
                class="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </template>
    </UCarousel>
  </section>
</template>

<script setup>
const reviews = [
    {id: 1, rating: 5, review: '“Love this shirt! Fits perfectly and the fabric is thick without being stiff.”', userName: 'JonSnSF', product: 'UrbanCraft Linen Shirt', imgUrl: '/src/assets/images/reviews/image1.png'},
    {id: 2, rating: 4, review: '“Love this shirt! Fits perfectly and the fabric is thick without being stiff.”', userName: 'CakeJEDI', product: 'TrailEdge Cargo Pants', imgUrl: '/src/assets/images/reviews/image2.png'},
    {id: 3, rating: 4.5, review: '“Love this shirt! Fits perfectly and the fabric is thick without being stiff.”', userName: 'Farhammer', product: 'AeroFlex Performance Tee', imgUrl: '/src/assets/images/reviews/image3.png'},
    {id: 4, rating: 5, review: '“Love this shirt! Fits perfectly and the fabric is thick without being stiff.”', userName: 'AsrapJ', product: 'The Heavyweight Overshirt', imgUrl: '/src/assets/images/reviews/image4.png'}
]
</script>

<style scoped>
section {
  transition: all 0.3s ease-in-out;
}
</style>