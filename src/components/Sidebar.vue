<template>
  <div>
    <nav id="sidebar" class="sidebar js-sidebar">
      <div class="sidebar-content js-simplebar">
        <a class="sidebar-brand" href="/">
          <span><img src="/assets/images/mohamad.png" class="pe-2 w-25"></span>
          <span class="align-middle">{{ title }}</span>
        </a>

        <ul class="sidebar-nav">
          <li class="sidebar-header">Main Menu</li>
          <li
            class="sidebar-item"
            :class="{ active: isSidebarActive(menu.href) }"
            v-for="menu in menus"
            :key="menu.menuID"
          >
            <a class="sidebar-link" :href="menu.href">
              <fa :icon="menu.icon" />
              <span class="align-middle">{{ menu.menuDesc }}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Sidebar_Comp",
  data() {
    return {
      menus: [],
      title: "Mocram",
    };
  },
  methods: {
    getMenu(data) {
      this.menus = data;
    },
    isSidebarActive: function (menuid) {
      if (this.$route.path == menuid) {
        return true;
      }
    },
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_ROOT_API + "/menus")
      .then((response) => this.getMenu(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>

