<template>
  <div class="section-margin slider">
    <div class="slider__compensate">
      <h2 class="title slider__title">{{ $t('production.other-links.title') }}</h2>
      <div v-swiper:swiper="swiperOptions" class="slider">
        <div class="swiper-wrapper">
          <template v-for="(slide, index) in slider">
            <div v-if="!$route.path.includes(`/${$i18n.locale}/${slide.link}`)" :key="index" class="swiper-slide slider__slide">
              <nuxt-link :to="`/${$i18n.locale}/${slide.link}`" class="slider-slide__link">
                <img class="slider-slide__img" :src="slide.image" :alt="$t(`production.other-links.items[${index}]`)">
                <h3 class="slider-slide__name">
                  {{ $t(`production.other-links.items[${index}]`) }}
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3346 9.99935L14.0417 9.29224L14.7488 9.99935L14.0417 10.7065L13.3346 9.99935ZM5.96086 15.9589L12.6275 9.29224L14.0417 10.7065L7.37508 17.3731L5.96086 15.9589ZM12.6275 10.7065L5.96086 4.03979L7.37508 2.62558L14.0417 9.29224L12.6275 10.7065Z" fill="currentColor"/>
                  </svg>
                </h3>
              </nuxt-link>
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
      slider: [
        {
          image: '/images/production/others4.jpg',
          link: 'production/production'
        },
        {
          image: '/images/production/others1.jpg',
          link: 'production/design'
        },
        {
          image: '/images/production/others2.jpg',
          link: 'production/installation '
        },
        {
          image: '/images/production/others3.jpg',
          link: 'production/cost-control'
        },
        {
          image: '/images/production/others4.jpg',
          link: 'production/bunker-control'
        },
        {
          image: '/images/production/others1.jpg',
          link: 'production/inventory-measurement'
        },
        {
          image: '/images/production/others2.jpg',
          link: 'production/refrigerator-control'
        },
        {
          image: '/images/production/others3.jpg',
          link: 'production/crab-control'
        }
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        resistanceRatio: 0,
        navigation: {
          prevEl: '.slider__arr--prev',
          nextEl: '.slider__arr--next'
        }
      }
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
  &__slide {
    width: 28.8rem;
    height: 37.4rem;
  }
  &-slide {
    &__link {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
      padding: 1.6rem;
      border-radius: 1.6rem;
      overflow: hidden;
      @include hover {
        &:hover,
        &:focus {
          .slider-slide__name {
            color: var(--primary-blue);
          }
        }
        &:active {
          .slider-slide__name {
            color: var(--primary-shadow);
          }
        }
      }
      @include active {
        &:active {
          .slider-slide__name {
            color: var(--primary-shadow);
          }
        }
      }
    }
    &__img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__name {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      padding: 1.6rem;
      background-color: var(--text-000);
      border-radius: 0.8rem;
      font-weight: 450;
      font-size: 1.6rem;
      line-height: 1.12;
      color: var(--text-1000);
      white-space: nowrap;
      transition: color 0.2s;
      svg {
        width: 2rem;
      }
    }
  }
  &__navigations {
    position: absolute;
    top: -9.2rem;
    right: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    @include w767 {
      right: auto;
      left: 0;
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
