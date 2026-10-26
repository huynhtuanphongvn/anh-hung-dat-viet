const els={};
const mk=()=>({style:{setProperty(){}},classList:{toggle(){},add(){}},appendChild(){},insertAdjacentHTML(){},set innerHTML(v){},get innerHTML(){return ''},querySelector(){return {textContent:''}},addEventListener(){},setPointerCapture(){},getBoundingClientRect(){return{width:900,height:600,left:0,top:0}},parentNode:{getBoundingClientRect(){return{width:900,height:600}}},getContext(){return new Proxy({},{get:(t,k)=>k==='measureText'?()=>({width:10}):(()=>{}),set:()=>true})}});
global.document={getElementById:id=>els[id]||(els[id]=mk()),createElement:()=>mk()};
global.window=global;global.devicePixelRatio=1;global.innerWidth=900;
global.addEventListener=()=>{};global.localStorage={getItem:()=>null,setItem(){}};
let cb;global.requestAnimationFrame=f=>{cb=f};
const fs=require('fs');let src=fs.readFileSync(process.argv[2],'utf8');
src+=`
;globalThis.T={start,update,draw,menuDraw,loop,get G(){return G},get S(){return S},CH,invScr,detScr,gachaScr,upScr,upDet,pickScr,pull,SV,skill,weapon,chk};`;
(0,eval)(src);
const {T}=globalThis;
T.menuDraw(1000);T.invScr();T.pickScr();T.gachaScr();T.upScr();
for(let i=0;i<5;i++)T.pull();
for(const c of T.CH){T.detScr(c);T.upDet(c);}
for(const c of T.CH){T.start(c);for(let i=0;i<4000;i++){T.G.hp=T.G.max;T.update(0.05);if(T.S==='lvl'){T.S='play'}if(i%200==0)T.draw()}}
console.log('ALL_OK',T.CH.length);
// extra: rarity stats monotonic + echo/finisher exercised
const by=[0,1,2,3].map(r=>T.CH.filter(c=>c.rt===r).map(c=>Math.round(c.hp/2+c.sp/2+(c.dm||1)*100+(c.arm||0)*300+(c.crit||0)*300)));
console.log('POWER per rarity (min..max):',by.map(a=>Math.min(...a)+'..'+Math.max(...a)).join(' | '));
