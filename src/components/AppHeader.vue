<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-md border-b navback">
      <RouterLink to="/"><img src="@/assets/logo.svg" alt="NR Logo. It consists of the two letters N and R written together in purple." height="40"></RouterLink>
      <button class="navbar-toggler button-animation" type="button" data-toggle="collapse" data-target="#navbarSupportedContent23" aria-controls="navbarSupportedContent23" aria-expanded="false" aria-label="Toggle navigation">
        <div class="animated-icon"><span></span><span></span><span></span><span></span></div>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent23">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">Home</a>
          </li>
          <span class="spacer"></span>
          <li class="nav-item">
            <a class="nav-link" href="aboutme.html">About Me</a>
          </li>
          <span class="spacer"></span>
          <li class="nav-item">
            <a class="nav-link" href="projects/projects.html">Projects</a>
          </li>
          <span class="spacer"></span>
          <li class="nav-item">
            <a class="nav-link" href="private/private.html">Private</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
.border-b {
  border-bottom: 3px solid var(--color-border)
}
</style>