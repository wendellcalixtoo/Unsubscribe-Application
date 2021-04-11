<template>
  <q-drawer
    v-model="openDrawer"
    :width="220"
    :breakpoint="500"
    content-class="bg-white"
  >
    <q-scroll-area class="fit">
      <q-list>
        <q-item-label header>Selecione um layout</q-item-label>
        <q-item
          clickable
          v-ripple
          active-class="text-indigo-5 border-left"
          to="/Layout1"
        >
          <q-item-section avatar>
            <q-icon size="xs" name="fas fa-angle-right" />
          </q-item-section>
          <q-item-section>Layout 1</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          active-class="text-indigo-5 border-left"
          to="/Layout2"
        >
          <q-item-section avatar>
            <q-icon size="xs" name="fas fa-angle-right" />
          </q-item-section>
          <q-item-section>Layout 2</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<script>
export default {
  props: {
    isActive: {
      type: Boolean
    },
    pNome: {
      type: String
    }
  },
  data() {
    return {
      openDrawer: null
    };
  },
  created() {
    this.openDrawer = this.isActive;
  },
  watch: {
    isActive(val) {
      this.openDrawer = val;
    }
  }
};
</script>
<style scoped>
.border-left {
  border-left: 3px solid #3f51b5;
  background-color: rgba(85, 85, 85, 0.089);
}
.bg-white {
  background-color: white;
  color: black;
}
</style>
