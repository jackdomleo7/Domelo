<template>
  <page data-page="object-styles">
    <template #pageTitle>Object styles</template>
    <template #pageDescription>A set of global styles to apply to components.</template>
    <article id="rounding">
      <h2 class="heading--l">Rounding</h2>
      <p class="body--m">To provide a modern feel, most corners in Domelo are rounded. None rounded components (sharp right-angle edges) should be used for attention and to stand out from the norm.</p>
      <table class="table">
        <thead class="table__header">
        <tr class="table__row">
          <th>Name</th>
          <th>Variable</th>
          <th>Class</th>
          <th>Mobile</th>
          <th>Desktop</th>
        </tr>
        </thead>
        <tbody>
        <tr class="table__row" v-for="(rounding, index) in roundings" :key="index">
          <td>{{ rounding.name }}</td>
          <td>{{ rounding.variable }}</td>
          <td>{{ rounding.class }}</td>
          <td>{{ rounding.mobile }}px</td>
          <td>{{ rounding.name }}</td>
        </tr>
        </tbody>
      </table>
    </article>
    <article id="box-shadow">
      <h2 class="heading--l">Box shadow</h2>
    </article>
  </page>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Page from '@/components/Page.vue';

export interface IRounding {
  name: string;
  variable: string;
  class: string;
  mobile: number;
}

@Component({
  components: { Page },
})
export default class ObjectStyles extends Vue {
  private readonly roundings: IRounding[] = [
    {
      name: 'Default rounding',
      variable: '--default-rounding',
      class: 'rounding--default',
      mobile: 5,
    }, {
      name: 'Small rounding',
      variable: '--small-rounding',
      class: 'rounding--small',
      mobile: 4,
    }, {
      name: 'No rounding',
      variable: '--no-rounding',
      class: 'rounding--none',
      mobile: 0,
    }, {
      name: 'Full rounding',
      variable: '--full-rounding',
      class: 'rounding--full',
      mobile: 0,
    },
  ];
}
</script>

<style lang="scss" scoped>
  .table {
    width: 100%;

    &__header {
      text-align: left;
    }

    &__row {
      height: 2rem;
    }

    &__copy {
      cursor: pointer;
    }
  }
</style>
