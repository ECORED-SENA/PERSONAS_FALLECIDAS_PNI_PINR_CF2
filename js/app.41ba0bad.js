(function(e){function n(n){for(var o,r,c=n[0],s=n[1],d=n[2],u=0,l=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(n);while(l.length)l.shift()();return t.push.apply(t,d||[]),a()}function a(){for(var e,n=0;n<t.length;n++){for(var a=t[n],o=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(o=!1)}o&&(t.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},r={app:0},i={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"0be029d1","chunk-0206bfa0":"5834c11e","chunk-04b93936":"2e7558e2","chunk-13a6037e":"4c3ab151","chunk-16015154":"531a8263","chunk-17977988":"c992dc81","chunk-2c06842c":"dcef31f0","chunk-2d208d90":"e5033077","chunk-2d21d0e2":"bc037175","chunk-2d22c123":"55f64707","chunk-2e80bb9a":"830a1ea7","chunk-3145fe0f":"4aa05362","chunk-328f70dd":"e3fa842c","chunk-3807499c":"e2876ec9","chunk-3dc647fd":"fd1d7069","chunk-4cdd78c0":"91d7d280","chunk-4fde0a08":"5ddf26ff","chunk-515a8379":"0145c9a0","chunk-53ccb27e":"368edbe4","chunk-59974754":"40736015","chunk-766a929b":"8d079769","chunk-839300a6":"33982144","chunk-c796899c":"33cb30f8","chunk-dbb9869e":"c1ecb24d",comple:"6ecf6aae",creditos:"a483747d",glosario:"a408453b",intro:"63aebb84",referencias:"78526dd1",tema1:"4098a997",tema2:"93222bb1",tema3:"4259111e"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};r[e]?n.push(r[e]):0!==r[e]&&a[e]&&n.push(r[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"ab0a5606","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"89b4ee2a","chunk-766a929b":"d522addc","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"267e52f7",creditos:"9cc2879c",glosario:"8f75ac45",intro:"0e433876",referencias:"767762dd",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",i=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===o||u===i))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],u=d.getAttribute("data-href");if(u===o||u===i)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||i,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete r[e],f.parentNode.removeChild(f),a(t)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)n.push(o[2]);else{var t=new Promise((function(n,a){o=i[e]=[n,a]}));n.push(o[2]=t);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var l=new Error;d=function(n){u.onerror=u.onload=null,clearTimeout(f);var a=i[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,a[1](l)}i[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=u;t.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},i=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=a("2877"),d=Object(s["a"])(c,r,i,!1,null,null,null),u=d.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),f=a("8c4f"),m=a("ae58"),p=a("7e58");l["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Conceptos de inhumación y exhumación",descripcionCurso:"<br><br><br>En el proceso de manejo de la persona fallecida no identificada e identificada no reclamada surge la custodia que asigna responsabilidad a los cementerios de generar condiciones apropiadas para su inhumación individualizada y del proceso de exhumación para la entrega a sus familias, en este componente se abordarán estos conceptos y sus condiciones.<br><br><br><br>",imagenBannerPrincipal:a("9370"),fondoBannerPrincipal:a("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Inhumación",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Concepto de inhumación",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Condiciones para la inhumación",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Exhumación",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Derechos Humanos",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Comité Internacional de la Cruz Roja. (2007). El Derecho Internacional Humanitario Consuetudinario. CICR.",link:"https://www.icrc.org/es/doc/assets/files/other/icrc_003_pcustom.pdf?fbclid=IwAR0_7GfC0KcRmrxH03HAC22m8192l_GcYYhRV79OznwhRDKc3HC510BgDLE"},{referencia:"Corte Constitucional, Sala tercera de revisión. Sentencia T-162/2014. (MP. Eduardo Cifuentes Muñoz; 24 de marzo de 1994).",link:"https://www.corteconstitucional.gov.co/relatoria/1994/t-162-94.htm"},{referencia:"Moon, C. (2020). Los derechos humanos de los muertos y sus familiares.",link:"https://estudiosdeldesarrollo.mx/observatoriodeldesarrollo/wp-content/uploads/2020/07/ODadelantoCMoon.pdf"},{referencia:"Resolución 5194 de 2010. [Ministerio de la Protección Social]. Por la cual se reglamenta la prestación de los servicios de cementerios, inhumación, exhumación y cremación de cadáveres. Diciembre 10 de 2010.",link:"https://tibasosaboyaca.micolombiadigital.gov.co/sites/tibasosaboyaca/content/files/000024/1155_resolucion-no-5194-de-16-de-diciembre-de-2010.pdf"}],glosario:[{termino:"Cementerio",significado:"Lugar de destino para recibir y alojar los cadáveres y restos humanos, en cualquiera de los espacios adecuados para ello."},{termino:"Custodia",significado:"Guardar algo con cuidado y vigilancia."},{termino:"Exhumar",significado:"Desenterrar un cadáver o restos humanos."},{termino:"Individualización",significado:"Especificar, distinguir una cosa de otras por cualidades peculiares. Distinguir un individuo de otros de la especie."},{termino:"Inhumar",significado:"Enterrar un cadáver."},{termino:"Normativa",significado:"Disposición de leyes y decretos que fundamentan una actividad."},{termino:"PNI",significado:"Persona no identificada."},{termino:"PINR",significado:"Personas identificadas no reclamadas."},{termino:"Posexhumaciones",significado:"Procesos que se realizan después de la exhumación."}],complementario:[{texto:"Moon, C. (2020). Los derechos humanos de los muertos y sus familiares.",tipo:"Artículo",descarga:"/downloads/ODadelantoCMoon.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"John Alejandro Carmona Escobar",cargo:"Instructor experto temático",centro:"Centro de Servicios de Salud  - Regional Antioquia"},{nombre:"Jhacesiz Mary Hincapié Atehortúa",cargo:"Instructora (EPC) – Líder desarrollo curricular servicios personales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Adriana María Bustamante Cataño",cargo:"Profesional de diseño y producción curricular",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Cristian Metaute Medina",cargo:"Diseñador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Vilma Perilla Méndez",cargo:"Revisora metodológica y pedagógica",centro:"Centro de Gestión Industrial - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Oscar Julian Marquez Sanabria",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Diego Fernando Velasco Güiza",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrés Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Isabel Román Rueda",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},9370:function(e,n,a){e.exports=a.p+"img/banner-princiapal.2225b865.png"},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,a){},e6b0:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.05e37373.png"}});
//# sourceMappingURL=app.41ba0bad.js.map