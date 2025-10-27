<template>
  <footer class="bg-gray-50 border-t border-gray-200 text-gray-800">
    <div class="container mx-auto px-6 py-12">
      <!-- Top Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <!-- Columns -->
        <div v-for="(section, index) in footerSections" :key="index">
          <h3 class="font-semibold mb-3">{{ section.title }}</h3>
          <ul class="space-y-2">
            <li v-for="(link, i) in section.links" :key="i">
              <a href="#" class="text-sm text-gray-600 hover:text-black transition">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="col-span-1 lg:col-auto">
          <h3 class="font-semibold mb-3">Connect</h3>
          <form
            @submit.prevent
            class="flex items-center border border-gray-300 rounded overflow-hidden max-w-xs mx-auto lg:mx-0"
          >
            <input
              type="email"
              placeholder="Email Address"
              class="flex-grow px-4 py-2 text-sm focus:outline-none"
            />
            <button
              type="submit"
              class="bg-black text-white px-4 py-2 hover:bg-gray-800 transition"
            >
              →
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Links -->
      <div
        class="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-center sm:justify-between text-xs text-gray-500 gap-3"
      >
        <div class="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
          <a v-for="(link, i) in legalLinks" :key="i" href="#" class="hover:text-black transition">
            {{ link }}
          </a>
        </div>
        <p class="text-center sm:text-right">© 2023 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerSections = [
  {
    title: 'Account',
    links: ['Log In', 'Sign Up', 'Redeem a Gift Card'],
  },
  {
    title: 'Company',
    links: [
      'About',
      'Environmental Initiatives',
      'Factories',
      'DEI',
      'Careers',
      'International',
      'Accessibility',
    ],
  },
  {
    title: 'Get Help',
    links: ['Help Center', 'Return Policy', 'Shipping Info', 'Bulk Orders'],
  },
  {
    title: 'Connect',
    links: ['Facebook', 'Instagram', 'Twitter', 'Affiliates', 'Our Stores'],
  },
]

const legalLinks = [
  'Privacy Policy',
  'Terms of Service',
  'Do Not Sell or Share My Personal Information',
  'CS Supply Chain Transparency',
  'Vendor Code of Conduct',
  'Sitemap Pages',
  'Sitemap Products',
]
</script>

<style scoped>
footer {
  font-family: 'Inter', sans-serif;
}
</style>
