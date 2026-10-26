/*== MODULE 70_weapons_skills | owner:A | Vu khi, ky nang, echo/tat sat ==*/
function weapon0(){const id=ch.w;if(G.cd>0)return;MG=(id==='tho'||id==='sach')?1:0;const R=G.rate*(G.buf>0?1.4:1),c=G.cnt,A=G.area;
if(id==='kiem'){const t=near(G.x,G.y,140*A);if(!t)return;G.cd=.7/R;const a=ang(G,t),w=.9+.2*c,r=125*A*(1+.08*c);
 for(const e of E){const dx=e.x-G.x,dy=e.y-G.y,m=Math.hypot(dx,dy)||1;if(m<r+e.r){let d=Math.atan2(dy,dx)-a;d=Math.atan2(Math.sin(d),Math.cos(d));if(Math.abs(d)<w)hit(e,20*G.dmg,dx/m*260,dy/m*260)}}
 FX.push({k:'s',x:G.x,y:G.y,a,w,r,l:.18,m:.18,c:'#e8f1ff'})}
else if(id==='khien'){if(!near(G.x,G.y,115*A))return;G.cd=1.25/R;const r=115*A*(1+.08*c);area(G.x,G.y,r,11*G.dmg,300);FX.push({k:'r',x:G.x,y:G.y,r,l:.25,m:.25,c:'#d0d6dd'})}
else if(id==='no'){const t=near(G.x,G.y,520);if(!t)return;G.cd=1.1/R;const n=3+c,a0=ang(G,t);for(let i=0;i<n;i++){const a=a0+(i-(n-1)/2)*.09;P.push({x:G.x,y:G.y,vx:Math.cos(a)*620,vy:Math.sin(a)*620,k:'a',d:16*G.dmg,l:1.1,r:5,pi:2,hit:[],a})}}
else if(id==='dao'){if(!near(G.x,G.y,100*A))return;G.cd=.85/R;const r=100*A*(1+.1*c);area(G.x,G.y,r,15*G.dmg,200);FX.push({k:'r',x:G.x,y:G.y,r,l:.2,m:.2,c:'#ffd9a0'})}
else if(id==='chuy'){const t=near(G.x,G.y,300);if(!t)return;G.cd=1.3/R;const r=75*A*(1+.08*c);area(t.x,t.y,r,32*G.dmg,300);FX.push({k:'r',x:t.x,y:t.y,r,l:.3,m:.3,c:'#c9a26b'})}
else if(id==='cung'){const t=near(G.x,G.y,460);if(!t)return;G.cd=.6/R;const n=1+c,a0=ang(G,t);for(let i=0;i<n;i++){const a=a0+(i-(n-1)/2)*.14;P.push({x:G.x,y:G.y,vx:Math.cos(a)*520,vy:Math.sin(a)*520,k:'a',d:13*G.dmg,l:1.2,r:5,pi:1,hit:[],a})}}
else if(id==='tho'){const t=near(G.x,G.y,420);if(!t)return;G.cd=1/R;const s=Math.floor(Math.random()*3),a0=ang(G,t);
 if(s===0){for(let i=0;i<2+c;i++){const a=a0+(i-(1+c)/2)*.5;P.push({x:G.x,y:G.y,vx:Math.cos(a)*280,vy:Math.sin(a)*280,k:'i',d:14*G.dmg,l:2.2,r:7,pi:0,hit:[],a,h:1})}}
 else if(s===1){for(let i=0,n=8+2*c;i<n;i++){const a=i*6.283/n;P.push({x:G.x,y:G.y,vx:Math.cos(a)*260,vy:Math.sin(a)*260,k:'w',d:10*G.dmg,l:1.1,r:9,pi:1,hit:[],a})}}
 else{let cur=t,px=G.x,py=G.y;const L=[];for(let i=0;i<3+c&&cur;i++){L.push(cur);hit(cur,18*G.dmg);FX.push({k:'l',x1:px,y1:py,x2:cur.x,y2:cur.y,l:.18});px=cur.x;py=cur.y;cur=near(px,py,170*A,L)}}}
else{const t=near(G.x,G.y,420);if(!t)return;G.cd=1.05/R;const s=Math.floor(Math.random()*3),a0=ang(G,t);
 if(s===0){for(let i=0;i<2+c;i++){const m=E[Math.floor(Math.random()*E.length)];area(m.x,m.y,60*A,26*G.dmg,150);FX.push({k:'r',x:m.x,y:m.y,r:60*A,l:.35,m:.35,c:'#ff9a4d'})}}
 else if(s===1){for(let i=0,n=1+Math.floor(c/2);i<n;i++){const a=a0+(i-(n-1)/2)*.2;P.push({x:G.x,y:G.y,vx:Math.cos(a)*700,vy:Math.sin(a)*700,k:'b',d:16*G.dmg,l:.9,r:8,pi:5,hit:[],a})}}
 else{for(const e of E)if(Math.hypot(e.x-G.x,e.y-G.y)<230*A+e.r){e.sl=2;hit(e,8*G.dmg)}FX.push({k:'r',x:G.x,y:G.y,r:230*A,l:.5,m:.5,c:'#8fd3ff'})}}}
function skill(){const id=ch.w,A=G.area;MG=(id==='tho'||id==='sach')?1:0;
if(id==='kiem'){G.buf=4;FX.push({k:'r',x:G.x,y:G.y,r:90,l:.5,m:.5,c:'#ffb347'})}
else if(id==='dao'){G.hp=Math.min(G.max,G.hp+G.max*.15);for(let i=0;i<12;i++){const a=i*.5236;P.push({x:G.x,y:G.y,vx:Math.cos(a)*400,vy:Math.sin(a)*400,k:'a',d:12*G.dmg,l:1,r:6,pi:3,hit:[],a})}FX.push({k:'r',x:G.x,y:G.y,r:60,l:.4,m:.4,c:'#4cc86a'})}
else if(id==='khien'){G.inv=1.5;G.hp=Math.min(G.max,G.hp+G.max*.15);area(G.x,G.y,200*A,20*G.dmg,500);FX.push({k:'r',x:G.x,y:G.y,r:200*A,l:.5,m:.5,c:'#d0d6dd'})}
else if(id==='no'){for(let i=0;i<16;i++){const a=i*.3927;P.push({x:G.x,y:G.y,vx:Math.cos(a)*520,vy:Math.sin(a)*520,k:'a',d:25*G.dmg,l:1.2,r:6,pi:4,hit:[],a})}FX.push({k:'r',x:G.x,y:G.y,r:70,l:.4,m:.4,c:'#e0b04a'})}
else if(id==='chuy'){G.boost=2;FX.push({k:'r',x:G.x,y:G.y,r:70,l:.4,m:.4,c:'#ffe66b'})}
else if(id==='cung'){area(G.x,G.y,230*A,30*G.dmg,420);FX.push({k:'r',x:G.x,y:G.y,r:230*A,l:.45,m:.45,c:'#7cc4ff'})}
else if(id==='tho'){area(G.x,G.y,380*A,28*G.dmg,220);FX.push({k:'r',x:G.x,y:G.y,r:380*A,l:.6,m:.6,c:'#f4e7b0'})}
else for(let i=0;i<6&&E.length;i++){const m=E[Math.floor(Math.random()*E.length)];area(m.x,m.y,70*A,40*G.dmg,150);FX.push({k:'r',x:m.x,y:m.y,r:70*A,l:.4,m:.4,c:'#ff9a4d'})}}
function weapon(){if(G.cd>0&&!G.ec)return;const cd=G.cd,fin=(G.n||0)%5===4&&!G.ec;if(fin)G.dmg*=1.8;weapon0();if(fin)G.dmg/=1.8;
if(G.cd>cd&&!G.ec){G.n=(G.n||0)+1;G.swg=.18;if(fin){G.sh=6;G.hs=.05;FX.push({k:'t',x:G.x,y:G.y-34,v:'ĐẠI KÍCH!',l:.8,m:.8,c:'#ff8a3d',z:20});sfx(260,.2,.08)}
if(G.cnt>=2&&Math.random()<(G.cnt>=4?.5:.3))later(.22,()=>{const c0=G.cd;G.ec=1;G.cd=0;weapon0();G.ec=0;G.cd=c0})}}
