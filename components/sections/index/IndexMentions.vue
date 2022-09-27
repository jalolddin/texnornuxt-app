<template>
  <section class="section-margin mentions">
    <h2 class="title mentions__title">{{ $t('index.mentions') }}</h2>
    <ul class="mentions__list">
      <li v-for="(item, index) in mentions" :key="index" class="mentions__item">
        <nuxt-link :to="item.link" class="mentions-item__link">
          <p class="mentions-item__author">{{ item.author }}</p>
          <p class="mentions-item__title">{{ item.title }}</p>
          <div class="mentions-item__btn">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3637 5.25H18.7501V13.6364H17.2501V7.81066L6.53039 18.5303L5.46973 17.4697L16.1894 6.75H10.3637V5.25Z" fill="currentColor"/>
            </svg>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'IndexMentions',
  data () {
    return {
      mentions: [
        {
          link: '#',
          author: 'РБК',
          title: 'Как системы контроля топлива помогают судовладельцам экономить'
        },
        {
          link: '#',
          author: 'РБК',
          title: 'Как сэкономить топливо: рецепт для судовладельцев'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mentions {
  display: flex;
  @include w1023 {
    flex-direction: column;
  }
  &__title {
    margin: 0;
    @include w1023 {
      margin-bottom: 4rem;
    }
  }
  &__list {
    width: 53.6rem;
    margin-left: auto;
    padding-left: 0;
    list-style: none;
    @include w1023 {
      width: 100%;
    }
  }
  &__item {
    & + & {
      .mentions-item__link {
        padding-top: 3.2rem;
      }
      .mentions-item__btn {
        top: 3.2rem;
      }
    }
    &:not(:last-child) {
      .mentions-item__link {
        padding-bottom: 3.2rem;
        border-bottom: 0.1rem solid var(--text-200);
      }
    }
  }
  &-item {
    &__link {
      position: relative;
      display: block;
      @include hover {
        &:hover,
        &:focus {
          .mentions-item__btn {
            border-color: var(--primary-blue);
            color: var(--primary-blue);
          }
        }
        &:active {
          .mentions-item__btn {
            border-color: var(--primary-shadow);
            color: var(--primary-shadow);
          }
        }
      }
      @include active {
        &:active {
          .mentions-item__btn {
            border-color: var(--primary-shadow);
            color: var(--primary-shadow);
          }
        }
      }
    }
    &__author {
      display: block;
      margin-bottom: 2rem;
      line-height: 1.12;
      letter-spacing: normal;
      color: var(--text-600);
      opacity: 0.85;
    }
    &__title {
      max-width: 42.2rem;
      margin: 0;
      display: block;
      font-weight: 450;
      color: var(--text-900);
      opacity: 0.85;
      @include w1023 {
        max-width: none;
        padding-right: 10rem;
      }
      @include w359 {
        padding-right: 6rem;
      }
    }
    &__btn {
      position: absolute;
      right: 0;
      top: 0;
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0.1rem solid var(--text-300);
      border-radius: 50%;
      transition: 0.2s;
      color: var(--text-1000);
      svg {
        width: 2.4rem;
      }
    }
  }
}
</style>
