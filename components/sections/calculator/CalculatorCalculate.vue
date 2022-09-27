<template>
  <section class="section-margin calculate">
    <div class="calculate__content">
      <div class="calculate__title">Калькулятор экономии</div>
      <div class="calculate__row" />
      <div class="calculate__container">
        <div class="calculate__info">Тип флота</div>
        <div class="calculate__group_first">
          <div v-for="(item, idx) in radio" :key="idx">
            <input class="calculate__radioinput" :id="item.id" :value="item.span" :name="item.name" v-model="type" type="radio">
            <label class="calculate__checkboxLabel" :for="item.id">
              <div class="calculate__circle">
                <div/>
              </div>
              <div class="calculate__box">
                <span>{{ item.span }}</span>
                <div style="display:flex" v-html="item.svg"/>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="calculate__row" />
      <div class="calculate__container">
        <div class="calculate__info">Задачи системы</div>
        <div class="calculate__group">
          <div v-for="(item, idx) in checkbox" :key="idx">
            <input class="calculate__radioinput" :id="item.id" :value="item.span" :name="item.name" v-model="checked" type="checkbox">
            <label class="calculate__checkboxLabel" :for="item.id">
              <div class="calculate__quadro">
                <div>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.52106 5.23328C2.22313 4.94551 1.74833 4.95374 1.46055 5.25167C1.17278 5.5496 1.18102 6.0244 1.47894 6.31217L2.52106 5.23328ZM4.82353 8.5L4.30247 9.03945C4.59312 9.32019 5.05394 9.32019 5.34458 9.03945L4.82353 8.5ZM10.5211 4.03945C10.819 3.75167 10.8272 3.27687 10.5394 2.97894C10.2517 2.68102 9.77687 2.67278 9.47894 2.96055L10.5211 4.03945ZM1.47894 6.31217L4.30247 9.03945L5.34458 7.96055L2.52106 5.23328L1.47894 6.31217ZM5.34458 9.03945L6.52106 7.90308L5.47894 6.82419L4.30247 7.96055L5.34458 9.03945ZM6.52106 7.90308L10.5211 4.03945L9.47894 2.96055L5.47894 6.82419L6.52106 7.90308Z" fill="#1333BB"/>
                  </svg>
                </div>
              </div>
              <div class="calculate__box">
                <span>{{ item.span }}</span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="calculate__row" />
      <!-- Calculate range input -->
      <div class="calculate__range">
        <!-- Расход в месяц (общий) -->
        <div>
          <span class="total_title">Расход в месяц (общий)</span>
          <div>
            <span>{{ value_tonn }}</span>
            <span>тонн</span>
          </div>
          <input type="range" min="0" max="1000" step="1" v-model="value_tonn">
        </div>
        <!-- Размер флота -->
        <div>
          <span class="total_title">Размер флота</span>
          <div>
            <span>{{ value_num }}</span>
            <span>единиц</span>
          </div>
          <input type="range" min="0" max="10" step="1" v-model="value_num">
        </div>
      </div>
      <!-- Calculate Result -->
      <span class="line"/>
      <div class="calculate__result">
        <div>
          <span>Экономия в год</span>
          <div v-if="checked.length" class="result__number">
            <span v-if="checked">{{ beforeMultiple }}  <el style="color: #E1E1E1;"> * 12</el> </span>
            <span>=</span>
            <span>{{ year.toLocaleString('ru-RU') + ' ' + '₽' }}</span>
          </div>
          <!-- Before Checked -->
          <div v-else class="result__number">
            <span>0 <el style="color: #E1E1E1;"> * 12</el> </span>
            <span>=</span>
            <span>0</span>
          </div>
        </div>
        <div class="calculate__row" />
        <div class="result__number">
          <span>Окупаемость</span>
          <span v-if="month === Infinity || !checked.length">0 месяцев</span>
          <span v-else>{{ month || 0 }} месяцев </span>
        </div>
      </div>
      <CalculatorContact />
    </div>
  </section>
</template>

<script>
import CalculatorContact from './CalculatorContact.vue'
export default {
  name: 'CalculatorCalculate',
  components: { CalculatorContact },
  data () {
    return {
      value_tonn: 10,
      value_num: 1,
      type: 'Речной',
      checked: ['Контроль команды'],
      radio: [{
        id: 'riverine',
        name: 'type',
        span: 'Речной',
        svg: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.75" y1="8.75" x2="31.25" y2="8.75" stroke="#E1E1E1" stroke-width="1.5" stroke-linecap="round"/><line x1="0.75" y1="13.75" x2="31.25" y2="13.75" stroke="#E1E1E1" stroke-width="1.5" stroke-linecap="round"/><line x1="0.75" y1="18.75" x2="31.25" y2="18.75" stroke="#E1E1E1" stroke-width="1.5" stroke-linecap="round"/><line x1="0.75" y1="23.75" x2="31.25" y2="23.75" stroke="#E1E1E1" stroke-width="1.5" stroke-linecap="round"/></svg>'
      }, {
        id: 'marine',
        name: 'type',
        span: 'Морской',
        svg: '<svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 5.5C5.75 5.08579 5.41421 4.75 5 4.75C4.58579 4.75 4.25 5.08579 4.25 5.5H5.75ZM1 7.75C0.585786 7.75 0.25 8.08579 0.25 8.5C0.25 8.91421 0.585786 9.25 1 9.25V7.75ZM13.75 5.5C13.75 5.08579 13.4142 4.75 13 4.75C12.5858 4.75 12.25 5.08579 12.25 5.5H13.75ZM21.75 5.5C21.75 5.08579 21.4142 4.75 21 4.75C20.5858 4.75 20.25 5.08579 20.25 5.5H21.75ZM29.75 5.5C29.75 5.08579 29.4142 4.75 29 4.75C28.5858 4.75 28.25 5.08579 28.25 5.5H29.75ZM33 9.25C33.4142 9.25 33.75 8.91421 33.75 8.5C33.75 8.08579 33.4142 7.75 33 7.75V9.25ZM4.25 5.5C4.25 5.91981 3.95189 6.47358 3.3 6.9625C2.66696 7.43728 1.82234 7.75 1 7.75V9.25C2.17766 9.25 3.33304 8.81272 4.2 8.1625C5.04811 7.52642 5.75 6.58019 5.75 5.5H4.25ZM12.25 5.5C12.25 5.91981 11.9519 6.47358 11.3 6.9625C10.667 7.43728 9.82234 7.75 9 7.75V9.25C10.1777 9.25 11.333 8.81272 12.2 8.1625C13.0481 7.52642 13.75 6.58019 13.75 5.5H12.25ZM9 7.75C8.17766 7.75 7.33304 7.43728 6.7 6.9625C6.04811 6.47358 5.75 5.91981 5.75 5.5H4.25C4.25 6.58019 4.95189 7.52642 5.8 8.1625C6.66696 8.81272 7.82234 9.25 9 9.25V7.75ZM20.25 5.5C20.25 5.91981 19.9519 6.47358 19.3 6.9625C18.667 7.43728 17.8223 7.75 17 7.75V9.25C18.1777 9.25 19.333 8.81272 20.2 8.1625C21.0481 7.52642 21.75 6.58019 21.75 5.5H20.25ZM17 7.75C16.1777 7.75 15.333 7.43728 14.7 6.9625C14.0481 6.47358 13.75 5.91981 13.75 5.5H12.25C12.25 6.58019 12.9519 7.52642 13.8 8.1625C14.667 8.81272 15.8223 9.25 17 9.25V7.75ZM28.25 5.5C28.25 5.91981 27.9519 6.47358 27.3 6.9625C26.667 7.43728 25.8223 7.75 25 7.75V9.25C26.1777 9.25 27.333 8.81272 28.2 8.1625C29.0481 7.52642 29.75 6.58019 29.75 5.5H28.25ZM25 7.75C24.1777 7.75 23.333 7.43728 22.7 6.9625C22.0481 6.47358 21.75 5.91981 21.75 5.5H20.25C20.25 6.58019 20.9519 7.52642 21.8 8.1625C22.667 8.81272 23.8223 9.25 25 9.25V7.75ZM33 7.75C32.1777 7.75 31.333 7.43728 30.7 6.9625C30.0481 6.47358 29.75 5.91981 29.75 5.5H28.25C28.25 6.58019 28.9519 7.52642 29.8 8.1625C30.667 8.81272 31.8223 9.25 33 9.25V7.75Z" fill="#E1E1E1"/><path d="M5.75 11.5C5.75 11.0858 5.41421 10.75 5 10.75C4.58579 10.75 4.25 11.0858 4.25 11.5H5.75ZM1 13.75C0.585786 13.75 0.25 14.0858 0.25 14.5C0.25 14.9142 0.585786 15.25 1 15.25V13.75ZM13.75 11.5C13.75 11.0858 13.4142 10.75 13 10.75C12.5858 10.75 12.25 11.0858 12.25 11.5H13.75ZM21.75 11.5C21.75 11.0858 21.4142 10.75 21 10.75C20.5858 10.75 20.25 11.0858 20.25 11.5H21.75ZM29.75 11.5C29.75 11.0858 29.4142 10.75 29 10.75C28.5858 10.75 28.25 11.0858 28.25 11.5H29.75ZM33 15.25C33.4142 15.25 33.75 14.9142 33.75 14.5C33.75 14.0858 33.4142 13.75 33 13.75V15.25ZM4.25 11.5C4.25 11.9198 3.95189 12.4736 3.3 12.9625C2.66696 13.4373 1.82234 13.75 1 13.75V15.25C2.17766 15.25 3.33304 14.8127 4.2 14.1625C5.04811 13.5264 5.75 12.5802 5.75 11.5H4.25ZM12.25 11.5C12.25 11.9198 11.9519 12.4736 11.3 12.9625C10.667 13.4373 9.82234 13.75 9 13.75V15.25C10.1777 15.25 11.333 14.8127 12.2 14.1625C13.0481 13.5264 13.75 12.5802 13.75 11.5H12.25ZM9 13.75C8.17766 13.75 7.33304 13.4373 6.7 12.9625C6.04811 12.4736 5.75 11.9198 5.75 11.5H4.25C4.25 12.5802 4.95189 13.5264 5.8 14.1625C6.66696 14.8127 7.82234 15.25 9 15.25V13.75ZM20.25 11.5C20.25 11.9198 19.9519 12.4736 19.3 12.9625C18.667 13.4373 17.8223 13.75 17 13.75V15.25C18.1777 15.25 19.333 14.8127 20.2 14.1625C21.0481 13.5264 21.75 12.5802 21.75 11.5H20.25ZM17 13.75C16.1777 13.75 15.333 13.4373 14.7 12.9625C14.0481 12.4736 13.75 11.9198 13.75 11.5H12.25C12.25 12.5802 12.9519 13.5264 13.8 14.1625C14.667 14.8127 15.8223 15.25 17 15.25V13.75ZM28.25 11.5C28.25 11.9198 27.9519 12.4736 27.3 12.9625C26.667 13.4373 25.8223 13.75 25 13.75V15.25C26.1777 15.25 27.333 14.8127 28.2 14.1625C29.0481 13.5264 29.75 12.5802 29.75 11.5H28.25ZM25 13.75C24.1777 13.75 23.333 13.4373 22.7 12.9625C22.0481 12.4736 21.75 11.9198 21.75 11.5H20.25C20.25 12.5802 20.9519 13.5264 21.8 14.1625C22.667 14.8127 23.8223 15.25 25 15.25V13.75ZM33 13.75C32.1777 13.75 31.333 13.4373 30.7 12.9625C30.0481 12.4736 29.75 11.9198 29.75 11.5H28.25C28.25 12.5802 28.9519 13.5264 29.8 14.1625C30.667 14.8127 31.8223 15.25 33 15.25V13.75Z" fill="#E1E1E1"/><path d="M5.75 17.5C5.75 17.0858 5.41421 16.75 5 16.75C4.58579 16.75 4.25 17.0858 4.25 17.5H5.75ZM1 19.75C0.585786 19.75 0.25 20.0858 0.25 20.5C0.25 20.9142 0.585786 21.25 1 21.25V19.75ZM13.75 17.5C13.75 17.0858 13.4142 16.75 13 16.75C12.5858 16.75 12.25 17.0858 12.25 17.5H13.75ZM21.75 17.5C21.75 17.0858 21.4142 16.75 21 16.75C20.5858 16.75 20.25 17.0858 20.25 17.5H21.75ZM29.75 17.5C29.75 17.0858 29.4142 16.75 29 16.75C28.5858 16.75 28.25 17.0858 28.25 17.5H29.75ZM33 21.25C33.4142 21.25 33.75 20.9142 33.75 20.5C33.75 20.0858 33.4142 19.75 33 19.75V21.25ZM4.25 17.5C4.25 17.9198 3.95189 18.4736 3.3 18.9625C2.66696 19.4373 1.82234 19.75 1 19.75V21.25C2.17766 21.25 3.33304 20.8127 4.2 20.1625C5.04811 19.5264 5.75 18.5802 5.75 17.5H4.25ZM12.25 17.5C12.25 17.9198 11.9519 18.4736 11.3 18.9625C10.667 19.4373 9.82234 19.75 9 19.75V21.25C10.1777 21.25 11.333 20.8127 12.2 20.1625C13.0481 19.5264 13.75 18.5802 13.75 17.5H12.25ZM9 19.75C8.17766 19.75 7.33304 19.4373 6.7 18.9625C6.04811 18.4736 5.75 17.9198 5.75 17.5H4.25C4.25 18.5802 4.95189 19.5264 5.8 20.1625C6.66696 20.8127 7.82234 21.25 9 21.25V19.75ZM20.25 17.5C20.25 17.9198 19.9519 18.4736 19.3 18.9625C18.667 19.4373 17.8223 19.75 17 19.75V21.25C18.1777 21.25 19.333 20.8127 20.2 20.1625C21.0481 19.5264 21.75 18.5802 21.75 17.5H20.25ZM17 19.75C16.1777 19.75 15.333 19.4373 14.7 18.9625C14.0481 18.4736 13.75 17.9198 13.75 17.5H12.25C12.25 18.5802 12.9519 19.5264 13.8 20.1625C14.667 20.8127 15.8223 21.25 17 21.25V19.75ZM28.25 17.5C28.25 17.9198 27.9519 18.4736 27.3 18.9625C26.667 19.4373 25.8223 19.75 25 19.75V21.25C26.1777 21.25 27.333 20.8127 28.2 20.1625C29.0481 19.5264 29.75 18.5802 29.75 17.5H28.25ZM25 19.75C24.1777 19.75 23.333 19.4373 22.7 18.9625C22.0481 18.4736 21.75 17.9198 21.75 17.5H20.25C20.25 18.5802 20.9519 19.5264 21.8 20.1625C22.667 20.8127 23.8223 21.25 25 21.25V19.75ZM33 19.75C32.1777 19.75 31.333 19.4373 30.7 18.9625C30.0481 18.4736 29.75 17.9198 29.75 17.5H28.25C28.25 18.5802 28.9519 19.5264 29.8 20.1625C30.667 20.8127 31.8223 21.25 33 21.25V19.75Z" fill="#E1E1E1"/><path d="M5.75 23.5C5.75 23.0858 5.41421 22.75 5 22.75C4.58579 22.75 4.25 23.0858 4.25 23.5H5.75ZM1 25.75C0.585786 25.75 0.25 26.0858 0.25 26.5C0.25 26.9142 0.585786 27.25 1 27.25V25.75ZM13.75 23.5C13.75 23.0858 13.4142 22.75 13 22.75C12.5858 22.75 12.25 23.0858 12.25 23.5H13.75ZM21.75 23.5C21.75 23.0858 21.4142 22.75 21 22.75C20.5858 22.75 20.25 23.0858 20.25 23.5H21.75ZM29.75 23.5C29.75 23.0858 29.4142 22.75 29 22.75C28.5858 22.75 28.25 23.0858 28.25 23.5H29.75ZM33 27.25C33.4142 27.25 33.75 26.9142 33.75 26.5C33.75 26.0858 33.4142 25.75 33 25.75V27.25ZM4.25 23.5C4.25 23.9198 3.95189 24.4736 3.3 24.9625C2.66696 25.4373 1.82234 25.75 1 25.75V27.25C2.17766 27.25 3.33304 26.8127 4.2 26.1625C5.04811 25.5264 5.75 24.5802 5.75 23.5H4.25ZM12.25 23.5C12.25 23.9198 11.9519 24.4736 11.3 24.9625C10.667 25.4373 9.82234 25.75 9 25.75V27.25C10.1777 27.25 11.333 26.8127 12.2 26.1625C13.0481 25.5264 13.75 24.5802 13.75 23.5H12.25ZM9 25.75C8.17766 25.75 7.33304 25.4373 6.7 24.9625C6.04811 24.4736 5.75 23.9198 5.75 23.5H4.25C4.25 24.5802 4.95189 25.5264 5.8 26.1625C6.66696 26.8127 7.82234 27.25 9 27.25V25.75ZM20.25 23.5C20.25 23.9198 19.9519 24.4736 19.3 24.9625C18.667 25.4373 17.8223 25.75 17 25.75V27.25C18.1777 27.25 19.333 26.8127 20.2 26.1625C21.0481 25.5264 21.75 24.5802 21.75 23.5H20.25ZM17 25.75C16.1777 25.75 15.333 25.4373 14.7 24.9625C14.0481 24.4736 13.75 23.9198 13.75 23.5H12.25C12.25 24.5802 12.9519 25.5264 13.8 26.1625C14.667 26.8127 15.8223 27.25 17 27.25V25.75ZM28.25 23.5C28.25 23.9198 27.9519 24.4736 27.3 24.9625C26.667 25.4373 25.8223 25.75 25 25.75V27.25C26.1777 27.25 27.333 26.8127 28.2 26.1625C29.0481 25.5264 29.75 24.5802 29.75 23.5H28.25ZM25 25.75C24.1777 25.75 23.333 25.4373 22.7 24.9625C22.0481 24.4736 21.75 23.9198 21.75 23.5H20.25C20.25 24.5802 20.9519 25.5264 21.8 26.1625C22.667 26.8127 23.8223 27.25 25 27.25V25.75ZM33 25.75C32.1777 25.75 31.333 25.4373 30.7 24.9625C30.0481 24.4736 29.75 23.9198 29.75 23.5H28.25C28.25 24.5802 28.9519 25.5264 29.8 26.1625C30.667 26.8127 31.8223 27.25 33 27.25V25.75Z" fill="#E1E1E1"/></svg>'
      }],
      checkbox: [{
        id: 'control',
        name: 'tasks',
        span: 'Контроль команды'
      }, {
        id: 'auto',
        name: 'tasks',
        span: 'Автоматизация отчетности'
      }, {
        id: 'top',
        name: 'tasks',
        span: 'Расход топлива'
      }, {
        id: 'jid',
        name: 'tasks',
        span: 'Расход жидкостей '
      }, {
        id: 'anal',
        name: 'tasks',
        span: 'Аналитика'
      }, {
        id: 'bunk',
        name: 'tasks',
        span: 'Бункеровка'
      }]
    }
  },
  computed: {
    year () {
      return Math.floor(this.value_tonn * 55000 * (0.07 + (this.checked.length / 100)) * 12)
    },
    beforeMultiple () {
      return Math.floor(this.value_tonn * 55000 * (0.07 + (this.checked.length / 100)))
    },
    month () {
      return Math.ceil(1500000 * this.value_num / this.year * 12)
    }
  }
}
</script>
<style lang="scss" scoped>
.calculate {
  &__content {
    background-color: var(--text-000);
    margin: 0 auto;
    margin-top: -8.8rem;
    border-radius: 1.6rem;
    max-width: 87.2rem;
    padding: 3.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 3.2rem;
  @include w490{
    padding: 2.4rem;
    margin-top: 8%;
  }
  }
  &__title {
    font-weight: 450;
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: -0.03em;
  }
  &__row {
    width: 100%;
    height: 1px;
    background-color: #F2F2F2;
  }
  &__group_first{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;
    max-width: 65rem;
    @include w490 {
      display: flex;
      flex-direction: column;
      max-width: 50rem;
    }
    @include mix500 {
      // margin-left: -1.5rem;
    //  column-gap: 20px;
    //  row-gap: 15px;
     grid-column-gap: 0.8rem;
     grid-template-columns: repeat(3, 1fr);
    }
  }
  &__group {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;
    @include min490{
      grid-template-columns: repeat(2, 1fr);
      // column-gap: 5rem;
    }
    @include mix500 {
   display: grid;
   grid-template-columns: repeat(3, 2fr);
   grid-gap: 0.8rem;
  //  column-gap: 30px;
  //  margin-left: -1.5rem;
  //  row-gap: 15px;
  }
}
  &__box {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &__info {
    font-weight: 450;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: var(--text-700);
    margin-bottom: 1.6rem;
  }
  &__circle {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    margin-bottom: 1.6rem;
    background-color: var(--text-000);
    border: 1px solid var(--text-200);
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      transition: background-color .2s ease;
      background-color: var(--text-000);
    }
  }
  &__quadro {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.4rem;
    margin-bottom: 1.6rem;
    background-color: var(--text-000);
    border: 1px solid var(--text-200);
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: none;
    }
  }
  &__radioinput {
    display: none;
    &:checked + .calculate__checkboxLabel {
      background: var(--primary-blue);
      color: var(--text-000);
      .calculate__circle {
        div {
          background-color: var(--primary-blue);
        }
      }
      .calculate__quadro {
        div {
          display: block;
        }
      }
    }
  }
  &__checkboxLabel {
      cursor: pointer;
      max-width: 110%;
      display: flex;
      flex-direction: column;
      padding: 1.6rem;
      border-radius: 0.8rem;
      border: 1px solid var(--text-200);
      transition: all .2s ease;
      height: 100%;
      justify-content: space-between;
      span {
        font-weight: 450;
        font-size: 1.4rem;
        line-height: 1.6rem;
      }
  }
  &__range{
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    column-gap: 2.4rem;
    cursor: pointer;
    @include w920{
      gap: 7rem;
      display: flex;
      flex-direction: column;
    }
    div {
      width: 50%;
      height: 50px;
      border-radius: 8px;
      border: 1px solid #F2F2F2;
      display: flex;
      flex-direction: column;
      max-width: 100%;
      .total_title{
        margin-top: -3.5rem;
        color: #4A4A4A;
        font-size: 14px;
        margin-bottom: 1.5rem;
      }
      @include w920 {
   width: 100%;
    }
      input{
        border-radius: 5px;
        height: 6px;
       width: 87%;
       margin: 0 auto;
       margin-top: 10px;
      }
    div {
      display: flex;
      padding-top: 10px;
      flex-direction: row;
      justify-content: space-between;
      border: none;
      width: 87%;
      margin: 0 auto;
    font-weight: 450;
    }
    }
  }
  .line{
    height: 6px;
    background-color: #F2F2F2;
    width: calc(100% + 6.4rem);
    position: relative;
    left: -3.2rem;

    @include w767{
    }
    @include min490{
      width: 125%;
    }
  }
  &__result{
display: flex;
flex-direction: column;
gap: 20px;
font-weight: 450;
div{
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  .result__number{
    display: flex;
    justify-content: space-between;
    span{
      margin-left: 1rem;
    }
  }
}
}
}

</style>
