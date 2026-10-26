/*== MODULE 65_fx_sound | owner:A | Am thanh, hat, hang doi ==*/
let AC=null,lastS=0,MUTE=0;addEventListener('keydown',e=>{if(e.key==='m'||e.key==='M')MUTE^=1});
function sfx(f,d,v){if(MUTE)return;try{const n=performance.now();if(n-lastS<35)return;lastS=n;if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();const o=AC.createOscillator(),g=AC.createGain();o.type='triangle';o.frequency.value=f;g.gain.value=v||.05;g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+d);o.connect(g);g.connect(AC.destination);o.start();o.stop(AC.currentTime+d)}catch(e){}}
function burst(x,y,c,n){for(let i=0;i<n&&FX.length<220;i++){const a=Math.random()*6.283,v=60+Math.random()*140;FX.push({k:'p',x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:.5,m:.5,c})}}
function later(d,f){G.q=G.q||[];G.q.push({t:d,f})}
