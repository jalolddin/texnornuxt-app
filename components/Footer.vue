<template>
  <footer class="footer">
    <div class="footer__block footer__subs">
      <CommonLogo place="footer"/>
      <form v-if="mounted" @submit.prevent="submit" class="footer__form">
        <p class="footer-form__text" v-html="$t('footer.text')"/>
        <div class="footer-form__wrap">
          <input placeholder="ivan@mail.ru" name="email" v-model="email" :class="['footer-form__input', { 'error': $v.email.$error }]">
          <button class="footer-form__btn" type="submit">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12L16.3536 12.3536L16.7071 12L16.3536 11.6464L16 12ZM7.64645 4.35355L15.6464 12.3536L16.3536 11.6464L8.35355 3.64645L7.64645 4.35355ZM15.6464 11.6464L7.64645 19.6464L8.35355 20.3536L16.3536 12.3536L15.6464 11.6464Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </form>
      <CommonSocials place="footer"/>
    </div>
    <div class="footer__block footer__grid">
      <ul class="footer-grid__nav navLeft">
        <li v-for="(item, index) in navLeft" :key="index">
          <nuxt-link class="footer-grid__link big" :to="item.link">
            {{ $t(`footer.navLeft[${index}]`) }}
          </nuxt-link>
        </li>
      </ul>
      <ul class="footer-grid__nav navRight">
        <li v-for="(item, index) in navRight" :key="index">
          <nuxt-link class="footer-grid__link small" :to="item.link">
            {{ $t(`footer.navRight[${index}]`) }}
          </nuxt-link>
        </li>
      </ul>
      <CommonLocales/>
      <CommonSocials place="footer"/>
    </div>
    <div class="footer__block footer__contacts">
      <a class="footer__text footer__link" href="tel:8 800 250-00-16">8 800 250-00-16</a>
      <p class="footer__text">{{ $t('footer.address[0]') }}</p>
      <a class="footer__text footer__link" href="mailto:info@skrt.biz">info@skrt.biz</a>
      <p class="footer__text">{{ $t('footer.address[1]') }}</p>
    </div>
    <div class="footer__block footer__bottom">
      <p class="footer__text footer-bottom__text" v-html="$t('footer.rights')"/>
      <nuxt-link to="#" class="footer__text footer-bottom__text footer__link">{{ $t('footer.privacy') }}</nuxt-link>
      <p class="footer__text footer-bottom__text">Made with love by <a href="#" class="footer__link">Dopamine</a></p>
    </div>
  </footer>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Footer',
  data () {
    return {
      mounted: false,
      email: '',
      navLeft: [
        { link: '#' },
        { link: '#' },
        { link: '#' },
        { link: '#' },
        { link: '#' }
      ],
      navRight: [
        { link: '#' },
        { link: '#' },
        { link: '#' },
        { link: '#' }
      ]
    }
  },
  validations: {
    email: {
      required,
      email: val => /^[0-9a-z\-._]+@[0-9a-z\-_]{2,}.[a-z]{2,}$/i.test(val)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.mounted = true
    })
  },
  methods: {
    submit () {
      this.$v.email.$touch()
      setTimeout(() => {
        if (!this.$v.$invalid) {
          console.log('Форма отправлена')
        }
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: 42.1% 1fr;
  grid-template-rows: 1fr auto auto;
  grid-gap: 0.4rem;
  margin: 0 calc(-1 * var(--container-padding));
  @include w1023 {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
  &__block {
    background-color: var(--text-200);
    &:nth-child(1) {
      grid-row: 1 / 3;
      @include w1023 {
        grid-row: auto;
      }
    }
    &:nth-child(4) {
      grid-column: 1 / 3;
      @include w1023 {
        grid-column: auto;
      }
    }
  }
  &__subs {
    padding: 8rem var(--container-padding) 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @include w1023 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 4rem var(--container-padding);
    }
    @include w767 {
      grid-template-columns: auto;
    }
    .header-dropdown__socials {
      @include w1023 {
        display: none;
      }
    }
  }
  &__form {
    width: 33.6rem;
    margin-top: 8rem;
    margin-bottom: 5rem;
    @include w1023 {
      width: auto;
      margin-top: 0;
      margin-bottom: 0;
    }
    @include w767 {
      margin-top: 3.2rem;
    }
  }
  &-form {
    &__text {
      margin-bottom: 2rem;
      font-size: 1.4rem;
      line-height: 1.7;
      letter-spacing: normal;
    }
    &__wrap {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
    }
    &__input {
      flex: 1;
      height: 5rem;
      padding: 0 2.4rem;
      border: 0.1rem solid var(--text-400);
      border-radius: 0.8rem 0 0 0.8rem;
      background: none;
      font-weight: 450;
      transition: border-color 0.2s;
      @include w767 {
        width: 23rem;
        padding: 0 2.3rem;
        letter-spacing: -0.03em;
      }
      &::placeholder {
        color: var(--text-400)
      }
      &:focus,
      &:focus + .footer-form__btn,
      &:not(:placeholder-shown),
      &:not(:placeholder-shown) + .footer-form__btn {
        border-color: var(--text-600);
      }
      &.error,
      &.error + .footer-form__btn {
        border-color: var(--secondary-error);
        &::placeholder {
          color: var(--secondary-error);
        }
      }
    }
    &__btn {
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: -0.1rem;
      padding: 0;
      background: none;
      border: 0.1rem solid var(--text-400);
      border-radius: 0 0.8rem 0.8rem 0;
      cursor: pointer;
      transition: 0.2s;
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
      svg {
        width: 2.4rem;
      }
    }
  }
  &__grid {
    padding: 8rem var(--container-padding) 8rem 12.2rem;
    display: grid;
    grid-template-columns: 1fr 20rem;
    grid-template-rows: 1fr auto;
    @include w1199 {
      padding: 8rem var(--container-padding);
    }
    @include w1023 {
      grid-template-columns: 1fr 1fr;
      padding: 4rem var(--container-padding);
    }
    @include w767 {
      grid-template-columns: auto;
    }
    .header-dropdown__socials {
      display: none;
      @include w1023 {
        display: flex;
      }
      @include w767 {
        margin-top: 4.1rem;
      }
    }
  }
  &-grid {
    &__nav {
      padding-left: 0;
      list-style: none;
      &.navLeft {
        grid-row: 1 / 3;
        @include w1023 {
          grid-row: auto;
          margin-bottom: 5.8rem;
        }
        @include w767 {
          margin-bottom: 4.1rem;
        }
        li + li {
          margin-top: 3.2rem;
          @include w1023 {
            margin-top: 2rem;
          }
        }
      }
      &.navRight {
        @include w767 {
          margin-bottom: 4.1rem;
        }
        li + li {
          margin-top: 1.6rem;
        }
      }
    }
    &__link {
      display: flex;
      width: fit-content;
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
      &.big {
        font-weight: 450;
        font-size: 2.4rem;
        line-height: 1.33;
        letter-spacing: -0.03em;
        @include w1023 {
          font-size: 2rem;
          line-height: 1.1;
        }
      }
      &.small {
        font-weight: 450;
        font-size: 1.4rem;
        line-height: 1.14;
        letter-spacing: normal;
      }
    }
  }
  &__contacts {
    padding: 4rem var(--container-padding) 4rem 12.2rem;
    display: grid;
    grid-row-gap: 1.6rem;
    grid-template-columns: 1fr 20rem;
    @include w1199 {
      padding: 4rem var(--container-padding);
    }
    @include w1023 {
      grid-template-columns: 1fr 1fr;
    }
    @include w767 {
      grid-template-columns: auto;
    }
    .footer__text {
      &:nth-child(2),
      &:nth-child(4) {
        @include w767 {
          order: 2;
        }
      }
      &:nth-child(2) {
        @include w767 {
          margin-top: 2.4rem;
        }
      }
    }
  }
  &__bottom {
    padding: 4rem var(--container-padding) 8rem;
    display: grid;
    grid-template-columns: calc(42.1% + 11.7rem) auto 1fr;
    @include w1199 {
      grid-template-columns: calc(42.1% + 3.3rem) auto 1fr;
    }
    @include w1023 {
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.6rem 0;
    }
    @include w767 {
      grid-template-columns: auto;
    }
  }
  &__text {
    margin-bottom: 0;
    font-size: 1.4rem;
    font-weight: 450;
    line-height: 1.14;
    color: var(--text-900);
    letter-spacing: normal;
  }
  &__link {
    white-space: nowrap;
    @include hover {
      &:hover,
      &:focus {
        opacity: 1;
        color: var(--primary-blue);
      }
      &:active {
        opacity: 1;
        color: var(--primary-shadow);
      }
    }
    @include active {
      &:active {
        opacity: 1;
        color: var(--primary-shadow);
      }
    }
  }
  &-bottom {
    &__text {
      opacity: 0.75;
      font-weight: 400;
      &:first-child {
        margin-right: auto;
        @include w1023 {
          order: 2;
        }
      }
      &:last-child {
        width: 20rem;
        margin-left: auto;
        @include w1023 {
          width: auto;
          margin-left: 0;
        }
        @include w767 {
          order: 3;
          margin-top: 2.4rem;
        }
      }
    }
  }
}
.header {
  &__locales {
    margin-left: 0;
    @include w1023 {
      display: flex;
    }
  }
  &-dropdown__socials {
    margin-top: auto;
  }
}
.footer__inversion {
   .footer__block {
    background-color: var(--text-000) !important;
  }
}
</style>
