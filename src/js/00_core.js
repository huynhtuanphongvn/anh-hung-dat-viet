/*== MODULE 00_core | owner:A | Canvas, resize ==*/
const C=document.getElementById('c'),X=C.getContext('2d'),$=id=>document.getElementById(id);
let W,H;
function rs(){const r=C.parentNode.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);W=r.width;H=r.height;C.width=W*d;C.height=H*d;X.setTransform(d,0,0,d,0,0)}
addEventListener('resize',rs);rs();
