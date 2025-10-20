<template>
  <section class="flex flex-col justify-center items-center w-full p-20">
    <h2 class="font-light text-2xl p-6">Shop by Category</h2>
    <div class="flex justify-between items-center flex-wrap w-full">
      <div class="text-center underline">
        <img src="../../../assets/images/categories/shirts.png" alt="shirts" />
        <span>SHIRTS</span>
      </div>
      <div class="text-center underline">
        <img src="../../../assets/images/categories/denim.png" alt="denim" />
        <span>DENIM</span>
      </div>
      <div class="text-center underline">
        <img src="../../../assets/images/categories/tees.png" alt="tees" />
        <span>TEES</span>
      </div>
      <div class="text-center underline">
        <img src="../../../assets/images/categories/pants.png" alt="pants" />
        <span>PANTS</span>
      </div>
      <div class="text-center underline">
        <img
          src="../../../assets/images/categories/sweaters.png"
          alt="sweaters"
        />
        <span>SWEATERS</span>
      </div>
      <div class="text-center underline">
        <img
          src="../../../assets/images/categories/outerwear.png"
          alt="outerwear"
        />
        <span>OUTERWEAR</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '../../UI/button';
</script>