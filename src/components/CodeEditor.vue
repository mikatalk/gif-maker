<template>
  <div 
    class="code-editor"
    v-bind:class="{ 
      portrait: isPortrait, 
      landscape: isLandscape 
    }"
  >
    <codemirror 
      ref="code-mirror"
      :code="shaderCode" 
      :options="editorOptions"
      @ready="onEditorReady"
      @focus="onEditorFocus"
      @change="updateShaderCode"
    ></codemirror>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import { codemirror } from 'vue-codemirror'

// require active-line.js
require('codemirror/addon/selection/active-line.js')
// styleSelectedText
require('codemirror/addon/selection/mark-selection.js')
require('codemirror/addon/search/searchcursor.js')
// hint
require('codemirror/addon/hint/show-hint.js')
require('codemirror/addon/hint/show-hint.css')
require('codemirror/addon/hint/javascript-hint.js')
require('codemirror/addon/selection/active-line.js')
// highlightSelectionMatches
require('codemirror/addon/scroll/annotatescrollbar.js')
require('codemirror/addon/search/matchesonscrollbar.js')
require('codemirror/addon/search/searchcursor.js')
require('codemirror/addon/search/match-highlighter.js')
// keyMap
require('codemirror/mode/clike/clike.js')
require('codemirror/addon/edit/matchbrackets.js')
require('codemirror/addon/comment/comment.js')
require('codemirror/addon/dialog/dialog.js')
require('codemirror/addon/dialog/dialog.css')
require('codemirror/addon/search/searchcursor.js')
require('codemirror/addon/search/search.js')
require('codemirror/keymap/sublime.js')
// foldGutter
require('codemirror/addon/fold/foldgutter.css')
require('codemirror/addon/fold/brace-fold.js')
require('codemirror/addon/fold/comment-fold.js')
require('codemirror/addon/fold/foldcode.js')
require('codemirror/addon/fold/foldgutter.js')
require('codemirror/addon/fold/indent-fold.js')
require('codemirror/addon/fold/markdown-fold.js')
require('codemirror/addon/fold/xml-fold.js')

export default {
  name: 'settings-form',

  data () {
    return {
      editorOptions: {
        // codemirror options
        tabSize: 2,
        mode: 'text/javascript',
        // theme: 'base16-dark',
        lineNumbers: true,
        // lineNumbers: true,
        line: true,
        keyMap: 'sublime',
        extraKeys: { 'Ctrl': 'autocomplete' },
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        styleSelectedText: true,
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true }
      }
    }
  },
  components: {
    codemirror
  },

  computed: {
    ...mapGetters([
      'isPortrait',
      'isLandscape',
      'shaderCode'
    ]),
    editor () {
      return this.$refs.codeEditor.editor
    }
  },

  methods: {
    updateWidth (event) {
      this.$store.dispatch('updateFrameSize', {width: event.target.value})
    },
    updateHeight (event) {
      this.$store.dispatch('updateFrameSize', {height: event.target.value})
    },
    updateShaderCode (code) {
      console.log('event:', code)
      this.$store.dispatch('updateShaderCode', {code: code})
    },
    onEditorReady (editor) {
      console.log('[editor is ready', editor)
    },
    onEditorFocus (editor) {
      console.log('the editor is focus', editor)
    }
    // onEditorCodeChange (newCode) {
    //   console.log('this is new code', newCode)
    //   this.code = newCode
    // }
  }
}

</script>

<style lang="scss">

@import "../styles/variables";

.code-editor {
  // height: auto;
  max-height: 100%;
  height: calc(100% - 32px);
  .CodeMirror.cm-s-default {
    height: 100%;
  }
  /*
  .demo-enter-active {
    transition: all .8s ease;
  }
  .demo-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .demo-enter, 
  .demo-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }
  */

//  background:black; color:white; font-family: Monospace;

}

</style>
