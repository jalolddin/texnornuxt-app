<template>
  <section class="section-margin banner">
    <div class="banner__content">
      <img class="banner__img" :src="banner.img" :alt="banner.title">
      <div class="banner__top">
        <h1 class="title banner__title">{{ banner.title }}</h1>
        <p class="banner__text">{{ banner.text }}</p>
      </div>
      <button class="btn btn-blue-filled banner__btn">
        {{ banner.btn }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GeneralBannerWithGreyGradient',
  props: {
    banner: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 64rem;
  margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: 22.2rem var(--container-padding) 8rem;
  background-color: var(--text-200);
  @include w1023 {
    height: 54.2rem;
    padding: 17.8rem var(--container-padding) 7rem;
  }
  @include w767 {
    height: 62.8rem;
    padding: 8.4rem var(--container-padding) 8.8rem;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--text-200) 0%, var(--text-200) 50%, rgba(196, 196, 196, 0) 100%);
    pointer-events: none;
    @include w767 {
      display: none;
    }
  }
  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    @include w767 {
      position: relative;
      border-radius: 1.6rem;
      overflow: hidden;
    }
    &:before {
      content: '';
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: var(--text-000);
      opacity: 0.35;
    }
  }
  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: auto;
    height: 100%;
    object-fit: cover;
    @include w767 {
      width: 100%;
      height: 59%;
    }
  }
  &__top {
    @include w767 {
      padding: 3.2rem 1.6rem;
      background: #FFFFFF;
      border-radius: 1.6rem;
    }
  }
  &__top,
  &__btn {
    position: relative;
    z-index: 2;
  }
  &__title {
    max-width: 66rem;
    margin-top: 0;
    margin-bottom: 2rem;
    @include w1023 {
      max-width: 53rem;
    }
    @include w767 {
      margin-bottom: 1.6rem;
    }
  }
  &__text {
    max-width: 26rem;
    font-weight: 450;
    color: var(--text-700);
  }
  &__btn {
    margin-top: auto;
    padding: 1.6rem 3.2rem;
    @include w767 {
      width: calc(100% - 3.2rem);
      margin-right: 1.6rem;
      margin-bottom: 1.6rem;
      margin-left: 1.6rem;
      border-radius: 1.6rem;
      padding: 1.6rem 0;
    }
  }
}
</style>
