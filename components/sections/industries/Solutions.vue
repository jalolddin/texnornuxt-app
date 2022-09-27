<!-- eslint-disable vue/no-template-shadow -->
<template>
  <section class="section-margin solutions">
    <div class="solutions__nav">
      <div class="solutions__nav--title">Внедренные решения</div>
      <div class="solutions__numbers">
        <span class="solutions-numbers__num solutions-numbers__num--current">{{ `${activeSlide + 1}`.padStart(2, '0') }}</span>
        <span class="solutions-numbers__num solutions-numbers__num--all">{{ `${slides.length}`.padStart(2, '0') }}</span>
      </div>
      <div class="solutions__navigations">
        <button class="solutions-navigations__arr solutions-navigations__arr--prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
          </svg>
        </button>
        <button class="solutions-navigations__arr solutions-navigations__arr--next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 20L16 12L8 4" stroke="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
    <div v-swiper:swiper="swiperOptions" @slideChange="slideChange">
      <div class="swiper-wrapper">
        <div class="swiper-slide solutions__slide" v-for="(slide, index) in slides" :key="index">
          <!--<div class="solutions-slide__leftpart">
            <h2 class="title">{{ slide.title }}</h2>
            <div class="solutions-slide__summary">
              <div class="solutions-slide__summary__item" v-for="(item, index) in slide.summary" :key="item.title">
                <h4 @click="accordeonItemClick(index + 's' + activeSlide)">{{ item.title }}</h4>
                <span class="indicator indicator-close">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 9V1M9 9H17M9 9V17M9 9H1" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </span>
                <span class="indicator indicator-open hidden">
                  <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1H9H1" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </span>
                <div class="solutions-slide-summary-item__content hidden" :data-acc-id="index + 's' + activeSlide">
                  <div class="item-content__elem" v-for="detail in item.details" :key="detail.title">
                    <div class="elem__title">{{ detail.title }}</div>
                    <div class="elem__desc">{{ detail.desc }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>-->
          <div class="solutions-slide__leftpart">
            <h2 class="title">{{ slide.title }}</h2>
            <div class="solutions-slide__summary">
              <div class="solutions-slide__summary__item" v-for="(item, index) in slide.summary" :key="item.title">
                <h4 @click="accordeonItemClick()" class="h4__click">{{ item.title }}</h4>
                <span class="indicator indicator-close">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 9V1M9 9H17M9 9V17M9 9H1" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </span>
                <span class="indicator indicator-open hidden">
                  <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1H9H1" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </span>
                <div class="solutions-slide-summary-item__content hidden" :data-acc-id="index">
                  <div class="item-content__elem" v-for="detail in item.details" :key="detail.title">
                    <div class="elem__title">{{ detail.title }}</div>
                    <div class="elem__desc">{{ detail.desc }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="solutions-slide__rightpart">
            <img class="solutions-slide__img" :src="slide.image" :alt="slide.title">
            <ul class="solutions__bot">
              <li class="solutions-bot__item" v-for="(item, index) in slide.profits" :key="index">
                <h3 class="solutions-bot__title">{{ item.title }} <small>{{ item.sub }}</small></h3>
                <p class="solutions-bot__text">{{ item.text }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndustriesSolutions',
  props: {
    slides: {
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
          prevEl: '.solutions-navigations__arr--prev',
          nextEl: '.solutions-navigations__arr--next'
        }
      }
    }
  },
  methods: {
    slideChange () {
      this.activeSlide = this.swiper.activeIndex
    },
    /* accordeonItemClick (accIndex) {
      const accordeonInfoElement = document.querySelectorAll('[data-acc-id="' + accIndex + '"]')[0]
      const slide = accordeonInfoElement.parentNode.parentNode.parentNode.parentNode
      if ((accordeonInfoElement.classList.contains('block')) && (slide.classList.contains('swiper-slide-active'))) {
        accordeonInfoElement.classList.remove('block')
        accordeonInfoElement.classList.add('hidden')
        accordeonInfoElement.parentNode.querySelector('.indicator-close').classList.remove('hidden')
        accordeonInfoElement.parentNode.querySelector('.indicator-open').classList.add('hidden')
      } else {
        accordeonInfoElement.classList.remove('hidden')
        accordeonInfoElement.classList.add('block')
        accordeonInfoElement.parentNode.querySelector('.indicator-close').classList.add('hidden')
        accordeonInfoElement.parentNode.querySelector('.indicator-open').classList.remove('hidden')
      }
    } */
    accordeonItemClick () {
      document.addEventListener('click', function (evt) {
        const accordeonParentElem = evt.target.closest('.solutions-slide__summary__item')
        if (accordeonParentElem) { // если клик был по аккордеону
          if (accordeonParentElem.querySelector('.solutions-slide-summary-item__content').classList.contains('hidden')) {
            accordeonParentElem.querySelector('.indicator-close').classList.add('hidden')
            accordeonParentElem.querySelector('.indicator-open').classList.remove('hidden')
            accordeonParentElem.querySelector('.solutions-slide-summary-item__content').classList.remove('hidden')
            accordeonParentElem.querySelector('.solutions-slide-summary-item__content').classList.add('block')
          } else {
            accordeonParentElem.querySelector('.indicator-close').classList.remove('hidden')
            accordeonParentElem.querySelector('.indicator-open').classList.add('hidden')
            accordeonParentElem.querySelector('.solutions-slide-summary-item__content').classList.add('hidden')
            accordeonParentElem.querySelector('.solutions-slide-summary-item__content').classList.remove('block')
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
.solutions {
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
    padding: 3.2rem 0;
    @include w1199 {
      width: 100%;
    }
    @include w767 {
      position: static;
      width: 100%;
      margin-top: 0.8rem;
      padding: 1.6rem 0;
      background-color: var(--text-000);
    }
    &--title {
      padding: 1.4rem;
      border: 0.1rem solid var(--text-300);
      border-radius: 3.2rem;
      display: flex;
      margin-right: 3.2rem;
      @include w1199 {
        display: none;
      }
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
    margin-left: auto;
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
  &__slide {
    background-color: var(--text-200);
    height: 70.0rem;
    border-radius: 1.6rem;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 100vw;
    @include w1199 {
      height: auto;
      grid-template-columns: 1fr;
    }
    @include w767 {
      height: auto;
      grid-template-columns: 1fr;
    }
  }
  &-slide {
    &__leftpart {
      padding: 3.2rem;
      @include w767 {
        padding: 1.6rem;
        width: 92vw;
      }
    }
    &__summary {
      height: 52rem;
      overflow-y: auto;
      overflow-x: hidden;
      @include w1199 {
        height: auto;
      }
      @include w767 {
        width: 84vw;
        height: auto;
      }
    }
    &__summary__item {
      border-top: 0.1rem solid var(--text-300);
      display: grid;
      grid-template-columns: 11fr 1fr;
      cursor: pointer;
      @include w767 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .indicator {
        margin-block-start: 1.33em;
        margin-block-end: 1.33em;
      }
    }
    &__summary__item h4 {
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.2rem;
    }
    &-summary-item__content {
      border: 0.1rem solid var(--text-300);
      border-radius: 1.6rem;
      padding: 0 3.2rem;
      @include w767 {
        padding: 1.6rem;
        width: 84vw;
      }
      .item-content__elem{
        padding: 1.6rem;
        border-top: 0.1rem solid var(--text-300);
        display: grid;
        grid-template-columns: 1fr 1fr;
        @include w767 {
        grid-template-columns: 1fr;
        }
        &:first-of-type {
          border-top: none;
        }
        .elem__title {
          color: var(--text-1000);
        }
        .elem__desc {
          color: var(--text-700);
          font-size: 1.4rem;
        }
      }
    }
    &__rightpart {
      padding: 3.2rem;
      @include w767 {
        padding: 1.6rem;
      }
    }
    &__img {
      top: 0;
      left: 0;
      z-index: -1;
      width: 88rem;
      height: 50rem;
      object-fit: cover;
      border-radius: 1.6rem;
      @include w1199 {
        width: 89rem;
        height: auto;
      }
      @include w767 {
        width: 32.5rem;
        height: auto;
      }
    }
  }
  &__bot {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.8rem;
    margin-top: 0.8rem;
    padding-left: 0;
    list-style: none;
    overflow: hidden;
    height: 12.8rem;
    @include w1199 {
        height: 16.8rem;
      }
    @include w767 {
      gap: 0.6rem;
      grid-template-columns: auto;
      height: auto;
    }
  }
  &-bot {
    &__item {
      display: grid;
      justify-content: space-between;
      align-items: start;
      gap: 0.6rem;
      padding: 1.6rem;
      background-color: var(--text-000);
      border-radius: 1.6rem;
      @include w1199 {
        padding: 1.8rem;
      }
      @include w359 {
        padding: 1.6rem;
      }
      &:last-child {
        background-color: var(--primary-blue);
      }
      &:last-child h3 {
        color: var(--text-000);
      }
      &:last-child p {
        color: var(--text-000);
      }
    }
    &__title {
      font-weight: 450;
      font-size: 4rem;
      line-height: 1.2;
      letter-spacing: -0.03em;
      color: var(--text-1000);
      margin-block-start: 1rem;
      margin-block-end: 1rem;
      small {
        font-size: 1.6rem;
      }
      @include w1199 {
        font-size: 2.4rem;
        line-height: 1.33;
      }
    }
    &__text {
      margin-top: 0;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.12;
      color: var(--text-900);
      letter-spacing: normal;
      @include w1199 {
        margin-bottom: 2rem;
        font-size: 1.4rem;
      }
      @include w767 {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
