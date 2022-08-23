<template>
  <footer>
    <!-- Site Map -->
    <section class="site-map">
      <div class="wrapper">
        <div class="footer-block lg:col-span-2">
          <AppLogo />

          <ul class="contact-us">
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

        <div class="footer-block">
          <p class="app-text-lg">Account</p>

          <ul class="footer-list">
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Shipping Details</a></li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">Useful Links</p>

          <ul class="footer-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Hot Deals</a></li>
            <li><a href="#">Promotions</a></li>
            <li><a href="#">New Products</a></li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">Help Center</p>

          <ul class="footer-list">
            <li><a href="#">Payments</a></li>
            <li><a href="#">Refund</a></li>
            <li><a href="#">Checkout</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Q & A</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Rights & Social Links -->
    <section class="rights-social">
      <div class="wrapper">
        <p class="font-medium">© 2022, All rights reserved</p>

        <ul class="mt-4 flex gap-4 text-xl">
          <li class="social-icon">
            <a href="" i-bxl-facebook aria-label="Facebook" />
          </li>

          <li class="social-icon">
            <a href="" i-bxl-linkedin aria-label="Linkedin" />
          </li>

          <li class="social-icon">
            <a href="" i-bxl-instagram aria-label="Instagram" />
          </li>

          <li class="social-icon">
            <a href="" i-bxl-twitter aria-label="Twitter" />
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<style scoped lang="scss">
  .site-map {
    @apply border-y border-green-200;
    .wrapper {
      @apply container grid grid-cols-1 gap-8  py-4 lg:grid-cols-5 lg:py-8;

      .footer-block {
        @apply flex flex-col gap-4;

        .footer-list {
          @apply flex flex-col gap-4;

          a {
            @apply hover:text-green-200;
          }
        }
      }

      .contact-us {
        @apply flex flex-col gap-4;
        li {
          @apply flex items-center gap-2 text-green-200;
        }
      }
    }
  }

  .rights-social {
    .wrapper {
      @apply container flex flex-col items-center py-4 lg:flex-row lg:justify-between;

      .social-icon {
        @apply flex cursor-pointer items-center rounded-full bg-green-200 p-2 hover:opacity-90;

        a {
          @apply block text-white;
        }
      }
    }
  }
</style>
