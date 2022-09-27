<template>
  <nav class="header__nav">
    <ul class="header__menu">
      <li class="header-menu__item" v-for="(item, index) in nav" :key="index">
        <nuxt-link v-if="!item.inside" class="header-menu__link" :to="item.link">
          {{ $t(`header.bottomMenu[${index}].title`) }}
        </nuxt-link>
        <button v-else :class="['header-menu__link', { 'active': index === openIndex }]" @click="toggleSubmenu(index)">
          {{ $t(`header.bottomMenu[${index}].title`) }}
          <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.71436 5L6.71436 9L10.7144 5" stroke="currentColor"/>
          </svg>
        </button>
        <transition name="fade">
          <ul v-if="item.inside && index === openIndex" class="header-menu__submenu" v-click-outside="closeSubmenu">
            <li v-for="(subItem, subIndex) in item.inside" :key="$t(`header.bottomMenu[${index}].inside[${subIndex}]`)" class="header-menu__subitem">
              <nuxt-link :to="subItem.link" class="header-menu__sublink">
                {{ $t(`header.bottomMenu[${index}].inside[${subIndex}]`) }}
              </nuxt-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderBottom',
  data () {
    return {
      openIndex: null,
      nav: [
        { link: '#' },
        {
          inside: [
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
        { link: '#' },
        { link: '#' },
        { link: '#' },
        { link: '#' }
      ]
    }
  },
  watch: {
    $route () {
      this.openIndex = null
    }
  },
  methods: {
    toggleSubmenu (index) {
      this.openIndex = index
    },
    closeSubmenu () {
      this.openIndex = null
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  &__nav {
    @include w767 {
      display: none;
    }
  }
  &__menu {
    height: 5.8rem;
    display: flex;
    justify-content: space-between;
    padding: 0 3.2rem;
    list-style: none;
    border-radius: 0 0 1.6rem 1.6rem;
    background: var(--text-000);
    @include w1023 {
      padding-left: 9.2rem;
    }
  }
  &-menu {
    &__item {
      position: relative;
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(8) {
        @include w1300 {
          display: none;
        }
      }
      &:nth-child(5) {
        @include w1199 {
          display: none;
        }
      }
      &:nth-child(2) {
        @include w1023 {
          display: none;
        }
      }
    }
    &__link {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0;
      background: none;
      border: none;
      color: var(--text-700);
      letter-spacing: normal;
      cursor: pointer;
      @include hover {
        &:hover,
        &:focus {
          color: var(--text-1000);
        }
      }
      @include active {
        &:active {
          color: var(--text-1000);
        }
      }
      &.active {
        color: var(--text-1000);
        svg {
          transform: translateY(0.2rem) scale(-1);
        }
      }
      svg {
        width: 1.2rem;
        display: block;
        margin-left: 0.2rem;
        transition: 0.2s transform;
      }
    }
    &__submenu {
      position: absolute;
      top: calc(100% + 1.6rem);
      left: -1.6rem;
      min-width: 23rem;
      display: flex;
      flex-direction: column;
      padding: 1.6rem;
      background-color: var(--text-000);
      border-radius: 0.8rem;
      list-style: none;
    }
    &__subitem {
      & + & {
        margin-top: 1.6rem;
      }
    }
    &__sublink {
      display: flex;
      width: 100%;
      text-align: left;
      color: var(--text-700);
      @include hover {
        &:hover,
        &:focus{
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
  }
}
</style>
