<template>
  <section class="section-margin partners">
    <h2 class="title partners__title">{{ $t('index.partners') }}</h2>
    <ul class="partners__list">
      <li v-for="(partner, index) in partners" :key="index" class="partners__item">
        <div class="partners-item__img">
          <img :src="partner.logo" alt="partner">
        </div>
      </li>
      <li v-for="index in emptyItems" :key="index" class="partners__item"/>
    </ul>
  </section>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  name: 'IndexPartners',
  data () {
    return {
      winW: null,
      partners: [
        { logo: '/images/index/partner1.png' },
        { logo: '/images/index/partner2.png' },
        { logo: '/images/index/partner3.png' },
        { logo: '/images/index/partner4.png' },
        { logo: '/images/index/partner5.png' },
        { logo: '/images/index/partner6.png' }
      ]
    }
  },
  computed: {
    emptyItems () {
      if (this.winW >= 1024) {
        return 4 - (this.partners.length % 4)
      } else if (this.winW < 1024 && this.winW >= 768) {
        return this.partners.length % 2
      } else {
        return 0
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.winW = window.innerWidth
      this.$nuxt.$on('win-resize', throttle(({ winW }) => {
        this.winW = winW
      }, 300))
    })
  }
}
</script>

<style lang="scss" scoped>
.partners {
  padding-top: 4rem;
  @include w1023 {
    padding-top: 0;
    margin-bottom: 4rem;
  }
  @include w767 {
    margin-bottom: 2.7rem;
  }
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
    @include w767 {
      margin-bottom: 2rem;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-left: 0;
    list-style: none;
    @include w1023 {
      grid-template-columns: repeat(2, 1fr);
    }
    @include w767 {
      grid-template-columns: auto;
    }
  }
  &__item {
    height: 16.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 0.4rem solid var(--text-200);
    border-bottom: 0.4rem solid var(--text-200);
    box-sizing: content-box;
    @include w767 {
      border-left: none;
    }
    &:nth-last-child(-n+4) {
      @media screen and (min-width: 1024px) {
        border-bottom: none;
      }
    }
    &:nth-child(4n+1) {
      @media screen and (min-width: 1024px) {
        border-left: none;
      }
    }
    &:nth-last-child(-n+2) {
      @include w1023 {
        @media screen and (min-width: 768px) {
          border-bottom: none;
        }
      }
    }
    &:nth-child(2n+1) {
      @include w1023 {
        @media screen and (min-width: 768px) {
          border-left: none;
        }
      }
    }
    &:last-child {
      @include w767 {
        border-bottom: none;
      }
    }
  }
  &-item {
    &__img {
      width: 24rem;
      height: 8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
