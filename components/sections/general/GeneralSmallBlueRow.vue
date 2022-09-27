<template>
  <div class="section-margin row">
    <div class="row__icon">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70602 9.72214C8.64415 8.18578 10.3207 7.25 12.1258 7.25C14.7411 7.25 16.91 9.18224 17.2493 11.6968C17.9874 11.062 18.9496 10.6786 20 10.6786C21.0504 10.6786 22.0126 11.062 22.7507 11.6968C23.09 9.18224 25.2589 7.25 27.8742 7.25C29.6793 7.25 31.3558 8.18578 32.294 9.72214L38.3226 19.595C39.2242 20.9377 39.75 22.5517 39.75 24.2857C39.75 28.9657 35.9289 32.75 31.2273 32.75C26.5256 32.75 22.7045 28.9657 22.7045 24.2857C22.7045 22.8117 21.499 21.6071 20 21.6071C18.501 21.6071 17.2955 22.8117 17.2955 24.2857C17.2955 28.9657 13.4744 32.75 8.77273 32.75C4.0711 32.75 0.25 28.9657 0.25 24.2857C0.25 22.5517 0.775847 20.9377 1.67741 19.595L7.70602 9.72214ZM5.28899 16.5587C6.35266 16.085 7.53185 15.8214 8.77273 15.8214C11.6839 15.8214 14.2575 17.2723 15.7955 19.4883V12.3864C15.7955 10.3834 14.1579 8.75 12.1258 8.75C10.8399 8.75 9.65008 9.41667 8.98622 10.5039L5.28899 16.5587ZM17.2955 14.8571V21.0863C18.0273 20.4749 18.9714 20.1071 20 20.1071C21.0286 20.1071 21.9727 20.4749 22.7045 21.0863V14.8571C22.7045 13.3831 21.499 12.1786 20 12.1786C18.501 12.1786 17.2955 13.3831 17.2955 14.8571ZM24.2045 19.4883C25.7425 17.2723 28.3161 15.8214 31.2273 15.8214C32.4681 15.8214 33.6473 16.085 34.711 16.5587L31.0138 10.5039C30.3499 9.41667 29.1601 8.75 27.8742 8.75C25.8421 8.75 24.2045 10.3834 24.2045 12.3864V19.4883ZM24.2045 24.2857C24.2045 28.1267 27.3434 31.25 31.2273 31.25C35.1112 31.25 38.25 28.1267 38.25 24.2857C38.25 22.8543 37.8153 21.5255 37.0693 20.4194C35.8093 18.5512 33.6639 17.3214 31.2273 17.3214C27.3434 17.3214 24.2045 20.4448 24.2045 24.2857ZM15.7955 24.2857C15.7955 20.4448 12.6566 17.3214 8.77273 17.3214C6.33605 17.3214 4.19066 18.5512 2.93068 20.4194C2.18468 21.5255 1.75 22.8543 1.75 24.2857C1.75 28.1267 4.88884 31.25 8.77273 31.25C12.6566 31.25 15.7955 28.1267 15.7955 24.2857Z" fill="white"/>
      </svg>
    </div>
    <p class="row__text">{{ $t('general.demonstration.text') }}</p>
    <nuxt-link to="/" class="btn btn-white-filled row__btn">
      {{ $t('general.demonstration.btn') }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'GeneralSmallBlueRow'
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;
  padding: 2.4rem;
  border-radius: 1.6rem;
  background-color: var(--primary-blue);
  @include w1023 {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  &__icon {
    width: 6.4rem;
    height: 6.4rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2.4rem;
    border: 0.1rem dashed var(--primary-100);
    border-radius: 0.8rem;
    @include w1023 {
      margin-right: 0;
      margin-bottom: 2.4rem;
    }
    svg {
      width: 4rem;
    }
  }
  &__text {
    margin-right: auto;
    margin-bottom: 0;
    font-weight: 450;
    font-size: 2.4rem;
    line-height: 1.33;
    color: var(--text-000);
    letter-spacing: -0.03em;
    @include w1023 {
      max-width: 45rem;
      margin-right: 0;
      margin-bottom: 2.4rem;
    }
    @include w767 {
      max-width: 25rem;
      font-size: 2rem;
      line-height: 1.4;
    }
    @include w359 {
      font-size: 1.9rem;
    }
  }
  &__btn {
    padding: 1.6rem 3.2rem;
    white-space: nowrap;
    letter-spacing: normal;
    line-height: 1.12;
    @include w767 {
      width: 100%;
      padding: 1.6rem 0;
    }
  }
}
</style>
