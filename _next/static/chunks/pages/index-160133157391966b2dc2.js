_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{AFKX:function(e,t){},RXBc:function(e,t,n){"use strict";function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],l=!0,a=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(l=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);l=!0);}catch(c){a=!0,r=c}finally{try{l||null==i.return||i.return()}finally{if(a)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t),n.d(t,"__N_SSG",(function(){return te}));var r=n("du4W"),o=n("Osqa"),i=n("BXwj"),c=n("epLR"),u=n("KwD7"),s=n("t6h6"),d=n("q1tI"),f=n.n(d);function h(e){void 0===e&&(e=!1);var[t,n]=Object(d.useState)(e);return[t,{on:Object(d.useCallback)(()=>{n(!0)},[]),off:Object(d.useCallback)(()=>{n(!1)},[]),toggle:Object(d.useCallback)(()=>{n(e=>!e)},[])}]}var b=n("zlS4"),m=n("sKyC"),p=n("4jWa"),v=n("CRla"),y=n("5+Am"),O=n("U6LL"),g=n("JX03"),j=n("pr4h");function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}var[x,w]=Object(g.a)({strict:!1,name:"FormControlContext"});var N=Object(m.a)((e,t)=>{var n=Object(p.a)("Form",e),l=function(e){var{id:t,isRequired:n,isInvalid:l,isDisabled:a,isReadOnly:r}=e,o=k(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),i=Object(s.a)(),c=t||"field-"+i,u=c+"-label",d=c+"-feedback",f=c+"-helptext",[b,m]=h(),[p,v]=h(),[y,O]=h();return{isRequired:!!n,isInvalid:!!l,isReadOnly:!!r,isDisabled:!!a,isFocused:!!y,onFocus:O.on,onBlur:O.off,hasFeedbackText:b,setHasFeedbackText:m,hasHelpText:p,setHasHelpText:v,id:c,labelId:u,feedbackId:d,helpTextId:f,htmlProps:o}}(Object(v.b)(e)),{htmlProps:a}=l,r=k(l,["htmlProps"]),o=Object(c.b)("chakra-form-control",e.className);return d.createElement(x,{value:r},d.createElement(y.b,{value:n},d.createElement(O.a.div,_({role:"group",ref:t},a,{className:o,__css:{width:"100%",position:"relative"}}))))});j.a&&(N.displayName="FormControl");var S=Object(m.a)((e,t)=>{var n,l=w(),a=Object(y.c)();Object(b.a)(()=>(null==l||l.setHasHelpText.on(),()=>null==l?void 0:l.setHasHelpText.off()),[]);var r=Object(c.b)("chakra-form__helper-text",e.className);return d.createElement(O.a.div,_({ref:t,__css:a.helperText},e,{className:r,id:null!=(n=e.id)?n:null==l?void 0:l.helpTextId}))});function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}j.a&&(S.displayName="FormHelperText");var E=n("hMXk"),C=n("qd8s"),R=n.n(C);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}var P=Object(m.a)((e,t)=>{var{children:n,placeholder:l,className:a}=e,r=function(e){var t,n=w(),l=[];null!=n&&n.hasFeedbackText&&l.push(n.feedbackId),null!=n&&n.hasHelpText&&l.push(n.helpTextId);var a=l.join(" ");return H({},Object(i.h)(e,["isInvalid","isDisabled","isReadOnly","isRequired"]),{id:null!=(t=e.id)?t:null==n?void 0:n.id,disabled:e.disabled||e.isDisabled||(null==n?void 0:n.isDisabled),readOnly:e.readOnly||e.isReadOnly||(null==n?void 0:n.isReadOnly),required:e.required||e.isRequired||(null==n?void 0:n.isRequired),"aria-invalid":Object(c.a)(e.isInvalid||(null==n?void 0:n.isInvalid)),"aria-required":Object(c.a)(e.isRequired||(null==n?void 0:n.isRequired)),"aria-readonly":Object(c.a)(e.isReadOnly||(null==n?void 0:n.isReadOnly)),"aria-describedby":a||void 0,onFocus:Object(u.a)(null==n?void 0:n.onFocus,e.onFocus),onBlur:Object(u.a)(null==n?void 0:n.onBlur,e.onBlur)})}(F(e,["children","placeholder","className"]));return d.createElement(O.a.select,I({},r,{ref:t,className:Object(c.b)("chakra-select",a)}),l&&d.createElement("option",{value:""},l),n)});j.a&&(P.displayName="SelectField");var T=Object(m.a)((e,t)=>{var n=Object(p.a)("Select",e),l=Object(v.b)(e),{rootProps:a,placeholder:r,icon:o,color:c,height:u,h:s,minH:f,minHeight:h,iconColor:b,iconSize:m}=l,y=F(l,["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"]),[g,j]=Object(i.i)(y,E.layoutPropNames),_={width:"100%",height:"fit-content",position:"relative",color:c},k=R()({},n.field,{pr:"2rem",_focus:{zIndex:"unset"}});return d.createElement(O.a.div,I({className:"chakra-select__wrapper",__css:_},g,a),d.createElement(P,I({ref:t,height:null!=s?s:u,minH:null!=f?f:h,placeholder:r},j,{__css:k}),e.children),d.createElement(z,I({"data-disabled":e.isDisabled,color:b||c,__css:n.icon},m&&{fontSize:m}),o))});j.a&&(T.displayName="Select");var q=e=>d.createElement("svg",I({viewBox:"0 0 24 24"},e),d.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),A=Object(O.a)("div",{baseStyle:{position:"absolute",display:"inline-flex",width:"1.5rem",height:"100%",alignItems:"center",justifyContent:"center",right:"0.5rem",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),z=e=>{var{children:t=d.createElement(q,null)}=e,n=F(e,["children"]),l=d.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return d.createElement(A,I({},n,{className:"chakra-select__icon-wrapper"}),d.isValidElement(t)?l:null)};j.a&&(z.displayName="SelectIcon");var D=n("tofy"),X=n("wZsY");function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var M=Object(m.a)((e,t)=>{var n=Object(p.b)("Heading",e),l=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(Object(v.b)(e),["className"]);return d.createElement(O.a.h2,B({ref:t,className:Object(c.b)("chakra-heading",e.className)},l,{__css:n}))});j.a&&(M.displayName="Heading");var W=n("uMdk"),J=n("v7Hm"),Y=n("MAJE"),K=n("YFqc"),L=n.n(K),U=n("nOHt"),G=n("uuu+"),Q=(n("Ytsx"),n("Bl7J")),V=f.a.createElement,Z=function(e){var t=e.fundHouse;return V(r.g,{textAlign:"left"},V(r.d,{w:5,minW:4,textAlign:"left"},t.change_percentage_aum,"%"),V(r.d,{w:15,minW:15,textAlign:"left"},t.change_quantity),V(r.d,{textAlign:"left"},V(L.a,{href:"/mutual_funds/".concat(t.fund_house)},V("a",null,V("u",null,t.fund_name)))))},$=function(e){var t,n=e.stock,l=e.state,a=e.color,i=n.fundHouses.length;return V(r.g,null,V(r.d,null,n.stock_name),V(r.d,{display:["none","none","table-cell","table-cell","table-cell"]},n.industry),V(r.d,{display:["none","none","table-cell","table-cell","table-cell"]},V(o.a,{colorScheme:a,textColor:"white"},l)),V(r.d,null,V(L.a,{href:"/mutual_funds/".concat(null===(t=n.fundHouses[0])||void 0===t?void 0:t.fund_house)},V("a",null,V("u",null,i)))),V(r.d,{display:["none","none","none","table-cell","table-cell"]},V(r.a,null,V(r.f,null,V(r.g,null,V(r.e,null,"AUM%"),V(r.e,null,"Quantity"),V(r.e,null,"Fund"))),V(r.c,null,n.fundHouses.map((function(e){return V(Z,{key:e.fund_house,fundHouse:e})}))))))},ee=function(e){var t=e.fundHouses,n=Object(U.useRouter)();return V(T,{onChange:function(e){n.push("/mutual_funds/".concat(e.target.value))},placeholder:"Select a mutual-fund",backgroundColor:"white"},Object.entries(t).map((function(e){var t=a(e,2),n=t[0],l=t[1];return V("option",{key:n,value:n},l)})))},te=!0;t.default=function(e){var t=e.stocks,n=e.fundHouses;return V(Q.a,null,V(D.a,{direction:"column",align:["left","left","left","center","center"],justify:["left","left","left","center","center"],maxW:"8xl",backgroundColor:"gray.50"},V(X.a,{pd:10},V(M,{fontSize:"2xl",textColor:"gray.800",mt:5,ml:6},"We track the best of mutual funds and filter out the stocks that they have added in the last month."),V(W.a,{orientation:"horizontal",colorScheme:"gray"}),V(G.a,null),V(W.a,{orientation:"horizontal",colorScheme:"gray"}),V(D.a,{direction:"row",align:"inherit",justify:"inherit",maxW:"4xl",mb:4,ml:10},V(J.a,{ml:6},""),V(ee,{fundHouses:n})),V(J.a,{maxW:"8xl"},V(X.a,null,V(Y.a,{fontSize:"md",textColor:"gray.500",mb:2,ml:6,display:["none","none","none","table-cell","table-cell"]},"The following are the list of stocks that various mutual funds have freshly entered last month. Click on the mutual fund-house name to get more details about their portfolio."),V(Y.a,{fontSize:"sm",textColor:"gray.500",mb:2,pl:5,display:["table-cell","table-cell","table-cell","none","none"]},"Click on the no,of fund-house count to get more details.")),V(r.a,{colorScheme:"teal",textColor:"gray.700",textAlign:"match-parent"},V(r.f,null,V(r.g,null,V(r.e,null,"Stock Name"),V(r.e,{display:["none","none","table-cell","table-cell","table-cell"]},"Industry"),V(r.e,{display:["none","none","table-cell","table-cell","table-cell"]},"State"),V(r.e,null,"No,of MFs"),V(r.e,{display:["none","none","none","table-cell","table-cell"]},"Mutual Funds"))),V(r.c,null,Object.entries(t.entry).map((function(e){var t=a(e,2),n=t[0],l=t[1];return V($,{key:n,stock:l,state:"new-entry",color:"green"})})),Object.entries(t.increased).map((function(e){var t=a(e,2),n=t[0],l=t[1];return V($,{key:n,stock:l,state:"increased",color:"green"})})),Object.entries(t.exit).map((function(e){var t=a(e,2),n=t[0],l=t[1];return V($,{key:n,stock:l,state:"exited",color:"red"})}))))))))}},hMXk:function(e,t,n){"use strict";var l=n("0sYf");n.o(l,"layoutPropNames")&&n.d(t,"layoutPropNames",(function(){return l.layoutPropNames}));var a=n("AFKX");n.o(a,"layoutPropNames")&&n.d(t,"layoutPropNames",(function(){return a.layoutPropNames}))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",1,2,0,3,4,5]]]);