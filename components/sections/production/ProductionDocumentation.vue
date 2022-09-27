<template>
  <div :class="`section-margin documentation ${page}`">
    <div class="documentation__col">
      <h2 class="title documentation__title">{{ $t(`production.documentation.${page}.title`) }}</h2>
      <a :href="link" download class="documentation__download">
        <span>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 14.1818H32.75C32.75 13.9789 32.6678 13.7847 32.5221 13.6434L32 14.1818ZM21.5 4L22.0221 3.46157C21.8822 3.32588 21.6949 3.25 21.5 3.25V4ZM7.25 6.90909V33.0909H8.75V6.90909H7.25ZM11 36.75H29V35.25H11V36.75ZM32.75 33.0909V14.1818H31.25V33.0909H32.75ZM32.5221 13.6434L22.0221 3.46157L20.9779 4.53843L31.4779 14.7202L32.5221 13.6434ZM21.5 3.25H11V4.75H21.5V3.25ZM20.75 4V11.2727H22.25V4H20.75ZM24.5 14.9318H32V13.4318H24.5V14.9318ZM29 36.75C31.0491 36.75 32.75 35.1334 32.75 33.0909H31.25C31.25 34.2618 30.2646 35.25 29 35.25V36.75ZM7.25 33.0909C7.25 35.1334 8.95085 36.75 11 36.75V35.25C9.73544 35.25 8.75 34.2618 8.75 33.0909H7.25ZM20.75 11.2727C20.75 13.3152 22.4509 14.9318 24.5 14.9318V13.4318C23.2354 13.4318 22.25 12.4436 22.25 11.2727H20.75ZM8.75 6.90909C8.75 5.73825 9.73544 4.75 11 4.75V3.25C8.95085 3.25 7.25 4.86664 7.25 6.90909H8.75Z" fill="currentColor"/>
          </svg>
        </span>
        <span>{{ $t(`production.documentation.${page}.docs`) }}</span>
        <span>
          {{ $t(`production.documentation.${page}.download`) }}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41406 9.33366C1.41406 8.91945 1.07828 8.58366 0.664062 8.58366C0.249849 8.58366 -0.0859375 8.91945 -0.0859375 9.33366H1.41406ZM16.0807 9.33366C16.0807 8.91945 15.7449 8.58366 15.3307 8.58366C14.9165 8.58366 14.5807 8.91945 14.5807 9.33366H16.0807ZM8.7474 2.66699C8.7474 2.25278 8.41161 1.91699 7.9974 1.91699C7.58318 1.91699 7.2474 2.25278 7.2474 2.66699H8.7474ZM7.9974 9.33366L7.46707 9.86399C7.75996 10.1569 8.23483 10.1569 8.52773 9.86399L7.9974 9.33366ZM10.5277 7.86399C10.8206 7.5711 10.8206 7.09622 10.5277 6.80333C10.2348 6.51044 9.75996 6.51044 9.46706 6.80333L10.5277 7.86399ZM6.52773 6.80333C6.23483 6.51044 5.75996 6.51044 5.46707 6.80333C5.17417 7.09622 5.17417 7.5711 5.46707 7.86399L6.52773 6.80333ZM-0.0859375 9.33366V12.0003H1.41406V9.33366H-0.0859375ZM1.9974 14.0837H13.9974V12.5837H1.9974V14.0837ZM16.0807 12.0003V9.33366H14.5807V12.0003H16.0807ZM7.2474 2.66699V9.33366H8.7474V2.66699H7.2474ZM8.52773 9.86399L10.5277 7.86399L9.46706 6.80333L7.46707 8.80333L8.52773 9.86399ZM8.52773 8.80333L6.52773 6.80333L5.46707 7.86399L7.46707 9.86399L8.52773 8.80333ZM13.9974 14.0837C15.148 14.0837 16.0807 13.1509 16.0807 12.0003H14.5807C14.5807 12.3225 14.3196 12.5837 13.9974 12.5837V14.0837ZM-0.0859375 12.0003C-0.0859375 13.1509 0.846803 14.0837 1.9974 14.0837V12.5837C1.67523 12.5837 1.41406 12.3225 1.41406 12.0003H-0.0859375Z" fill="#1333BB"/>
          </svg>
        </span>
      </a>
    </div>
    <ul class="documentation__list">
      <li v-for="(item, index) in $t(`production.documentation.${page}.items`)" :key="index" class="documentation__item">
        <span v-if="item.feature" class="documentation-item__feature">{{ item.feature }}</span>
        <span v-if="item.title" class="documentation-item__title">{{ item.title }}</span>
        <span v-if="item.text" class="documentation-item__text">{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductionDocumentation',
  props: {
    page: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.4rem;
  @include w1199 {
    display: flex;
    justify-content: space-between;
    grid-gap: 0;
  }
  @include w767 {
    flex-direction: column;
  }
  &.controllers {
    .documentation {
      &__col {
        grid-column: span 6;
      }
      &__item {
        padding-top: 2rem;
        padding-bottom: 2rem;
        &:first-child {
          @include w1199 {
            padding-top: 0;
          }
        }
        &:last-child {
          @include w1199 {
            padding-bottom: 0;
          }
        }
        + .documentation__item {
          margin-top: 0;
        }
      }
    }
  }
  &__col {
    grid-column: span 7;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__title {
    max-width: 35rem;
    margin: 0;
    @include w1199 {
      max-width: 30rem;
    }
  }
  &__download {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    @include hover {
      &:hover,
      &:focus {
        span:first-child {
          color: var(--text-000);
          background-color: var(--primary-blue);
        }
      }
    }
    @include active {
      &:active {
        span:first-child {
          color: var(--text-000);
          background-color: var(--primary-blue);
        }
      }
    }
    @include w1199 {
      margin-top: 4rem;
    }
    span {
      letter-spacing: normal;
      line-height: 1.12;
      font-weight: 450;
      transition: 0.2s;
      &:nth-child(1) {
        width: 8.8rem;
        height: 8.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        border-radius: 50%;
        border: 0.1rem solid var(--text-300);
        color: var(--primary-blue);
        svg {
          width: 4rem;
          height: auto;
        }
      }
      &:nth-child(3) {
        display: flex;
        align-items: center;
        margin-top: 0.8rem;
        color: var(--primary-blue);
        svg {
          width: 1.6rem;
          height: auto;
          margin-left: 0.8rem;
        }
      }
    }
  }
  &__list {
    grid-column: span 5;
    padding-left: 0;
    list-style: none;
    @include w1199 {
      flex: 0 0 50%;
    }
    @include w767 {
      flex: auto;
      margin-top: 4.3rem;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    & + & {
      margin-top: 4rem;
    }
  }
  &-item {
    &__feature {
      position: relative;
      padding-left: 4.3rem;
      font-weight: 450;
      color: var(--text-700);
      letter-spacing: normal;
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
    &__title {
      margin-bottom: 1.6rem;
      letter-spacing: normal;
      line-height: 1.12;
      color: var(--text-700);
    }
    &__text {
      letter-spacing: normal;
      line-height: 1.12;
      font-weight: 450;
      color: var(--text-1000);
    }
  }
}
</style>
