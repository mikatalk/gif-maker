<template>
  <div class="settings-form">
    <label>Width:</label>
    <input :value="frameWidth" 
           @input="updateWidth" 
           type="number" 
           max="1000" 
           maxlength="4"/>
    
    <br/>

    <label>Height:</label>
    <input :value="frameHeight" 
           @input="updateHeight" 
           type="number" 
           max="1000" 
           maxlength="4"/>
    
    <br/>
<!-- 
    <label>Shader:</label>
    <textarea :value="shaderCode" 
           @input="updateShaderCode" 
           type="text" />
    
 -->
     <!-- <codemirror v-model="code" :options="editorOptions"></codemirror> -->
 <codemirror ref="myEditor"
              :code="shaderCode" 
              :options="editorOptions"
              @ready="onEditorReady"
              @focus="onEditorFocus"
              @change="updateShaderCode">
  </codemirror>
 
    <!-- <editor :content.sync="content" lang="html" theme="chrome" width="300" height="300" ></editor> -->

   <!--  <button @click="toggle=!toggle">Toggle</button>
    <transition name="demo">
      <h3 v-show="toggle">Toggle Transition</h3>
    </transition>
   -->
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import { codemirror } from 'vue-codemirror'
// import { codemirror, CodeMirror } from 'vue-codemirror'

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
        theme: 'base16-dark',
        lineNumbers: true,
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
    // 'btn': Btn,
    // 'editor': require('vue-ace-editor')
  },

  // events: {
  //   'vue-ace-editor:init': () => {
  //     console.log('HA!!!')
  //     require('brace/mode/html')
  //     require('brace/theme/chrome')
  //   }
  // },

  computed: {
    ...mapGetters([
      'frameWidth',
      'frameHeight',
      'shaderCode'
    ]),
    editor () {
      return this.$refs.myEditor.editor
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
      console.log('the editor is readied!', editor)
    },
    onEditorFocus (editor) {
      console.log('the editor is focus!', editor)
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

.settings-form {
  

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
