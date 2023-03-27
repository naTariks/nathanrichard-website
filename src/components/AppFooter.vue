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

<template>
  <footer class="bg-primary-colour border-primary-colour-mute border-t-2">
    <div class="mt-14 flex flex-col items-center text-center">
      <a href="#" class="my-4">
        <img alt="NR Logo. It consists of the two letters N and R written together in purple." class="w-auto h-9" src="src/assets/logo_bold.svg">
      </a>

      <div class="my-4">
        <a class="mx-2.5 text-sm text-opposite-colour-mute transition-colors duration-500 hover:text-secondary-colour uppercase font-semibold font-heading" href="#">Imprint</a>
        <a class="mx-2.5 text-sm text-opposite-colour-mute transition-colors duration-500 hover:text-secondary-colour uppercase font-semibold font-heading" href="#">Ascii (Coming Soon)</a>
      </div>

      <div class="my-4">
        <a class="mx-2 text-opposite-colour-mute transition-colors duration-500 hover:text-secondary-colour" href="https://www.linkedin.com/in/natariks" target="_blank">
          <fa icon="fa-brands fa-linkedin" size="xl"/>
        </a>
        <a class="mx-2 text-opposite-colour-mute transition-colors duration-500 hover:text-secondary-colour" href="https://github.com/naTariks" target="_blank">
          <fa icon="fa-brands fa-github" size="xl"/>
        </a>
        <a class="mx-2 text-opposite-colour-mute transition-colors duration-500 hover:text-secondary-colour" href="mailto:contact@nathanrichard.dev" target="_blank">
          <fa icon="fa-solid fa-envelope" size="xl"/>
        </a>
      </div>

      <p class="text-sm text-[#ffffff4d] my-10 font-semibold">© {{ currentDate.getFullYear() }} Nathan Richard <fa icon="fa-solid fa-grip-lines-vertical"/> This site is made with much<fa class="text-secondary-colour" icon="fa-solid fa-heart"/></p>
    </div>
  </footer>
</template>
