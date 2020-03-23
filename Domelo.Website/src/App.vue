<template>
  <div id="app" class="app">
    <header class="header-bar"><button class="button" @click="toggleSidebar">Toggle nav</button></header>
    <sidebar :sidebar-open="isSidebarOpen" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/Sidebar.vue';

@Component({
  components: {
    Sidebar,
  },
})
export default class App extends Vue {
  private isSidebarOpen: boolean = false;

  private mounted() {
    this.getDeepLinkPath();
  }

  private getDeepLinkPath() {
    // Solution for GitHub pages SPA deep linking
    // Also see Domelo.Website/public/404.html
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.push(path);
    }
  }

  private toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
</script>

<style lang="scss">
  @import "domelo-css";

  $header-bar-breakpoint: 961px;

  .app {
    padding-left: 0;

    @media (min-width: $header-bar-breakpoint) {
      padding-left: 16rem;
    }

    .header-bar {
      align-items: center;
      display: flex;
      height: 4rem;
      width: 100%;

      @media (min-width: 961px) {
        display: none;
      }
    }
  }
</style>
