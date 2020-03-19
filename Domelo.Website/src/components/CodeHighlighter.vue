<template>
    <section>
      <div v-if="language.toLowerCase() === 'html' && renderMarkup" v-html="code" class="code-highlighter__element"></div>
      <prism-editor
          v-model="code"
          language="html"
          line-numbers
          :read-only="readOnly"
          class="code-highlighter__editor"
          :class="'code-highlighter__editor--' + language"
      />
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// @ts-ignore
import PrismEditor from 'vue-prism-editor';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'vue-prism-editor/dist/VuePrismEditor.css';

@Component({
  components: { PrismEditor },
})
export default class CodeHighlighter extends Vue {
  @Prop({ type: String, default: '' })
  private readonly code!: string;

  @Prop({
    validator: (value: string) => [
      'css',
      'html',
      'javascript',
      'json',
      'markdown',
      'scss',
      'typescript',
      'vue',
      ].includes(value.toLowerCase()),
    type: String,
    default: 'html',
  })
  private readonly language!: string;

  @Prop({ type: Boolean, default: false })
  private readonly readOnly!: boolean;

  @Prop({ type: Boolean, default: false })
  private readonly renderMarkup!: boolean;

  private mounted() {
    if (this.renderMarkup && this.language.toLowerCase() !== 'html') {
      console.error('CodeHighlighter.vue - to render the markup, the language must be \'html\'');
    }
  }
}
</script>

<style lang="scss" scoped>
.code-highlighter {
  &__element {
    margin-bottom: 2rem;
  }

  &__editor {
    position: relative;

    &::before {
      color: var(--color-static-white);
      font-size: var(--font-size-75);
      position: absolute;
      right: 1px;
      top: 1px;
    }

    &--css {
      &::before {
        content: "CSS";
      }
    }

    &--html {
      &::before {
        content: "HTML";
      }
    }

    &--javascript {
      &::before {
        content: "JavaScript";
      }
    }

    &--json {
      &::before {
        content: "JSON";
      }
    }

    &--markdown {
      &::before {
        content: "Markdown";
      }
    }

    &--scss {
      &::before {
        content: "SCSS";
      }
    }

    &--typescript {
      &::before {
        content: "TypeScript";
      }
    }

    &--vue {
      &::before {
        content: "Vue";
      }
    }
  }
}
</style>
