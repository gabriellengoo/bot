<template>
  <div class="all">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background"></div>
      <div class="secthero1">
        <h1 ref="heroText" class="animated-text">
          Revolutionize Your Trading with <span>PandaNova</span>
        </h1>
        <p class="subtexthero">The future of automated trading is here.</p>
        <button class="cta-button">Go To Channel</button>
      </div>
      <div class="secthero2">
        <!-- <p>test</p> -->
        <div ref="animationContainer" class="lottie-animation-container"></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2 class="fettitle">Features</h2>
      <div class="feature-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-item"
        >
          <img :src="feature.icon" alt="Feature Icon" />
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <h2>About PandaNova</h2>
      <p>
        PandaNova is an advanced algorithm designed to maximize your trading
        profits. Our solution leverages AI and machine learning to adapt to
        market conditions in real-time.
      </p>
    </section>

    <!-- Call-to-Action Section -->
    <section class="cta">
      <h2>Start Trading Smarter Today</h2>
      <button class="cta-button">Sign Up Now</button>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import lottie from "lottie-web";

const animationContainer = ref(null);

const heroText = ref(null);

const features = [
  {
    icon: "/icons/automation.svg",
    title: "Automation",
    description: "Automate your trades 24/7 with minimal effort.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Advanced Analytics",
    description: "Get detailed insights into market trends.",
  },
  {
    icon: "/icons/security.svg",
    title: "Secure",
    description: "Your funds and data are protected with top-tier encryption.",
  },
  {
    icon: "/icons/customization.svg",
    title: "Customizable",
    description: "Tailor the bot’s strategies to match your goals.",
  },
];

onMounted(() => {
  gsap.fromTo(
    heroText.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );

  lottie.loadAnimation({
    container: animationContainer.value, // The DOM element to render the animation in
    renderer: "svg", // svg, canvas, or html
    loop: true, // Enable looping
    autoplay: true, // Enable autoplay
    path: "https://lottie.host/a97abb70-a374-44ce-9c61-7f8217ab2caa/0SjELt2unf.json", // Your JSON URL
  });
});
</script>

<style scoped>
.all {
  padding: 100px 100px;
  padding-bottom: 0;
  padding-top: 0;
}

.lottie-animation-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.hero {
  text-align: center;

  background-color: #060606;
  height: 80vh;
  display: flex;
  justify-content: center;
  justify-content: space-between;
}

.secthero1 {
  max-width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: left;
  justify-content: center;
  height: inherit;
}

.secthero2 {
  max-width: 80vw;
  display: flex;
  /* padding: 2vw; */
  position: relative;
  justify-content: center;
  /* width: 50%; */
  height: -moz-max-content;
  height: inherit;
  align-items: center;
}

.animated-text {
  font-size: 4.5vw;
  font-weight: 700;
  color: #ab51ea;
  text-align: left;
}

.subtexthero {
  font-size: 1.5vw;
  color: #929292;
  text-align: left;
}

.animated-text span {
  color: white;
  color: #f0f6fc;
}

.cta-button {
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 1vw;
  background-color: #aa51ea00;
  color: #0d1117;
  color: #f0f6fc;
  border: 0.1vw solid #252525;
  border-radius: 50px;
  cursor: pointer;
  width: 40%;
  transition: background-color 0.5s ease;
}

.features {
    background-color: #060606;
  font-size: 1.5vw;
  padding: 80px 20px;
}

.feature-grid {
    
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.fettitle{
    text-align: center;
}

.feature-item {
  background-color: #1313138d;
  border: 0.1vw solid #ab51ea;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 25vw;
  /* min-width: max-content; */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.about,
.cta {
  font-size: 1vw;
  padding: 60px 20px;
  text-align: center;
}

.cta-button:hover {
  transition: background-color 0.5s ease;
  background-color: #ab51ea;
}


.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
  /* background-color: #060606; */
  pointer-events: none;
  z-index: 0;
}

.hero-background::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30vw;
  height: 30vw;
  background: radial-gradient(circle, rgba(128, 0, 128, 0.529), rgba(57, 0, 57, 0.2), rgba(0, 0, 0, 0.919));
  border-radius: 50%;
  animation: pulse 2s infinite; /* Pulsing effect */
  transform: translate(-50%, -50%);
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
}


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


@media (max-width: 768px) {
    .all{
    padding: 10vw;
}

.hero{
    text-align: center;
    background-color: #060606;
    height: 80vh;
    display: flex;
    justify-content: center;
    justify-content: center;
    flex-direction: column;
}

.secthero1 {
    max-width: 100%;
    height: max-content;
}

.secthero2 {
    max-width: 100%;
    height: max-content;
}

.animated-text{
    font-size: 9.5vw;
}

.subtexthero {
    font-size: 4.5vw;
}


.cta-button {
    margin-top: 20px;
    padding: 10px 30px;
    font-size: 4vw;
    background-color: #aa51ea00;
    color: #0d1117;
    color: #f0f6fc;
    border: 0.1vw solid #252525;
    border-radius: 50px;
    cursor: pointer;
    width: 58%;
    transition: background-color 0.5s ease;
}

.feature-item{
    background-color: #1313138d;
    border: 0.1vw solid #ab51ea;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 100%;
    /* min-width: max-content; */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.features {

    font-size: 3.5vw;

}

.about, .cta {
    font-size: 3vw;
  
}
}
</style>
