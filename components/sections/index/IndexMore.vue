<template>
  <section class="section-margin more">
    <h2 class="title more__title">{{ $t('index.more.title') }}</h2>
    <ul class="more__list">
      <li v-for="(item, index) in more" :key="index" class="more__item">
        <nuxt-link :class="['more-item__link', { 'active': item.active }]" :to="item.link">
          <h3 class="more-item__title">{{ $t(`index.more.items[${index}]`) }}</h3>
          <div class="more-item__btn">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3637 5.25H18.7501V13.6364H17.2501V7.81066L6.53039 18.5303L5.46973 17.4697L16.1894 6.75L10.3637 6.75V5.25Z" fill="currentColor"/>
            </svg>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  directions: 'IndexMore',
  data () {
    return {
      more: [
        {
          link: '#',
          active: true
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
.more {
  @include w1199 {
    margin-bottom: 4rem;
  }
  @include w767 {
    margin-bottom: 2rem;
  }
  &__title {
    margin-top: 0;
    margin-bottom: 4rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.8rem;
    padding-left: 0;
    border-radius: 1.6rem;
    overflow: hidden;
    list-style: none;
    @include w1199 {
      grid-template-columns: repeat(2, 1fr);
    }
    @include w767 {
      grid-template-columns: auto;
    }
  }
  &-item {
    &__link {
      height: 16rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2.4rem;
      background-color: var(--text-100);
      transition: background-color 0.2s;
      @include hover {
        &:hover,
        &:focus {
          background-color: var(--text-200);
          .more-item__btn {
            background-color: var(--primary-tint);
          }
        }
        &:active {
          background-color: var(--text-200);
          .more-item__btn {
            background-color: var(--primary-shadow);
          }
        }
      }
      @include active {
        &:active {
          background-color: var(--text-200);
          .more-item__btn {
            background-color: var(--primary-shadow);
          }
        }
      }
      &.active {
        background-color: var(--primary-blue);
        color: var(--text-000);
        .more-item__btn {
          background-color: var(--text-000);
          color: var(--text-1000);
        }
        @include hover {
          &:hover,
          &:focus {
            .more-item__btn {
              color: var(--primary-blue);
            }
          }
          &:active {
            .more-item__btn {
              color: var(--primary-shadow);
            }
          }
        }
        @include active {
          &:active {
            .more-item__btn {
              color: var(--primary-shadow);
            }
          }
        }
      }
    }
    &__title {
      margin: 0;
      font-weight: 450;
      font-size: 1.6rem;
      line-height: 1.12;
      @include w1199 {
        line-height: 1.5;
      }
    }
    &__btn {
      width: 5rem;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: var(--primary-blue);
      color: var(--text-000);
      transition: 0.2s;
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
}
</style>
