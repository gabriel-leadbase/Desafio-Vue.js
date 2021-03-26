<template>

<q-card class="my-card" >
      <q-card-section horizontal>

        <q-img
          class="col"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />


        <q-card-actions vertical class="justify-around">
          <q-btn :to="{ name: 'feedItem', params: {feedId: feedItem.id } }"  flat round color="red" icon="favorite" />
          <q-btn  flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>

      </q-card-section>
    </q-card>
</template>

<script>
export default {
    props: {
        feedItem: {
            type: Object,
            default: []
        },
    },
    name: 'EssentialLink',
    data() {
        return {
            expanded: false,
            lorem: ' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }

    },
    methods: {
      itemDetails() {
        console.log("detalhe");

      }
    },
}
</script>

<style lang="sass" scoped>
.my-card
</style>
