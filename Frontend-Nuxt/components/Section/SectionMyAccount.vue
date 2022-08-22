<script setup>
  const router = useRouter();
  const user = useStrapiUser();
  if (!user.value) router.push('/error');

  // Modal
  const isModalVisible = ref(false);
</script>

<template>
  <section class="app-section">
    <div class="wrapper">
      <h2>My Account</h2>

      <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div class="account-block">
          <p class="app-text-lg py-1 px-2 text-green-200">General Info</p>

          <div class="py-1 px-2">
            <div class="row">
              <p class="font-medium">Name:</p>
              <p>{{ user.username }}</p>
            </div>

            <div class="row">
              <p class="font-medium">Email:</p>
              <p>{{ user.email }}</p>
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

            <button class="app-button mt-2" @click="isModalVisible = true">
              <span i-bxs-crown></span>
              <p>Subscribe in Groecyish VIP</p>
            </button>
          </div>
        </div>

        <div class="account-block">
          <p class="app-text-lg py-1 px-2 text-green-200">Security</p>

          <div class="py-1 px-2">
            <p>Be careful. You can't undo the changes.</p>

            <button
              class="app-button mt-2 bg-red-600"
              @click="isModalVisible = true"
            >
              <span i-bx-trash></span>
              <p>Delete Account</p>
            </button>
          </div>
        </div>

        <BaseModal v-model:is-modal-visible="isModalVisible">
          <p class="app-text-lg text-green-200">This feature is coming soon!</p>
          <p class="text-sm font-medium text-gray-200">
            We're working everyday to enhance your experience as client.
          </p>
        </BaseModal>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply container flex flex-col gap-4;
  }

  .account-block {
    @apply divide-y-2 divide-green-100 self-start rounded-md border-2 border-green-100;

    .row {
      @apply flex items-center gap-2;
    }
  }
</style>
