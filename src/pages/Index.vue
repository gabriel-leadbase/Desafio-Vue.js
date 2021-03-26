<template>
  <q-page class="flex-center">
     <div class="q-pa-md row">
                <div v-for="feedItem in feedCardList" class="q-pa-md col-xs-12 col-sm-4 col-md-3 col-lg-3" :key="feedItem.title"  >
                 <FeedCard :feedItem="feedItem" :key="feedItem.title"   />
                </div>
            </div>
  </div>
  </q-page>
</template>

<script>
import  FeedCard from "./../components/FeedCard";
const feedlist = [{
        id:1,
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev'
    },
    {
        id:2,
        title: 'Github',
        caption: 'github.com/quasarframework',
        icon: 'code',
        link: 'https://github.com/quasarframework'
    },
    {
        id:3,
        title: 'Discord Chat Channel',
        caption: 'chat.quasar.dev',
        icon: 'chat',
        link: 'https://chat.quasar.dev'
    },
    {
        id:4,
        title: 'Forum',
        caption: 'forum.quasar.dev',
        icon: 'record_voice_over',
        link: 'https://forum.quasar.dev'
    },
    {
        id:5,
        title: 'Twitter',
        caption: '@quasarframework',
        icon: 'rss_feed',
        link: 'https://twitter.quasar.dev'
    },


]
export default {
  components: {
    FeedCard,
  },
  name: 'PageIndex',
  data() {
    return {
      feedCardList: feedlist,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
}
</script>

<style lang="stylus">
.my-card
  width: 100%
  max-width: 350px
</style>
