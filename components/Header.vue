<template>
    <header class="header">
      <div class="logo-container">
      <!-- Link to navigate to the homepage -->
      <NuxtLink to="/" class="logo">
        <img src="~/assets/images/logo.png" alt="Logo" />
      </NuxtLink>
      <h1 class="logo">PandaNova</h1>
    </div>
   
      <!-- <nav>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#cta">Get Started</a>
      </nav> -->
    </header>
  </template>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    /* background-color: #000000; */
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  .logo {
    font-size: 1.5vw;
    color: #ab51ea;
    color: #f0f6fc;
  }
  
  nav a {
    margin: 0 15px;
    color: #f0f6fc;
    text-decoration: none;
    font-weight: 500;
  }
  
  nav a:hover {
    color: #23d5ab;
  }

  .logo-container {
  display: flex;
  align-items: center;
}

.logo img {
  height: 5vw; /* Adjust the height of the logo */
  width: auto;  /* Maintain aspect ratio */
}

/* Additional styles for responsiveness */
@media (max-width: 768px) {
  .logo img {
    height: 15vw; /* Adjust logo size for smaller screens */
  }

  .logo {
    font-size: 4.5vw;
    color: #ab51ea;
    color: #f0f6fc;
  }
}
  </style>
  