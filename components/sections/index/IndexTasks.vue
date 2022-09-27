<template>
  <section class="section-margin tasks">
    <svg class="tasks__plate desktop" width="779" height="230" viewBox="0 0 779 230" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M779 230V54V0.5H0V54H37.4567C52.3974 54 65.3497 64.3389 68.6609 78.9081L97.3391 205.092C100.65 219.661 113.603 230 128.543 230H779Z" fill="white"/>
    </svg>
    <svg class="tasks__plate tablet" width="380" height="510" viewBox="0 0 380 510" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M380 510V0H0V20H142.9C158.522 20 171.86 31.2797 174.455 46.6845L248.005 483.315C250.6 498.72 263.939 510 279.561 510H380Z" fill="white"/>
    </svg>
    <h2 class="title tasks__title">{{ $t('index.tasks.title') }}</h2>
    <div class="tasks__row">
      <div class="tasks__left">
        <ul class="tasks__list">
          <li v-for="(task, index) in $t('index.tasks.items')" :key="index" class="tasks__item">
            <div class="tasks-item__icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3637 5.25H18.7501V13.6364H17.2501V7.81066L6.53039 18.5303L5.46973 17.4697L16.1894 6.75L10.3637 6.75V5.25Z" fill="#1333BB"/>
              </svg>
            </div>
            <p class="tasks-item__text">{{ task }}</p>
          </li>
        </ul>
        <nuxt-link to="#" class="btn btn-blue-outlined tasks__btn">
          {{ $t('index.tasks.btn') }}
        </nuxt-link>
      </div>
      <SvgTasks/>
    </div>
    <div class="tasks__guarantee">
      <div class="tasks-guarantee__dash icon">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.108 4.94102C20.5349 4.68633 19.8808 4.68632 19.3077 4.94102L9.06625 9.49278C8.21321 9.87191 7.68917 10.7449 7.75568 11.676L8.60883 23.6202C8.88855 27.5363 11.2134 31.0144 14.725 32.7702L19.2167 35.016C19.8406 35.328 20.5751 35.328 21.199 35.016L25.6907 32.7702C29.2023 31.0144 31.5272 27.5363 31.8069 23.6202L32.66 11.676C32.7266 10.7449 32.2025 9.87191 31.3495 9.49278L21.108 4.94102ZM18.6985 3.57031C19.6594 3.14323 20.7563 3.14323 21.7172 3.57031L31.9587 8.12207C33.389 8.75779 34.2678 10.2216 34.1562 11.7829L33.3031 23.7271C32.9856 28.1717 30.347 32.1191 26.3615 34.1118L21.8699 36.3577C20.8236 36.8808 19.5921 36.8808 18.5459 36.3577L14.0542 34.1118C10.0687 32.1191 7.43011 28.1717 7.11264 23.7271L6.25949 11.7829C6.14797 10.2216 7.02668 8.75778 8.45705 8.12207L18.6985 3.57031ZM25.1877 16.5385C25.4806 16.8314 25.4806 17.3063 25.1877 17.5991L20.7382 22.0487C20.4453 22.3416 19.9704 22.3416 19.6775 22.0487L16.7112 19.0823C16.4183 18.7894 16.4183 18.3146 16.7112 18.0217C17.0041 17.7288 17.4789 17.7288 17.7718 18.0217L20.2079 20.4577L24.1271 16.5385C24.42 16.2456 24.8948 16.2456 25.1877 16.5385Z" fill="#1333BB"/>
        </svg>
      </div>
      <p class="tasks-guarantee__text">{{ $t('index.tasks.guarantee.text') }}</p>
      <div class="tasks-guarantee__right">
        <span class="tasks-guarantee__dash">{{ $t('index.tasks.guarantee.dash1') }}</span>
        <span class="tasks-guarantee__or">{{ $t('index.tasks.guarantee.or') }}</span>
        <span class="tasks-guarantee__dash">{{ $t('index.tasks.guarantee.dash2') }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexTasks'
}
</script>

<style lang="scss" scoped>
.tasks {
  position: relative;
  margin-right: calc(-1 * var(--container-padding));
  margin-left: calc(-1 * var(--container-padding));
  padding: 8rem var(--container-padding);
  background-color: var(--text-200);
  @include w1199 {
    padding-bottom: 4rem;
  }
  @include w767 {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
  &__plate {
    position: absolute;
    top: -5.35rem;
    right: 0;
    width: 54%;
    display: block;
    @include w1199 {
      top: -2rem;
      width: 49%;
    }
    &.desktop {
      @include w1199 {
        display: none;
      }
    }
    &.tablet {
      display: none;
      @include w1199 {
        display: block;
      }
      @include w767 {
        display: none;
      }
    }
  }
  &__title {
    max-width: 50%;
    margin-top: 0;
    margin-bottom: 8rem;
    @include w1199 {
      max-width: 66%;
    }
    @include w767 {
      max-width: 73%;
      margin-bottom: 4.1rem;
    }
    @include w359 {
      max-width: none;
    }
  }
  &__row {
    display: flex;
    align-items: center;
  }
  &__list {
    margin-left: calc(-1 * var(--container-padding));
    width: 48.4rem;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      width: 67.4%;
    }
    @include w767 {
      width: calc(100% + var(--container-padding));
    }
  }
  &__item {
    padding: 4rem 3rem 4rem var(--container-padding);
    display: flex;
    align-items: flex-start;
    @include w359 {
      padding-right: 0;
    }
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
    &:not(:last-child) {
      border-bottom: 0.4rem solid var(--text-000);
    }
  }
  &-item {
    &__icon {
      flex-shrink: 0;
      width: 5rem;
      height: 5rem;
      background-color: var(--text-000);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 3.8rem;
      border-radius: 50%;
      color: var(--text-600);
      @include w359 {
        margin-right: 1.8rem;
      }
      svg {
        width: 2.4rem;
        height: auto;
      }
    }
    &__text {
      font-weight: 450;
    }
  }
  &__btn {
    margin-top: 8rem;
    padding: 1.5rem 8.2rem;
    letter-spacing: normal;
    @include w1199 {
      padding: 1.5rem 9.6rem;
    }
    @include w767 {
      width: 100%;
      margin-top: 4rem;
      padding: 1.2rem 0;
    }
  }
  &__svg {
    width: 64.8rem;
    margin-left: auto;
    @include w1366 {
      width: 52.8rem;
    }
    @include w1199 {
      display: none;
    }
  }
  &__guarantee {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 8rem;
    padding: 2.4rem;
    border-radius: 1.6rem;
    background-color: var(--text-000);
    @include w1199 {
      flex-wrap: wrap;
    }
    @include w767 {
      flex-direction: column;
      align-items: center;
      margin-top: 4rem;
    }
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: 0.4rem;
      background-color: var(--text-200);
      display: none;
      @include w1199 {
        display: block;
      }
      @include w767 {
        display: none;
      }
    }
  }
  &-guarantee {
    &__right {
      display: flex;
      align-items: center;
      @include w1199 {
        flex: 0 0 100%;
        margin-top: 4.8rem;
      }
      @include w767 {
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin-top: 2.4rem;
      }
    }
    &__dash {
      display: flex;
      border-radius: 0.8rem;
      border: 0.1rem dashed var(--text-300);
      font-weight: 450;
      font-size: 2.4rem;
      line-height: 1.33;
      color: var(--primary-blue);
      letter-spacing: -0.03em;
      @include w1366 {
        font-size: 2.1rem;
      }
      @include w1199 {
        font-size: 2.4rem;
      }
      @include w767 {
        font-size: 2rem;
        line-height: 1.1;
      }
      @include w359 {
        font-size: 1.8rem;
      }
      &.icon {
        padding: 1.1rem;
        svg {
          width: 4rem;
        }
      }
      &:not(.icon) {
        padding: 1.6rem 2.4rem;
        @include w1199 {
          flex: 1;
          justify-content: center;
        }
        @include w767 {
          width: 100%;
        }
      }
    }
    &__text {
      margin-right: auto;
      margin-bottom: 0;
      margin-left: 2.4rem;
      font-weight: 450;
      font-size: 2.4rem;
      line-height: 1.33;
      color: var(--text-1000);
      letter-spacing: -0.03em;
      @include w767 {
        max-width: 72%;
        margin-top: 2.4rem;
        margin-left: auto;
        text-align: center;
        font-size: 2rem;
        line-height: 1.4;
      }
    }
    &__or {
      margin: 0 2.4rem;
      font-weight: 450;
      color: var(--text-700);
      @include w767 {
        margin: 0.7rem 0;
      }
    }
  }
}
</style>
