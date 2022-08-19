<script setup>
  const strapi = useStrapi();
  const email = ref('');
  const isEmailValid = ref(true);

  // Modal
  const showNewSubscribedModal = ref(false);
  const showAlreadySubscribedModal = ref(false);

  const handleSubmit = async () => {
    // Checking if the email is valid
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email.value.match(emailRegEx)) {
      isEmailValid.value = false;
      return;
    }
    isEmailValid.value = true;

    // Checking if the email is already subscribed to the newsletter
    // If there's an email, show a corresponding modal to the user
    // If there isn't an email, add the email to the database annd show a corresponding modal
    const isNewSubscriber = await strapi.isNewSubscriber(email.value);
    if (!isNewSubscriber) showAlreadySubscribedModal.value = true;
    else {
      await strapi.addNewsletterSubscriber(email.value);
      showNewSubscribedModal.value = true;
    }

    // Send one of a New Subscription or an Already Subscribed emails depending on the `isAlreadySubscribed Boolean
    await strapi.sendNewsletterEmail(email.value, isNewSubscriber.toString());

    // Clear the input
    email.value = '';
  };
</script>

<template>
  <form @submit.prevent="">
    <div class="flex">
      <div class="input-wrapper">
        <span i-carbon-email></span>
        <input v-model="email" type="email" placeholder="Email address" />
      </div>

      <button class="app-button rounded-l-none" @click.prevent="handleSubmit">
        Subscribe
      </button>
    </div>

    <p
      class="error-message opacity-0"
      :class="{ 'opacity-100': !isEmailValid }"
    >
      Please enter a correct email
    </p>

    <!-- // Modals -->
    <BaseModal v-model:is-modal-visible="showNewSubscribedModal">
      <NuxtIcon name="Newsletter-New" fill class="text-[14rem]" />
      <p class="app-text-lg text-green-200">Thanks for subscribing!</p>
      <p class="text-sm font-medium text-gray-200">
        An email is sent to you. It may be in your spam folder.
      </p>
    </BaseModal>

    <BaseModal v-model:is-modal-visible="showAlreadySubscribedModal">
      <NuxtIcon name="Newsletter-Old" fill class="text-[14rem]" />
      <p class="app-text-lg text-green-200">You are already subscribed!</p>
      <p class="text-sm font-medium text-gray-200">
        An email is sent to you. It may be in your spam folder.
      </p>
    </BaseModal>
  </form>
</template>

<style scoped lang="scss">
  form {
    @apply w-full lg:max-w-xs;

    .input-wrapper {
      @apply relative;

      input {
        @apply font-medium text-green-200;
        @apply w-full rounded-l border border-green-200 py-3 pr-4 pl-10 outline-none;

        &::placeholder {
          @apply font-normal;
        }
      }

      span {
        @apply absolute left-2 top-1/2 -translate-y-1/2 text-2xl text-green-200;
      }
    }

    .error-message {
      @apply text-sm font-medium text-red-700  transition-opacity;
    }
  }
</style>
