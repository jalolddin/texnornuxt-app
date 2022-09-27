<template>
  <div class="error-page">
    <div v-if="error.statusCode === 404" class="error-page__nums">404</div>
    <h1 v-if="error.statusCode === 404" class="error-page__title">Страница не найдена</h1>
    <NuxtLink class="btn-block" to="/">
      <div class="btn error-page__btn">На главную</div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: 'Страница не найдена'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
