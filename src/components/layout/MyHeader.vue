<template>
  <q-header>
    <q-toolbar>
      <q-btn flat @click="toggleDrawer" round dense icon="menu" />
      <q-separator vertical class="q-ml-sm" />
      <img
        class="q-mx-md"
        src="../../assets/pmwebicon.png"
        alt="icon pmweb"
        style="width: 2rem"
      />
      <div class="text-h6 text-bold">
        Pmweb
      </div>
    </q-toolbar>
  </q-header>
</template>
<script>
export default {
  components: {},
  name: "MyHeader",
  methods: {
    toggleDrawer() {
      this.$emit("toggleDrawer");
    }
  }
};
</script>
