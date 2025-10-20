<template>
  <nav class="w-full border-b-2 border-b-slate-200">
    <div class="container mx-auto grid grid-cols-3 items-center py-4 px-6">
      <button
        @click="toggleMenu"
        value="hamburger"
        class="xl:hidden flex flex-col justify-around h-8 w-8 p-1 rounded hover:bg-gray-400"
      >
        <!-- Hamburger Icon (3 lines) -->
        <span class="h-0.5 rounded bg-gray-600 w-full"></span>
        <span class="h-0.5 rounded bg-gray-600 w-full"></span>
        <span class="h-0.5 rounded bg-gray-600 w-full"></span>
      </button>
      <ul class="hidden xl:flex items-center gap-6 text-sm font-medium">
        <li>
          <a
            class="relative pb-4 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >Women</a
          >
        </li>
        <li>
          <a
            class="relative pb-4 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >Men</a
          >
        </li>
        <li>
          <a
            class="relative pb-4 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >About</a
          >
        </li>
        <li>
          <a
            class="relative pb-4 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >Everworld Stories</a
          >
        </li>
      </ul>
      <div class="flex items-center justify-center">
        <h1>
          <a
            href="/"
            class="font-bold text-2xl tracking-widest hover:opacity-80"
            >EVERLANE</a
          >
        </h1>
      </div>
      <div class="max-xl:hidden flex items-center justify-end gap-6 text-2xl">
        <IconMagnifyingGlass
          class="text-3xl cursor-pointer hover:text-slate-500 transition-colors"
        />
        <IconPerson
          class="text-3xl cursor-pointer hover:text-slate-500 transition-color"
        />
        <IconShoppingCart
          class="text-3xl cursor-pointer hover:text-slate-500 transition-color"
        />
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline">
              <Icon
                icon="radix-icons:moon"
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              />
              <Icon
                icon="radix-icons:sun"
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
              <span class="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem @click="mode = 'light'"> Light </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'dark'"> Dark </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'auto'"> System </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </nav>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-white z-20 p-6 overflow-y-auto"
    >
      <div class="flex justify-end mb-6">
        <button
          @click="toggleMenu"
          class="w-10 h-10 flex items-center justify-center text-3xl font-light text-gray-800 rounded-full cursor-pointer hover:bg-gray-200"
          aria-label="Close menu"
        >
          &times;
        </button>
      </div>

      <div
        class="flex flex-col gap-6 text-xl font-semibold border-b border-gray-200 pb-6"
      >
        <a href="#" class="hover:text-gray-600">Women</a>
        <a href="#" class="hover:text-gray-600">Men</a>
        <a href="#" class="hover:text-gray-600">About</a>
        <a href="#" class="hover:text-gray-600">Everworld Stories</a>
      </div>
      <ul
        class="xl:flex pt-4 justify-between items-center text-sm font-light space-y-4"
      >
        <li>
          <a
            class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >Holiday Gifting</a
          >
        </li>
        <li>
          <a
            class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >New Arrivals</a
          >
        </li>
        <li>
          <a
            class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >Best-Sellers</a
          >
        </li>
        <li>
          <a
            class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >Clothing</a
          >
        </li>
        <li>
          <a
            class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >Tops & Sweaters</a
          >
        </li>
        <li>
          <a
            class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >Pants & Jeans</a
          >
        </li>
        <li>
          <a
            class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >Outerwear</a
          >
        </li>
        <li>
          <a
            class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >Shoes & Bags</a
          >
        </li>
        <li>
          <a
            class="relative text-red-600 pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href=""
            >Sale</a
          >
        </li>
        <div class="xl:hidden flex items-center justify-between gap-6 text-2xl">
          <IconMagnifyingGlass class="text-3xl" />
          <IconPerson class="text-3xl" />
          <IconShoppingCart class="text-3xl" />
                  <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline">
              <Icon
                icon="radix-icons:moon"
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              />
              <Icon
                icon="radix-icons:sun"
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
              <span class="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem @click="mode = 'light'"> Light </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'dark'"> Dark </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'auto'"> System </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </ul>
    </div>
  </Transition>
  <div class="hidden xl:block p-2 container mx-auto py-4 max-w-5xl">
    <ul
      class="xl:flex justify-between items-center text-sm font-light space-y-4"
    >
      <li>
        <a
          class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href=""
          >Holiday Gifting</a
        >
      </li>
      <li>
        <a
          class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href=""
          >New Arrivals</a
        >
      </li>
      <li>
        <a
          class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href=""
          >Best-Sellers</a
        >
      </li>
      <li>
        <a
          class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href=""
          >Clothing</a
        >
      </li>
      <li>
        <a
          class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href=""
          >Tops & Sweaters</a
        >
      </li>
      <li>
        <a
          class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href=""
          >Pants & Jeans</a
        >
      </li>
      <li>
        <a
          class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href=""
          >Outerwear</a
        >
      </li>
      <li>
        <a
          class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href=""
          >Shoes & Bags</a
        >
      </li>
      <li class="mb-4">
        <a
          class="relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full text-red-600"
          href=""
          >Sale</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconMagnifyingGlass from "../icons/IconMagnifyingGlass.vue";
import IconPerson from "../icons/IconPerson.vue";
import IconShoppingCart from "../icons/IconShoppingCart.vue";
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'
import { Button } from '@/components/UI/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
