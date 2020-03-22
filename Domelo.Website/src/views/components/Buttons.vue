<template>
    <page data-page="buttons">
        <template #pageTitle>Buttons</template>
        <template #pageDescription>Buttons allow the user to perform an action or can be used as navigation. There are different styles that can be used to direct the user's attention.</template>
        <h2 class="heading--l">Options</h2>
        <h3 class="heading--subheading">Default</h3>
        <p class="body--m"></p>
        <button class="button" style="margin-right: 10px;"><span class="button__label">Default</span></button>

        <code-highlighter :code="ButtonDefault" render-markup />

        <br/>

        <h3 class="heading--subheading">Informative</h3>
        <button class="button button--informative" style="margin-right: 10px;"><span class="button__label">Informative</span></button>

        <br/>

        <h3 class="heading--subheading">Negative</h3>
        <button class="button button--negative" style="margin-right: 10px;"><span class="button__label">Negative</span></button>

        <br/>

        <h3 class="heading--subheading">Quiet</h3>
        <button class="button button--quiet" style="margin-right: 10px;"><span class="button__label">Quiet</span></button>

        <br/>

        <h2 class="heading--l">Variations</h2>

        <br/>

        <h3 class="heading--subheading">Icon only</h3>

        <button class="button button--iconOnly" style="margin-right: 10px;">
          <svg class="social__icon">
            <use xlink:href="/assets/svg-sprite.svg#icon-settings"></use>
          </svg>
          <span class="button__label" hidden>Button</span>
        </button>
        <button class="button button--iconOnly button--informative" style="margin-right: 10px;">
          <svg class="social__icon">
            <use xlink:href="/assets/svg-sprite.svg#icon-settings"></use>
          </svg>
          <span class="button__label" hidden>Button</span>
        </button>
        <button class="button button--negative button--iconOnly" style="margin-right: 10px;">
          <svg class="social__icon">
            <use xlink:href="/assets/svg-sprite.svg#icon-settings"></use>
          </svg>
          <span class="button__label" hidden>Button</span>
        </button>
        <button class="button button--quiet button--iconOnly" style="margin-right: 10px;">
          <svg class="social__icon">
            <use xlink:href="/assets/svg-sprite.svg#icon-settings"></use>
          </svg>
          <span class="button__label" hidden>Button</span>
        </button>

        <br/>

        <h3 class="heading--subheading">With icon</h3>
        <button class="button" style="margin-right: 10px;">
          <svg class="social__icon">
            <use xlink:href="/assets/svg-sprite.svg#icon-settings"></use>
          </svg>
          <span class="button__label">Button</span>
        </button>
        <button class="button button--informative" style="margin-right: 10px;">
          <svg class="social__icon">
            <use xlink:href="/assets/svg-sprite.svg#icon-settings"></use>
          </svg>
          <span class="button__label">Button</span>
        </button>
        <button class="button button--negative" style="margin-right: 10px;">
          <svg class="social__icon">
            <use xlink:href="/assets/svg-sprite.svg#icon-settings"></use>
          </svg>
          <span class="button__label">Button</span>
        </button>
        <button class="button button--quiet" style="margin-right: 10px;">
          <svg class="social__icon">
            <use xlink:href="/assets/svg-sprite.svg#icon-settings"></use>
          </svg>
          <span class="button__label">Button</span>
        </button>

        <br/>
        <br/>

        <h3 class="heading--subheading">Link</h3>
        <a href="#" class="button">Button</a>
    </page>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Page from '@/components/Page.vue';
import CodeHighlighter from '@/components/CodeHighlighter.vue';

@Component({
  components: { CodeHighlighter, Page },
})
export default class Buttons extends Vue {
  private readonly ButtonDefault: string =
`<button class="button">
  <span class="button__label">Default</span>
</button>`;
}
</script>
