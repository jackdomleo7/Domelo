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
      <table class="font-sizes body--m">
        <thead class="font-sizes__header body--s">
        <tr>
          <th>Name</th>
          <th>Variable</th>
          <th>Pixels</th>
          <th>Rems</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(size, index) in fontSizes" :key="index" class="font-sizes__row">
          <td>{{ size.name }}</td>
          <td class="body--m"><code v-if="copiedVariable !== size" class="font-sizes__variable code--m" @click="copyToClipboard(size)" @keydown.enter="copyToClipboard(size)" tabindex="0">{{ size.variable }}</code><span v-if="copiedVariable === size">Copied!!</span></td>
          <td class="code--m">{{ size.pixels }}px</td>
          <td class="code--m">{{ pxToRem(size.pixels) }}rem</td>
        </tr>
        </tbody>
      </table>
    </article>
    <article id="weights">
      <h2 class="heading--m">Font weights</h2>
      <p class="body--m">Domelo uses three font weights, <span class="weight--light">light</span> (<code class="code--m">font-weight: 300;</code>), <span class="weight--medium">medium</span> (<code class="code--m">font-weight: 400;</code>) and <span class="weight--heavy">heavy</span> (<code class="code--m">font-weight: 400;</code>).</p>
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

@Component({
  components: { Page },
})
export default class Typography extends Vue {
  private copiedVariable: IFontSize | null = null;

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

  private pxToRem(px: number) {
    return px / 16;
  }

  private copyToClipboard(fontSize: IFontSize) {
    copy(fontSize.variable);

    this.copiedVariable = fontSize;
    window.setTimeout(() => {
      this.copiedVariable = null;
    }, 500);
  }
}
</script>

<style lang="scss" scoped>
.font-sizes {
  width: 100%;

  &__header {
    text-align: left;
  }

  &__row {
    height: 2rem;
  }

  &__variable {
    cursor: pointer;
  }
}
</style>
