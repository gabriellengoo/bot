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

  /* Hide scrollbar on the entire page */
/* Hide the default scrollbar */
html, body {
  overflow: hidden;  /* Hides scrollbar */
  -ms-overflow-style: none;  /* For Internet Explorer */
  scrollbar-width: none;  /* For Firefox */
}

html::-webkit-scrollbar, body::-webkit-scrollbar {
  display: none;  /* For WebKit browsers (Chrome, Safari, etc.) */
}

/* Hide the scrollbar globally */
html, body {
  overflow: hidden;  /* Prevent scrollbars */
}

/* For WebKit browsers (Chrome, Safari, Edge) */
html::-webkit-scrollbar, body::-webkit-scrollbar {
  display: none;  /* Hide the scrollbar */
}

/* For Firefox */
html, body {
  scrollbar-width: none;  /* Hide scrollbar */
}


  /* @media (max-width: 768px) {
    body {
    font-size: 2.5vw !important;
  }
} */
  </style>
  