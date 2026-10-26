/*== MODULE 60_combat_core | owner:A | near, hit, ban do, spawn quai, area ==*/
function near(x,y,rng,ex){let b=null,bd=rng*rng;for(const e of E){if(ex&&ex.includes(e))continue;const d=(e.x-x)**2+(e.y-y)**2;if(d<bd){bd=d;b=e}}return b}
function hit(e,d,kx,ky){d*=1-((MG?e.mr:e.pr)||0);const cr=Math.random()<G.crit;if(cr)d*=2;if(G.ls)G.hp=Math.min(G.max,G.hp+G.ls*d);e.hp-=d;e.fl=.08;if(FX.length<150)FX.push({k:'t',x:e.x,y:e.y-e.r,v:Math.round(d),l:.6,m:.6,c:cr?'#ffd23f':'#fff',z:cr?22:13});if(cr)sfx(600,.05,.05);if(kx!==undefined){e.vx+=kx;e.vy+=ky}}
const AR=1100;let DEC=[];
(function(){let s=7;const rnd=()=>(s=(s*16807)%2147483647)/2147483647;for(let i=0;i<110;i++){const x=(rnd()*2-1)*AR,y=(rnd()*2-1)*AR,t=rnd()<.7?0:1,z=14+rnd()*14;if(Math.abs(y)<130||Math.hypot(x,y)<120)continue;DEC.push({x,y,t,s:z})}})();
function spawn(boss,sw,a0){let a=Math.random()*6.283;const d=Math.max(W,H)/2+50,t=G.t,r=Math.random();
let T={r:12,hp:14+t*.5,sp:52+Math.min(t*.3,35),dm:9+t*.04,c:'#c0587a',xp:1,sh:0};
if(t>30&&r<.15)T={r:10,hp:10+t*.3,sp:105,dm:8,c:'#e08a3c',xp:1,sh:2};
else if(t>60&&r<.27)T={r:20,hp:70+t*1.8,sp:40,dm:16,c:'#6b5bd6',xp:3,sh:1};
else if(t>90&&r<.37)T={r:11,hp:16+t*.4,sp:58,dm:7,c:'#3fae9a',xp:2,sh:3,rg:1};
else if(t>150&&r<.42)T={r:28,hp:220+t*3,sp:70,dm:20,c:'#8a6a45',xp:8,sh:0,ch:1};
if(sw){a=a0+(Math.random()-.5)*.5;T={r:8,hp:8+t*.25,sp:95,dm:6,c:'#b8b0a0',xp:1,sh:0}}
if(boss)T={r:38,hp:300+t*6,sp:46,dm:28,c:'#d1344e',xp:25,sh:1,b:1,rg:1};
const F=(.6+.4*Math.min(1,t/180))*Math.pow(1.13,Math.max(0,t-120)/60),DM=(.7+.3*Math.min(1,t/180))*(1+Math.max(0,t-120)/300);T.hp*=F;T.dm*=DM;if(t>240&&!boss&&!sw&&Math.random()<.1){T.hp*=3;T.r*=1.3;T.dm*=1.4;T.xp*=4;T.el=1}
if(T.sh===1&&!boss)T.pr=.45;if(T.ch)T.pr=.3;if(T.rg&&!boss)T.mr=.4;if(T.sh===2)T.mr=.25;if(boss){T.pr=.2;T.mr=.2}
const cl=v=>Math.max(-AR,Math.min(AR,v));
E.push({x:cl(G.x+Math.cos(a)*d),y:cl(G.y+Math.sin(a)*d),vx:0,vy:0,fl:0,wt:0,sl:0,sc:3,dsh:0,mhp:T.hp,...T})}
function boom(p){const R=55*G.area;for(const e of E)if(Math.hypot(e.x-p.x,e.y-p.y)<R+e.r)hit(e,p.d*.6);FX.push({k:'r',x:p.x,y:p.y,r:R,l:.25,m:.25,c:'#ff8a4d'})}
function ang(a,b){return Math.atan2(b.y-a.y,b.x-a.x)}
function area(x,y,R,d,kn){for(const e of E){const dx=e.x-x,dy=e.y-y,m=Math.hypot(dx,dy)||1;if(m<R+e.r)hit(e,d,dx/m*kn,dy/m*kn)}}
