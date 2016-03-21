!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.textMask=t(require("react")):e.textMask=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.adjustCaretPosition=t.convertMaskToPlaceholder=t.conformToMask=t.MaskedInput=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(6);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return o.conformToMask}}),Object.defineProperty(t,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return o.convertMaskToPlaceholder}}),Object.defineProperty(t,"adjustCaretPosition",{enumerable:!0,get:function(){return o.adjustCaretPosition}});var s=r(7),u=n(s),i=t.MaskedInput=u.default.createClass({displayName:"MaskedInput",propTypes:{mask:s.PropTypes.string.isRequired},getInitialState:function(){return{previousValue:"",conformToMaskResults:{},currentCaretPosition:null}},componentWillReceiveProps:function(e){e.mask!==this.props.mask&&this.setState(this.getInitialState())},componentDidUpdate:function(){if(this.refs.inputElement===document.activeElement){var e=(0,o.adjustCaretPosition)({previousInput:this.state.previousValue,conformToMaskResults:this.state.conformToMaskResults,currentCaretPosition:this.state.currentCaretPosition});this.refs.inputElement.setSelectionRange(e,e,"none")}},render:function(){var e=this.props,t=this.state,r=this.onChange,n=e.placeholder||(0,o.convertMaskToPlaceholder)(this.props.mask),s=t.conformToMaskResults.output!==n?t.conformToMaskResults.output:"";return u.default.createElement("input",a({},e,{type:e.type||"text",onChange:r,value:s,placeholder:n,ref:"inputElement"}))},onChange:function(e){var t={conformToMaskResults:(0,o.conformToMask)(e.target.value,this.props.mask),previousValue:this.state.conformToMaskResults.output||this.state.previousValue,currentCaretPosition:this.refs.inputElement.selectionStart};this.setState(t),"function"==typeof this.props.onChange&&this.props.onChange(e)}});t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return o(e).map(function(e){return-1!==l.maskingCharacters.indexOf(e)?l.placeholderCharacter:e}).join("")}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return o(e).reduce(function(e,t){return-1===l.maskingCharacters.indexOf(t)&&-1===e.indexOf(t)&&e.push(t),e},[])}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function s(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case l.maskingCharactersEnums.numeric:return i(e);case l.maskingCharactersEnums.uppercase:case l.maskingCharactersEnums.lowercase:case l.maskingCharactersEnums.alphabetic:return c(e);case l.maskingCharactersEnums.alphanumeric:return i(e)||c(e);default:return!0}}function u(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case l.maskingCharactersEnums.uppercase:return e.toUpperCase();case l.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function i(e){return!isNaN(e)}function c(e){return/^[a-zA-Z]+$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.getDelimiters=a,t.tokenize=o,t.isAcceptableCharacter=s,t.potentiallyTransformCharacter=u;var l=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.previousInput,r=void 0===t?"":t,n=e.conformToMaskResults,a=void 0===n?{}:n,u=e.currentCaretPosition,c=void 0===u?0:u;a.input=a.input||"",a.output=a.output||"",a.mask=a.mask||"";var l=(0,o.convertMaskToPlaceholder)(a.mask),f=r!==l&&(a.output.length<r.length||a.input.length<r.length);if(f===!1){if(r===a.output)return c-1;var p=(0,i.default)(r||l,a.output);if(p.indexOfLastChange-c>1)return c;for(var d=p.indexOfLastChange+1;d<l.length;d++)if(l[d]===s.placeholderCharacter)return d;return a.output.length}if(f===!0){if(r===a.output){if(l[c]===s.placeholderCharacter)return c;for(var h=c;h>0;h--)if(l[h]===s.placeholderCharacter)return h+1}else{var m=(0,i.default)(r,a.output);if(m.indexOfFirstChange-c>1)return c;if(l[c-1]===s.placeholderCharacter)return c;for(var v=m.indexOfFirstChange-1;v>0;v--)if(l[v]===s.placeholderCharacter)return v+1}return 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var o=r(2),s=r(1),u=r(5),i=n(u)},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=(0,a.convertMaskToPlaceholder)(t),n=(0,a.getDelimiters)(t),s=e.length;return{input:e,mask:t,output:(0,a.tokenize)(r).map(function(r,u){if(r===o.placeholderCharacter&&s>0)for(var i=e.length-s;i<e.length;i++){var c=e[i];if(s--,c===o.placeholderCharacter||-1===n.indexOf(c)&&(0,a.isAcceptableCharacter)(c,t[u])===!0)return(0,a.potentiallyTransformCharacter)(c,t[u])}return r}).join("")}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(2),o=r(1)},function(e,t){"use strict";function r(){for(var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r={indexOfFirstChange:null,indexOfLastChange:null,numberOfChanges:0},n=0;n<e.length;n++)e[n]!==t[n]&&(null===r.indexOfFirstChange&&(r.indexOfFirstChange=n),r.indexOfLastChange=n,r.numberOfChanges++);return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(4);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(a).default}});var o=r(3);Object.defineProperty(t,"adjustCaretPosition",{enumerable:!0,get:function(){return n(o).default}});var s=r(2);Object.defineProperty(t,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return s.convertMaskToPlaceholder}})},function(t,r){t.exports=e}])});