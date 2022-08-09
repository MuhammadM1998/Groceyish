<script setup>
  defineProps({
    isNavVisible: { type: Boolean, required: true },
  });
</script>

<template>
  <nav class="nav" :class="{ 'nav--visible': isNavVisible }">
    <div class="wrapper">
      <!-- User Section -->
      <section class="nav-section user">
        <div class="container">
          <HeaderUserCard />
        </div>
      </section>

      <!-- Links Section -->
      <section class="nav-section">
        <div class="container">
          <NuxtLink to="/categories" class="app-button w-fit">
            <span i-bx-grid-alt></span>
            Browse All Categories
          </NuxtLink>

          <ul>
            <li>
              <NuxtLink to="/" class="nav-link nav-link--active">
                <span i-bx-home></span> Home
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/products?featured=true" class="nav-link">
                <span i-carbon-percentage></span> Featured
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/products?dailyBestSells=true" class="nav-link">
                <span i-bxs-hot></span> Daily Best Deals
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>

      <!-- Contact Us Section -->
      <section class="nav-section contact-us">
        <div class="container">
          <p class="text-lg font-semibold">Contact Us</p>

          <ul>
            <li>
              <span i-carbon-location-filled></span>
              <p class="font-medium">Address:</p>
              <p class="text-blue-200">1762 School House Road</p>
            </li>

            <li>
              <span i-bx-support></span>
              <p class="font-medium">Customer Support:</p>
              <p class="text-blue-200">1233-777</p>
            </li>

            <li>
              <span i-carbon-email></span>
              <p class="font-medium">Email:</p>
              <p class="text-blue-200">groceyish@contact.com</p>
            </li>

            <li>
              <span i-carbon-time></span>
              <p class="font-medium">Work Hours:</p>
              <p class="text-blue-200">8:00 AM - 12:00 PM</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="nav-section newsletter">
        <div class="container">
          <p class="text-lg font-semibold">Newsletter</p>
          <AppNewsletter />
        </div>
      </section>

      <!-- Social Following Section -->
      <section class="nav-section follow-us">
        <div class="container">
          <p class="text-lg font-semibold">Follow Us</p>

          <ul>
            <li>
              <a href="">
                <span i-bxl-facebook></span>
              </a>
            </li>

            <li>
              <a href="">
                <span i-bxl-twitter></span>
              </a>
            </li>

            <li>
              <a href="">
                <span i-bxl-linkedin></span>
              </a>
            </li>

            <li>
              <a href="">
                <span i-bxl-instagram></span>
              </a>
            </li>
          </ul>

          <p class="font-medium">© Groceyish 2022. All Rights Reserved.</p>
        </div>
      </section>

      <!-- Customer Support Section -->
      <section class="customer-support">
        <span i-bx-support class="text-2xl text-green-200"></span>
        <p class="text-green-200 font-semibold font-lg">1233-7777</p>
        <p class="font-medium">24/7 Support Center</p>
      </section>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  .nav {
    @apply absolute w-full;
    @apply lg:border-b lg:border-green-200 lg:static;
    @apply transition-transform translate-x-full;
    @apply lg:translate-x-0;

    &.nav--visible {
      @apply translate-x-0;
    }

    .wrapper {
      @apply flex flex-col lg:flex-row lg:justify-between lg:container;
    }

    .nav-section {
      @apply border-b border-green-200 py-4 block lg:border-0;
      .container {
        @apply flex flex-col gap-2;
        @apply lg:flex-row lg:items-center lg:gap-4 lg:p-0 lg:w-full;
      }

      ul {
        @apply flex flex-col gap-2 lg:flex-row lg:gap-4 lg:items-center;
      }

      span {
        @apply text-2xl;
      }
    }

    .nav-link {
      @apply text-lg hover:text-green-200;
      @apply flex items-center gap-2;

      &--active {
        @apply text-green-200 font-semibold;
      }
    }

    .user {
      @apply font-semibold text-lg lg:hidden;
    }

    .contact-us {
      @apply lg:hidden;

      li {
        @apply flex items-center gap-2 text-green-200;
      }
    }

    .newsletter {
      @apply flex flex-col gap-2 lg:hidden;
    }

    .follow-us {
      @apply lg:hidden;

      ul {
        @apply flex-row text-white;
        li {
          @apply bg-green-200 rounded-full p-2;
        }
      }
    }

    .customer-support {
      @apply hidden lg:flex items-center gap-2;
    }
  }
</style>
