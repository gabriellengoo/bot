<template>
  <div>
    <!-- Header Component -->
    <Header />

    <!-- Main Content from Pages -->
    <NuxtPage />

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
// Import Header and Footer components (you'll need to create these in your 'components' folder)
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
/* Global Styles can go here, or in your Layouts or Pages */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #060606;
  color: #f0f6fc;
}
</style>

  