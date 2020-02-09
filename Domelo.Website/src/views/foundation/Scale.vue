<template>
  <page data-page="scale">
    <template #pageTitle>Platform scale</template>
    <template #pageDescription>Domelo is designed to accommodate different platforms, desktop and mobile to account for cursor and touch experiences. A larger area is required for a touch device as opposed to a device with a cursor.</template>
    <article id="principles">
      <h2 class="heading--l">Principles</h2>
      <p class="body--m">Designing for different platforms and different scales requires finding a balance between the design system consistency therefore, components must scale proportionally between platforms. Domelo accounts for two platforms, mobile and desktop. Mobile platforms tend to be touch devices, while desktop devices tend to be cursor devices.</p>
      <h3 class="heading--subheading" id="proportions">Proportions</h3>
      <p class="body--m">Mobile components are larger than their desktop equivalent. Since Domelo is a mobile-first design system, desktop components are <strong>80% or 0.8 times smaller</strong> than its mobile counterpart.</p>
      <h3 class="heading--subheading" id="borders">Borders</h3>
      <p class="body--m">Borders should have the same <code class="code--m">border-width</code> across all platforms.</p>
      <h3 class="heading--subheading" id="typography">Typography</h3>
      <p class="body--m">Domelo defines two sets of font sizes, one for mobile and one for desktop. Text is rendered larger on mobile so it is easier to read.</p>
    </article>
    <article id="media-query">
      <h2 class="heading--l">Media query</h2>
      <p class="body--m">A mobile platform is defined as a screen width of <span class="code--m">768<span aria-label="pixels">px</span> / 48em</span> or less, meaning a desktop is define as greater than <span class="code--m">768<span aria-label="pixels">px</span></span>.</p>
      <p class="body--m">Since Domelo is a mobile-first design system, the media query should include the <code class="code--m">min-width</code> property as opposed to <code class="code--m">min-width</code>:</p>
      <code class="code--m">
        <i>Styles for mobile devices first</i><br/>
        <br/>
        @media screen and (min-width: 769px) {<br/>
        <i style="margin-left: 1rem;">Then, styles for desktop devices</i><br/>
        }
      </code>
      <p class="body--m"><em>CAUITON:</em> Changing the styles between platforms too much will cause confusion for the developers and the users, to keep things simple and consistent, the only difference should be the scaling.</p>
    </article>
  </page>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Page from '@/components/Page.vue';

  @Component({
    components: { Page },
  })
  export default class Scale extends Vue {}
</script>
