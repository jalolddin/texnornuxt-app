<template>
  <section class="section-margin faq">
    <div class="faq__head">
      <div class="faq__head--title">Ответы на<br>популярные вопросы</div>
      <div class="faq__head--text">Не нашли ответа на свой вопрос?<br>Напишите нам в чат Телеграмм или во ВКонтакте</div>
    </div>
    <div class="faq__list">
      <div class="faq-list__item" v-for="(item, index) in faqs" :key="item.q">
        <div class="faq-list-item__head" @click="accordeonItemClick(index)">
          <h4>{{ item.q }}</h4>
          <span class="indicator indicator-close">
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 9L8.64645 9.35355L9 9.70711L9.35355 9.35355L9 9ZM0.646447 1.35355L8.64645 9.35355L9.35355 8.64645L1.35355 0.646447L0.646447 1.35355ZM9.35355 9.35355L17.3536 1.35355L16.6464 0.646447L8.64645 8.64645L9.35355 9.35355Z" fill="black"/>
            </svg>
          </span>
          <span class="indicator indicator-open hidden">
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L9.35355 0.646447L9 0.292893L8.64645 0.646447L9 1ZM1.35355 9.35355L9.35355 1.35355L8.64645 0.646447L0.646447 8.64645L1.35355 9.35355ZM8.64645 1.35355L16.6464 9.35355L17.3536 8.64645L9.35355 0.646447L8.64645 1.35355Z" fill="black"/>
            </svg>
          </span>
        </div>
        <div class="faq-list-item__content hidden" :data-ans-id="index">
          <div class="item-content__elem">
            <div class="elem__desc">{{ item.a }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="faq__foot--text">Не нашли ответа на свой вопрос?<br>Напишите нам в чат Телеграмм или во ВКонтакте</div>
  </section>
</template>

<script>
export default {
  name: 'IndustriesFAQ',
  props: {
    faqs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    accordeonItemClick (ansIndex) {
      const accordeonInfoElement = document.querySelectorAll('[data-ans-id="' + ansIndex + '"]')[0]
      if (accordeonInfoElement.classList.contains('block')) {
        accordeonInfoElement.classList.remove('block')
        accordeonInfoElement.classList.add('hidden')
        accordeonInfoElement.parentNode.classList.remove('active')
        document.querySelectorAll('.indicator-close')[ansIndex].classList.remove('hidden')
        document.querySelectorAll('.indicator-open')[ansIndex].classList.add('hidden')
      } else {
        accordeonInfoElement.classList.remove('hidden')
        accordeonInfoElement.classList.add('block')
        accordeonInfoElement.parentNode.classList.add('active')
        document.querySelectorAll('.indicator-close')[ansIndex].classList.add('hidden')
        document.querySelectorAll('.indicator-open')[ansIndex].classList.remove('hidden')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
.faq {
  margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: 0 var(--container-padding) 0rem;
  @include w767 {
    padding: 2.4rem var(--container-padding) 2rem;
  }
  display: block;
  color: var(--text-1000);
  &__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 3.2rem 5rem 3.2rem 3.2rem;
    &--title{
      font-size: 4rem;
    }
    &--text{
      font-size: 1.6rem;
      @include w1199 {
        display: none;
      }
    }
  }
  .active {
    background-color: var(--text-200);
  }
  &__list {
    &:first-child {
      margin-top: none;
    }
  }
  &-list {
    display: block;
    &__item {
      border: 0.1rem solid var(--text-300);
      border-radius: 1.6rem;
      margin-top: 1.6rem;
      .indicator {
        padding: 0.5rem 0.8rem;
        border-radius: 50%;
        border: 0.1rem solid var(--text-300);
        background-color: var(--text-000);
      }
    }
    &-item__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 1.6rem;
    }
    &-item__content {
      color: var(--text-700);
      margin: 0 1.6rem 3.2rem 1.6rem;
    }
  }
  &__foot {
    &--text{
      display: none;
      margin: 1.6rem;
      font-size: 1.6rem;
      @include w1199 {
        display: block;
      }
    }
  }
}
</style>
