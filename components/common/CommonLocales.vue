<template>
  <div class="header__locales">
    <nuxt-link
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      :class="['header__locale', { 'active': $i18n.locale === locale.code }]"
    >
      <span>{{ locale.name }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CommonLocales',
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
  &__locales {
    display: flex;
    align-items: center;
    margin-left: 3.2rem;
    @include w1023 {
      display: none;
    }
  }
  &__locale {
    display: flex;
    align-items: center;
    font-weight: 500;
    border-radius: 2.4rem;
    padding: 0.8rem 1.6rem;
    color: var(--text-300);
    border: 0.1rem solid transparent;
    @include hover {
      &:not(.active):hover,
      &:not(.active):focus {
        color: var(--primary-blue);
      }
      &:not(.active):active {
        color: var(--primary-shadow);
      }
    }
    @include active {
      &:not(.active):active {
        color: var(--primary-shadow);
      }
    }
    &.active {
      border-color: var(--text-300);
      pointer-events: none;
      color: var(--text-900);
    }
    span {
      line-height: 1;
      font-size: 1.6rem;
      text-transform: uppercase;
    }
  }
}
</style>
