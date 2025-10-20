<template>
    <section
      class="relative h-screen w-full bg-center bg-cover flex items-center justify-start bg-[url('images/heroSection2.jpg')]"
    >
      <div class="absolute inset-0 bg-black/30"></div>

      <div class="relative z-10 max-w-md px-6 md:px-12 text-left">
        <h1 class="text-white text-4xl md:text-5xl font-light mb-4">
          Your Cozy Era
        </h1>
        <p class="text-white/90 text-lg mb-6">
          <span class="text-amber-300 font-medium">Get peak comfy-chic</span><br />
          with new winter essentials.
        </p>
        <a
          href="#"
          class="inline-block bg-white text-gray-900 px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
</template>

<script setup>
import Button from '@/components/UI/button/Button.vue';
</script>