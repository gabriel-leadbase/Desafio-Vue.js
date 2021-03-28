<template>
<q-page >
    <div class="q-pa-md row">
        <q-card class="my-card col-xs-12 col-sm-12 col-md-12 col-lg-12" flat bordered>
            <q-card-section :horizontal="!smallWindowSize" >
                <q-img class="col-6" src="https://cdn.quasar.dev/img/mountains.jpg" />
                 <q-card-section vertical class="col-6 justify-center q-px-md">
                    <div class="text-overline">Overline</div>
                    <div class="text-h4 q-mt-sm q-mb-xs">Title</div>
                    <div class="text-caption text-grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </q-card-section>
            </q-card-section>
        </q-card>
    </div>
    </div>
</q-page>
</template>

<script>
export default {
  data() {
      return {
          lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
  },
  computed: {
      smallWindowSize () {
        return this.$q.screen.lt.sm ? true : false
      }
  },
}
</script>

<style lang="sass" >
.my-card
  width: 100%
</style>
