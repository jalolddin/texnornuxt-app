<template>
  <header class="header">
    <div class="header__container">
      <Overlay v-model="openedMenu"/>
      <div class="header__wrap">
        <div :class="['header__top', { 'opened': openedMenu }]">
          <div class="header__left">
            <CommonLogo/>
            <CommonLocales/>
          </div>
          <div class="header__contacts">
            <a class="header-contacts__link" href="mailto:info@skrt.biz">info@skrt.biz</a>
            <a class="header-contacts__link" href="tel:8 800 250-00-16">8 800 250-00-16</a>
            <button class="btn btn-blue-outlined header-contacts__btn">{{ $t('header.call') }}</button>
            <button class="header-contacts__icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00805 4.80556C3.85517 13.3498 10.6502 20.1448 19.1944 20.9919C20.1881 21.0905 21 20.2715 21 19.2729V16.0558C21 15.2776 20.502 14.5866 19.7637 14.3405L16.6358 13.2979C15.9861 13.0813 15.2698 13.2504 14.7855 13.7347L14.2849 14.2354C13.9832 14.537 13.5104 14.5884 13.1583 14.3475C11.5358 13.2376 10.6257 12.3295 9.63376 10.836C9.4016 10.4864 9.4571 10.0227 9.75382 9.72594L10.2653 9.21446C10.7496 8.73019 10.9187 8.01388 10.7021 7.36417L9.65948 4.23633C9.41337 3.498 8.72243 3 7.94417 3H4.72713C3.72854 3 2.90953 3.81185 3.00805 4.80556Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
          <a class="header__lk" href="#">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 2.75C12.3244 2.75 9.75 5.32436 9.75 8.5C9.75 9.16446 9.8624 9.80107 10.0686 10.3928L10.2235 10.8372L2.82322 18.2374C2.77634 18.2843 2.75 18.3479 2.75 18.4142V21C2.75 21.1381 2.86193 21.25 3 21.25H5.58579C5.65209 21.25 5.71568 21.2237 5.76256 21.1768L6.88388 20.0555C7.1183 19.821 7.25 19.5031 7.25 19.1716V18C7.25 17.0335 8.0335 16.25 9 16.25H11.5858C11.6521 16.25 11.7157 16.2237 11.7626 16.1768L13.8997 14.0397L14.298 14.1243C14.685 14.2066 15.087 14.25 15.5 14.25C18.6756 14.25 21.25 11.6756 21.25 8.5C21.25 5.32436 18.6756 2.75 15.5 2.75ZM8.25 8.5C8.25 4.49594 11.4959 1.25 15.5 1.25C19.5041 1.25 22.75 4.49594 22.75 8.5C22.75 12.5041 19.5041 15.75 15.5 15.75C15.1245 15.75 14.7553 15.7214 14.3945 15.6661L12.8232 17.2374C12.495 17.5656 12.0499 17.75 11.5858 17.75H9C8.86193 17.75 8.75 17.8619 8.75 18V19.1716C8.75 19.9009 8.46027 20.6004 7.94454 21.1161L6.82322 22.2374C6.49503 22.5656 6.04991 22.75 5.58579 22.75H3C2.0335 22.75 1.25 21.9665 1.25 21V18.4142C1.25 17.9501 1.43438 17.505 1.76256 17.1768L8.50978 10.4296C8.34035 9.8145 8.25 9.16729 8.25 8.5ZM17.5303 6.46967C17.8232 6.76256 17.8232 7.23744 17.5303 7.53033L16.5303 8.53033C16.2374 8.82322 15.7626 8.82322 15.4697 8.53033C15.1768 8.23744 15.1768 7.76256 15.4697 7.46967L16.4697 6.46967C16.7626 6.17678 17.2374 6.17678 17.5303 6.46967Z" fill="currentColor"/>
            </svg>
            {{ $t('header.lk') }}
          </a>
          <button class="header__burger" @click="toggleMenu">
            <span :class="['header-burger__icon', { 'active': openedMenu }]">
              <span/>
              <span/>
              <span/>
            </span>
          </button>
        </div>
        <transition name="slideDown">
          <HeaderDropdown v-if="openedMenu" v-scroll-lock="openedMenu"/>
        </transition>
      </div>
      <HeaderBottom/>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      openedMenu: false
    }
  },
  watch: {
    $route () {
      this.openedMenu = false
    }
  },
  methods: {
    toggleMenu () {
      this.openedMenu = !this.openedMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  &__container {
    position: absolute;
    left: 0;
    width: 100%;
  }
  &__wrap {
    position: relative;
    z-index: 2;
  }
  &__top {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    padding: 2rem 0 2rem 3.2rem;
    border-bottom: 0.1rem solid var(--text-200);
    background-color: var(--text-000);
    @include w767 {
      padding-left: 0;
      border-bottom: none;
      border-radius: 0 0 1.6rem 1.6rem;
    }
    &.opened {
      @include w767 {
        border-radius: 0;
      }
    }
  }
  &__left {
    margin-right: auto;
    display: flex;
    @include w767 {
      margin-left: auto;
    }
  }
  &__contacts {
    display: flex;
    align-items: center;
    padding-right: 3.2rem;
    @include w767 {
      order: -1;
      padding-right: 0;
    }
  }
  &-contacts {
    &__link {
      margin-right: 2.4rem;
      line-height: 1.12;
      font-weight: 450;
      letter-spacing: normal;
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
      @include w1300 {
        display: none;
      }
    }
    &__btn {
      padding: 0.8rem 1.5rem;
      border-radius: 2.4rem;
      @include w767 {
        display: none;
      }
    }
    &__icon {
      width: 6.4rem;
      height: 6.4rem;
      display: none;
      align-items: center;
      justify-content: center;
      margin: -2rem 0;
      padding: 0;
      background: none;
      border: none;
      border-right: 0.1rem solid var(--text-200);
      cursor: pointer;
      transition: color 0.2s;
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
        display: flex;
      }
      svg {
        width: 2.4rem;
      }
    }
  }
  &__lk {
    display: inline-flex;
    align-items: center;
    align-self: stretch;
    margin: -2rem 0;
    padding: 0 3.2rem;
    border-left: 0.1rem solid var(--text-200);
    line-height: 1.12;
    font-weight: 450;
    letter-spacing: normal;
    @include w767 {
      display: none;
    }
    svg {
      width: 2.4rem;
      display: block;
      margin-right: 0.8rem;
    }
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
  &__burger {
    width: 7.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    margin: -2rem 0;
    padding: 0;
    border: none;
    border-left: 0.1rem solid var(--text-200);
    background: none;
    cursor: pointer;
    @include hover {
      &:hover,
      &:focus {
        .header-burger__icon span {
          background-color: var(--primary-blue);
        }
      }
      &:active {
        .header-burger__icon span {
          background-color: var(--primary-shadow);
        }
      }
    }
    @include active {
      &:active {
        .header-burger__icon span {
          background-color: var(--primary-shadow);
        }
      }
    }
    @include w1023 {
      position: absolute;
      left: 1.5rem;
      bottom: -6rem;
      width: 5.8rem;
      height: 5.8rem;
      border: none;
      margin: 0;
    }
    @include w767 {
      position: static;
      width: 6.4rem;
      height: 6.4rem;
      margin: -2rem 0;
      border-left: 0.1rem solid var(--text-200);
    }
  }
  &-burger {
    &__icon {
      width: 1.8rem;
      height: 1.35rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &.active {
        @include w1023 {
          display: none;
        }
        @include w767 {
          display: flex;
        }
        span {
          background-color: var(--secondary-red)!important;
          &:nth-child(1) {
            transform: translate(0rem, 0.6rem) rotate(45deg);
          }
          &:nth-child(2) {
            transform: translateX(0.5rem);
            opacity: 0;
          }
          &:nth-child(3) {
            transform: translate(0rem, -0.6rem) rotate(-45deg);
          }
        }
      }
      span {
        width: 100%;
        height: 0.2rem;
        background-color: var(--text-1000);
        transition: 0.2s;
      }
    }
  }
}
</style>
