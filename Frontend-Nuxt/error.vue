<template>
  <div>
    <Header />

    <section class="app-section flex min-h-[70%]">
      <div class="container grid place-content-center gap-4 text-center">
        <img
          src="~/assets/icons/Error.svg"
          alt="Error Illustration"
          class="lg:h-[350px] lg:w-[500px]"
        />

        <h2>Oops! Something went wrong</h2>

        <p class="font-medium text-gray-200">
          The page you requested can't be reached right now.
        </p>

        <NuxtLink to="/" class="app-button mx-auto w-fit bg-blue-200">
          Go Back Home
        </NuxtLink>
      </div>
    </section>

    <TheFooter />
  </div>
</template>
