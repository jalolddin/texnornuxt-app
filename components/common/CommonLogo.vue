<template>
  <nuxt-link :to="`/${$i18n.locale}/`">
    <img :class="['header__logo', place]" :src="`/images/logos/logo_${$i18n.locale}.svg`" alt="Logo Technodar">
    <img :class="['header__logo', 'mobile', place]" :src="`/images/logos/mobile-logo_${$i18n.locale}.svg`" alt="Logo Technodar">
  </nuxt-link>
</template>

<script>
export default {
  name: 'CommonLogo',
  props: {
    place: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  &__logo {
    height: 4rem;
    width: auto;
    display: block;
    @include w767 {
      height: 2.4rem;
    }
    &:not(.mobile) {
      @include w767 {
        display: none;
      }
    }
    &.mobile {
      display: none;
      @include w767 {
        display: block;
      }
    }
    &.footer {
      height: 4.8rem;
      @include w767 {
        height: 2.4rem;
      }
    }
  }
}
</style>
