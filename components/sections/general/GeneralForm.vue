<template>
  <section class="section-margin form">
    <div class="form__content">
      <div class="form__left">
        <img class="form__img" src="/images/square.png" :alt="$t('form.title')">
        <h2 class="title form__title">{{ $t('form.title') }}</h2>
        <p class="form__text">{{ $t('form.text') }}</p>
      </div>
      <div class="form__right">
        <form v-if="mounted" class="form__main" @submit.prevent.stop="submit">
          <template v-for="(field, key) in fields">
            <div v-if="key !== 'agreeTerms'" :key="key" class="form__block">
              <label :for="key" class="form__label">{{ $t(`form.fields.${key}`) }}</label>
              <input
                :id="key"
                :type="field.type"
                :placeholder="field.placeholder"
                v-model="field.value"
                :class="['form__input', { 'error': validObj.fields[key].$error }]"
              >
            </div>
            <div v-else :key="key" class="form__row">
              <button class="btn btn-blue-filled form__btn" type="submit">
                {{ $t('form.btn') }}
              </button>
              <label :class="['form__terms', { 'error': validObj.fields[key].$error }]">
                <input class="visually-hidden" type="checkbox" v-model="field.value">
                <span>{{ $t('form.fields.agreeTerms') }}</span>
              </label>
            </div>
          </template>
        </form>
        <div class="form__bottom">
          <ul class="form__socials">
            <li v-for="(social, index) in socials" :key="index" class="form__social">
              <a :href="social.link">
                <img :src="`/images/icons/${social.icon}.svg`" :alt="social.name" :title="social.name">
              </a>
            </li>
          </ul>
          <a class="form__link" href="mailto:info@skrt.biz">info@skrt.biz</a>
          <a class="form__link" href="tel:8 800 250-00-16">8 800 250-00-16</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { maxLength, minLength, required, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'GeneralForm',
  data () {
    return {
      mounted: false,
      fields: {
        name: {
          value: '',
          type: 'text',
          placeholder: 'Иванов Иван',
          vuelidate: {
            required,
            onlyChars: val => !/[^+\D]/g.test(val)
          }
        },
        phone: {
          value: '',
          type: 'tel',
          placeholder: '+7 (999) 786-25-05',
          vuelidate: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(25),
            phone: val => /^[0-9 +()-]*$/i.test(val)
          }
        },
        email: {
          value: '',
          type: 'tel',
          placeholder: 'ivan@mail.ru',
          vuelidate: {
            required,
            email: val => /^[0-9a-z\-._]+@[0-9a-z\-_]{2,}.[a-z]{2,}$/i.test(val)
          }
        },
        agreeTerms: {
          value: true,
          type: 'checkbox',
          vuelidate: {
            required,
            sameAs: sameAs(() => true)
          }
        }
      },
      socials: [
        {
          icon: 'tg',
          name: 'Telegram',
          link: '#'
        },
        {
          icon: 'vk',
          name: 'Vkontakte',
          link: '#'
        }
      ]
    }
  },
  validations () {
    const obj = {
      fields: {}
    }
    for (const key in this.fields) {
      if (this.fields[key].vuelidate) {
        obj.fields[key] = {
          value: this.fields[key].vuelidate
        }
      }
    }
    return obj
  },
  computed: {
    validObj () {
      return this.$v ? this.$v : false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.mounted = true
    })
  },
  methods: {
    submit () {
      this.$v.fields.$touch()
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
.form {
  margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: 8rem var(--container-padding);
  background-color: var(--text-200);
  @include w1199 {
    padding: 4rem var(--container-padding) 8rem;
  }
  @include w767 {
    padding: 2rem var(--container-padding) 0;
  }
  &__content {
    width: 109.6rem;
    max-width: 100%;
    min-height: 52.8rem;
    margin: 0 auto;
    background-color: var(--text-000);
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 1.6rem;
    overflow: hidden;
    @include w1023 {
      grid-template-columns: auto;
      min-height: auto;
    }
  }
  &__left {
    position: relative;
    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    color: var(--text-000);
    @include w767 {
      padding: 2.4rem 1.6rem;
    }
  }
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__title {
    position: relative;
    max-width: 33rem;
    margin: 0;
    @include w1023 {
      margin-bottom: 9.6rem;
      font-size: 4rem;
      line-height: 1.2;
    }
    @include w767 {
      max-width: 26rem;
      margin-bottom: 2.7rem;
      font-size: 2.4rem;
      line-height: 1.33;
    }
  }
  &__text {
    position: relative;
    max-width: 29.3rem;
    display: block;
    margin-top: auto;
    font-weight: 450;
    color: var(--primary-100);
  }
  &__main {
    padding: 3.2rem;
    @include w767 {
      padding: 2.4rem 1.6rem;
    }
  }
  &__block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3.2rem;
    @include w767 {
      margin-bottom: 2.4rem;
    }
  }
  &__label {
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    line-height: 1.14;
    letter-spacing: normal;
    color: var(--text-700);
    cursor: pointer;
  }
  &__input {
    width: 100%;
    height: 5rem;
    padding: 0 2.4rem;
    background: var(--text-000);
    border: 0.1rem solid var(--text-300);
    border-radius: 0.8rem;
    &::placeholder {
      color: var(--text-400);
    }
    &.error {
      border-color: var(--secondary-error);
      &::placeholder {
        color: var(--secondary-error);
      }
    }
  }
  &__row {
    display: flex;
    align-items: center;
    @include w767 {
      align-items: flex-start;
      flex-direction: column;
    }
  }
  &__btn {
    margin-right: 3.2rem;
    padding: 1.6rem 3.2rem;
    @include w767 {
      width: 100%;
      margin-right: 0;
      margin-bottom: 2.4rem;
      font-size: 1.6rem;
    }
  }
  &__terms {
    display: flex;
    cursor: pointer;
    @include hover {
      &:hover span,
      &:focus span {
        color: var(--primary-blue);
      }
      &:active span {
        color: var(--primary-shadow);
      }
    }
    @include active {
      &:active span {
        color: var(--primary-shadow);
      }
    }
    &.error span {
      color: var(--secondary-error);
      &:before {
        border-color: var(--secondary-error);
      }
    }
    input {
      &:checked + span {
        &:before {
          background: var(--primary-blue);
        }
      }
    }
    span {
      position: relative;
      display: flex;
      align-items: center;
      color: var(--text-600);
      font-weight: 450;
      line-height: 1.12;
      letter-spacing: normal;
      transition: color 0.2s;
      white-space: nowrap;
      @include w359 {
        font-size: 1.4rem;
      }
      &:before {
        content: '';
        width: 1.6rem;
        height: 1.6rem;
        margin-right: 0.8rem;
        border: 0.1rem solid var(--primary-blue);
        border-radius: 0.4rem;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0.5rem;
        left: 0.4rem;
        width: 0.8rem;
        height: 0.5rem;
        border-left: 0.2rem solid var(--text-000);
        border-bottom: 0.2rem solid var(--text-000);
        transform: rotate(-45deg);
      }
    }
  }
  &__bottom {
    display: flex;
    padding: 3.2rem;
    align-items: center;
    border-top: 0.1rem solid var(--text-200);
    @include w767 {
      flex-direction: column;
      align-items: center;
      padding: 2.4rem;
    }
  }
  &__socials {
    display: flex;
    padding-left: 0;
    list-style: none;
    @include w767 {
      order: 2;
    }
  }
  &__social {
    flex-shrink: 0;
    & + & {
      margin-left: 2rem;
    }
    a {
      width: 3.2rem;
      height: 3.2rem;
      display: flex;
      margin: 0;
      border-radius: 50%;
      transition: transform 0.3s;
      @include hover {
        &:hover,
        &:focus {
          transform: translateY(-0.4rem);
        }
      }
      @include active {
        &:active {
          transform: translateY(-0.4rem);
        }
      }
    }
    svg {
      margin: auto;
      height: auto;
      display: block;
    }
  }
  &__link {
    margin-left: 2rem;
    font-weight: 450;
    line-height: 1.12;
    letter-spacing: normal;
    color: var(--text-1000);
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
      margin-bottom: 2rem;
      margin-left: 0;
    }
  }
}
</style>
