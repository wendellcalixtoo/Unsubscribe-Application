<template>
  <q-layout view="HHh Lpr lff" class="bg-grey-2">
    <my-header @toggleDrawer="handleHeaderBtn" />

    <my-drawer :isActive="drawer" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MyDrawer from "../components/layout/MyDrawer";
import MyHeader from "../components/layout/MyHeader";

export default {
  name: "MainLayout",
  components: { MyDrawer, MyHeader },
  data() {
    return {
      leftDrawerOpen: false,
      drawer: true
    };
  },
  methods: {
    handleHeaderBtn() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
