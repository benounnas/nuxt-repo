<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})

/* useHead({
  title: 'My App',
  meta: [
    {
      name: 'description',
      content: 'My amazing site.'
    }
  ]
}) */
</script>

<template>
  <div>
    <section class="flex items-center justify-center h-screen">
      <div
        class="flex flex-col justify-center items-center py-8 px-4 max-w-screen-md text-center lg:py-16 lg:px-12"
      >
        <nuxt-picture
          fit="fill"
          src="/images/logo.png"
          sizes="sm:50vw md:50vw lg:200px"
        />
        <div>
          <h1
            class="mt-3 mb-4 text-4xl font-bold tracking-tight leading-none lg:mb-6 md:text-5xl xl:text-6xl"
          >
            Bientôt disponible.
          </h1>
          <p class="font-light text-gray-500 md:text-lg xl:text-xl">
            Salut, nous sommes Atlasmob et nous travaillons actuellement sur
            notre nouveau site web. Restez à l'écoute pour des mises à jour
            passionnantes alors que nous donnons vie à notre vision en ligne.
            Notre équipe est dédiée à la création d'une plateforme conviviale et
            engageante qui présente nos produits et services de la meilleure
            façon possible. Nous avons hâte de la partager avec vous bientôt !
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexComponent'
}
</script>
