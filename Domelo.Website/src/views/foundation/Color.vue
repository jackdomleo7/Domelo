<template>
  <page data-page="colors">
    <template #pageTitle>Color</template>
    <template #pageDescription>Domelo colors are designed to be clear and accessible. There are two themes available, light and dark. Each theme consists of a range of greys and semantic colors.</template>
    <figure class="color-chart body--s" id="color-chart">
      <section v-for="(category, index) in colors" :key="index" :id="category.id" class="color-chart__section">
        <div v-for="(color, index) in category.colors" :key="index" class="color-chart__item" :class="'color-chart__item--' + color.class" @click="clickToCopy(color)">{{ color.name }}<code v-if="copiedVariable !== color" class="code--xs color-chart__variable"><br/>{{ color.variable }}</code><span v-if="copiedVariable === color" class="body--xs"><br/>Copied!!</span></div>
      </section>
    </figure>
    <article id="css-variables">
      <h2 class="heading--l">CSS variables</h2>
      <p class="body--m">The CSS for the colors <a href="#color-chart">above</a> are not stored as a recognisable color value; hexadecimal or rgb. Instead they are stored as three positive numbered values separated by a comma; the first value is the amount of red, the second value is the amount of green and the third value is the amount of blue. They are stored very similar to rgb, however without the <code class="code--m">rgb()</code> syntax.</p>
      <p class="body--m">The CSS variable for static white is <code class="code--m">--static-white: 255, 255, 255;</code>.</p>
      <p class="body--m">So, to use this in your CSS, simply do <code class="code--m">rgba(var(--static-white), 1)</code>, which is the same as <code class="code--m">rgba(255, 255, 255, 1)</code>.</p>
      <p class="body--m"><em>NOTE:</em> CSS variables done in this way <em>DO NOT</em> work with the CSS <code class="code--m">rgb()</code> property, it only works with the <code class="code--m">rgba()</code> property. The <code class="code--m">rgba()</code> property allows flexibility with the alpha channel/opaqueness of a color, however this should be done carefully.</p>
    </article>
    <article id="themes">
      <h2 class="heading--l">Themes</h2>
      <p class="body--m">Domelo offers a choice of two themes, light and dark, for user interfaces. Offering a light and dark theme will cover a good ground base of users. The user should be able to switch between themes whenever they please based on their preference and the application should remember or save their latest chosen theme.</p>
      <p class="body--m">To accomplish theming, Domelo uses design tokens to double abstract the theme specific colors from the CSS that makes the component. This is done using CSS variables.</p>
      <ul>
        <li>Light theme (default): <code class="code--m">&lt;html&gt;</code> - <i>No class</i> </li>
        <li>Dark theme: <code class="code--m">&lt;html class="theme--dark"&gt;</code></li>
      </ul>
    </article>
    <article id="greys">
      <h2 class="heading--l">Greys</h2>
      <p class="body--m">Domelo uses <a href="#grey">11 shades of grey</a>, which are different between the light and dark themes. The greys are neutral (the red, blue and green ratios are equal) meaning they work well alongside any brand colors and ensures they don't distract the user's attention from the main workflow.</p>
      <p class="body--m">The greys have the same CSS variable names across both themes, which allows us to define specific behaviours for each grey:</p>
      <ul>
        <li class="greys--grey-900">Grey 900: High contrast text content (default text color)</li>
        <li class="greys--grey-800">Grey 800: Medium contrast text content</li>
        <li class="greys--grey-700">Grey 700: Low contrast text content</li>
        <li class="greys--grey-600">Grey 600: Placeholder text</li>
        <li class="greys--grey-500">Grey 500: Disabled text</li>
        <li class="greys--grey-100">Grey 100: Base background</li>
        <li class="greys--grey-75">Grey 75: High alternate background</li>
        <li class="greys--grey-50">Grey 50: Low alternate background</li>
      </ul>
    </article>
    <article id="semantic">
      <h2 class="heading--l">Semantic colors</h2>
      <p class="body--m">Semantic colors have an assigned meaning and are used in the application to communicate these meanings to the user.</p>
      <figure class="semantic">
        <div class="semantic--blue">
          <span class="semantic__label body--s">Informative</span>
          <div class="semantic__shades">
            <span class="semantic__shade semantic--blue-400"></span>
            <span class="semantic__shade semantic--blue-500"></span>
            <span class="semantic__shade semantic--blue-600"></span>
            <span class="semantic__shade semantic--blue-700"></span>
          </div>
        </div>
        <div class="semantic--red">
          <span class="semantic__label body--s">Negative</span>
          <div class="semantic__shades">
            <span class="semantic__shade semantic--red-400"></span>
            <span class="semantic__shade semantic--red-500"></span>
            <span class="semantic__shade semantic--red-600"></span>
            <span class="semantic__shade semantic--red-700"></span>
          </div>
        </div>
        <div class="semantic--orange">
          <span class="semantic__label body--s">Notice</span>
          <div class="semantic__shades">
            <span class="semantic__shade semantic--orange-400"></span>
            <span class="semantic__shade semantic--orange-500"></span>
            <span class="semantic__shade semantic--orange-600"></span>
            <span class="semantic__shade semantic--orange-700"></span>
          </div>
        </div>
        <div class="semantic--green">
          <span class="semantic__label body--s">Positive</span>
          <div class="semantic__shades">
            <span class="semantic__shade semantic--green-400"></span>
            <span class="semantic__shade semantic--green-500"></span>
            <span class="semantic__shade semantic--green-600"></span>
            <span class="semantic__shade semantic--green-700"></span>
          </div>
        </div>
      </figure>
    </article>
    <article id="static">
      <h2 class="heading--l">Static colors</h2>
      <p class="body--m">Static colors are persistent across themes. Static colors are <em>white</em>, <em>black</em> and the <em>#400 of each semantic color.</em></p>
    </article>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Page from '@/components/Page.vue';
import copy from 'copy-to-clipboard';

export interface IColor {
  name: string;
  class: string;
  variable: string;
}

export interface IColors {
  id: string;
  colors: IColor[];
}

@Component({
  components: { Page },
})
export default class Color extends Vue {
  private copiedVariable: IColor | null = null;

  private readonly colors: IColors[] = [
    {
      id: 'white-black',
      colors: [
        {
          name: 'Static white',
          class: 'white',
          variable: '--static-white',
        }, {
          name: 'Static black',
          class: 'black',
          variable: '--static-black',
        },
      ] as IColor[],
    },
    {
      id: 'grey',
      colors: [
        {
          name: 'Grey 50',
          class: 'grey-50',
          variable: '--grey-50',
        }, {
          name: 'Grey 75',
          class: 'grey-75',
          variable: '--grey-75',
        }, {
          name: 'Grey 100',
          class: 'grey-100',
          variable: '--grey-100',
        }, {
          name: 'Grey 200',
          class: 'grey-200',
          variable: '--grey-200',
        }, {
          name: 'Grey 300',
          class: 'grey-300',
          variable: '--grey-300',
        }, {
          name: 'Grey 400',
          class: 'grey-400',
          variable: '--grey-400',
        }, {
          name: 'Grey 500',
          class: 'grey-500',
          variable: '--grey-500',
        }, {
          name: 'Grey 600',
          class: 'grey-600',
          variable: '--grey-600',
        }, {
          name: 'Grey 700',
          class: 'grey-700',
          variable: '--grey-700',
        }, {
          name: 'Grey 800',
          class: 'grey-800',
          variable: '--grey-800',
        }, {
          name: 'Grey 900',
          class: 'grey-900',
          variable: '--grey-900',
        },
      ] as IColor[],
    },
    {
      id: 'blue',
      colors: [
        {
          name: 'Static blue 400',
          class: 'blue-400',
          variable: '--static-blue-400',
        }, {
          name: 'Blue 500',
          class: 'blue-500',
          variable: '--blue-500',
        }, {
          name: 'Blue 600',
          class: 'blue-600',
          variable: '--blue-600',
        }, {
          name: 'Blue 700',
          class: 'blue-700',
          variable: '--blue-700',
        },
      ] as IColor[],
    },
    {
      id: 'red',
      colors: [
        {
          name: 'Static red 400',
          class: 'red-400',
          variable: '--static-red-400',
        }, {
          name: 'Red 500',
          class: 'red-500',
          variable: '--red-500',
        }, {
          name: 'Red 600',
          class: 'red-600',
          variable: '--red-600',
        }, {
          name: 'Red 700',
          class: 'red-700',
          variable: '--red-700',
        },
      ] as IColor[],
    },
    {
      id: 'orange',
      colors: [
        {
          name: 'Static orange 400',
          class: 'orange-400',
          variable: '--static-orange-400',
        }, {
          name: 'Orange 500',
          class: 'orange-500',
          variable: '--orange-500',
        }, {
          name: 'Orange 600',
          class: 'orange-600',
          variable: '--orange-600',
        }, {
          name: 'Orange 700',
          class: 'orange-700',
          variable: '--orange-700',
        },
      ] as IColor[],
    },
    {
      id: 'green',
      colors: [
        {
          name: 'Static green 400',
          class: 'green-400',
          variable: '--static-green-400',
        }, {
          name: 'Green 500',
          class: 'green-500',
          variable: '--green-500',
        }, {
          name: 'Green 600',
          class: 'green-600',
          variable: '--green-600',
        }, {
          name: 'Green 700',
          class: 'green-700',
          variable: '--green-700',
        },
      ] as IColor[],
    },
  ];

  private clickToCopy(color: IColor) {
    copy(color.variable);

    this.copiedVariable = color;
    window.setTimeout(() => {
      this.copiedVariable = null;
    }, 500);
  }
}
</script>

<style lang="scss" scoped>
.color-chart {
  margin: 0;

  &__section {
    display: grid;
    grid-gap: 1rem;
    grid-template: auto / 1fr;
    margin: 3rem 0;

    @media screen and (min-width: 510px) {
      grid-template: auto / 1fr 1fr;
    }

    @media screen and (min-width: 700px) {
      grid-template: auto / 1fr 1fr 1fr;
    }

    @media screen and (min-width: 1150px) {
      grid-template: auto / 1fr 1fr 1fr 1fr;
    }
  }

  &__variable {
    opacity: 0;
    transition: var(--transition-timing) opacity ease-in-out, var(--transition-timing) visibility ease-in-out;
    visibility: hidden;
  }

  &__item {
    cursor: pointer;
    font-weight: var(--font-weight-heavy);
    height: 6rem;
    margin: 0 auto;
    padding: 0.5rem;
    transition: var(--transition-timing) transform ease-in-out, var(--transition-timing) box-shadow ease-in-out;
    width: 12rem;

    &:hover {
      box-shadow: var(--box-shadow);
      transform: scale(1.1);

      .color-chart__variable {
        opacity: 1;
        visibility: visible;
      }
    }

    &--white {
      background-color: rgba(var(--static-white), 1);
      color: rgba(var(--static-black), 1);
    }

    &--black {
      background-color: rgba(var(--static-black), 1);
      color: rgba(var(--static-white), 1);
    }

    &--grey-50 {
      background-color: rgba(var(--grey-50), 1);
    }

    &--grey-75 {
      background-color: rgba(var(--grey-75), 1);
    }

    &--grey-100 {
      background-color: rgba(var(--grey-100), 1);
    }

    &--grey-200 {
      background-color: rgba(var(--grey-200), 1);
    }

    &--grey-300 {
      background-color: rgba(var(--grey-300), 1);
    }

    &--grey-400 {
      background-color: rgba(var(--grey-400), 1);
    }

    &--grey-500 {
      background-color: rgba(var(--grey-500), 1);
    }

    &--grey-600 {
      background-color: rgba(var(--grey-600), 1);
    }

    &--grey-700 {
      background-color: rgba(var(--grey-700), 1);
    }

    &--grey-800 {
      background-color: rgba(var(--grey-800), 1);
    }

    &--grey-900 {
      background-color: rgba(var(--grey-900), 1);
    }

    &--blue-400 {
      background-color: rgba(var(--static-blue-400), 1);
    }

    &--blue-500 {
      background-color: rgba(var(--blue-500), 1);
    }

    &--blue-600 {
      background-color: rgba(var(--blue-600), 1);
    }

    &--blue-700 {
      background-color: rgba(var(--blue-700), 1);
    }

    &--red-400 {
      background-color: rgba(var(--static-red-400), 1);
    }

    &--red-500 {
      background-color: rgba(var(--red-500), 1);
    }

    &--red-600 {
      background-color: rgba(var(--red-600), 1);
    }

    &--red-700 {
      background-color: rgba(var(--red-700), 1);
    }

    &--orange-400 {
      background-color: rgba(var(--static-orange-400), 1);
    }

    &--orange-500 {
      background-color: rgba(var(--orange-500), 1);
    }

    &--orange-600 {
      background-color: rgba(var(--orange-600), 1);
    }

    &--orange-700 {
      background-color: rgba(var(--orange-700), 1);
    }

    &--green-400 {
      background-color: rgba(var(--static-green-400), 1);
    }

    &--green-500 {
      background-color: rgba(var(--green-500), 1);
    }

    &--green-600 {
      background-color: rgba(var(--green-600), 1);
    }

    &--green-700 {
      background-color: rgba(var(--green-700), 1);
    }

    &--grey-600,
    &--grey-700,
    &--grey-800,
    &--grey-900,
    &--blue-400,
    &--blue-500,
    &--blue-600,
    &--blue-700,
    &--red-400,
    &--red-500,
    &--red-600,
    &--red-700,
    &--orange-400,
    &--orange-500,
    &--orange-600,
    &--orange-700,
    &--green-400,
    &--green-500,
    &--green-600,
    &--green-700 {
      color: rgba(var(--text-content-high-color-revere), 1);
    }
  }
}

.greys {
  &--grey-900 {
    color: rgba(var(--grey-900), 1);
  }

  &--grey-800 {
    color: rgba(var(--grey-800), 1);
  }

  &--grey-700 {
    color: rgba(var(--grey-700), 1);
  }

  &--grey-600 {
    color: rgba(var(--grey-600), 1);
  }

  &--grey-500 {
    color: rgba(var(--grey-500), 1);
  }

  &--grey-100 {
    background-color: rgba(var(--grey-100), 1);
  }

  &--grey-75 {
    background-color: rgba(var(--grey-75), 1);
  }

  &--grey-50 {
    background-color: rgba(var(--grey-50), 1);
  }
}

.semantic {
  display: grid;
  grid-gap: 1rem;
  grid-template: auto / 1fr;
  margin: 0;
  width: 100%;

  @media screen and (min-width: 600px) {
    grid-template: auto / 1fr 1fr;
  }

  @media screen and (min-width: 1150px) {
    grid-template: auto / 1fr 1fr 1fr 1fr;
  }

  &__label {
    font-weight: var(--font-weight-heavy);
  }

  &__shades {
    display: flex;
    height: 2rem;
    margin: 0.5rem 0;
  }

  &__shade {
    width: 25%;
  }

  &--blue-400 {
    background-color: rgba(var(--static-blue-400), 1);
  }

  &--blue-500 {
    background-color: rgba(var(--blue-500), 1);
  }

  &--blue-600 {
    background-color: rgba(var(--blue-600), 1);
  }

  &--blue-700 {
    background-color: rgba(var(--blue-700), 1);
  }

  &--red-400 {
    background-color: rgba(var(--static-red-400), 1);
  }

  &--red-500 {
    background-color: rgba(var(--red-500), 1);
  }

  &--red-600 {
    background-color: rgba(var(--red-600), 1);
  }

  &--red-700 {
    background-color: rgba(var(--red-700), 1);
  }

  &--orange-400 {
    background-color: rgba(var(--static-orange-400), 1);
  }

  &--orange-500 {
    background-color: rgba(var(--orange-500), 1);
  }

  &--orange-600 {
    background-color: rgba(var(--orange-600), 1);
  }

  &--orange-700 {
    background-color: rgba(var(--orange-700), 1);
  }

  &--green-400 {
    background-color: rgba(var(--static-green-400), 1);
  }

  &--green-500 {
    background-color: rgba(var(--green-500), 1);
  }

  &--green-600 {
    background-color: rgba(var(--green-600), 1);
  }

  &--green-700 {
    background-color: rgba(var(--green-700), 1);
  }
}
</style>
