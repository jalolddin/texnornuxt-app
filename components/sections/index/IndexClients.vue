<template>
  <section class="section-margin clients">
    <h2 class="title clients__title">{{ $t('index.clients.title') }}</h2>
    <div class="clients__compensate">
      <div class="clients__wrap">
        <div v-swiper:swiper="swiperOptions" @transitionStart="beforeSlide" @transitionEnd="afterSlide">
          <div class="swiper-wrapper">
            <div class="swiper-slide clients__slide" v-for="(slide, index) in clients" :key="index">
              <nuxt-link class="clients-slide__link" :to="slide.link">
                <svg class="clients-slide__plate" width="872" height="480" viewBox="0 0 872 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M711.974 10.1833C709.578 4.0426 703.66 0 697.069 0H648H16C7.16344 0 0 7.16346 0 16V464C0 472.837 7.16345 480 16 480H856C864.837 480 872 472.837 872 464V98C872 89.1635 864.837 82 856 82H750.931C744.34 82 738.422 77.9574 736.026 71.8167L711.974 10.1833Z" fill="#F2F2F2"/>
                </svg>
                <div class="clients-slide__numbers">
                  <span class="clients-slide-numbers__num current">{{ `${index + 1}`.padStart(2, '0') }}</span>
                  <span class="clients-slide-numbers__num all">{{ `${clients.length}`.padStart(2, '0') }}</span>
                </div>
                <div class="clients-slide__img">
                  <img :src="slide.logo" :alt="slide.name">
                </div>
                <div class="clients-slide__bottom">
                  <p class="clients-slide__name">{{ slide.name }}</p>
                  <div class="clients-slide__btn">
                    {{ $t('index.clients.btn') }}
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 6L6.35355 6.35355L6.70711 6L6.35355 5.64645L6 6ZM2.35355 10.3536L6.35355 6.35355L5.64645 5.64645L1.64645 9.64645L2.35355 10.3536ZM6.35355 5.64645L2.35355 1.64645L1.64645 2.35355L5.64645 6.35355L6.35355 5.64645Z" fill="#1333BB"/>
                    </svg>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="clients__navigations" ref="navigations">
          <button class="clients__arr clients__arr--prev">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
            </svg>
          </button>
          <button class="clients__arr clients__arr--next">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20L16 12L8 4" stroke="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexClients',
  data () {
    return {
      clients: [
        {
          link: '#',
          name: 'Газпромнефть Шиппинг',
          logo: '/images/index/client1.png'
        },
        {
          link: '#',
          name: 'Доброфлот',
          logo: '/images/index/client2.png'
        },
        {
          link: '#',
          name: 'Газпромнефть Шиппинг',
          logo: '/images/index/client1.png'
        },
        {
          link: '#',
          name: 'Доброфлот',
          logo: '/images/index/client2.png'
        }
      ],
      swiperOptions: {
        allowTouchMove: false,
        spaceBetween: 24,
        resistanceRatio: 0,
        navigation: {
          prevEl: '.clients__arr--prev',
          nextEl: '.clients__arr--next'
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
.clients {
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
    @include w1023 {
      margin-bottom: 2rem;
    }
  }
  &__compensate {
    margin: 0 calc(-1 * var(--container-padding));
    padding: 0 var(--container-padding);
    overflow: hidden;
  }
  &__wrap {
    position: relative;
    width: 87.2rem;
    @include w1023 {
      width: 65.7rem;
    }
    @include w767 {
      width: 100%;
    }
  }
  .swiper-container {
    overflow: visible;
  }
  .swiper-wrapper {
    transition-delay: 0.1s;
  }
  &__slide {
    height: 48rem;
    @include w767 {
      height: 32.3rem;
    }
  }
  &-slide {
    &__link {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 3.2rem;
      border-radius: 1.6rem;
      overflow: hidden;
      @include w767 {
        padding: 2.4rem;
      }
      @include w359 {
        padding: 2.4rem 1rem;
      }
    }
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
      width: 24rem;
      height: 9.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      @include w767 {
        margin-left: 0.4rem;
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
