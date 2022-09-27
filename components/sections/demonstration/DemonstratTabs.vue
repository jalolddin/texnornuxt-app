<template>
  <section class="tab">
    <ul class="tab__selector">
      <li @click="activetab=1" :class="[activetab === 1 ? 'active' : '']">Флотa</li>
      <li @click="activetab=2" :class="[activetab === 2 ? 'active' : '']">Автотранспорт</li>
      <li @click="activetab=3" :class="[activetab === 3 ? 'active' : '']"> ЖД транспорт</li>
      <li @click="activetab=4" :class="[activetab === 4 ? 'active' : '']" >Буровые установки</li>
    </ul>
    <InfoSlider v-if="activetab === 1" />
    <SecondTab v-if="activetab === 2" />
    <ThirdTab v-if="activetab === 3" />
    <FourthTab v-if="activetab === 4" />
    <GeneralForm />
  </section>
</template>

<script>
import GeneralForm from '../general/GeneralForm.vue'
import InfoSlider from './InfoSlider.vue'
import SecondTab from './secondTab.vue'
import ThirdTab from './thirdTab.vue'
import FourthTab from './fourthTab.vue'
export default {
  name: 'DemonstrSlider',
  components: { InfoSlider, GeneralForm, SecondTab, ThirdTab, FourthTab },
  data () {
    return {
      activetab: 1
    }
  }
}
</script>

  <style lang="scss" scoped>
.tab{
  margin-top: -3rem;
  margin-bottom: -6%;
&__selector{
  position: relative;
  width: max-content;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 0.4rem;
  // margin: calc(-1 * (var(--section-margin) + 3.3rem)) auto 7.7rem;
  margin: 0 auto;
  padding: 0.4rem;
  background: var(--text-000);
  border: 0.4rem solid var(--text-200);
  border-radius: 1rem;
  list-style: none;
  max-width: 100%;
  @include min767{
    grid-template-columns: auto auto;
    margin-top: 2rem;
    font-size: 14px;
    font-weight: 450;
  }
  @include min490{
    font-size: 14px;
    font-weight: 450;
  }
  @include w359{
    grid-template-columns: auto auto;
    font-size: 12px;
    margin-top: 2rem;
  }
  @include min500 {
    font-size: 14px;
  }
   li {
  width: 170px;
  height: 52px;
   display: flex;
   justify-content: center;
   align-items: center;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  @include min490{
  font-size: 12px;
  width: 130px;
  }
   }
   .active{
   background-color: #F2F2F2;
   cursor: pointer;
  }
 }
}
  </style>
