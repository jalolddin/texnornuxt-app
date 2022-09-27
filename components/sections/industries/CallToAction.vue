<template>
  <section class="section-margin cta">
    <div class="cta__content">
      <div class="cta-content__icon">
        <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70602 2.72214C8.64415 1.18578 10.3207 0.25 12.1258 0.25C14.7411 0.25 16.91 2.18224 17.2493 4.69685C17.9874 4.06205 18.9496 3.67857 20 3.67857C21.0504 3.67857 22.0126 4.06205 22.7507 4.69685C23.09 2.18224 25.2589 0.25 27.8742 0.25C29.6793 0.25 31.3558 1.18578 32.294 2.72214L38.3226 12.595C39.2242 13.9377 39.75 15.5517 39.75 17.2857C39.75 21.9657 35.9289 25.75 31.2273 25.75C26.5256 25.75 22.7045 21.9657 22.7045 17.2857C22.7045 15.8117 21.499 14.6071 20 14.6071C18.501 14.6071 17.2955 15.8117 17.2955 17.2857C17.2955 21.9657 13.4744 25.75 8.77273 25.75C4.0711 25.75 0.25 21.9657 0.25 17.2857C0.25 15.5517 0.775847 13.9377 1.67741 12.595L7.70602 2.72214ZM5.28899 9.5587C6.35266 9.08495 7.53185 8.82143 8.77273 8.82143C11.6839 8.82143 14.2575 10.2723 15.7955 12.4883V5.3864C15.7955 3.3834 14.1579 1.75 12.1258 1.75C10.8399 1.75 9.65008 2.41667 8.98622 3.50386L5.28899 9.5587ZM17.2955 7.85714V14.0863C18.0273 13.4749 18.9714 13.1071 20 13.1071C21.0286 13.1071 21.9727 13.4749 22.7045 14.0863V7.85714C22.7045 6.38314 21.499 5.17857 20 5.17857C18.501 5.17857 17.2955 6.38314 17.2955 7.85714ZM24.2045 12.4883C25.7425 10.2723 28.3161 8.82143 31.2273 8.82143C32.4681 8.82143 33.6473 9.08496 34.711 9.5587L31.0138 3.50386C30.3499 2.41667 29.1601 1.75 27.8742 1.75C25.8421 1.75 24.2045 3.3834 24.2045 5.3864V12.4883ZM24.2045 17.2857C24.2045 21.1267 27.3434 24.25 31.2273 24.25C35.1112 24.25 38.25 21.1267 38.25 17.2857C38.25 15.8543 37.8153 14.5255 37.0693 13.4194C35.8093 11.5512 33.6639 10.3214 31.2273 10.3214C27.3434 10.3214 24.2045 13.4448 24.2045 17.2857ZM15.7955 17.2857C15.7955 13.4448 12.6566 10.3214 8.77273 10.3214C6.33605 10.3214 4.19066 11.5512 2.93068 13.4194C2.18468 14.5255 1.75 15.8543 1.75 17.2857C1.75 21.1267 4.88884 24.25 8.77273 24.25C12.6566 24.25 15.7955 21.1267 15.7955 17.2857Z" fill="white"/>
        </svg>
      </div>
      <div class="cta-content__text">Покажем, как работает наша система на примере реального объекта</div>
      <button class="btn btn-white-filled cta-content__btn">Записаться на демонстрацию</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndustriesCallToAction'
}
</script>

<style lang="scss" scoped>
.cta {
  margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: 0 var(--container-padding) 0rem;
  @include w767 {
    padding: 2.4rem var(--container-padding) 2rem;
  }
  display: block;
  color: var(--text-000);
  &__content {
    background-color: var(--primary-blue);
    border-radius: 1.6rem;
    height: 11.2rem;
    padding: 0 3.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @include w1199 {
      padding: 3.2rem 3.2rem;
      flex-direction: column;
      height: auto;
    }
    @include w767 {
      padding: 1.6rem 1.6rem;
      flex-direction: column;
      height: auto;
    }
  }
  &-content__icon {
    width: auto;
    height: 6.4rem;
    padding: 1.6rem;
    margin: 0.8rem 0;
    border: 0.1rem dashed var(--text-000);
    border-radius: 1.6rem;
  }
  &-content__text {
    margin: 0.8rem 0;
    font-size: 2.4rem;
    text-align: center;
    @include w767 {
      font-size: 1.6rem;
    }
  }
  &-content__btn {
    margin: 0.8rem 0;
    padding: 1.6rem 3.2rem;
    @include w767 {
      bottom: 1.6rem;
      left: 1.6rem;
      width: calc(100% - 3.2rem);
      margin: 0;
      padding: 1.6rem 0;
    }
  }
}
</style>
