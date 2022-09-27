<template>
  <ul :class="['header-dropdown__socials', `socials__${place}`]">
    <li v-for="(social, index) in socials" :key="index" class="header-dropdown__social">
      <a :href="social.link">
        <img v-if="place === 'footer'" :src="`/images/icons/footer-${social.icon}.svg`" :alt="social.name" :title="social.name">
        <img v-else :src="`/images/icons/${social.icon}.svg`" :alt="social.name" :title="social.name">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CommonSocials',
  props: {
    place: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
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
        },
        {
          icon: 'dzen',
          name: 'Dzen',
          link: '#'
        },
        {
          icon: 'you',
          name: 'YouTube',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  &-dropdown {
    &__socials {
      display: flex;
      padding-left: 0;
      list-style: none;
      @include w767 {
        margin-top: 2rem;
      }
      &.socials__footer {
        .header-dropdown__social + .header-dropdown__social {
          @include w767 {
            margin-left: 2.4rem;
          }
        }
      }
    }
    &__social {
      flex-shrink: 0;
      & + & {
        margin-left: 1.6rem;
      }
      a {
        width: 3.2rem;
        height: 3.2rem;
        display: flex;
        margin: 0;
        border-radius: 50%;
        transition: transform 0.3s;
        @include hover {
          &:hover {
            transform: translateY(-0.4rem);
          }
        }
        @include active {
          &:active {
            transform: translateY(-0.4rem);
          }
        }
      }
      svg{
        margin: auto;
        height: auto;
        display: block;
      }
    }
  }
}
</style>
