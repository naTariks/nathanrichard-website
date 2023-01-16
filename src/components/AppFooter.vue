<template>
  <div class="border-t">
    <div class="container">
      <footer class="py-3 my-4">
        <div class="nav justify-content-center border-b pb-3 mb-3">
          <RouterLink to="/" class="nav-link px-2 text-muted">Home</RouterLink>
          <a href="https://www.linkedin.com/in/natariks" target="_blank" class="nav-link px-2 text-muted"><i class="bi bi-linkedin"></i> LinkedIn</a>
          <a href="https://github.com/naTariks" target="_blank" class="nav-link px-2 text-muted"><i class="bi bi-github"></i> Github</a>
          <a href="impressum.html" class="nav-link px-2 text-muted">Impressum</a>
          <RouterLink to="/imprint" class="nav-link px-2 text-muted">Imprint</RouterLink>
        </div>
        <p class="text-center text-muted">© {{ currentDate.getFullYear() }} Nathan Richard</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style scoped>
.border-t {
  border-top: 3px solid var(--color-border)
}

.border-b {
  border-bottom: 3px solid var(--color-border)
}
</style>