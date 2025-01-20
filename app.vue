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
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

  /* Hide scrollbar in Chrome */
::-webkit-scrollbar {
  display: none;  /* Hides the scrollbar */
}


body {
  font-family: "Space Grotesk", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  overflow-x: hidden !important;
  width: 100vw;
}

h1, h2, h3, p {
  font-family: "Space Grotesk", serif;
}
/* Global Styles can go here, or in your Layouts or Pages */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #060606;
  color: #f0f6fc;
}


li {
  list-style: none; /* Removes the bullet points */
  color: hsla(0,0%,100%,.6);
}


ul {
  list-style: none;
  padding: 0; /* Optional: removes left padding */
  margin: 0; /* Optional: removes default margin */
}

ol {
  list-style: none;
  padding: 0;
  margin: 0;
}


ul {
    list-style-type: none;
}

.icon {
  margin-right: 8px;
  font-size: 1.2rem;
  vertical-align: middle;
}

.highlight {
  color: #5d2be9;
  font-weight: bold;
  text-decoration: none;
}

.highlightarrow {
  color: #5d2be9; /* Original color */
  font-weight: bold;
  text-decoration: none;
  font-size: 3.2rem;
  margin: 0;
  display: inline-block; /* Ensures the transform property works properly */
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth rotation and color transition */
}

.space {
  margin-left: 2vw;
}


.slider-box:hover .highlightarrow {
  transform: rotate(90deg); /* Rotate the element upwards */
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition */
}

ul {
  text-align: left;
  text-decoration: none;
  list-style: inside;
  margin: 0.5em 0 1em;
}

h4 {
  margin-top: 1em;
  margin-bottom: 0.5em;
  text-align: left;
}

</style>

  