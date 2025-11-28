<script>
  import { fade, fly } from "svelte/transition";
  import "./global.css";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";

  let showIntro = true;
  function handleScroll() {
    showIntro = window.scrollY < 80;
  }

  onMount(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
        showIntro = false;
        document.body.style.overflow = "auto";
    }, 1000);
  });
</script>

<svelte:head>
  <title>Yu Been | About Me</title>
</svelte:head>

<style>
  .intro-screen {
    position: fixed;
    inset: 0;
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    text-align: center;
  }

  .intro-text h1 {
    font-size: 10rem;
    margin-top: 100px;
  }

</style>
{#if showIntro}
<div class="intro-screen" transition:fade={{duration: 300}}>
  <div class="intro-text">
    <h1 transition:fly={{ y: -300, duration: 400 }}>Home</h1>
  </div>
</div>
{/if}
<div class="content container">
    <Header/>
  <div class="about">
    <img src="/img/jett.png" alt="pfp" class="pfp" />
    <div class="intro">
      <h1>Yu Been</h1>
      <p>:p</p>
    </div>
    </div>
  <nav class="navbar">
    <ul class="nav-links">
      <li>
        <a href="https://www.linkedin.com/in/been-yu-804389306/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i> LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/fru1tyyyy" target="_blank" rel="noreferrer"><i class="fab fa-github"></i> GitHub</a>
      </li>
      <li>
        <a href="https://www.instagram.com/yubeen721/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i> Instagram</a>
      </li>
    </ul>
  </nav>
  <div class="section-title">About Me</div>
  <div class="project">
    <h2>~ My Location</h2>
    <p>Malaysia</p>
    <h2>~ My Hobby</h2>
    <p>Gaming, Coding, Tech Stuff, Cubing</p>
    <h2>~ My Education</h2>
    <p>Bachelor Software Engineering - Sunway University</p>
    <h2>~ My Contact Info</h2>
    <p>
      <a href="mailto:gammy358@gmail.com" target="_blank" rel="noreferrer">Email me</a>,
      <a href="https://www.linkedin.com/in/been-yu-804389306/" target="_blank" rel="noreferrer">LinkedIn</a>,
      <a href="https://github.com/fru1tyyyy" target="_blank" rel="noreferrer">GitHub</a>
    </p>
    <h2>~ My Resume</h2>
    <h2>~ My Skills</h2>
    <p>Web Development, Game Development, Computer Hardware</p>
    <h2>~ My Languages</h2>
    <p>English, Chinese, Malay</p>
  </div>
  <footer>
    Copyright © 2025 Yu Been <br />
    Built by Yu Been •
    <a href="https://github.com/fru1tyyyy" target="_blank" rel="noreferrer" style="color:#666;">
      GitHub
    </a>
  </footer>
</div>
