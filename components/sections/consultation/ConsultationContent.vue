<template>
  <!-- Content with white background -->
  <section class="section-margin consultate">
    <div class="consultate__content">
      <span class="consultate__title">Решаем широкий спектр задач под любой запрос</span>
      <span>От систем контроля расхода топлива до визуализации данных</span>
      <!-- Cards -->
      <div class="consultate__cards">
        <div v-for="(card, index) in cards" :key="card" class="card">
          <img class="card__image" :src="card.icon" alt="">
          <div class="card__title">{{ card.title }}</div>
          <div class="card__index">0{{ index + 1 }} </div>
        </div>
      </div>
      <div class="consultate__row" />
      <div class="consultate__info">
        <span>Подберем оптимальную комплектацию именно для вас</span>
        <span>Мы в ГК Технодар хорошо знаем специфику отраслей и понимаем,
          с каким проблемами приходится сталкиваться чаще всего, поэтому наше оборудование отлично решает поставленные задачи </span>
      </div>
      <!-- Slider -->
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          icon: '/images/consultation/circle_1.png',
          title: 'Ответим на все вопросы технического характера'
        },
        {
          icon: '/images/consultation/circle_2.png',
          title: 'Рассчитаем сроки изготовления и полную стоимость'
        },
        {
          icon: '/images/consultation/circle_3.png',
          title: 'Подскажем условия доставки в ваш регион'
        },
        {
          icon: '/images/consultation/circle_4.png',
          title: 'Предложим варианты реализации ваших задач'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.consultate{
    &__content{
    background-color: var(--text-000);
    margin: 0 auto;
    margin-top: -19%;
    border-radius: 2rem;
    max-width: 108%;
    margin-bottom: -10rem;
    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    row-gap: 3.2rem;
    letter-spacing: -3%;
     @include min490{
      margin-top: 30rem;
      border-radius: 0;
      width: 120%;
      margin-left: -3%;
      padding: 1rem;
    }
    @include min500{
      margin-top: -9.1rem;
    }
    }
    &__title{
        font-size: 40px;
        line-height: 48px;
        letter-spacing: -3%;
        font-weight: 450;
        margin-top: 5%;
        margin-bottom: -1.5rem;
        max-width: 50rem;
        @include min490{
          font-size: 3rem;
          line-height: 40px;
    }
  }
  &__cards {
    display: flex;
    column-gap: 0.8rem;
    @include w1023{
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 2.5rem;
    }
    @include w580{
    justify-content: center;
    }
    .card {
      background: #F2F2F2;
      border-radius: 1.6rem;
      padding: 2.4rem;
      width: 25%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      // flex: 1;
      @include w1023{
      width: 45%;
    }
    @include w580{
      width: 100%
    }
    }
    .card__image {
      margin-bottom: 2rem;
    }
    .card__title {
      font-weight: 450;
      font-size: 2rem;
      line-height: 2.8rem;
      letter-spacing: -0.03em;
      color: #000000;
      margin-bottom: 2.4rem;
      height: 100%;
    }
   .card__index {
    font-weight: 450;
    font-size: 2rem;
    line-height: 2.8rem;
    letter-spacing: -0.03em;
    color: #E1E1E1;
   }
  }

    &__row {
    width: 100%;
    height: 2px;
    background-color: #F2F2F2;
    margin-bottom: 3%;
  }
&__info{
    display: flex;
    justify-content: space-between;
    @include  min490{
      margin-bottom: 5rem;
    }
    :nth-child(1){
     width: 610px;
     line-height: 48px;
     letter-spacing: -3%;
        font-size: 40px;
    font-weight: 450;
    @include w1199{
font-size: 31px;
line-height: 40px;
max-width: 100%;
    }
    @include min490{
      font-size: 24px;
    }
  }
  @include w1023 {
     display: flex;
     flex-direction: column;
     max-width: 100%;
    gap: 15px;
    }
    :nth-child(2){
width: 550px;
height: 72px;
font-size: 16px;
line-height: 25px;
margin-top: 16px;
letter-spacing: -3%;
color: #4A4A4A;
@include w1199{
  max-width: 100%;
}
    }
}
}
</style>>
