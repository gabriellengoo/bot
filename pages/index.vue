<template>
  <div class="all">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background"></div>
      <div class="secthero1">
        <h1 ref="heroText" class="animated-text">
          Welcome to <span>PandaNova</span>
        </h1>
        <p class="subtexthero">
          Welcome to PandaNova, your trusted partner in revolutionizing your
          Pump.Fun experience on Solana. We specialize in creating powerful bots
          tailored to help users maximize their success in the competitive world
          of token launches.
        </p>
        <a href="https://t.me/PandaNovaNews" class="cta-button">
          <span>Go To Channel</span>
        </a>
      </div>
      <div class="secthero2">
        <!-- <p>test</p> -->
        <div ref="animationContainer" class="lottie-animation-container"></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="blurry-shape">
        <img
          src="https://soltradingbot.com/assets/images/shapes/blurry-shape-3.svg"
          alt=""
          class=""
        />
      </div>
      <h2 class="animated-textsub">Our current offerings include</h2>
      <div class="sec1two">
        <div>
          <img src="assets/images/phone.png" alt="" class="phone" />
        </div>
        <div>
          <div class="feature-grid2">
            <div
              v-for="(feature2, index) in features2"
              :key="index"
              class="feature-item2"
            >
              <img class="imgicons" :src="feature2.icon" alt="Feature Icon" />
              <h3>{{ feature2.title }}</h3>
              <p>{{ feature2.description }}</p>
            </div>
          </div>
          <p class="subtextherosub2">
            Both bots are designed to work seamlessly through an intuitive
            Telegram interface, ensuring a user-friendly and accessible
            experience. At PandaNova, we’re committed to empowering users with
            tools that deliver reliability, speed, and results. Start your
            journey with us today and take your Pump.Fun strategy to the next
            level.
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <!-- <div class="blurry-shape secbg">
        <img
        src="assets/images/bg.png"
                  alt=""
          class=""
        />
      </div> -->

      <h2 class="animated-textsub">Referral Program</h2>
      <h2 class="subtextherosub2">
        At PandaNova, we believe in rewarding our users for spreading the word.
        Our Referral Program is designed to benefit everyone
      </h2>
      <div class="feature-grid3">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-item3"
        >
          <!-- <img :src="feature.icon" alt="Feature Icon" /> -->
          <!-- <h3>{{ feature.title }}</h3> -->
          <p>{{ feature.description }}</p>
        </div>
      </div>
      <h2 class="fettitle padsub">Important Notes</h2>
      <div class="feature-grid">
        <div
          v-for="(feature3, index) in features3"
          :key="index"
          class="feature-item2"
        >
          <!-- <img :src="feature.icon" alt="Feature Icon" /> -->
          <!-- <h3>{{ feature3.title }}</h3> -->
          <p>{{ feature3.description }}</p>
        </div>
      </div>
    </section>

    <!-- bot -->
    <section class="features-section">
      <div class="blurry-shape">
        <img
          src="https://soltradingbot.com/assets/images/shapes/blurry-shape-3.svg"
          alt=""
          class=""
        />
      </div>
      <div class="feature-flex-container">
        <div class="feature-image">
          <img class="imgicons2" src="/bot.png" alt="Feature Image" />
        </div>
        <div class="feature-textn">
          <img class="imgiconsnani" src="~/assets/images/logo.png" alt="Logo" />
          <h2>Bundler Bot</h2>
          <p>
            The Bundler Bot simplifies the bundling process for Pump.Fun
            launches.
          </p>
        </div>
      </div>
    </section>

    <!-- Slider Section -->
    <!-- Slider Section with Title and Text -->
    <section class="slider-section">
      <div class="slider-container">
        <!-- Slider Content -->
        <div class="slider">
          <div
            v-for="(slide, index) in sliderData"
            :key="index"
            class="slider-box"
            :class="{ active: currentSlide === index }"
          >
            <h3 class="slider-box-title">{{ slide.title }}</h3>
            <div class="slider-box-text" v-html="slide.text"></div>
          </div>
        </div>

        <!-- Dot Indicators -->
        <div class="dot-indicators">
          <span
            v-for="(slide, index) in sliderData"
            :key="index"
            :class="{ active: currentSlide === index }"
            class="dot"
            @click="scrollToSlide(index)"
          ></span>
        </div>
      </div>
    </section>

    <!-- bot2 -->
    <section class="features-section">
      <div class="blurry-shape">
        <img
          src="https://soltradingbot.com/assets/images/shapes/blurry-shape-3.svg"
          alt=""
          class=""
        />
      </div>
      <div class="feature-flex-container">
        <div class="feature-image">
          <img class="imgicons2" src="/bot2.png" alt="Feature Image" />
        </div>
        <div class="feature-textn">
          <img class="imgiconsnani" src="~/assets/images/logo.png" alt="Logo" />
          <h2>Bump Bot</h2>
          <p>
            The Bump Bot is designed to enhance token visibility during Pump.Fun
            promotions.
          </p>
        </div>
      </div>
    </section>

    <!-- Slider Section -->
    <!-- Slider Section with Title and Text -->
    <section class="slider-section">
      <div class="slider-container">
        <!-- Slider Content -->
        <div class="slider">
          <div
            v-for="(slide, index) in sliderData2"
            :key="index"
            class="slider-box"
            :class="{ active: currentSlide === index }"
          >
            <h3 class="slider-box-title">{{ slide.title }}</h3>
            <div class="slider-box-text" v-html="slide.text"></div>
          </div>
        </div>

        <!-- Dot Indicators -->
        <div class="dot-indicators">
          <span
            v-for="(slide, index) in sliderData2"
            :key="index"
            :class="{ active: currentSlide === index }"
            class="dot"
            @click="scrollToSlide(index)"
          ></span>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <!-- <section class="about">
      <h2>About PandaNova</h2>
      <p>
        PandaNova is an advanced algorithm designed to maximize your trading
        profits. Our solution leverages AI and machine learning to adapt to
        market conditions in real-time.
      </p>
    </section> -->

    <!-- Call-to-Action Section -->
    <section class="cta">
      <h2 class="bottext">
        Start your journey with us today and take your Pump.Fun strategy to the
        next level.
      </h2>
      <a href="https://t.me/PandaNovaNews" class="cta-button">Start</a>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import lottie from "lottie-web";


const animationContainer = ref(null);

const heroText = ref(null);

const sliderData = [
  {
    title: `🚀 Getting Started`,
    text: `
   

      The Bundler Bot simplifies the bundling process for Pump.Fun launches. Follow these steps to get started:
      
      <br/><br/> <p class="highlightarrow">→<p/>
        <li><span class="highlight">1. Access the Bot<br/><br/></span> Open the Bundler Bot via Telegram.</li><br/><br/>
        <li><span class="highlight">2. Prepare Wallets<br/><br/></span> Ensure you have 20 wallets ready, each funded with sufficient SOL for the bundling process.</li><br/><br/>
        <li><span class="highlight">3. Configure Buy Amounts<br/><br/></span> Input the SOL amount for each wallet and preview the token distribution.</li><br/><br/>
        <li><span class="highlight">4. Create Token Metadata<br/><br/></span> Upload your token details, including name, image, and optional links.</li><br/><br/>
        <li><span class="highlight">5. Purchase Launch Tickets or Premium<br/><br/></span> Acquire the required tickets or activate premium to enable unlimited launches.</li><br/><br/>
     
      With the Bundler Bot, the entire process is streamlined and user-friendly. Simply configure, review, and launch with confidence.
      <br/><br/><br/><br/>
  
    `,
  },
  {
    title: `⚙️ Buyer Config`,
    text: `
      The Buyer Config feature allows precise configuration of how much SOL each wallet should use in the bundle.
      <h4 class="highlight">Step-by-Step Configuration</h4>
      <ul>
        <li>Input the SOL amount for Wallet 1 (developer wallet).</li>
        <li>Continue entering SOL amounts for Wallets 2 through 20.</li>
      </ul>
      (The bot will calculate and display)
      <ul>
        <li>Tokens received for each wallet.</li>
        <li>Total tokens across all configured wallets.</li>
      </ul>
      <br/><br/>
      <h4 class="highlight">Save & Load Configurations</h4>
      <ul>
        <li>Save up to 20 configurations for easy reuse.</li>
        <li>Load previously saved configurations to save time during future launches.</li>
      </ul>
      Ensure all wallets are sufficiently funded to match the entered SOL amounts.
    `,
  },
  {
    title: `🔑 Wallet Manager`,
    text: `
      Managing wallets is critical for successful bundling. The Wallet Manager feature includes:
      <h4 class="highlight">Private Key Management</h4>
      <ul>
        <li>Import existing private keys for your wallets.</li>
        <li>Generate up to 20 new wallets with a single command.</li>
        <li>Export private keys securely for backup.</li>
      </ul>
        <br/><br/>
      <h4 class="highlight">Solana Funding</h4>
      <ul>
        <li>Ensure each wallet has enough SOL for its assigned buy amount in the bundle.</li>
      </ul>
      With Wallet Manager, you’ll have full control and flexibility over your wallet setup.
    `,
  },
  {
    title: `🪙 Create Token`,
    text: `
      Token creation is a crucial step before launching. Use the Bundler Bot to create metadata for up to 20 tokens:
      <h4 class="highlight">Required Details</h4>
      <ul>
        <li>Name: Enter the token name.</li>
        <li>Symbol/Ticker: Define the token’s unique identifier.</li>
        <li>Image: Upload the token’s image.</li>
      </ul>
      <br/><br/>
      <h4 class="highlight">Optional Details</h4>
      <ul>
        <li>Description</li>
        <li>Twitter link</li>
        <li>Telegram link</li>
        <li>Website link</li>
      </ul>
      Once the metadata is created, it is stored securely and can be selected during the launch process.
    `,
  },
  {
    title: `🎫 Launch Access Tickets`,
    text: `
      For non-premium users, Launch Access Tickets are required for every bundle:
      <h4 class="highlight">Ticket Options</h4>
      <ul>
        <li>1 Ticket</li>
        <li>5 Tickets (discounted)</li>
        <li>10 Tickets (greater discount)</li>
        <li>20 Tickets (biggest discount)</li>
      </ul>
      <br/><br/>
      <h4 class="highlight">Purchase Process</h4>
      <ul>
        <li>Ensure your payer wallet is funded.</li>
        <li>Select the desired ticket quantity.</li>
        <li>Complete the purchase with a single click.</li>
      </ul>
      With premium activated, users can launch unlimited bundles without requiring tickets.
    `,
  },
  {
    title: `✨ Premium`,
    text: `
      Premium unlocks unlimited launches for a specified duration:
      <h4 class="highlight">Duration Options</h4>
      <ul>
        <li>1 Week</li>
        <li>2 Weeks (discounted)</li>
        <li>4 Weeks (greater discount)</li>
        <li>12 Weeks (biggest discount)</li>
      </ul>
      <br/><br/>
      <h4 class="highlight">How to Activate</h4>
      <ul>
        <li>Ensure your payer wallet is funded.</li>
        <li>Select the desired duration.</li>
        <li>Activate with a single click.</li>
      </ul>
      Enjoy seamless bundling without limitations while premium is active.
    `,
  },
];

const sliderData2 = [
  {
    title: `🚀 Getting Started`,
    text: `
      The Bump Bot is designed to enhance token visibility during Pump.Fun promotions. Follow these steps to get started:
       <br/><br/><p class="highlightarrow">→<p/>
        <li class="highlight"><strong>1. Open the Bump Bot on Telegram.</strong></li>
           <br/><br/>
        <li class="highlight"><strong>2. Set up your bump parameters, including ↓</strong>
          <br/><br/>
            <li class="space">Number of bots (1, 2, or 3).</li>
            <br/>
            <li class="space">Speed (slow, medium, or fast).</li>
            <br/>
            <li class="space">Duration (30 minutes, 1 hour, 2 hours, or 4 hours).</li>
           <br/><br/>
        </li>
        <li class="highlight"><strong>3. Enter the token contract address.</strong> <br/><br/></li>
        <br/><br/><li class="highlight"><strong>4. Ensure your wallet has enough SOL to cover the bumping order.</strong> <br/><br/></li>
        <br/><br/><li class="highlight"><strong>5. Click “Start Bumping” to begin.</strong> <br/><br/></li>
       <br/><br/>
    `,
  },
  {
    title: `⚙️ Buyer Config`,
    text: `
      Fine-tune your bumping strategy with:
      <h4 class="highlight">Bot Count</h4>
      
      
        <li>Select 1, 2, or 3 bots for the bump.</li>
     <br/><br/>
      <h4 class="highlight">Speed</h4>
      
        <li>Choose between slow, medium, or fast.</li>
     <br/><br/>
      <h4 class="highlight">Duration</h4>
   
        <li>Options include 30 minutes, 1 hour, 2 hours, or 4 hours.</li>
       <br/><br/>
      Monitor your bumps and adjust settings as needed for optimal results.
    `,
  },
  {
    title: `🔑 Wallet Manager`,
    text: `
      The Bump Bot Wallet feature provides essential wallet management options:
      <br/><br/>
      <h4 class="highlight" >Withdraw SOL</h4>
    
        <li>Transfer unused SOL back to your main wallet.</li>
     <br/><br/>
      <h4 class="highlight">Export Private Key</h4>
      <ul>
        <li>Securely back up your wallet’s private key.</li>
      </ul>
      <br/><br/>
      <h4 class="highlight">Generate New Wallet</h4>
      <ul>
        <li>Create a fresh wallet for managing bumping orders.</li>
      </ul>
      <br/><br/>Ensure your wallet is always funded to avoid interruptions during bumping sessions.
    `,
  },
];

const features = [
  {
    icon: "/icons/automation.svg",
    title: "Automation",
    description:
      "Share your unique referral link with friends, colleagues, and the broader community.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Advanced Analytics",
    description:
      "Earn up to 15% revenue share for every user who signs up using your link and utilizes PandaNova bots.",
  },
  {
    icon: "/icons/security.svg",
    title: "Secure",
    description: "Referral earnings apply globally across all PandaNova bots.",
  },
];

const features3 = [
  {
    icon: "/icons/automation.svg",
    title:
      "Each user can use only one referral link—the first link used will determine who receives the revenue share.",
    description:
      "Each user can use only one referral link—the first link used will determine who receives the revenue share.",
  },
  {
    icon: "/icons/analytics.svg",
    title:
      "Your referral rewards grow as your network grows, so start sharing your link today!",
    description:
      "Your referral rewards grow as your network grows, so start sharing your link today!",
  },
];

const features2 = [
  {
    icon: "/bot.png",
    title: "Bundler Bot",
    description:
      "Simplify and streamline the token bundling process for Pump.Fun launches with unparalleled ease and precision.",
  },
  {
    icon: "/bot2.png",
    title: "Bump Bot",
    description:
      "Elevate token visibility by efficiently managing bumps during token promotions.",
  },
];

onMounted(() => {
  gsap.fromTo(
    heroText.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );

   // Features Section Animation
   gsap.from(".feature-item2", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2, // Animates items one after another
    scrollTrigger: {
      trigger: ".features",
      start: "top 75%",
      toggleActions: "play none none reverse", // Play when in view
    },
  });

  // Add other section animations
  gsap.from(".phone", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".phone",
      start: "top 85%",
    },
  });

  lottie.loadAnimation({
    container: animationContainer.value, // The DOM element to render the animation in
    renderer: "svg", // svg, canvas, or html
    loop: true, // Enable looping
    autoplay: true, // Enable autoplay
    path: "https://lottie.host/a97abb70-a374-44ce-9c61-7f8217ab2caa/0SjELt2unf.json", // Your JSON URL
  });
});
</script>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliderData2: [],
    };
  },
  methods: {
    scrollToSlide(index) {
      this.currentSlide = index;
      const slider = this.$el.querySelector(".slider");
      const slideWidth = this.$el.querySelector(".slider-box").offsetWidth;
      slider.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap");

body {
  font-family: "Space Grotesk", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}

h1,
h2,
h3,
p {
  font-family: "Space Grotesk", serif;
}

h2 {
  font-weight: normal;
}

/* Features Section Styles */
.features-section {
  /* background-color: #131313; */
  color: #f0f6fc;
  padding: 4vw;
}

.feature-flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
}

.feature-image img {
  width: 20vw;
  border-radius: 1vw;
  display: flex;
  justify-content: center;
}

.feature-textn {
  max-width: 50%;
}

.feature-textn h2 {
  font-size: 4.5vw;
  font-weight: 900;
  margin-bottom: 2vw;
  margin-top: 0;
  color: #5d2be9;
}

.feature-textn p {
  font-size: 1.2vw;
  line-height: 1.6;
}

/* Slider Section Styles */
/* Slider Section Styles */
.slider-section {
  /* width: 100vw;
    position: relative;
    left: -15vw; */
  /* width: 40vw; */
  padding: 6vw 2vw;
  /* background-color: #131313; */
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4vw;
  color: white;
}

.slider {
  display: flex;
  gap: 2vw;
  overflow-x: auto;
  scroll-behavior: smooth;
  z-index: 10;
  padding: 2vw;
}

.slider-box {
  min-width: 23vw;
  padding: 2vw;
  /* background-color: #030303; */
  /* border: 0.1vw solid #5d2be9; */
  border-radius: 1vw;
  text-align: center;
  color: white;
  box-shadow: 0 vw 1vw rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow-x: auto;
  scroll-behavior: smooth;
  height: 60vh;
  width: 49vw;
  max-height: 60vw;
  /* max-width: 90%; */
  background: #131313;
  border-radius: 2.8vw;
  padding: 4.4vw 3vw 3vw;
}

.slider-box:hover {
  transform: translateY(-1vw);
  box-shadow: 0 1vw 2vw rgba(0, 0, 0, 0.4);
}

.slider-box-title {
  font-size: 1.5vw;
  margin-bottom: 1vw;
  color: #5d2be9;
}

.slider-box-text {
  font-size: 1vw;
  padding-top: 2vw;
  /* color: #929292; */
  text-align: left;
}

.slider-box-text ul li {
  font-size: 0.5vw;
  padding-top: 2vw;
  /* color: #929292; */
  text-align: left;
}

.all {
  padding: 10vw 10vw;
  padding-bottom: 0;
  padding-top: 0;
}

.lottie-animation-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.imgicons {
  max-width: 5vw;
  animation: bounce 2s infinite; /* Apply the bounce animation */
}

.imgiconsnani {
  max-width: 5vw;
}

.imgicons2 {
  /* max-width: 40vh; */
  animation: bounce 2s infinite; /* Apply the bounce animation */
}

.feature-image {
  width: 20vw;
}

/* Keyframes for bounce animation */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0); /* Initial and final position */
  }
  50% {
    transform: translateY(-2vw); /* Move up */
  }
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
  color: #5d2be9;
  text-align: left;
  margin: 0;
}

.animated-textsub {
  font-size: 3.5vw;
  font-weight: 700;
  color: white;
  text-align: center;
}

.subtexthero {
  font-size: 1.2vw;
  color: hsla(0, 0%, 100%, 0.6);
  text-align: left;
}

.subtextherosub {
  font-size: 1vw;
  color: hsla(0, 0%, 100%, 0.6);
  text-align: left;
}

.subtextherosub2 {
  font-size: 1.2vw;
  color: white;
  color: hsla(0, 0%, 100%, 0.6);
  text-align: center;
}

.blurry-shape {
  position: absolute;
  width: 100vw;
  left: 0;
  z-index: -1;
}

.secbg {
  opacity: 0.05;
}

.blurry-shape img {
  position: absolute;
  width: 100vw;
  left: 0;
  pointer-events: none;
}

.secbg img {
  top: 25vh;
  /* width: 50vw; */
}

.bgimg {
  position: fixed;
}

.animated-text span {
  color: white;
  color: #f0f6fc;
}

.cta-button {
  margin-top: 2vw;
  padding: 1vw 3vw;
  font-size: 1.2vw;
  background-color: #aa51ea00;
  color: #f0f6fc;
  border: 0.1vw solid #ffffff20;
  border-radius: 50vw;
  cursor: pointer;
  width: 40%;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.5s ease;
}

.cta-button::before {
  content: "→"; /* Arrow symbol */
  position: absolute;
  left: -2vw; /* Start off-screen */
  transition: left 0.3s ease-in-out;
  font-size: 1.5vw;
  color: #f0f6fc;
}

.cta-button span {
  transition: transform 0.3s ease-in-out; /* Smooth text movement */
}

.cta-button:hover {
  /* background-color: #5d2be9; */
  border: 0.1vw solid #5d2be9;
}

.cta-button:hover::before {
  left: 1vw; /* Slide arrow in from the left */
}

.cta-button:hover span {
  cursor: pointer;
  transform: translateX(1.5vw); /* Move the text to the right */
}

.cta-button:not(:hover) {
  transition: transform 0.3s ease-in-out; /* Ensure smooth transition for text */
}

.cta-button:not(:hover) span {
  transform: translateX(0); /* Reset text position when not hovered */
}

.cta-button:not(:hover)::before {
  left: -2vw; /* Slide arrow back to the left */
}

a {
  text-decoration: none;
  width: 40%;
  cursor: pointer;
}

.features {
  /* background-color: #060606; */
  font-size: 1.5vw;
  padding: 8vw 2vw;
  width: 100%;
}

.feature-grid {
  /* padding-top: 2vw; */
  display: flex;
  /* flex-wrap: wrap; */
  /* gap: 2vw; */
  justify-content: center;
  flex-direction: row;
}

.feature-grid .feature-item2 p::before {
  content: "↓";
  transition: left 0.3s ease-in-out;
  font-size: 5vw;
  color: #5d2be9;
  position: relative;
  display: flex;
  flex-direction: column;
}

.feature-grid2 {
  padding-top: 2vw;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 2vw;
  justify-content: center;
  flex-direction: row;
}

.feature-grid3 {
  padding-top: 2vw;
  display: flex;
  gap: 2vw;
  justify-content: center;
}

.fettitle {
  text-align: center;
}

.padsub {
  padding-top: 2vw;
}

.feature-item {
  background-color: #1313138d;
  border: 0.1vw solid #5d2be9;
  border-radius: 1vw;
  padding: 2vw;
  text-align: center;
  width: 25vw;
  /* min-width: max-content; */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-1vw);
  box-shadow: vw 1vw 2vw rgba(0, 0, 0, 0.3);
}

.feature-item2 {
  /* background-color: #1313138d; */
  /* border: 0.1vw solid #5d2be9; */
  border-radius: 1vw;
  padding: 2vw;
  padding-top: 0;
  text-align: center;
  width: auto;
  color: #dedede;
  /* min-width: max-content; */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item2:hover {
  transform: translateY(-1vw);
  color: white;
  /* box-shadow: vw 1vw 2vw rgba(0, 0, 0, 0.3); */
}

.feature-item3 {
  /* background-color: #1313138d; */
  border-right: 0.1vw solid #585858;
  /* border-radius: 1vw; */
  padding: 2vw;
  text-align: left;
  width: 75vw;
  color: #dedede;
  /* min-width: max-content; */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item3:hover {
  transform: translateY(-1vw);
  box-shadow: vw 1vw 2vw rgba(0, 0, 0, 0.3);
}

.about,
.cta {
  font-size: 1.2vw;
  padding: 6vw 2vw;
  text-align: center;
}

.sec1two {
  display: flex;
}

.phone {
  width: 20vw;
  padding-right: 3vw;
}

/* .bottext{
margin-bottom: 4vw;
} */

.hero-background {
  position: absolute;
  top: 50vh;
  left: 20vw;
  width: 100%;
  height: auto;
  /* background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
  /* background-color: #060606; */
  pointer-events: none;
  z-index: 0;
}

.hero-background::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30vw;
  height: 30vw;
  background: radial-gradient(circle, #5d2be9, #131313, #000000);
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
html,
body {
  overflow: hidden; /* Hides scrollbar */
  -ms-overflow-style: none; /* For Internet Explorer */
  scrollbar-width: none; /* For Firefox */
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none; /* For WebKit browsers (Chrome, Safari, etc.) */
}
/* Hide the scrollbar globally */
html,
body {
  overflow: hidden; /* Prevent scrollbars */
}

/* For WebKit browsers (Chrome, Safari, Edge) */
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none; /* Hide the scrollbar */
}

/* For Firefox */
html,
body {
  scrollbar-width: none; /* Hide scrollbar */
}

@media (max-width: 768px) {
  .slider-box.active {
    transform: none !important;
    transition: none !important;
}

.slider-section{
    position: relative;
    padding: 0 !important;
    overflow: hidden;
}

.dot-indicators{
  display: none !important;
}

  .hero {
    text-align: center;
    background-color: #060606;
    height: auto;
    display: flex;
    justify-content: center;
    justify-content: space-between;
  }
  .animated-text {
    font-size: 4.5vw;
    font-weight: 700;
    color: #5d2be9;
    text-align: center;
  }
  .slider-box-text {
    font-size: 4.5vw;
    padding-top: 2vw;
    /* color: #929292; */
    text-align: left;
  }

  .slider-box-title {
    font-size: 6.5vw;
    margin-bottom: 1vw;
    color: #5d2be9;
  }

  .slider {
    display: flex;
    gap: 2vw;
    overflow-x: auto;
    scroll-behavior: smooth;
    z-index: 10;
    padding: 2vw;
    flex-direction: column;
  }

  .slider-box {
        width: auto;
        min-width: auto;
        border: 0.1vw solid #5d2be9;
        background-color: #03030300;
        margin-top: 7vw;
        height: max-content;
        /* height: 100vh; */
        max-height: none;
    }

  .sec1two {
    display: flex;
    flex-direction: column;
  }

  .feature-grid2 {
    padding-top: 2vw;
    display: flex;
    gap: 2vw;
    justify-content: center;
    flex-direction: column;
  }

  .slider-section {
    /* width: 100vw; */
    width: 100%;
    position: relative;
    left: 0;
    padding: 6vw 2vw;
    padding: 0;
  }

  .feature-flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    flex-direction: column;
    text-align: center;
  }

  .all {
    /* padding: 10vw; */
    padding-top: 0;
  }

  .imgiconsnani {
    display: none;
  }

  .features-section {
    /* background-color: #131313; */
    color: #f0f6fc;
    padding: 4vw;
    margin-top: 10vh;
    border: 0.1vw solid #5d2be9;
  }

  .hero {
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
    align-items: center;
  }

  .hero-background {
    display: none;
  }

  .imgicons {
    max-width: 22vw;
  }

  .lottie-animation-container {
    margin-top: 5vh;
  }

  .secthero2 {
    max-width: 100%;
    height: max-content;
  }

  .animated-text {
    font-size: 9.5vw;
  }

  .animated-textsub {
    font-size: 8.5vw;
  }

  .subtexthero {
    font-size: 4.5vw;
    text-align: center;
  }

  .cta-button {
    margin-top: 2vw;
    padding: 4vw 6vw;
    font-size: 4vw;
    background-color: #aa51ea00 !important;
    border: 0.2vw solid #5d2be9;
    border-radius: 15vw;
    cursor: pointer;
    width: 58%;
    transition: background-color 0.5s ease;
  }

  .feature-item {
    /* background-color: #1313138d; */
    border: 0.1vw solid #5d2be9;
    border-radius: 1vw;
    padding: 2vw;
    text-align: center;
    width: 100%;
    /* min-width: max-content; */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .feature-item2 {
    /* background-color: #1313138d; */
    /* border: 0.1vw solid #5d2be9; */
    border-radius: 50vw;
    /* padding: 8vw; */
    text-align: center;
    /* width: 100%; */
    margin-top: 6vw;
    /* min-width: max-content; */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .phone {
    width: 100%;
    padding-right: 3vw;
  }

  .feature-item3 {
    background-color: #13131300;
    /* border: 0.1vw solid #5d2be9; */
    /* border-radius: 1vw; */
    padding: 2vw;
    text-align: center;
    width: 100%;
    /* min-width: max-content; */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .subtextherosub2 {
    font-size: 3.5vw;
  }

  .feature-textn p {
    font-size: 3.2vw;
    line-height: 1.6;
  }

  .cta-button {
    background-color: #5d2be9;
  }

  .features {
    font-size: 3.5vw;
  }

  .about,
  .cta {
    font-size: 3vw;
  }

  .feature-item2 {
    color: white;
  }
}

.slider-section {
  position: relative;
  padding: 20px;
  overflow: hidden;
}

.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider {
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
  gap: 20px;
}

.slider-box {
  scroll-snap-align: start;
}

.slider-box.active {
  transform: scale(1.05);
  transition: transform 0.3s;
}

.dot-indicators {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #5d2be9;
}
</style>
