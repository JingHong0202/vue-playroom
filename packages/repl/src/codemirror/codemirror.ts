import CodeMirror from 'codemirror'
import './codemirror.css'

// modes
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/css/css.js'
// import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/vue/vue.js'
 
// addons
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/closetag.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
// import 'codemirror/addon/hint/show-hint.css' // 用来做代码提示
// import 'codemirror/addon/hint/show-hint.js' // 用来做代码提示
// import 'codemirror/addon/hint/javascript-hint.js';
export default CodeMirror
