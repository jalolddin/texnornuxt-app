<template>
  <div class="row">
    <div class="row__icon">
      <img src="~/static/images/calculator/badge.png" alt="">
    </div>
    <p class="row__text">Поможем с рассчетами подберем оптимальную систему</p>
    <nuxt-link to="/" class="btn btn-white-filled row__btn">
      Оставить заявку
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
    margin-bottom: 1%;
    display: flex;
    align-items: center;
    padding: 2.4rem;
    border-radius: 1.6rem;
    background-color: var(--primary-blue);
//     @include w580{
// position: absolute;
// top: 120rem;
//     }
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
      background: none;
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
      @include w580 {
        max-width: 25rem;
        font-size: 2rem;
        line-height: 1.4;
      }
      @include w359 {
        font-size: 1.9rem;
        line-height: 28px;
        width: 280px;
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
