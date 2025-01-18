"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[635],{"./src/stories/TooltipWithProperties.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _shared_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/tooltip/Tooltip.tsx"),_shared_button_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_shared_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__.u,title:"Сложные компоненты/Подсказка/С настройками",tags:["autodocs"]};var Test={args:{content:"Подсказка",duration:1e3,position:"top",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_shared_button_Button__WEBPACK_IMPORTED_MODULE_2__.z,{children:"Наведи на меня"})}};Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:"{\n  args: {\n    content: 'Подсказка',\n    duration: 1000,\n    position: 'top',\n    children: <Button>Наведи на меня</Button>\n  }\n}",...Test.parameters?.docs?.source}}};const __namedExportsOrder=["Test"]},"./src/shared/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_modules=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/button/Button.modules.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_modules.Z,options);const button_Button_modules=Button_modules.Z&&Button_modules.Z.locals?Button_modules.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Button=function Button(_ref){var children=_ref.children,onClick=_ref.onClick,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled;return(0,jsx_runtime.jsx)("button",{className:(0,clsx_m.Z)(button_Button_modules.button,_defineProperty({},button_Button_modules.disabled,disabled)),onClick,children})};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/button/Button.modules.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".l40I4AHWcrrbNfFsMTuc{padding:10px 15px;font-size:1em;color:#fff;background-color:#007bff;border:none;border-radius:5px;cursor:pointer}.CunyKFP965fQ_JGwsj4g{cursor:not-allowed;opacity:.6}","",{version:3,sources:["webpack://./src/shared/button/Button.modules.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,aAAA,CACA,UAAA,CACA,wBAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CAGF,sBACE,kBAAA,CACA,UAAA",sourcesContent:[".button {\n  padding: 10px 15px;\n  font-size: 1em;\n  color: #fff;\n  background-color: #007bff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"l40I4AHWcrrbNfFsMTuc",disabled:"CunyKFP965fQ_JGwsj4g"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);