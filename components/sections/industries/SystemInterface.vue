<template>
  <section class="section-margin interface">
    <div class="interface__nav">
      <div class="interface__nav--title">Интерфейс системы</div>
    </div>
    <div class="interface__navigations">
      <div class="interface__navigations--title">{{ interfaces[activeSlide].title }}</div>
      <div class="interface__navigations--text">{{ interfaces[activeSlide].text }}</div>
      <div class="interface__navigations__group">
        <button class="btn btn-blue-filled interface-navigations__arr--next">
          Далее
        </button>
        <div class="interface__numbers">
          <span class="interface-numbers__num interface-numbers__num--current">{{ `${activeSlide + 1}`.padStart(2, '0') }}</span>
          <span class="interface-numbers__num interface-numbers__num--all">{{ `${interfaces.length}`.padStart(2, '0') }}</span>
        </div>
      </div>
    </div>
    <div v-swiper:swiper="swiperOptions" @slideChange="slideChange">
      <div class="swiper-wrapper">
        <div class="interface-elems__item swiper-slide" v-for="(slide, index) in interfaces" :key="index">
          <img class="interface-elems-item__img" :src="slide.image" :alt="slide.title">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndustriesSystemInterface',
  props: {
    interfaces: {
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
          nextEl: '.interface-navigations__arr--next'
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
.interface {
  margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: 0 var(--container-padding) 4rem;
  @include w767 {
    padding: 2.4rem var(--container-padding) 2rem;
  }
  display: block;
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
        font-size: 2.7rem;
      }
    }
  }
  &__navigations {
    display: block;
    position: absolute;
    right: 9rem;
    margin-top: 3.2rem;
    z-index: 2;
    background-color: var(--text-000);
    border: 0.1rem solid var(--text-300);
    border-radius: 1.6rem;
    width: 38.2rem;
    padding: 1.6rem;
    @include w1199 {
      right: 6rem;
    }
    @include w767 {
      position: relative;
      margin-top: 0;
      right: 0;
      width: 100%;
      top: 1rem;
    }
    &--title{
      font-size: 2.4rem;
      @include w1199 {
        font-size: 3rem;
      }
      @include w767 {
        font-size: 1.9rem;
      }
    }
    &--text{
      font-size: 1.6rem;
      color: var(--text-700);
    }
    &__group {
      margin-top: 3.2rem;
      display: flex;
      justify-content: space-between;
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
        padding: 0 3.2rem;
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
    max-width: 100vw;
  }
  &-elems__item {
    border-radius: 1.6rem;
    width: 100vw;
    @include w767 {
      width: 35.8rem;
    }
  }
  &-elems-item__img {
    width: 100vw;
  }
}
</style>
