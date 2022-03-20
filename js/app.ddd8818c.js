(function(){"use strict";var n={9035:function(n,o,t){var e=t(9242),r=t(3396);function s(n,o,t,e,s,i){const a=(0,r.up)("SignBar"),c=(0,r.up)("BoxContainer"),u=(0,r.up)("PromiseAsync");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a),(0,r.Wm)(c),(0,r.Wm)(u)],64)}var i=t(7139);const a=n=>((0,r.dD)("data-v-78674fc4"),n=n(),(0,r.Cn)(),n),c={class:"sign-nav"},u=a((()=>(0,r._)("button",{class:"modal-btn"},"send",-1)));function l(n,o,t,s,a,l){const d=(0,r.Q2)("click-outside");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("nav",c,[(0,r._)("button",{class:"sign-btn",onClick:o[0]||(o[0]=(...n)=>l.popupToggle&&l.popupToggle(...n))},"sign up")]),a.popupActive?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,i.C_)(["modal-background",{modalActive:a.popupActive}])},[(0,r.wy)(((0,r.wg)(),(0,r.iD)("form",{class:"modal-form",onSubmit:o[3]||(o[3]=(...n)=>l.formSubmit&&l.formSubmit(...n))},[(0,r.wy)((0,r._)("input",{class:"modal-input",type:"text",placeholder:"username","onUpdate:modelValue":o[1]||(o[1]=n=>a.login=n)},null,512),[[e.nr,a.login]]),(0,r.wy)((0,r._)("input",{class:"modal-input",type:"password",placeholder:"password","onUpdate:modelValue":o[2]||(o[2]=n=>a.password=n)},null,512),[[e.nr,a.password]]),u],32)),[[d,l.onClickOutside]])],2)):(0,r.kq)("",!0)])}var d=t(3051),p=t.n(d),v={data(){return{popupActive:!1,login:"",password:""}},directives:{clickOutside:p().directive},methods:{onClickOutside(){this.popupActive=!this.popupActive},popupToggle(n){n.preventDefault(),this.popupActive=!this.popupActive},formSubmit(n){n.preventDefault(),console.log(`Отправляю...\nlogin: ${this.login}\npassword: ${this.password}`),this.popupActive=!this.popupActive,this.axios.post("http://",{login:this.login,password:this.password}).then((function(n){console.log(n.data)})).catch((function(n){alert("Ошибка! см. консоль"),console.log("URL в тесте не существующий, ответа нет. log ошибки:\n",n)})),this.login="",this.password=""}}},f=t(89);const h=(0,f.Z)(v,[["render",l],["__scopeId","data-v-78674fc4"]]);var g=h;const b={class:"container"},w=(0,r.uE)('<div class="box" data-v-17b9d6ee></div><div class="box" data-v-17b9d6ee></div><div class="box" data-v-17b9d6ee></div><div class="box" data-v-17b9d6ee></div><div class="box" data-v-17b9d6ee></div><div class="box" data-v-17b9d6ee></div>',6),m=[w];function y(n,o,t,e,s,i){return(0,r.wg)(),(0,r.iD)("div",b,m)}var j={};const x=(0,f.Z)(j,[["render",y],["__scopeId","data-v-17b9d6ee"]]);var _=x;const k=n=>((0,r.dD)("data-v-58b27580"),n=n(),(0,r.Cn)(),n),O=k((()=>(0,r._)("h2",null,"Promise:",-1))),A=k((()=>(0,r._)("pre",null,"    const getJson = url => fetch(url).then(res => res.json());\n\n    getJson('/i/1.json')\n    .then(json => {\n        if (json.key) {\n            return getJson('/i/2.json')\n        }\n        throw new Error('No key')\n    })\n    .then(json => {\n        return json.key2\n    })\n    .catch(error => {\n        console.error(error)\n    })\n    ",-1))),D=k((()=>(0,r._)("h2",null,"Async/Await:",-1))),C=k((()=>(0,r._)("pre",null,"    const getJson = async (url) => {\n        const response = await fetch(url)\n        return response.json()\n    }\n\n    const fetchData = async () => {\n        try {\n            const json = await getJson('/i/1.json')\n\n            if (json.key) {\n                const newJson = await getJson('/i/2.json')\n                return newJson.key\n            }\n\n            throw new Error('No key')\n        } catch (error) {\n            console.error(error)\n        }\n    }\n\n    fetchData()\n    ",-1))),J=[O,A,D,C];function S(n,o,t,e,s,i){return(0,r.wg)(),(0,r.iD)("div",null,J)}var E={};const P=(0,f.Z)(E,[["render",S],["__scopeId","data-v-58b27580"]]);var T=P,Z={name:"App",components:{SignBar:g,BoxContainer:_,PromiseAsync:T}};const B=(0,f.Z)(Z,[["render",s]]);var U=B,I=t(6265),M=t.n(I),W=t(6423);(0,e.ri)(U).use(p()).use(W.Z,M()).mount("#app")}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var s=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}t.m=n,function(){t.amdO={}}(),function(){var n=[];t.O=function(o,e,r,s){if(!e){var i=1/0;for(l=0;l<n.length;l++){e=n[l][0],r=n[l][1],s=n[l][2];for(var a=!0,c=0;c<e.length;c++)(!1&s||i>=s)&&Object.keys(t.O).every((function(n){return t.O[n](e[c])}))?e.splice(c--,1):(a=!1,s<i&&(i=s));if(a){n.splice(l--,1);var u=r();void 0!==u&&(o=u)}}return o}s=s||0;for(var l=n.length;l>0&&n[l-1][2]>s;l--)n[l]=n[l-1];n[l]=[e,r,s]}}(),function(){t.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(o,{a:o}),o}}(),function(){t.d=function(n,o){for(var e in o)t.o(o,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:o[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){t.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){var n={143:0};t.O.j=function(o){return 0===n[o]};var o=function(o,e){var r,s,i=e[0],a=e[1],c=e[2],u=0;if(i.some((function(o){return 0!==n[o]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(c)var l=c(t)}for(o&&o(e);u<i.length;u++)s=i[u],t.o(n,s)&&n[s]&&n[s][0](),n[s]=0;return t.O(l)},e=self["webpackChunklofty_test"]=self["webpackChunklofty_test"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(9035)}));e=t.O(e)})();
//# sourceMappingURL=app.ddd8818c.js.map