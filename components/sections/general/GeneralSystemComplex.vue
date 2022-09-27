<template>
  <section class="section-margin directions">
    <h2 class="title directions__title">{{ blockTitle }}</h2>
    <p class="title directions__text">{{ blockText }}</p>
    <ul class="directions__list">
      <li class="directions__item" v-for="(item, index) in directions" :key="index">
        <img class="directions-item__img" v-if="item.img !== null" :src="`/images/industries/SystemComplex/${item.img}.png`" :alt="item.title">
        <nuxt-link class="directions-item__link" :to="item.link">
          <div v-if="index == 4" class="directions-item__circle">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33 17C33 25.8366 25.8366 33 17 33C12.5817 33 8.58172 31.2091 5.68629 28.3137M33 17C33 8.16344 25.8366 1 17 1M33 17H17M17 1C8.16344 1 1 8.16344 1 17C1 21.4183 2.79086 25.4183 5.68629 28.3137M17 1V17M17 17L5.68629 28.3137" stroke="#1333BB" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div v-if="index == 5" class="directions-item__circle">
            <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 25.8597V29.4298M1 29.4298H7.94702C9.28056 29.4298 10.5076 28.7162 11.1462 27.5692L15.211 20.2683M1 29.4298V33M38.7684 16.103L30.7686 25.6235C29.6364 26.9709 27.6758 27.3189 26.1331 26.4462L15.211 20.2683M38.7684 16.103L41 17.3653M38.7684 16.103L12.9141 1.47891C11.1712 0.493033 8.94247 1.0781 7.93618 2.78568L3.84996 9.71961C2.84367 11.4272 3.44085 13.6107 5.1838 14.5966L15.211 20.2683M14.8193 11.3016L12.5877 10.0394" stroke="#1333BB" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <p class="directions-item__system">{{ item.system }}</p>
          <h3 class="directions-item__title">{{ item.title }}</h3>
          <div v-if="item.link_icon" class="directions-item__arr">
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
  name: 'GeneralSystemComplex',
  props: {
    blockTitle: {
      type: String,
      default: 'Комплекс систем для решения задач'
    },
    blockText: {
      type: String,
      default: 'Комлпексная система закрывающая проблемы судовладельцев'
    }
  },
  data () {
    return {
      directions: [
        {
          system: 'Решение',
          title: 'Контроль топлива',
          link: '#',
          link_icon: true,
          img: '1'
        },
        {
          system: 'Решение',
          title: 'Аналитика данных',
          link: '#',
          link_icon: true,
          img: '2'
        },
        {
          system: 'Решение',
          title: 'Мониторинг транспорта',
          link: '#',
          link_icon: true,
          img: '3'
        },
        {
          system: 'Решение',
          title: 'Контроль бункеровки',
          link: '#',
          link_icon: true,
          img: '4'
        },
        {
          system: 'Решение',
          title: 'Визуализация данных',
          link: '#',
          link_icon: false,
          icon: 'diagram.svg',
          img: null
        },
        {
          system: 'Решение',
          title: 'Видеонаблюдение',
          link: '#',
          link_icon: false,
          icon: 'cam.svg',
          img: null
        },
        {
          system: 'Решение',
          title: 'Звуковое оповещение',
          link: '#',
          link_icon: true,
          img: '8'
        },
        {
          system: 'Под каждую поставленную задачу специалисты подберут комплектацию на любой бюджет',
          title: '',
          link: '#',
          link_icon: false,
          icon: '',
          img: null
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
    font-size: 4.0rem;
    width: 39.2rem;
    @include w767 {
      margin-bottom: 2rem;
    }
  }
  &__text {
    font-size: 1.6rem;
    margin-top: 0;
    margin-bottom: 4rem;
    @include w767 {
      margin-bottom: 2rem;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 31.6rem);
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
      display: grid;
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
      height: 29rem;
    }
    @include w767 {
      height: 26.4rem;
    }
    & + & {
      @include w1199 {
        margin-left: 0;
        gap: 2.4rem;
      }
      @include w767 {
        margin-left: 0;
        margin-top: 2rem;
      }
    }
    &:nth-child(1) {
      grid-column: 1;
      grid-row: span 1;
      @include w1199 {
        grid-column: span 2;
        margin-right: 2.4rem;
      }
      @include w767 {
        margin-right: 0;
      }
      img {
        height: 22rem;
      }
    }
    &:nth-child(2) {
      grid-column: 2;
      grid-row: span 1;
      @include w1199 {
        grid-column: span 2;
      }
      img {
        height: 18rem;
        @include w1199 {
          height: 18rem;
        }
        @include w767 {
          height: 16rem;
        }
      }
    }
    &:nth-child(3) {
      grid-column: span 2;
      grid-row: span 1;
      @include w1199 {
        grid-column: span 4;
      }
      img {
        height: 18rem;
        @include w1199 {
          height: auto;
          width: 40rem;
        }
        @include w767 {
          height: 16rem;
        }
      }
    }
    &:nth-child(4) {
      background-color: var(--text-100);
      grid-column: span 2;
      grid-row: span 2;
      @include w1199 {
        grid-column: span 4;
      }
      img {
        height: 30rem;
        @include w1199 {
          height: 18rem;
        }
        @include w767 {
          height: 16rem;
        }
      }
    }
    &:nth-child(5) {
      grid-column: 3;
      grid-row: span 1;
      @include w1199 {
        grid-column: span 2;
        margin-top: 2.4rem;
        margin-right: 2.4rem;
      }
      @include w767 {
        margin-right: 0;
      }
      img {
        height: 22rem;
        @include w1199 {
          height: 18rem;
        }
        @include w767 {
          height: 16rem;
        }
      }
    }
    &:nth-child(6) {
      grid-column: 4;
      grid-row: span 1;
      @include w1199 {
        grid-column: span 2;
        margin-top: 2.4rem;
      }
      img {
        height: 22rem;
        @include w1199 {
          height: 18rem;
        }
        @include w767 {
          height: 16rem;
        }
      }
    }
    &:nth-child(7) {
      grid-column: span 2;
      grid-row: span 2;
      height: 29rem;
      @include w1199 {
        grid-column: span 4;
        margin-top: 2.4rem;
      }
      img {
        height: 22rem;
        @include w1199 {
          height: 18rem;
        }
        @include w767 {
          height: 16rem;
        }
      }
    }
    &:nth-child(8) {
      grid-column: span 2;
      grid-row: 4;
      @include w1199 {
        grid-column: span 4;
        grid-row: 8;
        height: 12rem;
        margin-top: 2.4rem;
      }
      img {
        height: 18rem;
        @include w1199 {
          height: 18rem;
        }
        @include w767 {
          height: 16rem;
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
        /* width: 27rem!important; */
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
    &__circle {
      position: static;
      top: 3.1rem;
      left: 3.1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 9rem;
      height: 9rem;
      padding: 0;
      border-radius: 50%;
      border: 0.1rem solid var(--text-300);
      background: none;
      cursor: pointer;
      color: var(--primary-blue);
      transition: 0.2s;
      margin-bottom: 6rem;
      @include w1199 {
        position: static;
        margin-top: 3.2rem;
        margin-bottom: 3rem;
      }
      @include w767 {
        position: static;
        top: 2.3rem;
        left: 2.3rem;
        margin: 0;
        margin-bottom: 2rem;
      }
      svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }
}
</style>
