<template>
  <section class="section-margin banner">
    <h1 class="visually-hidden">{{ $t('site') }}</h1>
    <div class="banner__top">
      <div v-swiper:swiper="swiperOptions" @slideChange="slideChange">
        <div class="swiper-wrapper">
          <div class="swiper-slide banner__slide" v-for="(slide, index) in slides" :key="index">
            <img class="banner-slide__img" :src="slide.image" :alt="slide.title">
            <div class="banner-slide__content">
              <svg class="banner-slide__plate" viewBox="0 0 1288 334" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M2.62368e-06 306.292L0 0L1272 0C1280.84 0 1288 7.16344 1288 16V32L596.379 32C583.323 32 572.038 41.1143 569.291 53.8781L513.709 312.122C510.962 324.886 499.677 334 486.621 334L27.7083 334C12.4054 334 2.75476e-06 321.595 2.62368e-06 306.292Z" fill="#1333BB"/>
              </svg>
              <h2 class="title banner-slide__title">{{ slide.title }}</h2>
              <p v-if="slide.text" class="banner-slide__text">{{ slide.text }}</p>
              <button v-if="slide.btn" class="btn btn-white-filled banner-slide__btn">{{ slide.btn }}</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isSlider" class="banner__nav">
        <div class="banner__numbers">
          <span class="banner-numbers__num banner-numbers__num--current">{{ `${activeSlide + 1}`.padStart(2, '0') }}</span>
          <span class="banner-numbers__num banner-numbers__num--all">{{ `${4}`.padStart(2, '0') }}</span>
        </div>
        <div class="banner__navigations">
          <button class="banner-navigations__arr banner-navigations__arr--prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
            </svg>
          </button>
          <button class="banner-navigations__arr banner-navigations__arr--next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20L16 12L8 4" stroke="currentColor"/>
            </svg>
          </button>
        </div>
        <svg class="banner-nav__plate" width="529" height="114" viewBox="0 0 529 114" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M485.608 0L27.7083 0C12.4054 0 0 12.4054 0 27.7083L0 114L528.398 114L512.924 23.0602C510.658 9.74236 499.118 0 485.608 0Z" fill="white"/>
        </svg>
      </div>
    </div>
    <ul class="banner__bot">
      <li class="banner-bot__item" v-for="(item, index) in $t('general.achievements')" :key="index">
        <h3 class="banner-bot__title">{{ item.title }}</h3>
        <p class="banner-bot__text">{{ item.text }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'GeneralBannerWithBlueBlock',
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    isSlider: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeSlide: 0,
      swiperOptions: {
        spaceBetween: 20,
        resistanceRatio: 0,
        navigation: {
          prevEl: '.banner-navigations__arr--prev',
          nextEl: '.banner-navigations__arr--next'
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
.banner {
  margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: 15.8rem var(--container-padding) 4rem;
  background-color: var(--text-200);
  @include w767 {
    padding: 8.4rem var(--container-padding) 2rem;
  }
  &__top {
    position: relative;
    border-radius: 1.6rem 1.6rem 0 0;
    overflow: hidden;
  }
  &__slide {
    height: 48rem;
    border-radius: 1.6rem 1.6rem 0 0;
    overflow: hidden;
    @include w767 {
      height: 45.6rem;
    }
  }
  &-slide {
    &__img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__content {
      position: relative;
      margin-left: 3.2rem;
      padding: 3.2rem;
      @include w1199 {
        padding: 3.2rem 3.2rem 4.8rem;
        border-radius: 0 0 0 3.2rem;
        overflow: hidden;
      }
      @include w767 {
        position: static;
        margin-left: 0;
        padding: 3.2rem 1.6rem;
        border-radius: 1.6rem;
        background-color: var(--primary-blue);
      }
    }
    &__plate {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      min-width: 100%;
      height: 100%;
      @include w1199 {
        left: -8.1rem;
      }
      @include w767 {
        display: none;
      }
    }
    &__title {
      max-width: 48rem;
      display: block;
      margin: 0;
      color: var(--text-000);
      @include w767 {
        max-width: none;
      }
    }
    &__text {
      max-width: 47.8rem;
      display: block;
      margin-top: 2rem;
      margin-bottom: 0;
      font-weight: 400;
      line-height: 1.5;
      color: var(--primary-100);
      letter-spacing: -0.02em;
      @include w767 {
        max-width: 90%;
        margin-top: 1.6rem;
      }
    }
    &__btn {
      margin-top: 5.6rem;
      padding: 1.6rem 3.2rem;
      @include w767 {
        position: absolute;
        bottom: 1.6rem;
        left: 1.6rem;
        width: calc(100% - 3.2rem);
        margin: 0;
        padding: 1.6rem 0;
      }
    }
  }
  &__nav {
    position: absolute;
    bottom: 0;
    left: 3.2rem;
    z-index: 5;
    width: 52.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.2rem 5rem 3.2rem 3.2rem;
    @include w1199 {
      width: 44.8rem;
    }
    @include w767 {
      position: static;
      width: 100%;
      margin-top: 0.8rem;
      padding: 1.6rem;
      background-color: var(--text-000);
    }
  }
  &-nav {
    &__plate {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      @include w767 {
        display: none;
      }
    }
  }
  &__numbers {
    padding: 1.5rem 0;
    border: 0.1rem solid var(--text-300);
    border-radius: 3.2rem;
    display: flex;
  }
  &-numbers {
    &__num {
      line-height: 1.12;
      &--current {
        width: 5.6rem;
        padding-left: 2.4rem;
        border-right: 0.1rem solid var(--text-300);
        color: var(--text-900);
      }
      &--all {
        padding: 0 2.4rem 0 1.6rem;
        color: var(--text-300);
      }
    }
  }
  &__navigations {
    display: flex;
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
  &__bot {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.8rem;
    margin-top: 0.8rem;
    padding-left: 0;
    list-style: none;
    border-radius: 0 0 1.6rem 1.6rem;
    overflow: hidden;
    @include w767 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &-bot {
    &__item {
      flex: 1;
      padding: 3.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      background-color: var(--text-000);
      @include w1199 {
        padding: 2.4rem;
      }
      @include w359 {
        padding: 1.8rem;
      }
    }
    &__title {
      margin-top: 0;
      margin-bottom: 3.2rem;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.12;
      color: var(--text-900);
      letter-spacing: normal;
      @include w1199 {
        margin-bottom: 2rem;
      }
      @include w359 {
        font-size: 1.4rem;
      }
    }
    &__text {
      font-weight: 450;
      font-size: 4rem;
      line-height: 1.2;
      letter-spacing: -0.03em;
      color: var(--primary-blue);
      @include w1199 {
        font-size: 2.4rem;
        line-height: 1.33;
      }
    }
  }
}
</style>
