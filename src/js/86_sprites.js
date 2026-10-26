/*== MODULE 86_sprites | owner:B | hero() va foe(): ve nhan vat/quai trong game ==*/
function hero(x,y,g){const c=ch,s=SK[c.id]||[2,1,1],aim=g.aim||0,fc=Math.cos(aim)>=0?1:-1,t=g.t,mv=g.mv,bob=mv?Math.sin(t*14)*2:Math.sin(t*3)*.8,K='#2b1d12',lg=mv?Math.sin(t*14)*3:0,h=s[0],sw=g.swg>0?(g.swg/.18-.5)*2.4:0;
X.save();X.translate(x,y+bob);X.lineWidth=2;X.strokeStyle=K;X.fillStyle='rgba(0,0,0,.35)';X.beginPath();X.ellipse(0,16-bob,13,5,0,0,6.283);X.fill();
X.fillStyle=K;X.fillRect(-7,9,5,7+lg);X.fillRect(2,9,5,7-lg);X.fillStyle=c.col;X.beginPath();X.moveTo(-11,11);X.lineTo(-8,-7);X.lineTo(8,-7);X.lineTo(11,11);X.closePath();X.fill();X.stroke();
if(s[2]){X.strokeStyle='rgba(0,0,0,.4)';X.lineWidth=1;X.beginPath();X.moveTo(-8,-1);X.lineTo(8,-1);X.moveTo(-9,5);X.lineTo(9,5);X.stroke();X.strokeStyle=K;X.lineWidth=2}
X.fillStyle='#e8caa0';X.beginPath();X.arc(0,-14,8,0,6.283);X.fill();X.stroke();X.fillStyle=K;X.fillRect(fc*4-1,-15,2,3);X.fillRect(-fc-1,-15,2,3);
if(s[1]){X.beginPath();X.moveTo(-6,-11);X.quadraticCurveTo(0,s[1]==2?9:0,6,-11);X.fill()}
if(h==0){X.fillRect(-8,-26,16,7);X.fillRect(-15,-24,30,2.5)}else if(h==1){X.beginPath();X.arc(0,-17,8.5,Math.PI,0);X.fill()}else if(h==2){X.fillStyle='#9a9a9a';X.beginPath();X.arc(0,-17,9,Math.PI,0);X.fill();X.stroke();X.fillStyle='#c0392b';X.fillRect(-1.5,-32,3,8);X.beginPath();X.arc(0,-33,3,0,6.283);X.fill()}else if(h==3){X.fillStyle='#d9a72e';X.fillRect(-9,-27,18,7);X.strokeRect(-9,-27,18,7)}else if(h==4){X.beginPath();X.arc(0,-17,8.5,Math.PI,0);X.fill();X.beginPath();X.arc(0,-26,4.5,0,6.283);X.fill()}else{X.beginPath();X.arc(0,-17,8.5,Math.PI,0);X.fill();X.fillStyle='#c0392b';X.fillRect(-8.5,-19,17,3)}
X.restore();X.save();X.translate(x,y+bob-3);X.rotate(aim+sw);X.lineWidth=3;X.strokeStyle=K;const w=c.w;
if(w==='kiem'){X.fillStyle='#dfe7f0';X.fillRect(10,-2,26,4);X.strokeRect(10,-2,26,4);X.fillStyle='#b8860b';X.fillRect(8,-6,4,12)}
else if(w==='dao'){X.strokeStyle='#cfd6de';X.lineWidth=4;X.beginPath();X.moveTo(10,0);X.quadraticCurveTo(24,-10,34,4);X.stroke()}
else if(w==='chuy'){X.strokeStyle='#8a5a2b';X.lineWidth=4;X.beginPath();X.moveTo(8,0);X.lineTo(28,0);X.stroke();X.fillStyle='#777';X.fillRect(26,-8,12,16);X.strokeRect(26,-8,12,16)}
else if(w==='cung'){X.strokeStyle='#8a5a2b';X.beginPath();X.arc(14,0,14,-1.2,1.2);X.stroke();X.lineWidth=1;X.strokeStyle='#eee';X.beginPath();X.moveTo(19,13);X.lineTo(19,-13);X.stroke()}
else if(w==='khien'){X.fillStyle='#b8c4d4';X.beginPath();X.arc(18,0,11,0,6.283);X.fill();X.stroke();X.fillStyle='#d9a72e';X.beginPath();X.arc(18,0,4,0,6.283);X.fill()}
else if(w==='no'){X.strokeStyle='#8a5a2b';X.lineWidth=4;X.beginPath();X.moveTo(8,0);X.lineTo(28,0);X.moveTo(22,-9);X.lineTo(22,9);X.stroke()}
else if(w==='tho'){X.strokeStyle='#5a3b22';X.beginPath();X.moveTo(8,0);X.lineTo(30,0);X.stroke();X.fillStyle='rgba(244,231,176,.85)';X.beginPath();X.arc(33,0,5,0,6.283);X.fill()}
else{X.fillStyle='#6a3d2a';X.fillRect(12,-8,16,16);X.fillStyle='#f4e7b0';X.fillRect(14,-6,12,12)}
X.restore()}
function foe(e,x,y,t){const s=e.r/12,F=c=>e.fl>0?'#fff':c,K='#2b1d12',w=Math.sin(t*10+e.x*.1),sk='#e8caa0';
X.save();X.translate(x,y);X.scale((e.x<G.x?1:-1)*s,s);X.lineWidth=1.8;X.strokeStyle=K;X.fillStyle='rgba(0,0,0,.35)';X.beginPath();X.ellipse(0,16,e.ch?18:11,4,0,0,6.283);X.fill();
if(e.ch){X.translate(0,w);X.fillStyle=F('#8d8a86');X.beginPath();X.ellipse(0,0,16,11,0,0,6.283);X.fill();X.stroke();X.beginPath();X.arc(16,-4,7,0,6.283);X.fill();X.stroke();X.strokeStyle=F('#8d8a86');X.lineWidth=5;X.beginPath();X.moveTo(21,-2);X.quadraticCurveTo(27,6,21,13);X.stroke();X.strokeStyle='#fff';X.lineWidth=2;X.beginPath();X.moveTo(19,2);X.lineTo(26,6);X.stroke();X.strokeStyle=K;X.lineWidth=1.8;X.fillStyle=F('#8d8a86');for(const lx of[-11,-4,4,11]){X.fillRect(lx-2,8,5,8);X.strokeRect(lx-2,8,5,8)}X.fillStyle=F(e.c);X.fillRect(-4,-20,8,10);X.fillStyle=sk;X.beginPath();X.arc(0,-23,5,0,6.283);X.fill();X.stroke()}
else if(e.sh===2){X.fillStyle=F('#9b6a3c');X.beginPath();X.ellipse(0,3,12,7,0,0,6.283);X.fill();X.stroke();X.beginPath();X.moveTo(8,-2);X.lineTo(15,-10);X.lineTo(21,-6);X.lineTo(14,3);X.closePath();X.fill();X.stroke();for(const lx of[-9,-4,4,9])X.fillRect(lx-1,8,3,8+w*lx*.1);X.fillStyle=F(e.c);X.fillRect(-3,-9,7,10);X.fillStyle=sk;X.beginPath();X.arc(1,-13,5,0,6.283);X.fill();X.stroke();X.fillStyle=F('#b58a4a');X.beginPath();X.moveTo(-5,-15);X.lineTo(7,-15);X.lineTo(1,-23);X.closePath();X.fill();X.stroke()}
else{if(e.b){X.fillStyle=F('#8e1b2b');X.beginPath();X.moveTo(-9,-8);X.lineTo(-19,14);X.lineTo(8,11);X.closePath();X.fill();X.beginPath();X.moveTo(-15,-32);X.lineTo(-15,14);X.stroke();X.fillStyle=F('#d1344e');X.fillRect(-15,-32,13,9)}
X.fillStyle=K;X.fillRect(-6,9,5,7+w*2);X.fillRect(1,9,5,7-w*2);X.fillStyle=F(e.c);X.beginPath();X.moveTo(-10,11);X.lineTo(-7,-7);X.lineTo(7,-7);X.lineTo(10,11);X.closePath();X.fill();X.stroke();X.fillStyle=sk;X.beginPath();X.arc(0,-14,7.5,0,6.283);X.fill();X.stroke();X.fillStyle='#c0261e';X.fillRect(2,-15,2,3);X.fillRect(-3,-15,2,3);
if(e.sh===1){X.fillStyle=F('#8a93a3');X.beginPath();X.arc(0,-17,8,Math.PI,0);X.fill();X.stroke();X.fillRect(8,-8,8,18);X.strokeRect(8,-8,8,18)}
else if(e.sh===3){X.fillStyle=F('#3b6b4a');X.beginPath();X.arc(0,-17,8,Math.PI,0);X.fill();X.stroke();X.strokeStyle='#8a5a2b';X.lineWidth=2.5;X.beginPath();X.arc(10,0,12,-1.2,1.2);X.stroke()}
else if(e.b){X.fillStyle='#d9a72e';X.fillRect(-8,-26,16,6);X.strokeRect(-8,-26,16,6)}
else{X.fillStyle=F('#b58a4a');X.beginPath();X.moveTo(-11,-16);X.lineTo(11,-16);X.lineTo(0,-29);X.closePath();X.fill();X.stroke()}}
if(e.el){X.strokeStyle='#ffd23f';X.lineWidth=2;X.beginPath();X.ellipse(0,0,18,24,0,0,6.283);X.stroke()}
X.restore();if(e.hp<e.mhp&&e.r>=18){X.fillStyle='rgba(0,0,0,.6)';X.fillRect(x-e.r,y-e.r*1.9,e.r*2,4);X.fillStyle='#ff5468';X.fillRect(x-e.r,y-e.r*1.9,e.r*2*e.hp/e.mhp,4)}}
