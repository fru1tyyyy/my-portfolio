<script>
  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";
  import About from "$lib/components/About.svelte";
  import Info from "$lib/components/Info.svelte";

  let showIntro = true;
  let aboutShrunk = false;
  let showProject = false;

  function handleScroll() {
    const y = window.scrollY;

    if (y > 50) {
      aboutShrunk = true;
      showProject = true;
    } else {
      aboutShrunk = false;
      showProject = false;
    }
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);

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
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .about-wrapper {
    min-height: 100vh;
    transition: transform 0.4s ease, opacity 0.4s ease;
    transform-origin: top; 
  }

  .shrunk {
    transform: scale(0.85); 
    opacity: 1; 
  }

  .project-wrapper {
    margin-top: -500px; 
    transition: margin-top 0.4s ease;
  }

  .container {
    max-width: 1000px;
    margin: auto;
    padding: 40px 20px;
  }
</style>
{#if showIntro}
  <div class="intro-screen" transition:fade={{ duration: 400 }}>
    <h1 transition:fly={{ y: -300, duration: 400 }} style="font-size: 10rem;">Home</h1>
  </div>
{/if}
<div class="content-wrapper">
  <Header/>
  <div class="about-wrapper {aboutShrunk ? 'shrunk' : ''}">
    <div class="container">
      <About />
    </div>
  </div>
  {#if showProject}
    <div class="project-wrapper" transition:fade={{ duration: 400 }}>
      <div class="container">
        <Info />
      </div>
    </div>
  {/if}
</div>
