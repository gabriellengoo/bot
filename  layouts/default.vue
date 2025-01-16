<template>
    <div>
      <Header />
      <NuxtPage />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  </script>
  
  <style>
  /* Global styles */
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #060606;
    color: #f0f6fc;
    font-size: 1.5vw;
  }


  /* @media (max-width: 768px) {
    body {
    font-size: 2.5vw !important;
  }
} */
  </style>
  