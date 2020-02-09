<template>
  <page data-page="colors">
    <template #pageTitle>Color</template>
    <template #pageDescription>Domelo colors are designed to be clear and accessible. There are two themes available, light and dark. Each theme consists of a range of greys and semantic colors.</template>
    <figure class="color-chart body--s">
      <section v-for="(category, index) in colors" :key="index" class="color-chart__section">
        <div v-for="(color, index) in category.colors" :key="index" class="color-chart__item" :class="'color-chart__item--' + color.class" @click="clickToCopy(color)">{{ color.name }}<span v-if="copiedVariable !== color" class="body--xs color-chart__variable"><br/>{{ color.variable }}</span><span v-if="copiedVariable === color" class="body--xs"><br/>Copied!!</span></div>
      </section>
    </figure>
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
  colors: IColor[];
}

@Component({
  components: { Page },
})
export default class Color extends Vue {
  private copiedVariable: IColor | null = null;

  private readonly colors: IColors[] = [
    {
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
      ],
    },
    {
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
      ],
    },
    {
      colors: [
        {
          name: 'Blue 400',
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
      ],
    },
    {
      colors: [
        {
          name: 'Red 400',
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
      ],
    },
    {
      colors: [
        {
          name: 'Orange 400',
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
      ],
    },
    {
      colors: [
        {
          name: 'Green 400',
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
      ],
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
    grid-template: auto / 1fr;
    grid-gap: 1rem;
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
    visibility: hidden;
    opacity: 0;
    transition: var(--transition-timing) opacity ease-in-out, var(--transition-timing) visibility ease-in-out;
  }

  &__item {
    cursor: pointer;
    height: 6rem;
    width: 12rem;
    margin: 0 auto;
    padding: 0.5rem;
    transition: var(--transition-timing) transform ease-in-out, var(--transition-timing) box-shadow ease-in-out;
    font-weight: var(--font-weight-heavy);

    &:hover {
      box-shadow: var(--box-shadow);
      transform: scale(1.1);

      .color-chart__variable {
        visibility: visible;
        opacity: 1;
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
</style>
