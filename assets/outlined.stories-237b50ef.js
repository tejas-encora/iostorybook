import{r as d,c,w as u,o as p,b as m}from"./vue.esm-bundler-92f74987.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{x as _,i as v,_ as y,e as h}from"./events-897ffe23.js";import{B as g,s as x}from"./shared-styles.css-5fd34001.js";const l={name:"IOButtonOutline"};function f(t,w,I,k,z,$){const s=d("md-outlined-button");return p(),c(s,null,{default:u(()=>[m(t.$slots,"default")]),_:3})}const i=b(l,[["render",f]]);l.__docgenInfo={displayName:"IOButtonOutline",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOButtonOutline.vue"]};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class O extends g{renderOutline(){return _`<span class="button__outline"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const B=v`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button:active .button__outline{border-color:var(--_pressed-outline-color)}.button:disabled .button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){.button:disabled .button__outline{opacity:1}}.button__outline,.button__ripple{border-width:var(--_outline-width)}.button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let o=class extends O{};o.styles=[x,B];o=y([h("md-outlined-button")],o);const D={title:"UI/Atoms/Buttons/Outlined",component:i,tags:["autodocs"],render:t=>({components:{IOButIOButtonOutlineonFilled},setup(){return{args:t}},template:'<IOButtonOutline v-bind="args">{{args.label}}</IOButtonOutline>'}),args:{disabled:!1,label:"click me",class:"medium"},argTypes:{class:{control:{type:"select"},options:["small","medium","large"]},onClick:{action:"Button clicked"}},parameters:{docs:{description:{component:"Buttons help people take actions, such as sending an email, sharing a document, or liking a comment."}}}},e={args:{disabled:!1,label:"click me",class:"medium"},argTypes:{class:{control:{type:"select"},options:["small","medium","large"]},onClick:{action:"Button clicked"}},render:t=>({components:{IOButtonOutline:i},setup(){return{args:t}},template:'<IOButtonOutline v-bind="args">{{args.label}}</IOButtonOutline>'})};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'click me',
    class: 'medium'
  },
  argTypes: {
    class: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium', 'large']
    },
    onClick: {
      action: 'Button clicked'
    }
  },
  render: args => ({
    components: {
      IOButtonOutline
    },
    setup() {
      return {
        args
      };
    },
    template: '<IOButtonOutline v-bind="args">{{args.label}}</IOButtonOutline>'
  })
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const F=["Default"];export{e as Default,F as __namedExportsOrder,D as default};
//# sourceMappingURL=outlined.stories-237b50ef.js.map
