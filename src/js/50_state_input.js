/*== MODULE 50_state_input | owner:A | Trang thai, ban phim/chuot, start() ==*/
let best=0;try{best=+localStorage.getItem('es_best')||0}catch(e){}
const fmt=t=>String(Math.floor(t/60)).padStart(2,'0')+':'+String(Math.floor(t%60)).padStart(2,'0');
function bestTxt(){$('best').textContent=best?'Kỷ lục: '+fmt(best):''}bestTxt();
const KEYS={};let joy=null;
addEventListener('keydown',e=>{KEYS[e.key.toLowerCase()]=1;if(e.key.startsWith('Arrow'))e.preventDefault()});
addEventListener('keyup',e=>KEYS[e.key.toLowerCase()]=0);
C.addEventListener('pointerdown',e=>{const r=C.getBoundingClientRect();joy={id:e.pointerId,x0:e.clientX-r.left,y0:e.clientY-r.top,x:0,y:0,px:0,py:0};joy.px=joy.x0;joy.py=joy.y0;C.setPointerCapture(e.pointerId)});
C.addEventListener('pointermove',e=>{if(!joy||joy.id!==e.pointerId)return;const r=C.getBoundingClientRect(),dx=e.clientX-r.left-joy.x0,dy=e.clientY-r.top-joy.y0,m=Math.hypot(dx,dy),k=Math.min(m,50);joy.x=m?dx/m*k/50:0;joy.y=m?dy/m*k/50:0;joy.px=joy.x0+joy.x*50;joy.py=joy.y0+joy.y*50});
const up=e=>{if(joy&&joy.id===e.pointerId)joy=null};C.addEventListener('pointerup',up);C.addEventListener('pointercancel',up);
let S='menu',G,ch,E=[],P=[],GM=[],FX=[],EP=[],last=0,MG=0;
function show(id){['menu','lvl','over','scr'].forEach(k=>$(k).classList.toggle('on',k===id))}
function start(c){ch=c;G={t:0,kills:0,lvl:1,xp:0,need:6,x:0,y:0,hp:c.hp,max:c.hp,inv:0,dmg:1,rate:1,area:1,cnt:0,spd:c.sp,reg:c.w==='dao'?.8:0,mag:1,cd:0,a:0,sp:0,boss:150,s:c.cd2/2,buf:0,boost:0,crit:0,arm:0,ls:0,xg:1,rev:0,cdr:1,pr:0,swarm:45};const U=Object.assign({hp:0,arm:0,spd:0,dmg:0},SV.up[c.id]);G.max=G.hp=c.hp+10*U.hp;G.spd=c.sp+3*U.spd;G.coins=0;G.bk=0;G.n=0;G.sh=0;G.arm=(c.arm||0)+.015*U.arm;G.crit=c.crit||0;G.dmg=(c.dm||1)*(1+.04*U.dmg);G.xg=c.xg||1;G.mag=c.mg||1;G.area=c.ar||1;G.th=c.th||0;E=[];P=[];GM=[];FX=[];EP=[];S='play';show()}
$('again').onclick=()=>start(ch);$('pick').onclick=()=>{S='menu';G=null;bestTxt();home();show('menu')};
