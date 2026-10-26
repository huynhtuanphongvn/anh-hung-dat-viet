/*== MODULE 85_render | owner:A | draw(): ban do, quai, HUD ==*/
function draw(){
X.fillStyle='#10202b';X.fillRect(0,0,W,H);
const sh=G.sh>0?G.sh:0,cx=W/2-G.x+(Math.random()-.5)*sh,cy=H/2-G.y+(Math.random()-.5)*sh,s=64,ox=((cx%s)+s)%s,oy=((cy%s)+s)%s;
X.fillStyle='#1c3b2b';X.fillRect(cx-AR,cy-AR,2*AR,2*AR);X.save();X.beginPath();X.rect(cx-AR,cy-AR,2*AR,2*AR);X.clip();
X.fillStyle='rgba(255,255,255,.07)';for(let x=ox;x<W;x+=s)for(let y=oy;y<H;y+=s)X.fillRect(x-1.5,y-1.5,3,3);
X.fillStyle='#1f5f8a';X.fillRect(cx-AR,cy-90,2*AR,180);X.fillStyle='#8b6a3e';X.fillRect(cx-70,cy-96,140,192);X.strokeStyle='#5e4527';X.lineWidth=2;for(let k=-90;k<=90;k+=18){X.beginPath();X.moveTo(cx-70,cy+k);X.lineTo(cx+70,cy+k);X.stroke()}
for(const d of DEC){const x=d.x+cx,y=d.y+cy;if(x<-40||y<-40||x>W+40||y>H+40)continue;if(d.t){X.fillStyle='#6f7680';X.beginPath();X.ellipse(x,y,d.s*.8,d.s*.55,0,0,6.283);X.fill()}else{X.fillStyle='#0f3a22';X.beginPath();X.arc(x,y,d.s,0,6.283);X.fill();X.fillStyle='#1d6b3c';X.beginPath();X.arc(x-d.s*.2,y-d.s*.25,d.s*.6,0,6.283);X.fill()}}
X.restore();X.strokeStyle='#d9b15c';X.lineWidth=8;X.strokeRect(cx-AR,cy-AR,2*AR,2*AR);
for(const g of GM){X.fillStyle=g.cn?'#ffd23f':'#6be3ff';X.beginPath();X.moveTo(g.x+cx,g.y+cy-6);X.lineTo(g.x+cx+5,g.y+cy);X.lineTo(g.x+cx,g.y+cy+6);X.lineTo(g.x+cx-5,g.y+cy);X.fill()}
for(const e of E){const x=e.x+cx,y=e.y+cy;if(x<-50||y<-50||x>W+50||y>H+50)continue;foe(e,x,y,G.t)}
for(const p of P){X.strokeStyle='rgba(255,255,255,.35)';X.lineWidth=3;X.beginPath();X.moveTo(p.x+cx-p.vx*.05,p.y+cy-p.vy*.05);X.lineTo(p.x+cx,p.y+cy);X.stroke();X.save();X.translate(p.x+cx,p.y+cy);if(p.k==='f'){X.fillStyle='#ffb347';X.shadowColor='#ff5a1f';X.shadowBlur=12;X.beginPath();X.arc(0,0,p.r,0,6.283);X.fill()}
 else if(p.k==='a'){X.rotate(p.a);X.strokeStyle='#e8d9b0';X.lineWidth=3;X.beginPath();X.moveTo(-10,0);X.lineTo(10,0);X.stroke();X.fillStyle='#fff';X.fillRect(8,-3,5,6)}else if(p.k==='w'){X.fillStyle='#f4e7b0';X.font='700 18px serif';X.textAlign='center';X.fillText('文',0,6)}else if(p.k==='i'){X.fillStyle='#8a7bff';X.beginPath();X.arc(0,0,7,0,6.283);X.fill()}else if(p.k==='b'){X.rotate(p.a);X.fillStyle='#bfe8ff';X.fillRect(-14,-2.5,28,5)}X.restore()}
for(const f of FX){if(f.k==='r'){const a=f.l/f.m;X.globalAlpha=a;X.strokeStyle=f.c;X.fillStyle=f.c;X.lineWidth=3;X.beginPath();X.arc(f.x+cx,f.y+cy,f.r*(1.2-a*.5),0,6.283);X.globalAlpha=a*.25;X.fill();X.globalAlpha=a;X.stroke();X.globalAlpha=1}
 else if(f.k==='t'){X.globalAlpha=Math.min(1,f.l/f.m*2);X.font='700 '+f.z+'px "Baloo 2",system-ui,sans-serif';X.textAlign='center';X.lineWidth=3;X.strokeStyle='#000';X.fillStyle=f.c;const yy=f.y+cy-(1-f.l/f.m)*26;X.strokeText(f.v,f.x+cx,yy);X.fillText(f.v,f.x+cx,yy);X.globalAlpha=1}else if(f.k==='p'){X.globalAlpha=f.l/f.m;X.fillStyle=f.c;X.fillRect(f.x+cx-2,f.y+cy-2,4,4);X.globalAlpha=1}else if(f.k==='s'){X.globalAlpha=f.l/f.m;X.strokeStyle=f.c;X.lineWidth=10;X.beginPath();X.arc(f.x+cx,f.y+cy,f.r*.85,f.a-f.w,f.a+f.w);X.stroke();X.globalAlpha=1}else{X.strokeStyle='#fff3a0';X.lineWidth=3;X.beginPath();X.moveTo(f.x1+cx,f.y1+cy);const n=5;for(let i=1;i<=n;i++){const j=i<n?(Math.random()-.5)*14:0;X.lineTo(f.x1+(f.x2-f.x1)*i/n+cx+j,f.y1+(f.y2-f.y1)*i/n+cy+j)}X.stroke()}}
for(const q of EP){X.fillStyle='#ff5a5a';X.beginPath();X.arc(q.x+cx,q.y+cy,5,0,6.283);X.fill()}const px=W/2,py=H/2;X.globalAlpha=G.inv>0&&Math.floor(G.t*20)%2?.45:1;
hero(px,py,G);X.globalAlpha=1;
if(S==='menu')return;
X.fillStyle='rgba(0,0,0,.45)';X.fillRect(0,0,W,8);X.fillStyle=ch.col;X.fillRect(0,0,W*G.xp/G.need,8);
X.fillStyle='rgba(0,0,0,.5)';X.fillRect(12,16,150,12);X.fillStyle='#ff5468';X.fillRect(12,16,150*Math.max(0,G.hp)/G.max,12);
X.font='700 15px "Baloo 2",system-ui,sans-serif';X.fillStyle='#fff';X.textAlign='left';X.fillText('Cấp '+G.lvl+' · '+ch.sn,12,46);X.fillStyle='rgba(0,0,0,.5)';X.fillRect(12,52,150,6);X.fillStyle='#fff';X.fillRect(12,52,150*(1-Math.max(0,G.s)/ch.cd2),6);X.fillText('Vũ khí Lv'+(G.cnt+1)+' · Đòn tất sát '+((G.n||0)%5)+'/5',12,76);
X.textAlign='center';X.font='700 20px "Baloo 2",system-ui,sans-serif';X.fillText(fmt(G.t),W/2,30);
X.textAlign='right';X.font='700 15px "Baloo 2",system-ui,sans-serif';X.fillText('🪙 '+G.coins+' · Hạ gục '+G.kills,W-12,28);
if(joy){X.strokeStyle='rgba(255,255,255,.35)';X.lineWidth=2;X.beginPath();X.arc(joy.x0,joy.y0,50,0,6.283);X.stroke();X.fillStyle='rgba(255,255,255,.35)';X.beginPath();X.arc(joy.px,joy.py,20,0,6.283);X.fill()}}
