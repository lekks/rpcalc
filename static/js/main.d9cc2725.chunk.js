(this.webpackJsonprpcalc=this.webpackJsonprpcalc||[]).push([[0],{42:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var i,s=n(0),c=n(8),a=n.n(c),r=n(31),o=n.n(r),u=(n(42),n(4)),l=n(5),h=n(16),b=n(14),d=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).onClick=function(){i.props.subject.next({type:i.props.action,payload:i.props.tag})},i.onKeyDown=function(t){t.key===i.props.keybinding&&i.onClick()},document.addEventListener("keydown",i.onKeyDown),i}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){return Object(s.jsx)("div",{onClick:this.onClick,className:"Button",children:this.props.caption})}}]),n}(a.a.Component),p=(n(43),n(32)),j=function(t){var e=Number(t.expression.result.toFixed(6)),n=isNaN(e)?"?":String(e),i="".concat(t.expression.texFormula,"=").concat(n);return Object(s.jsx)("div",{className:"Expression",children:Object(s.jsx)(p.BlockMath,{math:i})})},x=n(6),f=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).subscription=new x.a,i.state={expressions:[]},i.subscription.add(t.exprStack.subscribe((function(t){i.setState({expressions:t})}))),i}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){this.subscription.unsubscribe()}},{key:"render",value:function(){var t=this.state.expressions.slice().reverse();return Object(s.jsx)("div",{className:"Stack",children:t.map((function(t,e){return Object(s.jsxs)(a.a.Fragment,{children:[e?Object(s.jsx)("hr",{}):null,Object(s.jsx)(j,{expression:t})]},e)}))})}}]),n}(a.a.Component),k=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).subscription=new x.a,i.state={text:""},i.subscription.add(t.text.subscribe((function(t){i.setState({text:t})}))),i}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){this.subscription.unsubscribe()}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"Input",children:this.state.text})}}]),n}(a.a.Component),v=(n(48),n(29)),g=n(34),y=n(35),O=n(54),m=n(50),N=n(51),E=n(33),w="DEL",S="BS",R=function(){function t(e){var n,i;Object(u.a)(this,t),this.symbolInput=new y.a,this.stringInput=new y.a,this.expression=new y.a,this.value=new y.a,this.subscriptions=new x.a,this.subscriptions.add(this.expression.subscribe(e.outputText)),this.subscriptions.add(this.value.subscribe(e.outputValue)),this.subscriptions.add(null===(n=e.inputSymbols)||void 0===n?void 0:n.subscribe(this.symbolInput)),this.subscriptions.add(null===(i=e.inputString)||void 0===i?void 0:i.subscribe(this.stringInput)),this.subscriptions.add(this.stringInput.pipe(Object(O.a)()).subscribe(this.symbolInput)),this.subscriptions.add(this.symbolInput.pipe(Object(m.a)((function(e){return t.allowedSymbols.includes(e)})),Object(N.a)(t.symbolReducer,"")).subscribe(this.expression)),this.subscriptions.add(this.expression.pipe(Object(E.a)((function(t){return t.length?Number(t):NaN}))).subscribe(this.value))}return Object(l.a)(t,[{key:"destroy",value:function(){this.subscriptions.unsubscribe()}}],[{key:"symbolReducer",value:function(t,e){return e===S?t.length>0?t.slice(0,-1):t:e===w?"":(","===e&&(e="."),"."===e&&-1!==t.indexOf(e)?t:t+e)}}]),t}();R.allowedSymbols=[".",",","0","1","2","3","4","5","6","7","8","9",w,S],function(t){t[t.PLUS_MINUS=0]="PLUS_MINUS",t[t.MULT__DIV=1]="MULT__DIV",t[t.FUNC=2]="FUNC",t[t.NUMBER=3]="NUMBER"}(i||(i={}));var T=function(){function t(e){Object(u.a)(this,t),this.tex=void 0,this.result_value=void 0,"number"===typeof e?(this.tex=e.toString(),this.result_value=e):(this.result_value=parseFloat(e),this.tex=e)}return Object(l.a)(t,[{key:"getResult",value:function(){return this.result_value}},{key:"getRank",value:function(){return i.NUMBER}},{key:"getTex",value:function(){return this.tex}},{key:"useExplicitTexParentheses",value:function(){return!1}}]),t}();function D(t,e){return e?"\\left(".concat(t.getTex(),"\\right)"):"".concat(t.getTex())}var _=function(){function t(e,n,i,s,c,a,r){Object(u.a)(this,t),this.rank=i,this.associative=s,this.left=a,this.right=r,this.tex_formula=void 0,this.result_value=void 0,this.explicitTexParentheses=void 0,this.explicitTexParentheses=c,this.tex_formula=this.buildTex(e),this.result_value=n(a.getResult(),r.getResult())}return Object(l.a)(t,[{key:"getResult",value:function(){return this.result_value}},{key:"getRank",value:function(){return this.rank}},{key:"getTex",value:function(){return this.tex_formula}},{key:"useExplicitTexParentheses",value:function(){return this.explicitTexParentheses}},{key:"needLeftParenthesis",value:function(){return this.rank>this.left.getRank()}},{key:"needRightParenthesis",value:function(){return this.rank>this.right.getRank()||!this.associative&&this.rank===this.right.getRank()}},{key:"buildTex",value:function(t){return t(D(this.left,this.needLeftParenthesis()&&this.left.useExplicitTexParentheses()),D(this.right,this.needRightParenthesis()&&this.right.useExplicitTexParentheses()),this.left,this.right)}}]),t}(),I=function(){function t(e,n,i){Object(u.a)(this,t),this.arg=i,this.tex_formula=void 0,this.result_value=void 0,this.tex_formula=n(D(i,i.useExplicitTexParentheses()),i),this.result_value=e(i.getResult())}return Object(l.a)(t,[{key:"getRank",value:function(){return i.FUNC}},{key:"getTex",value:function(){return this.tex_formula}},{key:"useExplicitTexParentheses",value:function(){return!1}},{key:"getResult",value:function(){return this.result_value}}]),t}(),A=function(){function t(e){Object(u.a)(this,t),this.arg=e,this.tex_formula=void 0,this.result_value=void 0,this.tex_formula="{-".concat(D(e,e.useExplicitTexParentheses()),"}"),this.result_value=-e.getResult()}return Object(l.a)(t,[{key:"getRank",value:function(){return i.FUNC}},{key:"getTex",value:function(){return this.tex_formula}},{key:"useExplicitTexParentheses",value:function(){return!0}},{key:"getResult",value:function(){return this.result_value}},{key:"getArg",value:function(){return this.arg}}]),t}();var U=function(){function t(){Object(u.a)(this,t)}return Object(l.a)(t,null,[{key:"buildExpression",value:function(t){for(var e,n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];return(e=this.operationsTable[t]).build.apply(e,i)}},{key:"operandsNumber",value:function(t){return this.operationsTable[t].operandsNumber}},{key:"defined",value:function(t){return t in this.operationsTable}}]),t}();U.operationsTable={"+":{operandsNumber:2,build:function(t,e){return new _((function(t,e){return"".concat(t,"+").concat(e)}),(function(t,e){return t+e}),i.PLUS_MINUS,!0,!0,t,e)}},"-":{operandsNumber:2,build:function(t,e){return new _((function(t,e){return"".concat(t,"-").concat(e)}),(function(t,e){return t-e}),i.PLUS_MINUS,!1,!0,t,e)}},"*":{operandsNumber:2,build:function(t,e){return new _((function(t,e){return"".concat(t,"\\times").concat(e)}),(function(t,e){return t*e}),i.MULT__DIV,!0,!0,t,e)}},"/":{operandsNumber:2,build:function(t,e){return new _((function(t,e,n,i){return"\\frac{".concat(n.getTex(),"}{").concat(i.getTex(),"}")}),(function(t,e){return t/e}),i.MULT__DIV,!1,!0,t,e)}},sqrt:{operandsNumber:1,build:function(t){return new I((function(t){return Math.sqrt(t)}),(function(t,e){return"\\sqrt{".concat(e.getTex(),"}")}),t)}},sqr:{operandsNumber:1,build:function(t){return new I((function(t){return t*t}),(function(t){return"{".concat(t,"}^2")}),t)}},uminus:{operandsNumber:1,build:function(t){return(e=t)instanceof A?e.getArg():new A(e);var e}}};var P,B=n(52),L=n(55),M=n(53),C=function(){function t(){Object(u.a)(this,t),this.expressionStack=new y.a,this.stack=[],this.history=[]}return Object(l.a)(t,[{key:"getExpressionsObservable",value:function(){return this.expressionStack.asObservable()}},{key:"backSpace",value:function(){this.popHistory()&&this.publishStack()}},{key:"popHistory",value:function(){var t=this.history.pop();return!!t&&(this.stack=t,!0)}},{key:"getLength",value:function(){return this.stack.length}},{key:"getTop",value:function(t){return this.stashHistory(),this.stack.splice(-t,t)}},{key:"addOperation",value:function(t){this.stack.push(t),this.publishStack()}},{key:"push",value:function(t){this.stashHistory(),this.stack.push(t),this.publishStack()}},{key:"duplicate",value:function(){this.stack.length>0&&(this.stashHistory(),this.stack.push(this.stack[this.stack.length-1]),this.publishStack())}},{key:"swap",value:function(){if(this.stack.length>=2){this.stashHistory();var t=[this.stack[this.stack.length-2],this.stack[this.stack.length-1]];this.stack[this.stack.length-1]=t[0],this.stack[this.stack.length-2]=t[1],this.publishStack()}}},{key:"clear",value:function(){this.history=[],this.stack=[],this.publishStack()}},{key:"del",value:function(){this.stack.length>0&&(this.stashHistory(),this.stack.pop(),this.publishStack())}},{key:"publishStack",value:function(){this.expressionStack.next(this.stack)}},{key:"stashHistory",value:function(){this.history.push(Object(v.a)(this.stack))}}]),t}();!function(t){t[t.ADD_NUMBER=0]="ADD_NUMBER",t[t.OPERATION=1]="OPERATION",t[t.ENTER=2]="ENTER",t[t.SWAP=3]="SWAP",t[t.BS=4]="BS",t[t.DEL=5]="DEL",t[t.CLEAR=6]="CLEAR"}(P||(P={}));var W=function(){function t(e){var n,i;Object(u.a)(this,t),this.calcResult=new y.a,this.expressionStack=new y.a,this.stack=new C,this.editorText=new B.a(""),this.editorValue=new B.a(NaN),this.editorInputSymbols=new y.a,this.editorInputString=new y.a,this.editor=void 0,this.subscriptions=new x.a,this.editor=new R({outputText:this.editorText,inputSymbols:this.editorInputSymbols,inputString:this.editorInputString,outputValue:this.editorValue}),this.subscriptions.add(null===(n=e.inputEvent)||void 0===n?void 0:n.subscribe(this.processInputEvent.bind(this))),this.subscriptions.add(null===(i=e.editorTextInput)||void 0===i?void 0:i.subscribe(this.editorInputString)),this.subscriptions.add(this.stack.getExpressionsObservable().pipe(Object(E.a)((function(t){return t.map((function(t){return{texFormula:t.getTex(),result:t.getResult()}}))}))).subscribe(this.expressionStack)),this.subscriptions.add(this.expressionStack.pipe(Object(E.a)((function(t){return t[t.length-1]?t[t.length-1]:void 0}))).subscribe(this.calcResult)),this.subscriptions.add(Object(L.a)([this.editorValue,this.calcResult]).pipe(Object(E.a)((function(t){var e=Object(g.a)(t,2),n=e[0],i=e[1];return isNaN(n)?i?i.result:NaN:n})),Object(M.a)()).subscribe(e.result)),this.subscriptions.add(this.expressionStack.subscribe(e.expressionStack)),this.subscriptions.add(this.calcResult.subscribe(e.stackResult)),this.subscriptions.add(this.editorText.subscribe(e.editorText))}return Object(l.a)(t,[{key:"destroy",value:function(){this.editor.destroy(),this.subscriptions.unsubscribe()}},{key:"editorExpression",value:function(){return new T(this.editorText.getValue())}},{key:"editorNotEmpty",value:function(){return 0!==this.editorText.getValue().length}},{key:"addOperation",value:function(t){if(U.defined(t)){var e=U.operandsNumber(t)-(this.editorNotEmpty()?1:0);if(!(e>this.stack.getLength())){var n=this.stack.getTop(e);this.editorNotEmpty()&&(n.push(this.editorExpression()),this.editorInputSymbols.next(w)),this.stack.addOperation(U.buildExpression.apply(U,[t].concat(Object(v.a)(n))))}}}},{key:"processInputEvent",value:function(t){switch(t.type){case P.ADD_NUMBER:t.payload&&this.editorInputSymbols.next(t.payload);break;case P.OPERATION:t.payload&&this.addOperation(t.payload);break;case P.DEL:this.editorNotEmpty()?this.editorInputSymbols.next(w):this.stack.del();break;case P.CLEAR:this.editorInputSymbols.next(w),this.stack.clear();break;case P.BS:this.editorNotEmpty()?this.editorInputSymbols.next(S):this.stack.backSpace();break;case P.ENTER:this.editorNotEmpty()?(this.stack.push(this.editorExpression()),this.editorInputSymbols.next(w)):this.stack.duplicate();break;case P.SWAP:this.editorNotEmpty()&&(this.stack.push(this.editorExpression()),this.editorInputSymbols.next(w)),this.stack.swap()}}}]),t}(),V=new y.a,F=new y.a,H=new y.a,q=new B.a(NaN),K=new y.a;new W({inputEvent:V,editorTextInput:F,result:q,editorText:H,expressionStack:K});var J=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(f,{exprStack:K}),Object(s.jsx)(k,{text:H}),Object(s.jsx)("div",{className:"Pad",children:Object(s.jsx)("table",{className:"Buttons",children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"Num",children:Object(s.jsx)(d,{caption:"7",tag:"7",keybinding:"7",action:P.ADD_NUMBER,subject:V})}),Object(s.jsx)("td",{className:"Num",children:Object(s.jsx)(d,{caption:"8",tag:"8",keybinding:"8",action:P.ADD_NUMBER,subject:V})}),Object(s.jsx)("td",{className:"Num",children:Object(s.jsx)(d,{caption:"9",tag:"9",keybinding:"9",action:P.ADD_NUMBER,subject:V})}),Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"/",tag:"/",keybinding:"/",action:P.OPERATION,subject:V})}),Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"<-",keybinding:"Backspace",action:P.BS,subject:V})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"Num",children:Object(s.jsx)(d,{caption:"4",tag:"4",keybinding:"4",action:P.ADD_NUMBER,subject:V})}),Object(s.jsx)("td",{className:"Num",children:Object(s.jsx)(d,{caption:"5",tag:"5",keybinding:"5",action:P.ADD_NUMBER,subject:V})}),Object(s.jsx)("td",{className:"Num",children:Object(s.jsx)(d,{caption:"6",tag:"6",keybinding:"6",action:P.ADD_NUMBER,subject:V})}),Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"*",tag:"*",keybinding:"*",action:P.OPERATION,subject:V})}),Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"Del",tag:"clear",keybinding:"Delete",action:P.DEL,subject:V})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"Num",children:Object(s.jsx)(d,{caption:"1",tag:"1",keybinding:"1",action:P.ADD_NUMBER,subject:V})}),Object(s.jsx)("td",{className:"Num",children:Object(s.jsx)(d,{caption:"2",tag:"2",keybinding:"2",action:P.ADD_NUMBER,subject:V})}),Object(s.jsx)("td",{className:"Num",children:Object(s.jsx)(d,{caption:"3",tag:"3",keybinding:"3",action:P.ADD_NUMBER,subject:V})}),Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"-",tag:"-",keybinding:"-",action:P.OPERATION,subject:V})}),Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"Swap",keybinding:"PageDown",action:P.SWAP,subject:V})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"Num",children:Object(s.jsx)(d,{caption:"0",tag:"0",keybinding:"0",action:P.ADD_NUMBER,subject:V})}),Object(s.jsx)("td",{className:"Num",children:Object(s.jsx)(d,{caption:".",tag:".",keybinding:".",action:P.ADD_NUMBER,subject:V})}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"+",tag:"+",keybinding:"+",action:P.OPERATION,subject:V})}),Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"Reset",keybinding:"Escape",action:P.CLEAR,subject:V})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"\u221a",tag:"sqrt",keybinding:"\\",action:P.OPERATION,subject:V})}),Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"x\xb2",tag:"sqr",action:P.OPERATION,subject:V})}),Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"-x",tag:"uminus",action:P.OPERATION,subject:V})}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:Object(s.jsx)(d,{caption:"Enter",keybinding:"Enter",action:P.ENTER,subject:V})})]})]})})})]})},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}window.document.addEventListener("paste",(function(t){if(t.clipboardData){var e=t.clipboardData.getData("text/plain");F.next(e)}t.preventDefault()})),window.document.addEventListener("copy",(function(t){var e=q.getValue();isNaN(e)||t.clipboardData&&t.clipboardData.setData("text/plain",String(Number(e.toFixed(8)))),t.preventDefault()})),o.a.render(Object(s.jsx)(J,{}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");$?(!function(t,e){fetch(t).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):z(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(e,t)}))}}()}},[[49,1,2]]]);
//# sourceMappingURL=main.d9cc2725.chunk.js.map