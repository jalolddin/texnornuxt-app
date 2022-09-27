<template>
  <section class="section-margin info">
    <h2 class="title info__title tablet">
      {{ info.title }}
      <a v-if="info.linkTitle" :href="info.linkTitle" target="_blank">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.33203 4.08301C7.74624 4.08301 8.08203 3.74722 8.08203 3.33301C8.08203 2.91879 7.74624 2.58301 7.33203 2.58301V4.08301ZM13.4154 8.66634C13.4154 8.25213 13.0796 7.91634 12.6654 7.91634C12.2512 7.91634 11.9154 8.25213 11.9154 8.66634H13.4154ZM8.13503 6.80268C7.84214 7.09557 7.84214 7.57044 8.13503 7.86334C8.42793 8.15623 8.9028 8.15623 9.19569 7.86334L8.13503 6.80268ZM14.6654 1.33301H15.4154C15.4154 0.918794 15.0796 0.583008 14.6654 0.583008V1.33301ZM13.9154 5.99967C13.9154 6.41389 14.2512 6.74967 14.6654 6.74967C15.0796 6.74967 15.4154 6.41389 15.4154 5.99967H13.9154ZM9.9987 0.583008C9.58448 0.583008 9.2487 0.918794 9.2487 1.33301C9.2487 1.74722 9.58448 2.08301 9.9987 2.08301V0.583008ZM11.332 13.9163H2.66536V15.4163H11.332V13.9163ZM2.08203 13.333V4.66634H0.582031V13.333H2.08203ZM2.66536 4.08301H7.33203V2.58301H2.66536V4.08301ZM11.9154 8.66634V13.333H13.4154V8.66634H11.9154ZM9.19569 7.86334L15.1957 1.86334L14.135 0.802678L8.13503 6.80268L9.19569 7.86334ZM13.9154 1.33301V5.99967H15.4154V1.33301H13.9154ZM14.6654 0.583008H9.9987V2.08301H14.6654V0.583008ZM2.66536 13.9163C2.3432 13.9163 2.08203 13.6552 2.08203 13.333H0.582031C0.582031 14.4836 1.51477 15.4163 2.66536 15.4163V13.9163ZM11.332 15.4163C12.4826 15.4163 13.4154 14.4836 13.4154 13.333H11.9154C11.9154 13.6552 11.6542 13.9163 11.332 13.9163V15.4163ZM2.08203 4.66634C2.08203 4.34417 2.3432 4.08301 2.66536 4.08301V2.58301C1.51477 2.58301 0.582031 3.51575 0.582031 4.66634H2.08203Z" fill="#1333BB"/>
        </svg>
      </a>
    </h2>
    <div class="info__content">
      <div class="info__col">
        <div class="title info__title desktop">
          {{ info.title }}
          <a v-if="info.linkTitle" :href="info.linkTitle" target="_blank">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33203 4.08301C7.74624 4.08301 8.08203 3.74722 8.08203 3.33301C8.08203 2.91879 7.74624 2.58301 7.33203 2.58301V4.08301ZM13.4154 8.66634C13.4154 8.25213 13.0796 7.91634 12.6654 7.91634C12.2512 7.91634 11.9154 8.25213 11.9154 8.66634H13.4154ZM8.13503 6.80268C7.84214 7.09557 7.84214 7.57044 8.13503 7.86334C8.42793 8.15623 8.9028 8.15623 9.19569 7.86334L8.13503 6.80268ZM14.6654 1.33301H15.4154C15.4154 0.918794 15.0796 0.583008 14.6654 0.583008V1.33301ZM13.9154 5.99967C13.9154 6.41389 14.2512 6.74967 14.6654 6.74967C15.0796 6.74967 15.4154 6.41389 15.4154 5.99967H13.9154ZM9.9987 0.583008C9.58448 0.583008 9.2487 0.918794 9.2487 1.33301C9.2487 1.74722 9.58448 2.08301 9.9987 2.08301V0.583008ZM11.332 13.9163H2.66536V15.4163H11.332V13.9163ZM2.08203 13.333V4.66634H0.582031V13.333H2.08203ZM2.66536 4.08301H7.33203V2.58301H2.66536V4.08301ZM11.9154 8.66634V13.333H13.4154V8.66634H11.9154ZM9.19569 7.86334L15.1957 1.86334L14.135 0.802678L8.13503 6.80268L9.19569 7.86334ZM13.9154 1.33301V5.99967H15.4154V1.33301H13.9154ZM14.6654 0.583008H9.9987V2.08301H14.6654V0.583008ZM2.66536 13.9163C2.3432 13.9163 2.08203 13.6552 2.08203 13.333H0.582031C0.582031 14.4836 1.51477 15.4163 2.66536 15.4163V13.9163ZM11.332 15.4163C12.4826 15.4163 13.4154 14.4836 13.4154 13.333H11.9154C11.9154 13.6552 11.6542 13.9163 11.332 13.9163V15.4163ZM2.08203 4.66634C2.08203 4.34417 2.3432 4.08301 2.66536 4.08301V2.58301C1.51477 2.58301 0.582031 3.51575 0.582031 4.66634H2.08203Z" fill="#1333BB"/>
            </svg>
          </a>
        </div>
        <div class="info__text">
          <div v-if="info.description" class="info__descriptions">
            <div v-for="(item, index) in info.description" :key="index" class="info__description" v-html="item"/>
          </div>
          <ul v-if="info.features" class="info__features">
            <li v-for="(feature, index) in info.features" :key="index" class="info__feature">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
      <div class="info__col">
        <ProductionSliderOneItemGreyBackground :page="page" :slider="slider"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductionInfoAndSlider',
  props: {
    page: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      default: () => {}
    },
    slider: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  &--right {
    margin-bottom: 5.6rem;
    @include w1199 {
      margin-bottom: 8rem;
    }
    @include w767 {
      margin-bottom: 4rem;
    }
    .info__col {
      &:first-child {
        grid-column: 8 / 13;
        @include w1366 {
          grid-column: 7 / 13;
        }
      }
      &:last-child {
        order: -1;
        grid-column: 1 / 7;
      }
    }
  }
  &--flowmeters {
    .info {
      &__title {
        @include w767 {
          margin-bottom: 2rem;
        }
      }
      &__col {
        &:first-child {
          @include w1199 {
            margin-top: 0;
            margin-bottom: 3.6rem;
            order: -2;
          }
        }
      }
    }
  }
  &--controllers {
    .info__description {
      max-width: none;
      @include w1199 {
        max-width: 73%;
      }
      @include w767 {
        max-width: none;
      }
    }
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 4rem 2.4rem;
    @include w1199 {
      display: flex;
      flex-direction: column;
      grid-gap: 0;
    }
  }
  &__text {
    @include w1199 {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @include w767 {
      grid-template-columns: auto;
    }
  }
  &__col {
    &:first-child {
      grid-column: 1 / 6;
      @include w1199 {
        margin-top: 4rem;
      }
    }
    &:last-child {
      grid-column: 7 / 13;
      @include w1199 {
        order: -1;
      }
    }
  }
  &__title {
    margin-bottom: 4rem;
    @include w1199 {
      margin-top: 0;
      margin-bottom: 4rem;
    }
    &.tablet {
      position: absolute;
      opacity: 0;
      visibility: hidden;
      @include w1199 {
        position: static;
        opacity: 1;
        visibility: visible;
      }
    }
    &.desktop {
      @include w1199 {
        display: none;
      }
    }
    a {
      transform: translateY(-2.3rem);
      display: inline-flex;
      margin-left: 0;
      padding: 0.3rem;
      @include w1199 {
        transform: translateY(-1.6rem);
      }
      @include w767 {
        transform: translateY(-0.9rem);
      }
    }
  }
  &__descriptions {
    &:first-child:last-child {
      grid-column: span 2;
    }
    & + .info__features {
      margin-top: 5.9rem;
      @include w1199 {
        margin-top: 0;
      }
      @include w767 {
        margin-top: 4rem;
      }
    }
  }
  &__description {
    max-width: 43rem;
    font-weight: 450;
    @include w1199 {
      max-width: 81%;
    }
    @include w767 {
      max-width: none;
    }
    & + & {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 0.1rem solid var(--text-200);
    }
  }
  &__features {
    padding-left: 0;
    list-style: none;
    &:first-child:last-child {
      grid-column: span 2;
    }
  }
  &__feature {
    position: relative;
    padding-bottom: 2rem;
    padding-left: 4.3rem;
    font-weight: 450;
    color: var(--text-700);
    letter-spacing: normal;
    @include w767 {
      padding-left: 4rem;
    }
    &:not(:last-child) {
      margin-bottom: 1.9rem;
      border-bottom: 0.1rem solid var(--text-200);
      @include w1199 {
        margin-bottom: 2rem;
      }
    }
    &:before {
      content: '';
      position: absolute;
      top: 0.8rem;
      left: 0.7rem;
      width: 1rem;
      height: 0.5rem;
      border-bottom: 0.1rem solid var(--primary-blue);
      border-left: 0.1rem solid var(--primary-blue);
      transform: rotate(-45deg);
    }
  }
}
</style>
