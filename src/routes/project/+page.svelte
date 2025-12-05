<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import "../global.css";
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
  <title>Yu Been | Experience</title>
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
      <h1 transition:fly={{ y: -300, duration: 400 }}>Projects</h1>
    </div>
  </div>
{/if}
<div class="container">
    <Header/>
  <div class="section-title">My Skillset</div>
  <section class="skills">
    <ul class="skills-list">
      <li class="skill-card">
        <strong> Python</strong><br/>
        <small>Language</small>
      </li>
      <li class="skill-card">
        <strong> JavaScript</strong><br/>
        <small>Language</small>
      </li>
      <li class="skill-card">
        <strong> React</strong><br/>
        <small>Library</small>
      </li>
      <li class="skill-card">
        <strong> Java</strong><br/>
        <small>Language</small>
      </li>
      <li class="skill-card">
        <strong>Svelte</strong><br/>
        <small>Framework</small>
      </li>
      <li class="skill-card">
        <strong> PHP</strong><br/>
        <small>Language</small>
      </li>
      <li class="skill-card">
        <strong>Express</strong><br/>
        <small>Framework</small>
      </li>
      <li class="skill-card">
        <strong>TypeScript</strong><br/>
        <small>Language</small>
      </li>
    </ul>
  </section>
  <div class="section-title">My Projects</div>
  <div class="project">
    <h2>My Portfolio</h2>
    <p>My first personal portfolio built using Svelte</p>
    <p><a href="https://github.com/fru1tyyyy/my-portfolio" target="_blank" rel="noreferrer">View Code</a></p>
  </div>
  <div class="project">
    <h2>CubeX</h2>
    <p>A website that sells cubes built using JavaScript, TypeScript, React and Express</p>
    <p><a href="https://github.com/fru1tyyyy/cubex" target="_blank" rel="noreferrer">View Code</a></p>
  </div>
  <div class="project">
    <h2>Killua</h2>
    <p>A music bot built using Python</p>
    <p><a href="https://github.com/fru1tyyyy/Discord-Bot" target="_blank" rel="noreferrer">View Code</a></p>
  </div>
  <div class="project">
    <h2>Predict Price</h2>
    <p>A Machine Learning project that predicts price, is about Data Science</p>
    <p><a href="https://github.com/fru1tyyyy/predict-price" target="_blank" rel="noreferrer">View Code</a></p>
  </div>
  <div class="project">
    <h2>Game Recommendation (Gammy)</h2>
    <p>My diploma FYP built using HTML, CSS, JavaScript and PHP</p>
    <p><a href="https://github.com/fru1tyyyy/Gammy" target="_blank" rel="noreferrer">View Code</a></p>
  </div>
</div>
<footer>
  Copyright © 2025 Yu Been <br />
  Built by Yu Been • <a href="https://github.com/fru1tyyyy" target="_blank" rel="noreferrer" style="color: #666;">GitHub</a>
</footer>
