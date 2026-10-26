/*== MODULE 80_update | owner:A | Vong cap nhat game, len cap ==*/
function update(dt){
if(G.hs>0){G.hs-=dt;return}G.t+=dt;MG=0;G.arm=Math.min(G.arm,.5);G.swg-=dt;G.sh=Math.max(0,(G.sh||0)-dt*30);if(G.q){for(const q of G.q)q.t-=dt;const rd=G.q.filter(q=>q.t<=0);G.q=G.q.filter(q=>q.t>0);rd.forEach(q=>q.f())}{const tn=near(G.x,G.y,340);if(tn)G.aim=ang(G,tn)}
let mx=(KEYS.d||KEYS.arrowright?1:0)-(KEYS.a||KEYS.arrowleft?1:0),my=(KEYS.s||KEYS.arrowdown?1:0)-(KEYS.w||KEYS.arrowup?1:0);
if(joy){mx=joy.x;my=joy.y}
const m=Math.hypot(mx,my);if(m>1){mx/=m;my/=m}G.mv=m>.1;if(G.mv&&!near(G.x,G.y,340))G.aim=Math.atan2(my,mx);
const sp=G.spd*(G.boost>0?1.8:1)*(Math.abs(G.y)<90&&Math.abs(G.x)>70?.6:1);G.x+=mx*sp*dt;G.y+=my*sp*dt;G.x=Math.max(-AR,Math.min(AR,G.x));G.y=Math.max(-AR,Math.min(AR,G.y));G.inv-=dt;G.buf-=dt;G.boost-=dt;if(G.boost>0)G.inv=Math.max(G.inv,.05);G.s-=dt;if(G.s<=0){G.s=ch.cd2*G.cdr;skill();G.sh=9;G.hs=.06;sfx(330,.3,.08)}G.hp=Math.min(G.max,G.hp+G.reg*dt);
G.sp-=dt;if(G.sp<=0){G.sp=Math.max(.25,1-G.t*.0025);for(let i=0,n=1+Math.floor(G.t/120);i<n&&E.length<350;i++)spawn()}
if(G.t>=G.boss){G.boss+=100;spawn(1)}
if(G.t>=G.swarm){G.swarm+=25;const a0=Math.random()*6.283;for(let i=0;i<8+Math.floor(G.t/30);i++)spawn(0,1,a0)}
const k=Math.exp(-8*dt);
for(const e of E){const dx=G.x-e.x,dy=G.y-e.y,d=Math.hypot(dx,dy)||1;let sm=e.sl>0?.45:1;if(e.rg&&!e.b&&d<230)sm=0;if(e.ch){e.sc-=dt;if(e.sc<=0){e.sc=3.5;e.dsh=.6}e.dsh-=dt;if(e.dsh>0)sm*=3.2}if(e.rg){e.sc-=dt;if(e.sc<=0){e.sc=e.b?1.6:3;const q=Math.atan2(dy,dx);EP.push({x:e.x,y:e.y,vx:Math.cos(q)*170,vy:Math.sin(q)*170,l:3.5,d:e.dm*.7})}}e.x+=(dx/d*e.sp*sm+e.vx)*dt;e.y+=(dy/d*e.sp*sm+e.vy)*dt;e.vx*=k;e.vy*=k;e.fl-=dt;e.wt-=dt;e.sl-=dt;if(G.boost>0&&d<e.r+26&&e.wt<=0){hit(e,15*G.dmg);e.wt=.2}
if(d<e.r+13&&G.inv<=0){G.hp-=e.dm*(1-G.arm);G.inv=.35;G.sh=7;sfx(110,.15,.08);if(G.th)hit(e,G.th*G.dmg,(e.x-G.x)*2,(e.y-G.y)*2);FX.push({k:'r',x:G.x,y:G.y,r:28,l:.3,m:.3,c:'#ff3b3b'})}}
G.cd-=dt;weapon();
for(const p of P){if(p.h){const t=near(p.x,p.y,320);if(t){const a=ang(p,t);p.vx+=(Math.cos(a)*280-p.vx)*dt*5;p.vy+=(Math.sin(a)*280-p.vy)*dt*5}}p.x+=p.vx*dt;p.y+=p.vy*dt;p.l-=dt;for(const e of E){if(p.dead)break;if(p.hit.includes(e))continue;
 if((e.x-p.x)**2+(e.y-p.y)**2<(e.r+p.r)**2){MG=(p.k==='i'||p.k==='w'||p.k==='b')?1:0;hit(e,p.d,p.vx*.15,p.vy*.15);p.hit.push(e);if(p.k==='f'){boom(p);p.dead=1}else if(--p.pi<-G.pr)p.dead=1}}}
P=P.filter(p=>p.l>0&&!p.dead);
for(const e of E)if(e.hp<=0){G.kills++;if(e.b){G.bk++;G.sh=14;G.hs=.12}burst(e.x,e.y,e.c,e.b?24:6);sfx(150+Math.random()*80,.05,.04);GM.push({x:e.x,y:e.y,v:e.xp});if(Math.random()<(e.el||e.b?1:.2))GM.push({x:e.x+6,y:e.y,v:1,cn:e.b?20:e.el?3:1})}
E=E.filter(e=>e.hp>0);
for(const g of GM){const dx=G.x-g.x,dy=G.y-g.y,d=Math.hypot(dx,dy)||1;if(d<90*G.mag||g.m){g.m=1;g.x+=dx/d*300*dt;g.y+=dy/d*300*dt}if(d<16){if(g.cn)G.coins+=g.cn;else G.xp+=g.v*G.xg;g.v=-1}}
GM=GM.filter(g=>g.v>0);
for(const q of EP){q.x+=q.vx*dt;q.y+=q.vy*dt;q.l-=dt;if(G.inv<=0&&Math.hypot(q.x-G.x,q.y-G.y)<16){G.hp-=q.d*(1-G.arm);G.inv=.4;q.l=0}}EP=EP.filter(q=>q.l>0);
for(const f of FX){f.l-=dt;if(f.vx){f.x+=f.vx*dt;f.y+=f.vy*dt}}FX=FX.filter(f=>f.l>0);
chk();
if(G.hp<=0&&G.rev>0){G.rev--;G.hp=G.max*.5;G.inv=2;FX.push({k:'r',x:G.x,y:G.y,r:160,l:.6,m:.6,c:'#ffffff'})}else if(G.hp<=0){S='over';if(G.t>best){best=G.t;try{localStorage.setItem('es_best',best)}catch(e){}}
 const tk=Math.floor(G.t/120)+G.bk;SV.coin+=G.coins;SV.tk+=tk;save();$('stat').textContent='Sống sót '+fmt(G.t)+' · Hạ gục '+G.kills+' · Cấp '+G.lvl+' · +'+G.coins+' coin · +'+tk+' vé';show('over')}}
function chk(){if(S!=='play'||G.xp<G.need)return;G.xp-=G.need;G.lvl++;sfx(700,.3,.08);G.need=Math.floor(6+G.lvl*5+G.lvl*G.lvl*.15);S='lvl';
const pool=UPG.filter(u=>!u.ok||u.ok()).sort(()=>Math.random()-.5).slice(0,3),box=$('ups');box.innerHTML='';
pool.forEach(u=>{const b=document.createElement('button');b.className='c u';b.style.setProperty('--k',ch.col);b.innerHTML='<b>'+u.n+'</b><span>'+u.d+'</span>';
b.onclick=()=>{u.f();S='play';show();chk()};box.appendChild(b)});show('lvl')}
