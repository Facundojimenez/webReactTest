(this.webpackJsonpmi_proyecto=this.webpackJsonpmi_proyecto||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bannerBienvenida1.ff178040.jpeg"},119:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bannerBienvenida2.3f74198e.jpeg"},120:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bannerBienvenida3.1b178e2d.jpeg"},121:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(14),i=n.n(c),r=(n(107),n(168)),o=n(170),s=n(171),l=n(62),j=n(193),d=n(172),b=n(169),u=n(91),x=n(61),m=Object(u.a)({palette:{primary:{light:x.a[400],main:x.a[700],dark:x.a[900]},background:{default:"#eee"}}}),h=n(161),O=n(78),p=n.n(O),f=n(3);var g=function(){return Object(f.jsx)(h.a,{"aria-label":"carrito",color:"inherit",children:Object(f.jsx)(p.a,{fontSize:"large"})})},v=n(42),y=n(190),C=n(164),k=n(165),I=n(166),N=n(167),S=n(79),B=n.n(S),w=n(80),F=n.n(w),E=n(81),A=n.n(E),D=n(82),W=n.n(D);var z=function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{mdUp:!0,children:Object(f.jsx)(h.a,{onClick:function(){return c(!0)},"aria-label":"menu",color:"inherit",children:Object(f.jsx)(B.a,{})})}),Object(f.jsx)(y.a,{anchor:"top",open:n,onClose:function(){return c(!1)},onOpen:function(){return c(!0)},children:Object(f.jsxs)(C.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(f.jsxs)(k.a,{button:!0,component:"a",href:"#",children:[Object(f.jsx)(I.a,{children:Object(f.jsx)(F.a,{})}),Object(f.jsx)(N.a,{primary:"Home"})]}),Object(f.jsxs)(k.a,{button:!0,component:"a",href:"#",children:[Object(f.jsx)(I.a,{children:Object(f.jsx)(A.a,{})}),Object(f.jsx)(N.a,{primary:"Productos"})]}),Object(f.jsxs)(k.a,{button:!0,component:"a",href:"#",children:[Object(f.jsx)(I.a,{children:Object(f.jsx)(W.a,{})}),Object(f.jsx)(N.a,{primary:"Contacto"})]})]})})]})},H=Object(r.a)({espacioAppBar:m.mixins.toolbar,logoBrand:{flexGrow:1}});var P=function(){var e=H();return Object(f.jsxs)(b.a,{theme:m,children:[Object(f.jsx)(o.a,{position:"fixed",children:Object(f.jsxs)(s.a,{children:[Object(f.jsx)(z,{}),Object(f.jsx)(l.a,{className:e.logoBrand,variant:"h6",element:"h6",children:"Music Store"}),Object(f.jsxs)(j.a,{smDown:!0,children:[Object(f.jsx)(d.a,{color:"inherit",children:"Home"}),Object(f.jsx)(d.a,{color:"inherit",children:"Productos"}),Object(f.jsx)(d.a,{color:"inherit",children:"Contacto"})]}),Object(f.jsx)(g,{})]})}),Object(f.jsx)("div",{className:e.espacioAppBar})]})},T=n(67),L=n.n(T),R=n(83),U=n(174),_=n(175),G=n(176),M=n(188),J=n(177),Q=n(178),V=n(196),Y=n(179),$=n(85),q=n.n($),K=n(84),X=n.n(K),Z=n(194),ee=n(192),te=Object(r.a)({contenedor:{margin:"auto",display:"flex",justifyContent:"center",height:"30px",width:"60%"},cantidadOutput:{textAlign:"center",minWidth:"48px"}});var ne=function(e){var t=te(),n=Object(a.useState)(1),c=Object(v.a)(n,2),i=c[0],r=c[1],o=Object(a.useState)(!1),s=Object(v.a)(o,2),j=s[0],d=s[1],b=function(e,t){"clickaway"!==t&&d(!1)};return Object(f.jsxs)(M.a,{className:t.contenedor,children:[Object(f.jsx)(h.a,{onClick:function(){i>1&&r(i-1)},children:Object(f.jsx)(X.a,{})}),Object(f.jsx)(M.a,{className:t.cantidadOutput,children:Object(f.jsx)(l.a,{variant:"body1",element:"span",children:i})}),Object(f.jsx)(h.a,{onClick:function(){i<e.stock?r(i+1):d(!0)},children:Object(f.jsx)(q.a,{})}),Object(f.jsx)(Z.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:j,autoHideDuration:5e3,onClose:b,children:Object(f.jsx)(ee.a,{variant:"filled",onClose:b,severity:"info",children:"El stock disponible  del art\xedculo es: ".concat(e.stock," unidades")})})]})},ae=Object(r.a)({cardContent:{padding:"0"},cardBoxContent:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",minHeight:"100px"},cardFoto:{height:"300px",minWidth:"200px",objectFit:"contain"}});var ce=function(e){var t=ae();return Object(f.jsxs)(U.a,{className:t.card,children:[Object(f.jsx)(_.a,{className:t.cardFoto,component:"img",image:e.urlImagen,title:" ".concat(e.categoria," ").concat(e.marca," ").concat(e.modelo)}),Object(f.jsxs)(G.a,{className:t.cardContent,children:[Object(f.jsxs)(M.a,{className:t.cardBoxContent,py:1,children:[Object(f.jsxs)(l.a,{variant:"h5",component:"h5",children:[e.marca," ",e.modelo]}),Object(f.jsx)(l.a,{variant:"body2",color:"textSecondary",component:"h6",children:e.categoria}),Object(f.jsx)(V.a,{name:"half-rating-read",defaultValue:e.calificacion,precision:.5,readOnly:!0})]}),Object(f.jsx)(J.a,{variant:"middle"}),Object(f.jsx)(M.a,{display:"flex",flexDirection:"column",alignItems:"center",py:1,children:Object(f.jsxs)(l.a,{variant:"h5",component:"h6",children:["$",e.precio]})})]}),Object(f.jsx)(ne,{stock:e.stock}),Object(f.jsx)(Q.a,{children:Object(f.jsx)(d.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(f.jsx)(Y.a,{}),children:Object(f.jsx)(l.a,{variant:"body1",component:"h6",children:"Agregar al carrito"})})})]})},ie=n(180);var re=function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){i()}),[]);var i=function(){var e=Object(R.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/Facundojimenez/musicStoreReact/main/src/data/jsonProductos.json");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,c(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(M.a,{my:2,children:Object(f.jsx)(ie.a,{container:!0,spacing:2,children:n.map((function(e){return Object(f.jsx)(ie.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(f.jsx)(ce,{marca:e.marca,modelo:e.modelo,precio:e.precio,stock:e.stock,categoria:e.categoria,calificacion:e.calificacion,urlImagen:e.urlImagen})},e.id)}))})})},oe=n(181),se=n(87),le=n.n(se),je=n(86),de=n.n(je),be=Object(r.a)({letrasBlancas:{color:m.palette.common.white},footer:{minHeight:"10vh",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",maxHeight:"300px",padding:"1rem",color:m.palette.common.white,backgroundColor:m.palette.primary.dark}});var ue=function(){var e=be();return Object(f.jsxs)(oe.a,{maxWidth:!1,className:e.footer,children:[Object(f.jsx)(l.a,{textalign:"center",variant:"h5",element:"h4",color:"initial",children:"\xa1Seguime en mis redes!"}),Object(f.jsxs)(M.a,{display:"flex",children:[Object(f.jsx)(h.a,{href:"https://github.com/Facundojimenez",target:"_blank",className:e.letrasBlancas,children:Object(f.jsx)(de.a,{fontSize:"large"})}),Object(f.jsx)(h.a,{href:"https://www.linkedin.com/in/facundo-jimenez-980a831ba/",target:"_blank",className:e.letrasBlancas,children:Object(f.jsx)(le.a,{fontSize:"large"})})]})]})},xe=n(189),me=n(185),he=n(186),Oe=n(182),pe=n(183),fe=n(184),ge=(n(114),n(115),n(116),n(117),[{id:1,titulo:"Music Store",descripcion:"TU LUGAR IDEAL",urlImagen:n(118).default},{id:2,titulo:"Las mejores marcas",descripcion:"DE GUITARRAS Y EQUIPOS",urlImagen:n(119).default},{id:3,titulo:"Hasta 12 cuotas",descripcion:"SIN INTER\xc9S",urlImagen:n(120).default}]);he.a.use([Oe.a,pe.a,fe.a]);var ve=function(){return Object(f.jsx)(xe.a,{pagination:{dynamicBullets:!0},navigation:!0,speed:1e3,centeredSlides:!0,centeredSlidesBounds:!0,autoplay:{delay:6e3,disableOnInteraction:!0},children:ge.map((function(e){return Object(f.jsx)(me.a,{children:Object(f.jsxs)("div",{className:"container-img-banner",style:{backgroundImage:"url(".concat(e.urlImagen,")")},children:[Object(f.jsx)(l.a,{variant:"h2",component:"h2",children:e.titulo}),Object(f.jsx)(l.a,{variant:"h4",component:"h4",children:e.descripcion})]})},e.id)}))})},ye=n(88),Ce=n(94),ke=n(187),Ie=n(89),Ne=n.n(Ie),Se=Object(r.a)({formContainer:{display:"flex",justifyContent:"center",padding:"16px",minHeight:"500px",maxWidth:"600px"},formInnerContainer:Object(ye.a)({display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},m.breakpoints.up("md"),{width:"75%"}),botonEnviar:{marginTop:"32px"}});var Be=function(){var e=Se();return Object(f.jsx)(Ce.a,{className:e.formContainer,children:Object(f.jsxs)(M.a,{className:e.formInnerContainer,children:[Object(f.jsx)(l.a,{textalign:"center",variant:"h4",element:"h4",color:"initial",children:"\xa1Contactanos!"}),Object(f.jsxs)("form",{children:[Object(f.jsxs)(ie.a,{container:!0,spacing:4,children:[Object(f.jsx)(ie.a,{}),Object(f.jsx)(ie.a,{item:!0,xs:12,md:6,children:Object(f.jsx)(ke.a,{fullWidth:!0,id:"outlined-basic",label:"Nombre",variant:"outlined"})}),Object(f.jsx)(ie.a,{item:!0,xs:12,md:6,children:Object(f.jsx)(ke.a,{fullWidth:!0,id:"outlined-basic",label:"Apellido",variant:"outlined"})}),Object(f.jsx)(ie.a,{item:!0,xs:12,children:Object(f.jsx)(ke.a,{fullWidth:!0,id:"outlined-basic",label:"Email",variant:"outlined"})}),Object(f.jsx)(ie.a,{item:!0,xs:12,children:Object(f.jsx)(ke.a,{fullWidth:!0,id:"outlined-basic",label:"Mensaje",variant:"outlined"})})]}),Object(f.jsx)(M.a,{display:"flex",justifyContent:"center",children:Object(f.jsx)(d.a,{className:e.botonEnviar,size:"large",variant:"contained",color:"primary",endIcon:Object(f.jsx)(Ne.a,{}),children:"Send"})})]})]})})},we=Object(r.a)({body:{backgroundColor:m.palette.background.default},contactFormContainer:{display:"flex",justifyContent:"center",padding:"48px 16px",backgroundColor:m.palette.primary.main}});var Fe=function(){var e=we();return Object(f.jsxs)("div",{className:e.body,children:[Object(f.jsx)(P,{}),Object(f.jsx)(ve,{}),Object(f.jsxs)(oe.a,{children:[Object(f.jsx)(M.a,{my:5,children:Object(f.jsx)(l.a,{variant:"h3",element:"h3",color:"initial",align:"center",children:"Nuestro Cat\xe1logo"})}),Object(f.jsx)(re,{})]}),Object(f.jsx)(M.a,{className:e.contactFormContainer,children:Object(f.jsx)(Be,{id:"contactForm"})}),Object(f.jsx)(ue,{})]})},Ee=n(90),Ae=n.n(Ee),De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};i.a.render(Object(f.jsx)(Fe,{style:Ae.a}),document.getElementById("root")),De()},90:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.e360951d.chunk.js.map