<template>
    <div>
      <div v-html="code"></div>
    <prism-editor
        v-model="code"
        language="html"
        line-numbers
        readonly
        class="my-editor"
    />
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import PrismEditor from "vue-prism-editor";
  import "prismjs";
  import "prismjs/themes/prism-tomorrow.css";
  import "vue-prism-editor/dist/VuePrismEditor.css";

  @Component({
    components: { PrismEditor },
  })
  export default class CodeHighlighter extends Vue {
    @Prop({ type: String, default: "" })
    private readonly code!: string;
  }
</script>
