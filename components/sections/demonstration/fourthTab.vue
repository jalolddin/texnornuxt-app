<template>
  <div class="section-margin slider">
    <div class="slider__compensate">
      <div class="tab__pagination">
        <div class="solutions__numbers">
          <span class="solutions-numbers__num solutions-numbers__num--current">{{ `${activeSlide + 1}`.padStart(2, '0') }}</span>
          <span class="solutions-numbers__num solutions-numbers__num--all">{{ `${slider.length}`.padStart(2, '0') }}</span>
        </div>
        <div class="pagination__select">
          <span>Выберите объект для демонстрации</span>
        </div>
      </div>
      <div @slideChange="slideChange" v-swiper:swiper="swiperOptions" class="slider">
        <div class="swiper-wrapper">
          <template v-for="(slide, index) in slider">
            <div v-if="!$route.path.includes(`/${$i18n.locale}/${slide.link}`)" :key="index" class="swiper-slide slider__slide">
              <input class="slide_img_check" type="checkbox">
              <img class="slider-slide__img" :src="slide.image" :alt="$t(`production.other-links.items[${index}]`)">
              <div class="slider__info">
                <span class="slider__title">{{ slide.title }}</span> <br>
                <span class="slider__model">{{ slide.model }}</span>
              </div>
            </div>
          </template>
        </div>
        <div class="slider__navigations" ref="navigations">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductionOthersLinks',
  data () {
    return {
      activeSlide: 0,
      slider: [
        {
          image: '/images/demonstration/buroviy.jpg',
          title: 'Антиас',
          model: 'Проект RSD59'
        },
        {
          image: '/images/demonstration/buroviy.jpg',
          title: 'Антиас',
          model: 'Проект RSD59'
        },
        {
          image: '/images/demonstration/buroviy.jpg',
          title: 'Антиас',
          model: 'Проект RSD59'
        },
        {
          image: '/images/demonstration/buroviy.jpg',
          title: 'Антиас',
          model: 'Проект RSD59'
        },
        {
          image: '/images/demonstration/buroviy.jpg',
          title: 'Антиас',
          model: 'Проект RSD59'
        },
        {
          image: '/images/demonstration/buroviy.jpg',
          title: 'Антиас',
          model: 'Проект RSD59'
        },
        {
          image: '/images/demonstration/buroviy.jpg',
          title: 'Антиас',
          model: 'Проект RSD59'
        },
        {
          image: '/images/demonstration/buroviy.jpg',
          title: 'Антиас',
          model: 'Проект RSD59'
        }
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        resistanceRatio: 0,
        loop: true,
        navigation: {
          prevEl: '.slider__arr--prev',
          nextEl: '.slider__arr--next'
        }
      }
    }
  },
  methods: {
    slideChange () {
      this.activeSlide = this.swiper.realIndex
    }
  }
}
</script>
<style lang="scss" scoped>
  .slider {
    &__title {
      max-width: 40rem;
      margin-top: 0;
      margin-bottom: 4rem;
      @include w1199 {
        max-width: 32rem;
      }
      @include w767 {
        max-width: 25rem;
        margin-bottom: 10.6rem;
      }
    }
    &__compensate {
      margin: 0 calc(-1 * var(--container-padding));
      padding: 0 var(--container-padding);
      overflow: hidden;
    }
    .swiper-container {
      overflow: visible;
    }
    .tab__pagination {
  display: flex;
  display: 90%;
 margin-top: 8rem;
 margin-bottom: 2.8%;
 max-width: 100%;
 @include min490{
  display: flex;
  flex-direction: column-reverse;
gap: 15px;
width: 32%;
}
@include w615{
display: flex;
flex-direction: column-reverse;
gap: 15px;
width: 32%;
margin-top: 8rem;
}
@include w920{
  margin-top: 8rem;
}
.solutions__numbers{
@include w615{
  width: 120px;
}
}
.pagination__select{
 margin-left: 3%;
  width: 324px;
  font-size: 16px;
  border-radius: 20px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #F2F2F2;
  margin-top: 2px;
}
 }
    &__slide {
      width: 312px;
      height: 32.4rem;
      border: 1px solid #F2F2F2;
      border-radius: 16px;
      outline: none;
      padding: 0;
      cursor: pointer;
      @include w580{
       margin-left: 0.4rem;
       margin-top: 1rem;
      }
      .slide_img_check{
        position: absolute;
        top: 2rem;
        left: 2rem;
        width: 20px;
        height: 20px;
        border: none;
        outline: none;
      }
      .slider-slide__img{
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
        height: 70%;
        width: 100%;
      }
      .slider__info{
        margin: 5%;
      }
      &__title{
        font-weight: 550;
        font-size: 25px;
      }
      .slider__model{
        font-size: 15px;
        color: #4A4A4A;
      }
    }
    &__navigations {
      position: absolute;
      top: -10rem;
      padding-top: 0.5rem;
      right: 0;
      z-index: 5;
      display: flex;
      max-width: 100%;
      align-items: center;
      @include w1440{
        margin-top: 2rem;
        margin-right: 0;
      }
      @include w920{
        margin-right: 0;
        padding-top: 0.5rem;
      }
      @include w767 {
      margin-right: 0;
      padding-top: 0.5;
      }
      @include w699{
        padding-top: 1.2rem;
      }
      @include w490{
     margin-right: 0;
     padding-top: 1.8rem;
      }
      @include min490{
        padding-top: -1rem;
      }
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
