<template>
  <section class="promo">
    <h2 class="title promo__title">{{ promo.title }}</h2>
    <div class="promo__content">
      <p v-for="(item, index) in promo.text" :key="index" class="promo__text">{{ item }}</p>
      <nuxt-link v-if="promo.btn" :to="promo.btn.href" class="btn btn-blue-outlined promo__btn">{{ promo.btn.text }}</nuxt-link>
    </div>
    <img v-if="promo.image" class="promo__img" :src="promo.image" :alt="promo.title">
  </section>
</template>

<script>
export default {
  name: 'GeneralBigImageWithLeftTitle',
  props: {
    promo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.promo {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 4rem 2.4rem;
  @include w1199 {
    grid-gap: 2rem;
  }
  &.grey {
    margin-left: calc(-1 * var(--container-padding));
    margin-right: calc(-1 * var(--container-padding));
    padding: 8rem var(--container-padding);
    background-color: var(--text-200);
    grid-gap: 8rem 2.4rem;
    @include w1199 {
      grid-gap: 4rem 2.4rem;
      padding: 8rem var(--container-padding) 4rem;
    }
    @include w767 {
      grid-gap: 2rem;
      padding: 4rem var(--container-padding) 2rem;
    }
    .promo__content {
      justify-content: flex-start;
    }
    .promo__title {
      max-width: 62rem;
      @include w1199 {
        max-width: 58rem;
      }
    }
    .promo__text {
      @include w1023 {
        max-width: 45.8rem;
      }
    }
    .promo__img {
      @include w1199 {
        height: 40rem;
        margin-top: 4rem;
      }
      @include w767 {
        height: 38rem;
        margin-top: 2rem;
      }
    }
  }
  &__title {
    grid-column: 1 / 7;
    margin: 0;
    @include w1366 {
      grid-column: 1 / 8;
    }
    @include w1199 {
      grid-column: 1 / -1;
    }
    @include w767 {
      font-size: 2rem;
      line-height: 1.4;
    }
  }
  &__content {
    grid-column: 8 / -1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include w1199 {
      grid-column: 1 / -1;
    }
  }
  &__text {
    margin-bottom: 0;
    max-width: 53.8rem;
    font-weight: 450;
    color: var(--text-700);
    &:last-child {
      margin-bottom: 0;
    }
    & + & {
      margin-top: 3.2rem;
      padding-top: 3.2rem;
      border-top: 0.1rem solid var(--text-300);
      @include w767 {
        margin-top: 2rem;
        padding-top: 2rem;
      }
    }
  }
  &__btn {
    margin-top: 5.6rem;
    padding: 1.5rem 3.1rem;
    @include w1199 {
      margin-top: 5.6rem;
    }
    @include w767 {
      margin-top: 4rem;
    }
  }
  &__img {
    grid-column: 1 / -1;
    width: 100%;
    border-radius: 1.6rem;
    object-fit: cover;
    @include w1199 {
      margin-top: 2rem;
    }
    @include w767 {
      height: 38rem;
    }
  }
}
</style>
