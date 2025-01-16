<template>
  <div class="all">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background"></div>
      <div class="secthero1">
        <h1 ref="heroText" class="animated-text">
          Welcome to <span>PandaNova</span>
        </h1>
        <p class="subtexthero">Welcome to PandaNova, your trusted partner in revolutionizing your Pump.Fun experience on Solana. We specialize in creating powerful bots tailored to help users maximize their success in the competitive world of token launches. </p>
        <a  href="https://t.me/PandaNovaNews" class="cta-button">Go To Channel</a>
      </div>
      <div class="secthero2">
        <!-- <p>test</p> -->
        <div ref="animationContainer" class="lottie-animation-container"></div>
      </div>
    </section>


   

<!-- Features Section -->
<section class="features">
  <div class="blurry-shape">
                    <img src="https://soltradingbot.com/assets/images/shapes/blurry-shape-3.svg" alt="" class="">
                </div>
      <h2 class="animated-textsub">Our current offerings include</h2>
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
            Both bots are designed to work seamlessly through an intuitive Telegram interface, ensuring a user-friendly and accessible experience.
At PandaNova, we’re committed to empowering users with tools that deliver reliability, speed, and results. Start your journey with us today and take your Pump.Fun strategy to the next level.
          </p> 
    </section>


<!-- Features Section -->
    <section class="features">
      <h2 class="animated-textsub">Referral Program</h2>
      <h2 class="subtextherosub2">At PandaNova, we believe in rewarding our users for spreading the word. Our Referral Program is designed to benefit everyone</h2>
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
                    <img src="https://soltradingbot.com/assets/images/shapes/blurry-shape-3.svg" alt="" class="">
                </div>
      <div class="feature-flex-container">
        <div class="feature-image">
          <img class="imgicons2" src="/bot.png" alt="Feature Image" />
        </div>
        <div class="feature-textn">
          <img class="imgiconsnani" src="~/assets/images/logo.png" alt="Logo" />
          <h2>Bundler Bot</h2>
          <p>
            The Bundler Bot simplifies the bundling process for Pump.Fun launches. 
          </p>
        </div>
      </div>
    </section>

    <!-- Slider Section -->
      <!-- Slider Section with Title and Text -->
      <section class="slider-section">
      <!-- <h2 class="section-title">What Our Clients Say</h2> -->
      <div class="slider">
        <div
          v-for="(slide, index) in sliderData"
          :key="index"
          class="slider-box"
        >
          <h3 class="slider-box-title">{{ slide.title }}</h3>
          <div class="slider-box-text" v-html="slide.text"></div>
        </div>
      </div>
    </section>



      <!-- bot2 -->
      <section class="features-section">
      <div class="blurry-shape">
                    <img src="https://soltradingbot.com/assets/images/shapes/blurry-shape-3.svg" alt="" class="">
                </div>
      <div class="feature-flex-container">
        <div class="feature-image">
          <img class="imgicons2" src="/bot2.png" alt="Feature Image" />
        </div>
        <div class="feature-textn">
          <img class="imgiconsnani" src="~/assets/images/logo.png" alt="Logo" />
          <h2>Bump Bot</h2>
          <p>
            The Bump Bot is designed to enhance token visibility during Pump.Fun promotions. 
          </p>
        </div>
      </div>
    </section>

    <!-- Slider Section -->
      <!-- Slider Section with Title and Text -->
      <section class="slider-section">
      <!-- <h2 class="section-title">What Our Clients Say</h2> -->
      <div class="slider">
        <div
          v-for="(slide, index) in sliderData2"
          :key="index"
          class="slider-box"
        >
          <h3 class="slider-box-title">{{ slide.title }}</h3>
          <div class="slider-box-text" v-html="slide.text"></div>
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
      <h2>Start your journey with us today and take your Pump.Fun strategy to the next level.</h2>
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
    title: "Getting Started",
    text: `
      The Bundler Bot simplifies the bundling process for Pump.Fun launches. Follow these steps to get started:
      <ul>
        <li><strong>Access the Bot:</strong> Open the Bundler Bot via Telegram.</li>
        <li><strong>Prepare Wallets:</strong> Ensure you have 20 wallets ready, each funded with sufficient SOL for the bundling process.</li>
        <li><strong>Configure Buy Amounts:</strong> Input the SOL amount for each wallet and preview the token distribution.</li>
        <li><strong>Create Token Metadata:</strong> Upload your token details, including name, image, and optional links.</li>
        <li><strong>Purchase Launch Tickets or Premium:</strong> Acquire the required tickets or activate premium to enable unlimited launches.</li>
      </ul>
      With the Bundler Bot, the entire process is streamlined and user-friendly. Simply configure, review, and launch with confidence.
    `,
  },
  {
    title: "Buyer Config",
    text: `
      The Buyer Config feature allows precise configuration of how much SOL each wallet should use in the bundle.
      <h4>Step-by-Step Configuration:</h4>
      <ul>
        <li>Input the SOL amount for Wallet 1 (developer wallet).</li>
        <li>Continue entering SOL amounts for Wallets 2 through 20.</li>
      </ul>
      The bot will calculate and display:
      <ul>
        <li>Tokens received for each wallet.</li>
        <li>Total tokens across all configured wallets.</li>
      </ul>
      <h4>Save & Load Configurations:</h4>
      <ul>
        <li>Save up to 20 configurations for easy reuse.</li>
        <li>Load previously saved configurations to save time during future launches.</li>
      </ul>
      Ensure all wallets are sufficiently funded to match the entered SOL amounts.
    `,
  },
  {
    title: "Wallet Manager",
    text: `
      Managing wallets is critical for successful bundling. The Wallet Manager feature includes:
      <h4>Private Key Management:</h4>
      <ul>
        <li>Import existing private keys for your wallets.</li>
        <li>Generate up to 20 new wallets with a single command.</li>
        <li>Export private keys securely for backup.</li>
      </ul>
      <h4>Solana Funding:</h4>
      <ul>
        <li>Ensure each wallet has enough SOL for its assigned buy amount in the bundle.</li>
      </ul>
      With Wallet Manager, you’ll have full control and flexibility over your wallet setup.
    `,
  },
  {
    title: "Create Token",
    text: `
      Token creation is a crucial step before launching. Use the Bundler Bot to create metadata for up to 20 tokens:
      <h4>Required Details:</h4>
      <ul>
        <li>Name: Enter the token name.</li>
        <li>Symbol/Ticker: Define the token’s unique identifier.</li>
        <li>Image: Upload the token’s image.</li>
      </ul>
      <h4>Optional Details:</h4>
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
    title: "Launch Access Tickets",
    text: `
      For non-premium users, Launch Access Tickets are required for every bundle:
      <h4>Ticket Options:</h4>
      <ul>
        <li>1 Ticket</li>
        <li>5 Tickets (discounted)</li>
        <li>10 Tickets (greater discount)</li>
        <li>20 Tickets (biggest discount)</li>
      </ul>
      <h4>Purchase Process:</h4>
      <ul>
        <li>Ensure your payer wallet is funded.</li>
        <li>Select the desired ticket quantity.</li>
        <li>Complete the purchase with a single click.</li>
      </ul>
      With premium activated, users can launch unlimited bundles without requiring tickets.
    `,
  },
  {
    title: "Premium",
    text: `
      Premium unlocks unlimited launches for a specified duration:
      <h4>Duration Options:</h4>
      <ul>
        <li>1 Week</li>
        <li>2 Weeks (discounted)</li>
        <li>4 Weeks (greater discount)</li>
        <li>12 Weeks (biggest discount)</li>
      </ul>
      <h4>How to Activate:</h4>
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
    title: "Getting Started",
    text: `
      The Bump Bot is designed to enhance token visibility during Pump.Fun promotions. Follow these steps to get started:
      <ul>
        <li><strong>Open the Bump Bot on Telegram.</strong></li>
        <li><strong>Set up your bump parameters, including:</strong>
          <ul>
            <li>Number of bots (1, 2, or 3).</li>
            <li>Speed (slow, medium, or fast).</li>
            <li>Duration (30 minutes, 1 hour, 2 hours, or 4 hours).</li>
          </ul>
        </li>
        <li><strong>Enter the token contract address.</strong></li>
        <li><strong>Ensure your wallet has enough SOL to cover the bumping order.</strong></li>
        <li><strong>Click “Start Bumping” to begin.</strong></li>
      </ul>
    `,
  },
  {
    title: "Buyer Config",
    text: `
      Fine-tune your bumping strategy with:
      <h4>Bot Count:</h4>
      <ul>
        <li>Select 1, 2, or 3 bots for the bump.</li>
      </ul>
      <h4>Speed:</h4>
      <ul>
        <li>Choose between slow, medium, or fast.</li>
      </ul>
      <h4>Duration:</h4>
      <ul>
        <li>Options include 30 minutes, 1 hour, 2 hours, or 4 hours.</li>
      </ul>
      Monitor your bumps and adjust settings as needed for optimal results.
    `,
  },
  {
    title: "Wallet Manager",
    text: `
      The Bump Bot Wallet feature provides essential wallet management options:
      <h4>Withdraw SOL:</h4>
      <ul>
        <li>Transfer unused SOL back to your main wallet.</li>
      </ul>
      <h4>Export Private Key:</h4>
      <ul>
        <li>Securely back up your wallet’s private key.</li>
      </ul>
      <h4>Generate New Wallet:</h4>
      <ul>
        <li>Create a fresh wallet for managing bumping orders.</li>
      </ul>
      Ensure your wallet is always funded to avoid interruptions during bumping sessions.
    `,
  },
];


const features = [
  {
    icon: "/icons/automation.svg",
    title: "Automation",
    description: "Share your unique referral link with friends, colleagues, and the broader community.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Advanced Analytics",
    description: "Earn up to 15% revenue share for every user who signs up using your link and utilizes PandaNova bots.",
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
    title: "Each user can use only one referral link—the first link used will determine who receives the revenue share.",
    description: "Each user can use only one referral link—the first link used will determine who receives the revenue share.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Your referral rewards grow as your network grows, so start sharing your link today!",
    description: "Your referral rewards grow as your network grows, so start sharing your link today!",
  },


];


const features2 = [
  {
    icon: "/bot.png",
    title: "Bundler Bot",
    description: "Simplify and streamline the token bundling process for Pump.Fun launches with unparalleled ease and precision.",
  },
  {
    icon: "/bot2.png",
    title: "Bump Bot",
    description: "Elevate token visibility by efficiently managing bumps during token promotions.",
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


/* Features Section Styles */
.features-section {
  /* background-color: #131313; */
  color: #f0f6fc;
  padding: 40px;
}

.feature-flex-container {
  display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.feature-image img {
  width: 20vw;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.feature-textn {
  max-width: 50%;
}

.feature-textn h2 {
  font-size: 4.5vw;
  margin-bottom: 20px;
  margin-top: 0;
}

.feature-textn p {
  font-size: 1.2vw;
  line-height: 1.6;
}

/* Slider Section Styles */
/* Slider Section Styles */
.slider-section {
  padding: 60px 20px;
  /* background-color: #131313; */
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: white;
}

.slider {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  z-index: 10;
  padding: 2vw;
}

.slider-box {
  min-width: 300px;
  padding: 20px;
  background-color: #030303;
  /* border: 0.1vw solid #ab51ea; */
  border-radius: 10px;
  text-align: center;
  color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow-x: auto;
  scroll-behavior: smooth;
  height: 60vh;
}

.slider-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.slider-box-title {
  font-size: 2.5vw;
  margin-bottom: 10px;
  color: #ab51ea;
}

.slider-box-text {
  font-size: 1.5vw;
  padding-top: 2vw;
  /* color: #929292; */
  text-align: left;
}

.slider-box-text ul li{
  font-size: .5vw;
  padding-top: 2vw;
  /* color: #929292; */
  text-align: left;
}





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

.imgicons {
  max-width: 5vw;
  animation: bounce 2s infinite; /* Apply the bounce animation */
}

.imgiconsnani{
  max-width: 5vw;
}

.imgicons2 {
  /* max-width: 40vh; */
  animation: bounce 2s infinite; /* Apply the bounce animation */
}

.feature-image{
  width: 20vw;

}

/* Keyframes for bounce animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0); /* Initial and final position */
  }
  50% {
    transform: translateY(-20px); /* Move up */
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
  color: #ab51ea;
  text-align: left;
}

.animated-textsub {
  font-size: 3.5vw;
  font-weight: 700;
  color: white;
  text-align: center;
}

.subtexthero {
  font-size: 1.5vw;
  color: #929292;
  text-align: left;
}

.subtextherosub{
  font-size: 1vw;
  color: #929292;
  text-align: left;
}

.subtextherosub2{
  font-size: 1.5vw;
  color: white;
  color: #929292;
  text-align: center;
}

.blurry-shape{
  position: absolute;
    width: 100vw;
    left: 0;
}

.blurry-shape img{
  position: absolute;
    width: 100vw;
    left: 0;
    pointer-events: none;
}

.bgimg{
  position: fixed;
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
  text-decoration: none;
}

a{
  text-decoration: none;
  width: 40%;
  cursor: pointer;
}


.features {
    background-color: #060606;
  font-size: 1.5vw;
  padding: 80px 20px;
}

.feature-grid {
  padding-top: 2vw;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.feature-grid2 {
    padding-top: 2vw;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }


  .feature-grid3{
    padding-top: 2vw;
    display: flex;
    gap: 20px;
    justify-content: center;
  }

.fettitle{
    text-align: center;
}

.padsub{
  padding-top: 2vw;
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


.feature-item2 {
  /* background-color: #1313138d; */
  /* border: 0.1vw solid #ab51ea; */
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 25vw;
  color: #dedede;
  /* min-width: max-content; */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

 .feature-item2:hover {
  transform: translateY(-10px);
  color: white;
  /* box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3); */
}


.feature-item3 {
    /* background-color: #1313138d; */
    border-right: 0.1vw solid #585858;
    /* border-radius: 10px; */
    padding: 20px;
    text-align: left;
    width: 75vw;
    color: #dedede;
    /* min-width: max-content; */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item3:hover {
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
  .slider-box-text {
    font-size: 4.5vw;
    padding-top: 2vw;
    /* color: #929292; */
    text-align: left;
}

.slider-box-title {
    font-size: 6.5vw;
    margin-bottom: 10px;
    color: #ab51ea;
}

.slider {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-behavior: smooth;
    z-index: 10;
    padding: 2vw;
    flex-direction: column;
}

.slider-box{
width: auto;
min-width: auto;
border: 0.1vw solid #ab51ea;
}

.slider-section{
    /* width: 100vw; */
    padding: 0;
}



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

.animated-textsub{
    font-size: 8.5vw;
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
    /* background-color: #1313138d; */
    border: 0.1vw solid #ab51ea;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 100%;
    /* min-width: max-content; */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item2{
    background-color: #1313138d;
    /* border: 0.1vw solid #ab51ea; */
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 100%;
    /* min-width: max-content; */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.feature-item3{
    background-color: #13131300;
    /* border: 0.1vw solid #ab51ea; */
    /* border-radius: 10px; */
    padding: 20px;
    text-align: center;
    width: 100%;
    /* min-width: max-content; */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.subtextherosub2{
  font-size: 3.5vw;
}

.feature-textn p {
    font-size: 3.2vw;
    line-height: 1.6;
}

.cta-button{
  background-color: #ab51ea;
}

.features {

    font-size: 3.5vw;

}

.about, .cta {
    font-size: 3vw;
  
}


.feature-item2 {
  color: white;
}
}
</style>
