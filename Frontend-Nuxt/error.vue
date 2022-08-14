<template>
  <div>
    <Header />

    <section class="app-section flex min-h-[70%]">
      <div class="container grid place-content-center gap-12 text-center">
        <img
          src="~/assets/icons/Error.svg"
          alt="Error Illustration"
          class="lg:h-[350px] lg:w-[500px]"
        />

        <NuxtLink to="/" class="app-button mx-auto w-fit bg-blue-200">
          Go Back Home
        </NuxtLink>
      </div>
    </section>

    <TheFooter />
  </div>
</template>
