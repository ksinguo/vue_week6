import{_ as c,o as l,c as r,d as t,t as s,F as n}from"./index-fd450ccb.js";const{VITE_APP_URL:u,VITE_APP_PATH:a}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ksin588",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},d={data(){return{product:{}}},mounted(){this.axios.get(`${u}/api/${a}/product/${this.$route.params.id}`).then(o=>{this.product=o.data.product,console.log(this.product)}).catch(o=>{console.log(o)})}},i=t("h1",null,"單一產品細節",-1),p=["src"];function _(o,h,P,m,e,f){return l(),r(n,null,[i,t("table",null,[t("tbody",null,[t("tr",null,[t("td",null,s(e.product.title),1),t("td",null,[t("img",{src:e.product.imageUrl,alt:"",width:"300"},null,8,p)])]),t("tr",null,[t("td",null,s(e.product.content),1)])])])],64)}const g=c(d,[["render",_]]);export{g as default};
