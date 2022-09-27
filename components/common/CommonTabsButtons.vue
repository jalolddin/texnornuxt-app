<template>
  <ul class="tabs">
    <li class="tabs__item" v-for="(item, index) in tabs.items" :key="index">
      <nuxt-link :to="`/${$i18n.locale}/${tabs.pages}/${item.link}`" class="tabs__link">
        {{ $t(`${tabs.pages}.tabs[${index}]`) }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CommonTabsButtons',
  props: {
    tabs: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  position: relative;
  width: max-content;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 0.4rem;
  margin: calc(-1 * (var(--section-margin) + 3.3rem)) auto 7.7rem;
  padding: 0.4rem;
  background: var(--text-000);
  border: 0.4rem solid var(--text-200);
  border-radius: 0.8rem;
  list-style: none;
  @include w1199 {
    margin-bottom: 8.7rem;
  }
  @include w767 {
    width: 100%;
    grid-template-columns: repeat(2, auto);
    margin-top: calc(-1 * (var(--section-margin) + 8rem));
    margin-bottom: 3.7rem;
    border-radius: 1.6rem;
  }
  &__link {
    display: flex;
    justify-content: center;
    padding: 1.6rem 3.2rem;
    border-radius: 0.4rem;
    font-weight: 450;
    line-height: 1.12;
    color: var(--text-1000);
    letter-spacing: normal;
    transition: 0.2s;
    @include hover {
      &:hover,
      &:focus {
        color: var(--primary-blue);
        background-color: var(--text-100);
      }
      &:active {
        color: var(--primary-shadow);
        background-color: var(--text-100);
      }
    }
    @include active {
      &:active {
        color: var(--primary-shadow);
        background-color: var(--text-100);
      }
    }
    @include w767 {
      padding: 1.6rem 0;
      font-size: 1.4rem;
      line-height: 1.14;
    }
    &.nuxt-link-active {
      background-color: var(--text-200);
    }
  }
}
</style>
