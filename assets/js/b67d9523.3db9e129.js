"use strict";(self.webpackChunklaravel_time_series_docs=self.webpackChunklaravel_time_series_docs||[]).push([[987],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7037:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={},c="Make a model projectable",p={unversionedId:"getting-started/make-a-model-projectable",id:"getting-started/make-a-model-projectable",title:"Make a model projectable",description:"The Projectable trait",source:"@site/docs/getting-started/make-a-model-projectable.md",sourceDirName:"getting-started",slug:"/getting-started/make-a-model-projectable",permalink:"/laravel-time-series-docs/getting-started/make-a-model-projectable",editUrl:"https://github.com/timothepearce/laravel-time-series-docs/docs/getting-started/make-a-model-projectable.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/laravel-time-series-docs/getting-started/configuration"},next:{title:"Implement a projection",permalink:"/laravel-time-series-docs/getting-started/implement-a-projection"}},s=[{value:"The Projectable trait",id:"the-projectable-trait",children:[],level:2},{value:"Bind your model to projections",id:"bind-your-model-to-projections",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"make-a-model-projectable"},"Make a model projectable"),(0,a.kt)("h2",{id:"the-projectable-trait"},"The Projectable trait"),(0,a.kt)("p",null,"When you want to make your model projectable, you must add it the ",(0,a.kt)("inlineCode",{parentName:"p"},"Projectable")," trait:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Models/MyProjectableModel.php" {6,10}',title:'"app/Models/MyProjectableModel.php"',"{6,10}":!0},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse TimothePearce\\TimeSeries\\Projectable;\n\nclass MyProjectableModel extends Model\n{\n    use Projectable;\n}\n")),(0,a.kt)("p",null,"Under the hood, this trait will listen for the model's lifecycle events in order to bind them to the projections you will define in the next paragraph."),(0,a.kt)("p",null,"It also defines a ",(0,a.kt)("inlineCode",{parentName:"p"},"MorphToMany")," relation with the generic ",(0,a.kt)("inlineCode",{parentName:"p"},"TimothePearce\\TimeSeries\\Models\\Projection")," model, which allows you to query your projections following the Eloquent conventions you already know."),(0,a.kt)("h2",{id:"bind-your-model-to-projections"},"Bind your model to projections"),(0,a.kt)("p",null,"After making your model projectable, you have to bind it to the projections of your choice:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Models/MyProjectableModel.php" {5,13,14,15}',title:'"app/Models/MyProjectableModel.php"',"{5,13,14,15}":!0},"<?php\n\nnamespace App\\Models;\n\nuse App\\Models\\Projections\\MyProjection;\nuse Illuminate\\Database\\Eloquent\\Model;\nuse TimothePearce\\TimeSeries\\Projectable;\n\nclass MyProjectableModel extends Model\n{\n    use Projectable;\n\n    protected array $projections = [\n        MyProjection::class,\n    ];\n}\n")),(0,a.kt)("p",null,"As you see, the ",(0,a.kt)("inlineCode",{parentName:"p"},"projections")," class attribute is a type ",(0,a.kt)("inlineCode",{parentName:"p"},"array"),", which means you can bind your model to multiple projections in case you need it."))}d.isMDXComponent=!0}}]);