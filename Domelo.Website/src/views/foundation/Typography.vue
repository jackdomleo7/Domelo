<template>
  <page data-page="typography">
    <template #pageTitle>Typography</template>
    <template #pageDescription>Clear typography rules are important to a design system to give a sense of consistency, efficiency and clear presentation.</template>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Page from '@/components/Page.vue';

@Component({
  components: { Page },
})
export default class Typography extends Vue {}
</script>
