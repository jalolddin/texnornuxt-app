<template>
  <section class="section-margin loss">
    <div class="loss__nav">
      <div class="loss__nav--title">Владельцы теряют<br><span class="red">до 1 500 000 рублей в месяц</span></div>
      <div class="loss__navigations">
        <button class="loss-navigations__arr loss-navigations__arr--prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
          </svg>
        </button>
        <button class="loss-navigations__arr loss-navigations__arr--next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 20L16 12L8 4" stroke="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
    <div v-swiper:swiper="swiperOptions" @slideChange="slideChange">
      <div class="swiper-wrapper">
        <div class="loss-elems__item swiper-slide" v-for="(item, index) in losses" :key="index">
          <div class="loss-elems__item-top">
            <h3 class="loss-elems-item__title">{{ item.title }}</h3>
            <p class="loss-elems-item__text">{{ item.text }}</p>
          </div>
          <div class="loss-elems__item-bot">
            <p>Потери</p>
            <h3 class="loss-elems-item__title">{{ item.loss }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndustriesLoss',
  props: {
    losses: {
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
          prevEl: '.loss-navigations__arr--prev',
          nextEl: '.loss-navigations__arr--next'
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
.loss {
  background-color: var(--text-200);
  margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: 0 var(--container-padding) 4rem;
  @include w767 {
    padding: 2.4rem var(--container-padding) 2rem;
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
  &__elems {
    /* display: flex; */
    gap: 1.6rem;
  }
  &-elems__item {
    padding: 0 1.6rem;
    display: block;
    border-radius: 1.6rem;
    background-color: var(--text-000);
    max-width: 32.2rem;
    width: 32.2rem;
    height: 32.2rem;
    @include w767 {
        max-width: 35.8rem;
      }
    &-top {
      padding: 1.6rem;
      height: 60%;
    }
    &-top p {
      color: var(--text-700);
    }
    &-bot {
      padding: 1.6rem;
      border-top: 0.1rem solid var(--text-300);
    }
    &-bot p {
      color: var(--text-700);
    }
  }
  &-elems-item__title {
    color: var(--text-1000);
    font-weight: 400;
  }
}
</style>
