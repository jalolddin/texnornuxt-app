<template>
  <section class="section-margin directions">
    <h2 class="title directions__title">{{ $t('index.directions.title') }}</h2>
    <ul class="directions__list">
      <li class="directions__item" v-for="(item, index) in directions" :key="index">
        <img class="directions-item__img" :src="`/images/index/directions-${index}.png`" :alt="$t(`index.directions.items[${index}].title`)">
        <nuxt-link class="directions-item__link" :to="item.link">
          <p class="directions-item__system">{{ $t(`index.directions.items[${index}].system`) }}</p>
          <h3 class="directions-item__title">{{ $t(`index.directions.items[${index}].title`) }}</h3>
          <p v-if="item.description" class="directions-item__description">
            {{ $t(`index.directions.items[${index}].description`) }}
          </p>
          <div v-if="item.btn" class="btn btn-blue-filled directions-item__btn">
            {{ $t(`index.directions.items[${index}].btn`) }}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12L16.3536 12.3536L16.7071 12L16.3536 11.6464L16 12ZM7.64645 4.35355L15.6464 12.3536L16.3536 11.6464L8.35355 3.64645L7.64645 4.35355ZM15.6464 11.6464L7.64645 19.6464L8.35355 20.3536L16.3536 12.3536L15.6464 11.6464Z" fill="currentColor"/>
            </svg>
          </div>
          <div v-else class="directions-item__arr">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12L16.3536 12.3536L16.7071 12L16.3536 11.6464L16 12ZM7.64645 4.35355L15.6464 12.3536L16.3536 11.6464L8.35355 3.64645L7.64645 4.35355ZM15.6464 11.6464L7.64645 19.6464L8.35355 20.3536L16.3536 12.3536L15.6464 11.6464Z" fill="currentColor"/>
            </svg>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  directions: 'IndexDirections',
  data () {
    return {
      directions: [
        {
          link: '#',
          description: true,
          btn: true
        },
        {
          link: '#'
        },
        {
          link: '#'
        },
        {
          link: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.directions {
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
    grid-template-rows: repeat(2, 31.2rem);
    grid-gap: 2.4rem;
    padding-left: 0;
    list-style: none;
    @include hover {
      &::-webkit-scrollbar {
        height: 0.6rem;
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
    @include w1199 {
      width: calc(100% + 2 * var(--container-padding));
      display: flex;
      grid-gap: 0;
      margin-bottom: -2rem;
      margin-left: calc(-1 * var(--container-padding));
      padding: 0 var(--container-padding) 2rem;
      overflow-x: auto;
    }
    @include w767 {
      width: 100%;
      display: block;
      margin: 0;
      padding: 0;
    }
  }
  &__item {
    position: relative;
    border-radius: 1.6rem;
    overflow: hidden;
    @include w1199 {
      flex: 0 0 31.2rem;
      height: 48rem;
    }
    @include w767 {
      height: 26.4rem;
    }
    & + & {
      @include w1199 {
        margin-left: 2.4rem;
      }
      @include w767 {
        margin-left: 0;
        margin-top: 2rem;
      }
    }
    &:nth-child(1) {
      grid-column: span 2;
      grid-row: span 2;
      background-color: var(--text-100);
      @include w767 {
        height: 40rem;
      }
      img {
        width: 54rem;
      }
    }
    &:nth-child(2) {
      grid-column: span 2;
      img {
        width: 36rem;
        @include w1366 {
          width: 32rem;
        }
      }
    }
    &:nth-child(3) {
      img {
        width: 24rem;
        @include w1366 {
          width: 21rem;
        }
      }
    }
    &:nth-child(4) {
      img {
        width: 24rem;
        @include w1366 {
          width: 20rem;
        }
      }
    }
  }
  &-item {
    &__link {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 3.2rem 3.1rem;
      border: 0.1rem solid var(--text-200);
      border-radius: 1.6rem;
      @include hover {
        &:hover,
        &:focus {
          .directions-item__btn {
            background: var(--primary-tint);
          }
          .directions-item__arr {
            border-color: var(--primary-blue);
          }
        }
        &:active {
          .directions-item__btn {
            background: var(--primary-shadow);
          }
          .directions-item__arr {
            color: var(--text-1000);
            border-color: var(--primary-shadow);
          }
        }
      }
      @include active {
        &:active {
          .directions-item__btn {
            background: var(--primary-shadow);
          }
          .directions-item__arr {
            color: var(--text-1000);
            border-color: var(--primary-shadow);
          }
        }
      }
      @include w1199 {
        @include hover {
          &:hover,
          &:focus {
            .directions-item__btn {
              background: none;
              border-color: var(--primary-blue);
            }
          }
          &:active {
            .directions-item__btn {
              background: none;
              color: var(--text-1000);
              border-color: var(--primary-shadow);
            }
          }
        }
        @include active {
          &:active {
            .directions-item__btn {
              background: none;
              color: var(--text-1000);
              border-color: var(--primary-shadow);
            }
          }
        }
      }
      @include w767 {
        padding: 2.4rem 2.3rem;
      }
    }
    &__img {
      position: absolute;
      bottom: 0;
      right: 0;
      height: auto;
      @include w1199 {
        width: 27rem!important;
      }
      @include w767 {
        width: 24rem!important;
      }
    }
    &__system {
      margin-bottom: 1.6rem;
      line-height: 1.12;
      letter-spacing: normal;
      color: var(--text-700);
    }
    &__title {
      margin: 0;
      font-weight: 450;
      font-size: 2.4rem;
      line-height: 1.33;
      letter-spacing: -0.03em;
      color: var(--text-1000);
    }
    &__description {
      display: block;
      margin-top: 3rem;
      padding-top: 3.2rem;
      border-top: 0.1rem solid var(--text-300);
      font-weight: 450;
      color: var(--text-700);
      @include w1199 {
        margin-top: 2.2rem;
        padding-top: 2.4rem;
      }
    }
    &__btn {
      position: absolute;
      top: 3.1rem;
      right: 3.1rem;
      padding: 1.6rem 3.2rem;
      letter-spacing: normal;
      @include w1199 {
        position: absolute;
        top: auto;
        right: auto;
        bottom: 3.2rem;
        left: 3.2rem;
        width: 5rem;
        height: 5rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border-radius: 50%;
        border: 0.1rem solid var(--text-300);
        background: none;
        font-size: 0;
        color: var(--primary-blue);
      }
      @include w767 {
        bottom: 2.3rem;
        left: 2.3rem;
      }
      svg {
        width: 2.4rem;
        height: 2.4rem;
        display: none;
        @include w1199 {
          display: block;
        }
      }
    }
    &__arr {
      position: absolute;
      bottom: 3.1rem;
      left: 3.1rem;
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
      color: var(--primary-blue);
      transition: 0.2s;
      @include w1199 {
        position: static;
        margin-top: 3.2rem;
      }
      @include w767 {
        position: absolute;
        bottom: 2.3rem;
        left: 2.3rem;
        margin: 0;
      }
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
}
</style>
