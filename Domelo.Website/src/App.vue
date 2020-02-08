<template>
  <div id="app" class="app">
    <header class="header-bar"><button @click="toggleSidebar">Toggle nav</button></header>
    <sidebar :sidebar-open="isSidebarOpen" />
    <button @click="toggleTheme">Toggle theme</button>
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

  private toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  private toggleTheme() {
    const html = document.getElementById('html');
    const darkTheme = 'theme--dark';
    if (html) {
      if (html.classList.contains(darkTheme)) {
        html.classList.remove(darkTheme);
      } else {
        html.classList.add(darkTheme);
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../Domelo.Styles/scss/domelo";

  $header-bar-breakpoint: 961px;

  .app {
    padding-left: 0;

    @media (min-width: $header-bar-breakpoint) {
      padding-left: 16rem;
    }

    .header-bar {
      width: 100%;
      height: 4rem;
      align-items: center;
      display: flex;

      @media (min-width: 961px) {
        display: none;
      }
    }
  }
</style>
