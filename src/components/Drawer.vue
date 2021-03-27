<template>
  <q-drawer
    content-class="bg-teal-5 text-white"
    v-model="drawerState"
    :width="200"
    :breakpoint="500"
  >
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item
          :to="{ path: item.toPath }"
          v-for="item in itensDrawer"
          :key="item.id"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <q-item-section>
            {{ item.label }}
          </q-item-section>
        </q-item>
        <q-separator />
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
    itensDrawer: Array,
    setDrawer: Function
  },
  data() {
    return {};
  },
  methods: {
    resetarNome() {
      this.name = "Mathews";
    }
  },
  computed: {
    drawerState: {
      get() {
        return this.drawer;
      },
      set(value) {
        return this.setDrawer(value);
      }
    },
    smallWindowSize() {
      return this.$q.screen.lt.sm ? true : false;
    }
  },
  watch: {
    smallWindowSize(value) {
      this.setDrawer(false);
    }
  }
};
</script>

<style></style>
