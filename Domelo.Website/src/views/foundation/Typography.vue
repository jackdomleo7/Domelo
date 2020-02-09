<template>
  <page data-page="typography">
    <template #pageTitle>Typography</template>
    <template #pageDescription>Clear typography rules are important to a design system to give a sense of consistency, efficiency and clear presentation.</template>
    <article id="typefaces">
      <h2 class="heading--m">Typefaces</h2>
      <p class="body--m">Domelo uses the typefaces Open Sans as the sans-serif font and Courier New as the monospace font. It is important to apply a font stack with fallback fonts to the application:</p>
      <ul>
        <li>Open Sans: <code class="code--m">font-family: "Open Sans", Verdana, Arial, sans-serif;</code></li>
        <li>Courier New: <code class="code--m">font-family: "Courier New", monospace;</code></li>
      </ul>
    </article>
    <article id="sizes">
      <h2 class="heading--m">Font sizes</h2>
      <p class="body--m">All Domelo font sizes are identified in pixels for easy identification, but should be defined in the CSS as rems. Rems can be calculated using the following calculation: <span class="code--m">rem = px / 16</span></p>
      <table class="table body--m">
        <thead class="table__header body--s">
        <tr class="table__row">
          <th>Name</th>
          <th>Variable</th>
          <th>Pixels</th>
          <th>Rems</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(size, index) in fontSizes" :key="index" class="table__row">
          <td class="body--m">{{ size.name }}</td>
          <td class="body--m"><code v-if="copiedVariable !== size.variable" class="table__copy code--m" @click="copyToClipboard(size.variable)" @keydown.enter="copyToClipboard(size.variable)" tabindex="0">{{ size.variable }}</code><span v-if="copiedVariable === size.variable">Copied!!</span></td>
          <td class="code--m">{{ size.pixels }}px</td>
          <td class="code--m">{{ pxToRem(size.pixels) }}rem</td>
        </tr>
        </tbody>
      </table>
    </article>
    <article id="weights">
      <h2 class="heading--m">Font weights</h2>
      <p class="body--m">Domelo uses three font weights, <span class="weight--light">light</span> (<code class="code--m">font-weight: 300;</code>), <span class="weight--medium">medium</span> (<code class="code--m">font-weight: 400;</code>) and <span class="weight--heavy">heavy</span> (<code class="code--m">font-weight: 400;</code>).</p>
      <table class="table">
        <thead class="table__header body--s">
        <tr class="table__row">
          <th>Name</th>
          <th>Variable</th>
          <th>Class</th>
          <th>Weight</th>
        </tr>
        </thead>
        <tbody>
        <tr class="table__row" v-for="(weight, index) in fontWeights" :key="index">
          <td class="body--m">{{ weight.name }}</td>
          <td class="body--m"><code v-if="copiedVariable !== weight.variable" class="table__copy code--m" @click="copyToClipboard(weight.variable)" @keydown.enter="copyToClipboard(weight.variable)" tabindex="0">{{ weight.variable }}</code><span v-if="copiedVariable === weight.variable">Copied!!</span></td>
          <td class="body--m"><code v-if="copiedVariable !== weight.class" class="table__copy code--m" @click="copyToClipboard(weight.class)" @keydown.enter="copyToClipboard(weight.class)" tabindex="0">{{ weight.class }}</code><span v-if="copiedVariable === weight.class">Copied!!</span></td>
          <td class="body--m">{{ weight.weight }}</td>
        </tr>
        </tbody>
      </table>
    </article>
    <article id="headings">
      <h2 class="heading--m">Headings</h2>
      <p class="heading--l">Heading--l</p>
      <p class="heading--m">Heading--m</p>
      <p class="heading--s">Heading--s</p>
      <p class="heading--xs">Heading--xs</p>
    </article>
    <article id="body">
      <h2 class="heading--m">Body</h2>
      <p class="body--l">Body--l</p>
      <p class="body--m">Body--m</p>
      <p class="body--s">Body--s</p>
      <p class="body--xs">Body--xs</p>
    </article>
    <article id="code">
      <h2 class="heading--m">Code</h2>
      <p class="code--l">Code--l</p>
      <p class="code--m">Code--m</p>
      <p class="code--s">Code--s</p>
      <p class="code--xs">Code--xs</p>
    </article>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Page from '@/components/Page.vue';
import copy from 'copy-to-clipboard';

export interface IFontSize {
  name: string;
  variable: string;
  pixels: number;
}

export interface IFontWeight {
  name: string;
  variable: string;
  class: string;
  weight: number;
}

@Component({
  components: { Page },
})
export default class Typography extends Vue {
  private copiedVariable: string | null = null;

  private readonly fontSizes: IFontSize[] = [
    {
      name: 'Font size 50',
      variable: '--font-size-50',
      pixels: 11,
    }, {
      name: 'Font size 75',
      variable: '--font-size-75',
      pixels: 14,
    }, {
      name: 'Font size 100',
      variable: '--font-size-100',
      pixels: 16,
    }, {
      name: 'Font size 200',
      variable: '--font-size-200',
      pixels: 20,
    }, {
      name: 'Font size 300',
      variable: '--font-size-300',
      pixels: 28,
    }, {
      name: 'Font size 400',
      variable: '--font-size-400',
      pixels: 36,
    }, {
      name: 'Font size 500',
      variable: '--font-size-500',
      pixels: 44,
    },
  ];

  private readonly fontWeights: IFontWeight[] = [
    {
      name: 'Weight light',
      variable: '--font-weight-light',
      class: 'weight-light',
      weight: 300,
    }, {
      name: 'Weight medium',
      variable: '--font-weight-medium',
      class: 'weight-medium',
      weight: 400,
    }, {
      name: 'Weight heavy',
      variable: '--font-weight-heavy',
      class: 'weight-heavy',
      weight: 600,
    },
  ];

  private pxToRem(px: number) {
    return px / 16;
  }

  private copyToClipboard(text: string) {
    copy(text);

    this.copiedVariable = text;
    window.setTimeout(() => {
      this.copiedVariable = null;
    }, 500);
  }
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
