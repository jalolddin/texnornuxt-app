<template>
  <div class="header__dropdown">
    <ul class="header-dropdown__directions">
      <li v-for="(item, index) in dropdown" :key="index">
        <nuxt-link v-if="!item.inside" class="header-dropdown__direction" :to="`/${$i18n.locale}/${item.link}`">
          {{ $t(`header.dropdownMenu[${index}].title`) }}
        </nuxt-link>
        <button v-else :class="['header-dropdown__direction', { 'active': index === activeIndex }]" @click="changeActiveIndex(index)">
          {{ $t(`header.dropdownMenu[${index}].title`) }}
          <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.71436 5L6.71436 9L10.7144 5" stroke="currentColor"/>
          </svg>
        </button>
        <ul v-if="item.inside && index === activeIndex && winW < 768" class="header-dropdown__submenu">
          <li v-for="(subItem, subIndex) in item.inside" :key="$t(`header.dropdownMenu[${activeIndex}].inside[${subIndex}]`)" class="header-dropdown__subitem">
            <nuxt-link :to="`/${$i18n.locale}/${subItem.link}`" class="header-dropdown__sublink">
              {{ $t(`header.dropdownMenu[${activeIndex}].inside[${subIndex}]`) }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
    <ul v-if="winW > 767" class="header-dropdown__links">
      <li v-for="(item, index) in dropdown[activeIndex].inside" :key="index">
        <nuxt-link class="header-dropdown__link" :to="`/${$i18n.locale}/${item.link}`">
          {{ $t(`header.dropdownMenu[${activeIndex}].inside[${index}]`) }}
        </nuxt-link>
      </li>
    </ul>
    <div class="header-dropdown__contacts">
      <a class="header-dropdown__contact" href="tel:8 800 250-00-16">8 800 250-00-16</a>
      <a class="header-dropdown__contact" href="mailto:info@skrt.biz">info@skrt.biz</a>
      <CommonSocials/>
    </div>
    <ul class="header-dropdown__squares">
      <li v-for="(square, index) in squares" :key="index">
        <nuxt-link :to="`/${$i18n.locale}/${square.link}`" class="header-dropdown__square">
          <img src="/images/square.png" :alt="$t(`header.squares[${index}].title`)">
          <span class="header-dropdown-square__title">{{ $t(`header.squares[${index}].title`) }}</span>
          <span class="header-dropdown-square__bot">
            {{ $t(`header.squares[${index}].bot`) }}
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L6.35355 6.35355L6.70711 6L6.35355 5.64645L6 6ZM2.35355 10.3536L6.35355 6.35355L5.64645 5.64645L1.64645 9.64645L2.35355 10.3536ZM6.35355 5.64645L2.35355 1.64645L1.64645 2.35355L5.64645 6.35355L6.35355 5.64645Z" fill="white"/>
            </svg>
          </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  name: 'HeaderDropdown',
  data () {
    return {
      winW: null,
      activeIndex: 0,
      dropdown: [
        {
          inside: [
            { link: 'production/production/sensors' },
            { link: '#' },
            { link: '#' },
            { link: '#' },
            { link: '#' },
            { link: '#' },
            { link: '#' },
            { link: '#' }
          ]
        },
        {
          inside: [
            { link: '#' }
          ]
        },
        {
          inside: [
            { link: '#' }
          ]
        },
        {
          inside: [
            { link: '#' }
          ]
        },
        { link: '#' },
        { link: '#' },
        { link: '#' }
      ],
      squares: [
        { link: '#' },
        { link: '#' }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.winW = window.innerWidth
      this.$nuxt.$on('win-resize', throttle(({ winW }) => {
        if (winW > 767 && this.activeIndex === null) {
          this.activeIndex = 0
        }
        this.winW = winW
      }, 300))
    })
  },
  methods: {
    changeActiveIndex (index) {
      if (window.innerWidth < 768 && this.activeIndex === index) {
        this.activeIndex = null
      } else {
        this.activeIndex = index
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  &__dropdown {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: -1;
    width: 100%;
    max-height: calc(100vh - 24rem);
    border-radius: 0 0 1.6rem 1.6rem;
    background-color: var(--text-000);
    display: grid;
    grid-template-columns: 24.3% 24.3% 1fr;
    grid-template-rows: auto 1fr;
    overflow-y: auto;
    @include w1366 {
      grid-template-columns: 21% 21% 1fr;
    }
    @include w1199 {
      grid-template-columns: 1fr 1fr;
    }
    @include w767 {
      grid-template-columns: 100%;
      max-height: calc(100vh - 10.5rem);
    }
    &::-webkit-scrollbar {
      width: 0.6rem;
    }
    &::-webkit-scrollbar-button {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary-blue);
      border-radius: 0.6rem;
    }
    &::-webkit-scrollbar-track {
      background: var(--text-000);
    }
  }
  &-dropdown {
    &__directions,
    &__links {
      grid-row: 1 / 3;
      padding-left: 0;
      list-style: none;
      border-right: 0.1rem solid var(--text-200);
      @include w1199 {
        grid-row: auto;
        border-bottom: 0.1rem solid var(--text-200);
      }
      @include w767 {
        border-right: none;
      }
    }
    &__directions {
      > li + li {
        border-top: 0.1rem solid var(--text-200);
      }
    }
    &__links {
      padding: 3.2rem;
      @include w1199 {
        border-right: none;
      }
      li + li {
        margin-top: 3.2rem;
      }
    }
    &__direction {
      width: 100%;
      height: 6.4rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 3.2rem;
      background: none;
      border: none;
      font-weight: 450;
      letter-spacing: -0.03em;
      line-height: 1.12;
      text-align: left;
      @include hover {
        &:hover:not(.active) {
          color: var(--primary-blue);
          svg {
            transform: rotate(-90deg) translateY(1.5rem);
            @include w767 {
              transform: translateY(-0.2rem);
            }
          }
        }
      }
      @include active {
        &:active:not(.active) {
          color: var(--primary-blue);
          svg {
            transform: rotate(-90deg) translateY(1.5rem);
            @include w767 {
              transform: translateY(-0.2rem);
            }
          }
        }
      }
      @include w767 {
        padding: 0 2rem;
      }
      svg {
        margin-left: auto;
        width: 2.4rem;
        transform: rotate(-90deg);
        transition: transform 0.2s;
        @include w767 {
          transform: translateY(-0.2rem);
        }
      }
      &.active {
        color: var(--text-000);
        background-color: var(--primary-blue);
        svg {
          @include w767 {
            transform: translateY(0.2rem) scale(-1);
          }
        }
      }
    }
    &__submenu {
      padding: 2.4rem 2rem;
      list-style: none;
    }
    &__subitem {
      & + & {
        margin-top: 2.4rem;
      }
    }
    &__sublink {
      width: fit-content;
      display: flex;
      font-weight: 450;
      color: var(--text-700);
      @include hover {
        &:hover,
        &:focus {
          color: var(--primary-blue);
        }
        &:active {
          color: var(--primary-shadow);
        }
      }
      @include active {
        &:active {
          color: var(--primary-shadow);
        }
      }
    }
    &__link {
      width: fit-content;
      display: flex;
      font-weight: 450;
      line-height: 1.12;
      letter-spacing: -0.03em;
      @include hover {
        &:hover,
        &:focus {
          color: var(--primary-blue);
        }
        &:active {
          color: var(--primary-shadow);
        }
      }
      @include active {
        &:active {
          color: var(--primary-shadow);
        }
      }
    }
    &__contacts {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 3.2rem;
      padding: 3.2rem 0;
      border-bottom: 0.1rem solid var(--text-200);
      @include w1199 {
        grid-column: 1 / 3;
      }
      @include w767 {
        grid-column: auto;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 2rem;
        padding: 2rem 0;
      }
    }
    &__contact {
      font-weight: 450;
      font-size: 2.4rem;
      line-height: 1.33;
      @include hover {
        &:hover,
        &:focus {
          color: var(--primary-blue);
        }
        &:active {
          color: var(--primary-shadow);
        }
      }
      @include active {
        &:active {
          color: var(--primary-shadow);
        }
      }
      @include w767 {
        font-size: 2rem;
        line-height: 1.4;
      }
      & + & {
        @include w767 {
          margin-top: 1.2rem;
        }
      }
    }
    &__squares {
      display: grid;
      grid-gap: 3.2rem;
      grid-template-columns: 1fr 1fr;
      padding: 3.2rem;
      list-style: none;
      @include w1199 {
        grid-column: 1 / 3;
      }
      @include w767 {
        grid-column: auto;
        grid-template-columns: 100%;
        grid-gap: 1.6rem;
        padding: 2rem;
      }
      li:last-child img {
        transform: scaleX(-1);
      }
    }
    &__square {
      position: relative;
      height: 29rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2.4rem;
      color: var(--text-000);
      border-radius: 1.6rem;
      overflow: hidden;
      @include hover {
        &:hover svg,
        &:focus svg {
          transform: translateX(1rem);
        }
      }
      @include active {
        &:active svg{
          transform: translateX(1rem);
        }
      }
      @include w767 {
        height: 19rem;
      }
      img {
        position: absolute;
        z-index: -2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-square {
      &__title {
        font-weight: 450;
        font-size: 2.4rem;
        line-height: 1.33;
      }
      &__bot {
        display: flex;
        align-items: center;
        font-weight: 450;
        letter-spacing: normal;
        white-space: nowrap;
        @include w359 {
          font-size: 1.4rem;
        }
        svg {
          width: 1.2rem;
          margin-left: 0.8rem;
          transition: 0.3s;
        }
      }
    }
  }
}
</style>
