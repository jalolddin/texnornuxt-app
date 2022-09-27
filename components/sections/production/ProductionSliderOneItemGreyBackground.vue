<template>
  <div v-swiper:swiper="swiperOptions" :class="`slider ${page}` " @transitionStart="beforeSlide" @transitionEnd="afterSlide">
    <div class="swiper-wrapper">
      <div v-for="(slide, index) in slider" :key="index" class="swiper-slide slider__slide" :class="{ 'bg': slider.length === 1 }">
        <svg v-if="slider.length > 1" class="slider-slide__plate" width="648" height="544" viewBox="0 0 648 544" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M487.974 10.1833C485.578 4.0426 479.66 0 473.069 0H424H16C7.16344 0 0 7.16346 0 16V528C0 536.837 7.16343 544 16 544H632C640.837 544 648 536.837 648 528V98C648 89.1634 640.837 82 632 82H526.931C520.34 82 514.422 77.9574 512.026 71.8167L487.974 10.1833Z" fill="#F2F2F2"/>
        </svg>
        <div v-if="slider.length > 1" class="slider-slide__numbers">
          <span class="slider-slide-numbers__num current">{{ `${index + 1}`.padStart(2, '0') }}</span>
          <span class="slider-slide-numbers__num all">{{ `${slider.length}`.padStart(2, '0') }}</span>
        </div>
        <div class="slider-slide__img">
          <img :src="slide.image" :alt="slide.title">
        </div>
        <div class="slider-slide__bottom">
          <p class="slider-slide__name">{{ slide.title }}</p>
          <div class="slider-slide__btn">
            {{ $t(`production.${page}.slider-btn`) }}
            <span>{{ slide.title }}</span>
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L6.35355 6.35355L6.70711 6L6.35355 5.64645L6 6ZM2.35355 10.3536L6.35355 6.35355L5.64645 5.64645L1.64645 9.64645L2.35355 10.3536ZM6.35355 5.64645L2.35355 1.64645L1.64645 2.35355L5.64645 6.35355L6.35355 5.64645Z" fill="#1333BB"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div v-if="slider.length > 1" class="slider__navigations" ref="navigations">
      <button class="slider__arr slider__arr--prev">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
        </svg>
      </button>
      <button class="slider__arr slider__arr--next">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 20L16 12L8 4" stroke="currentColor"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductionSliderOneItemGreyBackground',
  props: {
    page: {
      type: String,
      default: ''
    },
    slider: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperOptions: {
        allowTouchMove: false,
        spaceBetween: 20,
        resistanceRatio: 0,
        navigation: {
          prevEl: '.slider__arr--prev',
          nextEl: '.slider__arr--next'
        }
      }
    }
  },
  methods: {
    beforeSlide () {
      this.$refs.navigations.style.opacity = '0'
    },
    afterSlide () {
      this.$refs.navigations.style.opacity = '1'
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  height: 100%;
  .swiper-wrapper {
    transition-delay: 0.1s;
  }
  &__slide {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3.2rem;
    border-radius: 1.6rem;
    overflow: hidden;
    @include w1199 {
      height: 48rem;
    }
    @include w767 {
      height: 32.3rem;
      padding: 2.4rem;
    }
    @include w359 {
      padding: 2.4rem 1rem;
    }
    &.bg {
      background-color: var(--text-200);
    }
  }
  &-slide {
    &__plate {
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
      min-width: 100%;
      height: 100%;
      @include w767 {
        height: auto;
      }
    }
    &__numbers {
      position: absolute;
      padding: 1.5rem 0;
      border: 0.1rem solid var(--text-300);
      border-radius: 3.2rem;
      display: flex;
    }
    &-numbers {
      &__num {
        line-height: 1.12;
        &.current {
          width: 5.6rem;
          padding-left: 2.4rem;
          border-right: 0.1rem solid var(--text-300);
          color: var(--text-900);
        }
        &.all {
          padding: 0 2.4rem 0 1.6rem;
          color: var(--text-300);
        }
      }
    }
    &__img {
      width: 100%;
      height: 32rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      mix-blend-mode: darken;
      @include w1199 {
        height: 28rem;
      }
      @include w767 {
        height: 14rem;
      }
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
    &__bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-top: 3.2rem;
      border-top: 0.1rem solid var(--text-300);
      @include w1023 {
        margin-top: 1.6rem;
      }
      @include w767 {
        margin-top: 0;
        padding-top: 2.4rem;
      }
    }
    &__name {
      margin: 0;
      font-weight: 450;
      font-size: 2.4rem;
      line-height: 1.33;
      letter-spacing: -0.03em;
      @include w767 {
        display: none;
      }
    }
    &__btn {
      display: flex;
      align-items: center;
      font-weight: 450;
      color: var(--primary-blue);
      letter-spacing: normal;
      line-height: 1.12;
      white-space: nowrap;
      cursor: pointer;
      @include hover {
        &:hover,
        &:focus {
          svg {
            transform: translateX(0.4rem);
          }
        }
      }
      @include active {
        &:active {
          svg {
            transform: translateX(0.4rem);
          }
        }
      }
      @include w767 {
        font-size: 1.4rem;
      }
      span {
        margin-left: 0.3rem;
        display: none;
        @include w767 {
          display: inline-block;
        }
      }
      svg {
        width: 1.2rem;
        height: auto;
        display: block;
        margin-left: 0.8rem;
        transition: transform .3s;
      }
    }
  }
  &__navigations {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    transition: opacity 0.2s;
  }
  &__arr {
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    }
    svg {
      width: 2.4rem;
    }
  }
}
</style>
