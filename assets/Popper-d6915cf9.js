import{r as T,g as bt,a as wt,b as je,ac as Ye,j as be,af as xt,_,D as ze,a8 as Ge,ag as Ot,e as Pt,s as Et,ah as Rt,k as At}from"./index-e6ab8fdc.js";const Ct={disableDefaultClasses:!1},Dt=T.createContext(Ct);function jt(e){const{disableDefaultClasses:t}=T.useContext(Dt);return r=>t?"":e(r)}var B="top",W="bottom",H="right",M="left",$e="auto",le=[B,W,H,M],ee="start",fe="end",$t="clippingParents",nt="viewport",ie="popper",Tt="reference",Je=le.reduce(function(e,t){return e.concat([t+"-"+ee,t+"-"+fe])},[]),at=[].concat(le,[$e]).reduce(function(e,t){return e.concat([t,t+"-"+ee,t+"-"+fe])},[]),Bt="beforeRead",Mt="read",kt="afterRead",St="beforeMain",Lt="main",Wt="afterMain",Ht="beforeWrite",Nt="write",Vt="afterWrite",Ft=[Bt,Mt,kt,St,Lt,Wt,Ht,Nt,Vt];function V(e){return e?(e.nodeName||"").toLowerCase():null}function S(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Q(e){var t=S(e).Element;return e instanceof t||e instanceof Element}function L(e){var t=S(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Te(e){if(typeof ShadowRoot>"u")return!1;var t=S(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Ut(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},a=t.elements[r];!L(a)||!V(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(f){var s=n[f];s===!1?a.removeAttribute(f):a.setAttribute(f,s===!0?"":s)}))})}function qt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],a=t.attributes[o]||{},f=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=f.reduce(function(i,c){return i[c]="",i},{});!L(n)||!V(n)||(Object.assign(n.style,s),Object.keys(a).forEach(function(i){n.removeAttribute(i)}))})}}const It={name:"applyStyles",enabled:!0,phase:"write",fn:Ut,effect:qt,requires:["computeStyles"]};function N(e){return e.split("-")[0]}var K=Math.max,we=Math.min,te=Math.round;function Ae(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function it(){return!/^((?!chrome|android).)*safari/i.test(Ae())}function re(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,a=1;t&&L(e)&&(n=e.offsetWidth>0&&te(o.width)/e.offsetWidth||1,a=e.offsetHeight>0&&te(o.height)/e.offsetHeight||1);var f=Q(e)?S(e):window,s=f.visualViewport,i=!it()&&r,c=(o.left+(i&&s?s.offsetLeft:0))/n,p=(o.top+(i&&s?s.offsetTop:0))/a,v=o.width/n,y=o.height/a;return{width:v,height:y,top:p,right:c+v,bottom:p+y,left:c,x:c,y:p}}function Be(e){var t=re(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function st(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Te(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function q(e){return S(e).getComputedStyle(e)}function Xt(e){return["table","td","th"].indexOf(V(e))>=0}function Y(e){return((Q(e)?e.ownerDocument:e.document)||window.document).documentElement}function xe(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(Te(e)?e.host:null)||Y(e)}function Ke(e){return!L(e)||q(e).position==="fixed"?null:e.offsetParent}function Yt(e){var t=/firefox/i.test(Ae()),r=/Trident/i.test(Ae());if(r&&L(e)){var o=q(e);if(o.position==="fixed")return null}var n=xe(e);for(Te(n)&&(n=n.host);L(n)&&["html","body"].indexOf(V(n))<0;){var a=q(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function ue(e){for(var t=S(e),r=Ke(e);r&&Xt(r)&&q(r).position==="static";)r=Ke(r);return r&&(V(r)==="html"||V(r)==="body"&&q(r).position==="static")?t:r||Yt(e)||t}function Me(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function se(e,t,r){return K(e,we(t,r))}function zt(e,t,r){var o=se(e,t,r);return o>r?r:o}function pt(){return{top:0,right:0,bottom:0,left:0}}function ft(e){return Object.assign({},pt(),e)}function ct(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Gt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ft(typeof t!="number"?t:ct(t,le))};function Jt(e){var t,r=e.state,o=e.name,n=e.options,a=r.elements.arrow,f=r.modifiersData.popperOffsets,s=N(r.placement),i=Me(s),c=[M,H].indexOf(s)>=0,p=c?"height":"width";if(!(!a||!f)){var v=Gt(n.padding,r),y=Be(a),u=i==="y"?B:M,x=i==="y"?W:H,d=r.rects.reference[p]+r.rects.reference[i]-f[i]-r.rects.popper[p],m=f[i]-r.rects.reference[i],w=ue(a),P=w?i==="y"?w.clientHeight||0:w.clientWidth||0:0,b=d/2-m/2,l=v[u],h=P-y[p]-v[x],g=P/2-y[p]/2+b,O=se(l,g,h),A=i;r.modifiersData[o]=(t={},t[A]=O,t.centerOffset=O-g,t)}}function Kt(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||st(t.elements.popper,n)&&(t.elements.arrow=n))}const Qt={name:"arrow",enabled:!0,phase:"main",fn:Jt,effect:Kt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var Zt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _t(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:te(r*n)/n||0,y:te(o*n)/n||0}}function Qe(e){var t,r=e.popper,o=e.popperRect,n=e.placement,a=e.variation,f=e.offsets,s=e.position,i=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,v=e.isFixed,y=f.x,u=y===void 0?0:y,x=f.y,d=x===void 0?0:x,m=typeof p=="function"?p({x:u,y:d}):{x:u,y:d};u=m.x,d=m.y;var w=f.hasOwnProperty("x"),P=f.hasOwnProperty("y"),b=M,l=B,h=window;if(c){var g=ue(r),O="clientHeight",A="clientWidth";if(g===S(r)&&(g=Y(r),q(g).position!=="static"&&s==="absolute"&&(O="scrollHeight",A="scrollWidth")),g=g,n===B||(n===M||n===H)&&a===fe){l=W;var R=v&&g===h&&h.visualViewport?h.visualViewport.height:g[O];d-=R-o.height,d*=i?1:-1}if(n===M||(n===B||n===W)&&a===fe){b=H;var E=v&&g===h&&h.visualViewport?h.visualViewport.width:g[A];u-=E-o.width,u*=i?1:-1}}var C=Object.assign({position:s},c&&Zt),k=p===!0?_t({x:u,y:d},S(r)):{x:u,y:d};if(u=k.x,d=k.y,i){var j;return Object.assign({},C,(j={},j[l]=P?"0":"",j[b]=w?"0":"",j.transform=(h.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",j))}return Object.assign({},C,(t={},t[l]=P?d+"px":"",t[b]=w?u+"px":"",t.transform="",t))}function er(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,f=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,c={placement:N(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Qe(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Qe(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const tr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:er,data:{}};var ge={passive:!0};function rr(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,a=n===void 0?!0:n,f=o.resize,s=f===void 0?!0:f,i=S(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(p){p.addEventListener("scroll",r.update,ge)}),s&&i.addEventListener("resize",r.update,ge),function(){a&&c.forEach(function(p){p.removeEventListener("scroll",r.update,ge)}),s&&i.removeEventListener("resize",r.update,ge)}}const or={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:rr,data:{}};var nr={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(e){return e.replace(/left|right|bottom|top/g,function(t){return nr[t]})}var ar={start:"end",end:"start"};function Ze(e){return e.replace(/start|end/g,function(t){return ar[t]})}function ke(e){var t=S(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Se(e){return re(Y(e)).left+ke(e).scrollLeft}function ir(e,t){var r=S(e),o=Y(e),n=r.visualViewport,a=o.clientWidth,f=o.clientHeight,s=0,i=0;if(n){a=n.width,f=n.height;var c=it();(c||!c&&t==="fixed")&&(s=n.offsetLeft,i=n.offsetTop)}return{width:a,height:f,x:s+Se(e),y:i}}function sr(e){var t,r=Y(e),o=ke(e),n=(t=e.ownerDocument)==null?void 0:t.body,a=K(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),f=K(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+Se(e),i=-o.scrollTop;return q(n||r).direction==="rtl"&&(s+=K(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:f,x:s,y:i}}function Le(e){var t=q(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function lt(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:L(e)&&Le(e)?e:lt(xe(e))}function pe(e,t){var r;t===void 0&&(t=[]);var o=lt(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),a=S(o),f=n?[a].concat(a.visualViewport||[],Le(o)?o:[]):o,s=t.concat(f);return n?s:s.concat(pe(xe(f)))}function Ce(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function pr(e,t){var r=re(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function _e(e,t,r){return t===nt?Ce(ir(e,r)):Q(t)?pr(t,r):Ce(sr(Y(e)))}function fr(e){var t=pe(xe(e)),r=["absolute","fixed"].indexOf(q(e).position)>=0,o=r&&L(e)?ue(e):e;return Q(o)?t.filter(function(n){return Q(n)&&st(n,o)&&V(n)!=="body"}):[]}function cr(e,t,r,o){var n=t==="clippingParents"?fr(e):[].concat(t),a=[].concat(n,[r]),f=a[0],s=a.reduce(function(i,c){var p=_e(e,c,o);return i.top=K(p.top,i.top),i.right=we(p.right,i.right),i.bottom=we(p.bottom,i.bottom),i.left=K(p.left,i.left),i},_e(e,f,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ut(e){var t=e.reference,r=e.element,o=e.placement,n=o?N(o):null,a=o?oe(o):null,f=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(n){case B:i={x:f,y:t.y-r.height};break;case W:i={x:f,y:t.y+t.height};break;case H:i={x:t.x+t.width,y:s};break;case M:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var c=n?Me(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(a){case ee:i[c]=i[c]-(t[p]/2-r[p]/2);break;case fe:i[c]=i[c]+(t[p]/2-r[p]/2);break}}return i}function ce(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,a=r.strategy,f=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?$t:s,c=r.rootBoundary,p=c===void 0?nt:c,v=r.elementContext,y=v===void 0?ie:v,u=r.altBoundary,x=u===void 0?!1:u,d=r.padding,m=d===void 0?0:d,w=ft(typeof m!="number"?m:ct(m,le)),P=y===ie?Tt:ie,b=e.rects.popper,l=e.elements[x?P:y],h=cr(Q(l)?l:l.contextElement||Y(e.elements.popper),i,p,f),g=re(e.elements.reference),O=ut({reference:g,element:b,strategy:"absolute",placement:n}),A=Ce(Object.assign({},b,O)),R=y===ie?A:g,E={top:h.top-R.top+w.top,bottom:R.bottom-h.bottom+w.bottom,left:h.left-R.left+w.left,right:R.right-h.right+w.right},C=e.modifiersData.offset;if(y===ie&&C){var k=C[n];Object.keys(E).forEach(function(j){var F=[H,W].indexOf(j)>=0?1:-1,U=[B,W].indexOf(j)>=0?"y":"x";E[j]+=k[U]*F})}return E}function lr(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,a=r.rootBoundary,f=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,c=i===void 0?at:i,p=oe(o),v=p?s?Je:Je.filter(function(x){return oe(x)===p}):le,y=v.filter(function(x){return c.indexOf(x)>=0});y.length===0&&(y=v);var u=y.reduce(function(x,d){return x[d]=ce(e,{placement:d,boundary:n,rootBoundary:a,padding:f})[N(d)],x},{});return Object.keys(u).sort(function(x,d){return u[x]-u[d]})}function ur(e){if(N(e)===$e)return[];var t=ye(e);return[Ze(e),t,Ze(t)]}function dr(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,f=r.altAxis,s=f===void 0?!0:f,i=r.fallbackPlacements,c=r.padding,p=r.boundary,v=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,x=u===void 0?!0:u,d=r.allowedAutoPlacements,m=t.options.placement,w=N(m),P=w===m,b=i||(P||!x?[ye(m)]:ur(m)),l=[m].concat(b).reduce(function(Z,X){return Z.concat(N(X)===$e?lr(t,{placement:X,boundary:p,rootBoundary:v,padding:c,flipVariations:x,allowedAutoPlacements:d}):X)},[]),h=t.rects.reference,g=t.rects.popper,O=new Map,A=!0,R=l[0],E=0;E<l.length;E++){var C=l[E],k=N(C),j=oe(C)===ee,F=[B,W].indexOf(k)>=0,U=F?"width":"height",D=ce(t,{placement:C,boundary:p,rootBoundary:v,altBoundary:y,padding:c}),$=F?j?H:M:j?W:B;h[U]>g[U]&&($=ye($));var I=ye($),z=[];if(a&&z.push(D[k]<=0),s&&z.push(D[$]<=0,D[I]<=0),z.every(function(Z){return Z})){R=C,A=!1;break}O.set(C,z)}if(A)for(var de=x?3:1,Oe=function(X){var ae=l.find(function(me){var G=O.get(me);if(G)return G.slice(0,X).every(function(Pe){return Pe})});if(ae)return R=ae,"break"},ne=de;ne>0;ne--){var ve=Oe(ne);if(ve==="break")break}t.placement!==R&&(t.modifiersData[o]._skip=!0,t.placement=R,t.reset=!0)}}const vr={name:"flip",enabled:!0,phase:"main",fn:dr,requiresIfExists:["offset"],data:{_skip:!1}};function et(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function tt(e){return[B,H,W,M].some(function(t){return e[t]>=0})}function mr(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,f=ce(t,{elementContext:"reference"}),s=ce(t,{altBoundary:!0}),i=et(f,o),c=et(s,n,a),p=tt(i),v=tt(c);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":v})}const hr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:mr};function gr(e,t,r){var o=N(e),n=[M,B].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=a[0],s=a[1];return f=f||0,s=(s||0)*n,[M,H].indexOf(o)>=0?{x:s,y:f}:{x:f,y:s}}function yr(e){var t=e.state,r=e.options,o=e.name,n=r.offset,a=n===void 0?[0,0]:n,f=at.reduce(function(p,v){return p[v]=gr(v,t.rects,a),p},{}),s=f[t.placement],i=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=f}const br={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:yr};function wr(e){var t=e.state,r=e.name;t.modifiersData[r]=ut({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const xr={name:"popperOffsets",enabled:!0,phase:"read",fn:wr,data:{}};function Or(e){return e==="x"?"y":"x"}function Pr(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,a=n===void 0?!0:n,f=r.altAxis,s=f===void 0?!1:f,i=r.boundary,c=r.rootBoundary,p=r.altBoundary,v=r.padding,y=r.tether,u=y===void 0?!0:y,x=r.tetherOffset,d=x===void 0?0:x,m=ce(t,{boundary:i,rootBoundary:c,padding:v,altBoundary:p}),w=N(t.placement),P=oe(t.placement),b=!P,l=Me(w),h=Or(l),g=t.modifiersData.popperOffsets,O=t.rects.reference,A=t.rects.popper,R=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,E=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(g){if(a){var j,F=l==="y"?B:M,U=l==="y"?W:H,D=l==="y"?"height":"width",$=g[l],I=$+m[F],z=$-m[U],de=u?-A[D]/2:0,Oe=P===ee?O[D]:A[D],ne=P===ee?-A[D]:-O[D],ve=t.elements.arrow,Z=u&&ve?Be(ve):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:pt(),ae=X[F],me=X[U],G=se(0,O[D],Z[D]),Pe=b?O[D]/2-de-G-ae-E.mainAxis:Oe-G-ae-E.mainAxis,dt=b?-O[D]/2+de+G+me+E.mainAxis:ne+G+me+E.mainAxis,Ee=t.elements.arrow&&ue(t.elements.arrow),vt=Ee?l==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,We=(j=C==null?void 0:C[l])!=null?j:0,mt=$+Pe-We-vt,ht=$+dt-We,He=se(u?we(I,mt):I,$,u?K(z,ht):z);g[l]=He,k[l]=He-$}if(s){var Ne,gt=l==="x"?B:M,yt=l==="x"?W:H,J=g[h],he=h==="y"?"height":"width",Ve=J+m[gt],Fe=J-m[yt],Re=[B,M].indexOf(w)!==-1,Ue=(Ne=C==null?void 0:C[h])!=null?Ne:0,qe=Re?Ve:J-O[he]-A[he]-Ue+E.altAxis,Ie=Re?J+O[he]+A[he]-Ue-E.altAxis:Fe,Xe=u&&Re?zt(qe,J,Ie):se(u?qe:Ve,J,u?Ie:Fe);g[h]=Xe,k[h]=Xe-J}t.modifiersData[o]=k}}const Er={name:"preventOverflow",enabled:!0,phase:"main",fn:Pr,requiresIfExists:["offset"]};function Rr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ar(e){return e===S(e)||!L(e)?ke(e):Rr(e)}function Cr(e){var t=e.getBoundingClientRect(),r=te(t.width)/e.offsetWidth||1,o=te(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Dr(e,t,r){r===void 0&&(r=!1);var o=L(t),n=L(t)&&Cr(t),a=Y(t),f=re(e,n,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!r)&&((V(t)!=="body"||Le(a))&&(s=Ar(t)),L(t)?(i=re(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=Se(a))),{x:f.left+s.scrollLeft-i.x,y:f.top+s.scrollTop-i.y,width:f.width,height:f.height}}function jr(e){var t=new Map,r=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function n(a){r.add(a.name);var f=[].concat(a.requires||[],a.requiresIfExists||[]);f.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&n(i)}}),o.push(a)}return e.forEach(function(a){r.has(a.name)||n(a)}),o}function $r(e){var t=jr(e);return Ft.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function Tr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Br(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var rt={placement:"bottom",modifiers:[],strategy:"absolute"};function ot(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Mr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,a=n===void 0?rt:n;return function(s,i,c){c===void 0&&(c=a);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},rt,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},v=[],y=!1,u={state:p,setOptions:function(w){var P=typeof w=="function"?w(p.options):w;d(),p.options=Object.assign({},a,p.options,P),p.scrollParents={reference:Q(s)?pe(s):s.contextElement?pe(s.contextElement):[],popper:pe(i)};var b=$r(Br([].concat(o,p.options.modifiers)));return p.orderedModifiers=b.filter(function(l){return l.enabled}),x(),u.update()},forceUpdate:function(){if(!y){var w=p.elements,P=w.reference,b=w.popper;if(ot(P,b)){p.rects={reference:Dr(P,ue(b),p.options.strategy==="fixed"),popper:Be(b)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(E){return p.modifiersData[E.name]=Object.assign({},E.data)});for(var l=0;l<p.orderedModifiers.length;l++){if(p.reset===!0){p.reset=!1,l=-1;continue}var h=p.orderedModifiers[l],g=h.fn,O=h.options,A=O===void 0?{}:O,R=h.name;typeof g=="function"&&(p=g({state:p,options:A,name:R,instance:u})||p)}}}},update:Tr(function(){return new Promise(function(m){u.forceUpdate(),m(p)})}),destroy:function(){d(),y=!0}};if(!ot(s,i))return u;u.setOptions(c).then(function(m){!y&&c.onFirstUpdate&&c.onFirstUpdate(m)});function x(){p.orderedModifiers.forEach(function(m){var w=m.name,P=m.options,b=P===void 0?{}:P,l=m.effect;if(typeof l=="function"){var h=l({state:p,name:w,instance:u,options:b}),g=function(){};v.push(h||g)}})}function d(){v.forEach(function(m){return m()}),v=[]}return u}}var kr=[or,xr,tr,It,br,vr,Er,Qt,hr],Sr=Mr({defaultModifiers:kr});function Lr(e){return bt("MuiPopper",e)}wt("MuiPopper",["root"]);const Wr=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Hr=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Nr(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function De(e){return typeof e=="function"?e():e}function Vr(e){return e.nodeType!==void 0}const Fr=()=>Pt({root:["root"]},jt(Lr)),Ur={},qr=T.forwardRef(function(t,r){var o;const{anchorEl:n,children:a,direction:f,disablePortal:s,modifiers:i,open:c,placement:p,popperOptions:v,popperRef:y,slotProps:u={},slots:x={},TransitionProps:d}=t,m=je(t,Wr),w=T.useRef(null),P=ze(w,r),b=T.useRef(null),l=ze(b,y),h=T.useRef(l);Ge(()=>{h.current=l},[l]),T.useImperativeHandle(y,()=>b.current,[]);const g=Nr(p,f),[O,A]=T.useState(g),[R,E]=T.useState(De(n));T.useEffect(()=>{b.current&&b.current.forceUpdate()}),T.useEffect(()=>{n&&E(De(n))},[n]),Ge(()=>{if(!R||!c)return;const U=I=>{A(I.placement)};let D=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:I})=>{U(I)}}];i!=null&&(D=D.concat(i)),v&&v.modifiers!=null&&(D=D.concat(v.modifiers));const $=Sr(R,w.current,_({placement:g},v,{modifiers:D}));return h.current($),()=>{$.destroy(),h.current(null)}},[R,s,i,c,v,g]);const C={placement:O};d!==null&&(C.TransitionProps=d);const k=Fr(),j=(o=x.root)!=null?o:"div",F=Ot({elementType:j,externalSlotProps:u.root,externalForwardedProps:m,additionalProps:{role:"tooltip",ref:P},ownerState:t,className:k.root});return be.jsx(j,_({},F,{children:typeof a=="function"?a(C):a}))}),Ir=T.forwardRef(function(t,r){const{anchorEl:o,children:n,container:a,direction:f="ltr",disablePortal:s=!1,keepMounted:i=!1,modifiers:c,open:p,placement:v="bottom",popperOptions:y=Ur,popperRef:u,style:x,transition:d=!1,slotProps:m={},slots:w={}}=t,P=je(t,Hr),[b,l]=T.useState(!0),h=()=>{l(!1)},g=()=>{l(!0)};if(!i&&!p&&(!d||b))return null;let O;if(a)O=a;else if(o){const E=De(o);O=E&&Vr(E)?Ye(E).body:Ye(null).body}const A=!p&&i&&(!d||b)?"none":void 0,R=d?{in:p,onEnter:h,onExited:g}:void 0;return be.jsx(xt,{disablePortal:s,container:O,children:be.jsx(qr,_({anchorEl:o,direction:f,disablePortal:s,modifiers:c,ref:r,open:d?!b:p,placement:v,popperOptions:y,popperRef:u,slotProps:m,slots:w},P,{style:_({position:"fixed",top:0,left:0,display:A},x),TransitionProps:R,children:n}))})}),Xr=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Yr=Et(Ir,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),zr=T.forwardRef(function(t,r){var o;const n=Rt(),a=At({props:t,name:"MuiPopper"}),{anchorEl:f,component:s,components:i,componentsProps:c,container:p,disablePortal:v,keepMounted:y,modifiers:u,open:x,placement:d,popperOptions:m,popperRef:w,transition:P,slots:b,slotProps:l}=a,h=je(a,Xr),g=(o=b==null?void 0:b.root)!=null?o:i==null?void 0:i.Root,O=_({anchorEl:f,container:p,disablePortal:v,keepMounted:y,modifiers:u,open:x,placement:d,popperOptions:m,popperRef:w,transition:P},h);return be.jsx(Yr,_({as:s,direction:n==null?void 0:n.direction,slots:{root:g},slotProps:l??c},O,{ref:r}))}),Jr=zr;export{Jr as M};
