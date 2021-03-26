<template>

 <q-drawer
        v-model="drawerState"
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Hoje
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Seguindo
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
</template>

<script>
export default {
    props: {
        drawer: {
            type: Boolean,
            default: false
        },
        setDrawer: Function
    },
  data() {
      return {
      }
  },
  methods: {
      resetarNome() {
        this.name = 'Mathews'
      }
  },
  computed: {
      drawerState:{
          get(){
           return this.drawer
          },
          set(value){
           return this.setDrawer(value)
          }
      },
      smallWindowSize () {
        return this.$q.screen.lt.sm ? true : false
      }
  },
  watch: {
       smallWindowSize (value) {
          this.setDrawer(false)
       }
    }
}
</script>

<style>

</style>