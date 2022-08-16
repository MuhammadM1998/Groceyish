<template>
  <section class="app-section">
    <div class="container flex flex-col gap-4">
      <h2>My Account</h2>

      <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div class="account-block">
          <p class="app-text-lg py-1 px-2 text-green-200">General Info</p>

          <div class="py-1 px-2">
            <div class="row">
              <p class="font-medium">Name:</p>
              <p>Muhammad Mahmoud</p>
            </div>

            <div class="row">
              <p class="font-medium">Email:</p>
              <p>MuhammadM.1097@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="account-block">
          <p class="app-text-lg py-1 px-2 text-green-200">Addresses</p>

          <div class="py-1 px-2">
            <div class="row">
              <p class="font-medium">Primary Address:</p>
              <p>Esna - Luxor - Egypt</p>
            </div>

            <div class="row">
              <p class="font-medium">Postal Code:</p>
              <p>85811</p>
            </div>
          </div>
        </div>

        <div class="account-block">
          <p class="app-text-lg py-1 px-2 text-green-200">VIP Subscription</p>

          <div class="py-1 px-2">
            <p>
              Subscribe to
              <span class="font-medium text-green-200">Groceyish VIP</span> and
              get even better deals, free delivery on all items with no minimum
              limit required and much more!
            </p>

            <button class="app-button mt-2">
              <span i-bxs-crown></span>
              <p>Subscribe in Groecyish VIP</p>
            </button>
          </div>
        </div>

        <div class="account-block">
          <p class="app-text-lg py-1 px-2 text-green-200">Security</p>

          <div class="py-1 px-2">
            <p>Be careful. You can't undo the changes.</p>

            <button class="app-button mt-2 bg-red-600">
              <span i-bx-trash></span>
              <p>Delete Account</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .account-block {
    @apply divide-y-2 divide-green-100 self-start rounded-md border-2 border-green-100;

    .row {
      @apply flex items-center gap-2;
    }
  }
</style>
