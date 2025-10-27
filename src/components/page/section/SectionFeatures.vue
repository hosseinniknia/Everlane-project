<template>
  <section class="container mx-auto px-6 py-16 text-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="flex flex-col items-center space-y-4"
      >
        <!-- Use the icon component dynamically -->
        <component :is="feature.icon" class="w-12 h-12 text-gray-800" />

        <h3 class="font-medium text-gray-900">{{ feature.title }}</h3>
        <p class="text-gray-600 text-sm max-w-xs mx-auto">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconBox from '@/components/icons/IconBox.vue';
import IconClothesHanger from '@/components/icons/IconClothesHanger.vue';
import IconLocation from '@/components/icons/IconLocation.vue';

const features = [
  {
    icon: IconBox,
    title: 'Complimentary Shipping',
    description: 'Enjoy free shipping on U.S. orders over $100.',
  },
  {
    icon: IconClothesHanger,
    title: 'Consciously Crafted',
    description: 'Designed with you and the planet in mind.',
  },
  {
    icon: IconLocation,
    title: 'Come Say Hi',
    description: 'We have 11 stores across the U.S.',
  },
]
</script>

<style scoped>
/* Optional subtle animation */
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.05);
}
</style>
