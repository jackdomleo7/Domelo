<template>
  <div>
    <aside class="sidebar" :class="isSidebarOpen ? 'sidebar--open' : false">
      <div class="sidebar__container">
        <div class="sidebar__header">
          <router-link class="sidebar__header-link" to="/">
            <h2 class="sidebar__header-title">Domelo</h2>
          </router-link>
          <p>A design system by <a href="https://jackdomleo.dev" target="_blank">Jack Domleo</a></p>
        </div>
        <div class="sidebar__navigation">
          <ul role="tree">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              Foundation
              <ul role="group">
                <li>
                  <router-link to="/foundation/color">Colors</router-link>
                </li>
                <li>
                  <router-link to="/foundation/typography">Typography</router-link>
                </li>
                <li>
                  <router-link to="/foundation/scale">Platform scale</router-link>
                </li>
                <li>
                  <router-link to="/foundation/reset">Reset stylesheet</router-link>
                </li>
                <li>
                  <router-link to="/foundation/grid">Grid</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <div v-if="isSidebarOpen" class="sidebar__overlay" @click="toggleSidebar"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';

  @Component
  export default class SideNavigation extends Vue {
    private isSidebarOpen: boolean = false;

    @Prop({ type: Boolean, default: false }) private readonly sidebarOpen!: boolean;

    @Watch('sidebarOpen')
    private onSidebarOpenChanged() {
      this.isSidebarOpen = this.sidebarOpen;
    }

    private toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }

    private created() {
      this.isSidebarOpen = this.sidebarOpen;
    }
  }
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: rgba(var(--alternate-background-high-color), 1);
  bottom: 0;
  left: auto;
  position: fixed;
  right: 100%;
  top: 0;
  transform: translateX(0);
  transition: var(--transition-timing) transform ease-in-out;
  width: 16rem;
  z-index: 100;

  @media (min-width: 961px) {
    left: 0;
    transform: none;
    transition: none;
  }

  &.sidebar--open {
    @media (max-width: 960px) {
      transform: translateX(100%);
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__header {
    padding: 0 3rem;
    text-align: center;

    &-link {
      display: block;
      text-decoration-line: none;
    }

    &-title {
      font-size: var(--font-size-800);
    }
  }

  &__navigation {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__overlay {
    background-color: rgba(var(--static-black), 0.4);
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 99;
  }
}
</style>
