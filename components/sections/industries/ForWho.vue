<template>
  <section class="section-margin forwho">
    <div class="forwho__nav">
      <div class="forwho__nav--title">Кому нужно решение</div>
      <div class="forwho__navigations">
        <button class="forwho-navigations__arr forwho-navigations__arr--prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
          </svg>
        </button>
        <button class="forwho-navigations__arr forwho-navigations__arr--next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 20L16 12L8 4" stroke="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
    <div v-swiper:swiper="swiperOptions" @slideChange="slideChange">
      <div class="forwho__elems swiper-wrapper">
        <div class="forwho-elems__item swiper-slide" v-for="(slide, index) in wholist" :key="index">
          <p class="forwho-elems-item__text">Подойдет</p>
          <h3 class="forwho-elems-item__title">{{ slide.who }}</h3>
          <img class="solutions-slide__img" :src="slide.image" :alt="slide.who">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndustriesForWho',
  props: {
    wholist: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeSlide: 0,
      swiperOptions: {
        spaceBetween: 20,
        resistanceRatio: 0,
        navigation: {
          prevEl: '.forwho-navigations__arr--prev',
          nextEl: '.forwho-navigations__arr--next'
        }
      }
    }
  },
  methods: {
    slideChange () {
      this.activeSlide = this.swiper.activeIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.red {
  color: var(--secondary-red);
}
.forwho {
  background-color: var(--text-200);
  margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: 0 var(--container-padding) 0rem;
  @include w767 {
    padding: 2.4rem var(--container-padding) 0rem;
  }
  display: block;
  flex-direction: column;
  align-items: flex-start;
  &__nav {
    position: relative;
    bottom: 0;
    z-index: 5;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.2rem 5rem 3.2rem 3.2rem;
    @include w1199 {
      width: 100%;
    }
    @include w767 {
      display: block;
      position: static;
      width: 100%;
      margin-top: 0.8rem;
      padding: 1.6rem;
    }
    &--title {
      padding: 1.5rem;
      font-size: 4rem;
      display: block;
      margin-right: 3.2rem;
      @include w1199 {
        font-size: 3rem;
      }
      @include w767 {
        font-size: 1.9rem;
      }
    }
  }
  &__navigations {
    display: none;
    @include w1199 {
      display: flex;
    }
  }
  &-navigations {
    &__arr {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      padding: 0;
      border-radius: 50%;
      border: 0.1rem solid var(--text-300);
      background: none;
      cursor: pointer;
      color: var(--text-1000);
      transition: 0.2s;
      @include hover {
        &:hover,
        &:focus {
          color: var(--primary-blue);
          border-color: var(--primary-blue);
        }
        &:active {
          color: var(--text-1000);
          border-color: var(--primary-shadow);
        }
      }
      @include active {
        &:active {
          color: var(--text-1000);
          border-color: var(--primary-shadow);
        }
      }
      &--next {
        margin-left: 1.6rem;
        @include w767 {
          margin-left: 0.8rem;
        }
      }
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
  &__elems {
    /* display: flex; */
    gap: 1.6rem;
    justify-content: center;
    @include w1199 {
      justify-content: center;
    }
    @include w767 {
      justify-content: flex-start;
    }
  }
  &-elems__item {
    padding: 1.6rem 1.6rem;
    display: block;
    border-radius: 1.6rem 1.6rem 0 0;
    background-color: var(--text-000);
    max-width: 32.2rem;
    width: 32.2rem;
    height: 38.2rem;
    @include w1199 {
      height: 35.2rem;
      max-width: 28.8rem;
    }
    @include w767 {
      height: 42.2rem;
      max-width: 35.8rem;
      width: 35.8rem !important;
      margin-right: 0 !important;
    }
  }
  &-elems-item__text {
    color: var(--primary-blue);
    font-weight: 400;
    font-size: 1.4rem;
  }
  &-elems-item__title {
    color: var(--text-1000);
    font-weight: 400;
  }
}
</style>
