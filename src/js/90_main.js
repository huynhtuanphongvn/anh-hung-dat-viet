/*== MODULE 90_main | owner:A | loop, menuDraw, khoi dong ==*/
function loop(ts){const dt=Math.min(.05,(ts-last)/1000||0);last=ts;if(S==='play')update(dt);if(G)draw();else menuDraw(ts);requestAnimationFrame(loop)}
function menuDraw(ts){ch=ch||owned()[0];G={t:ts/1000,x:Math.sin(ts/7000)*300,y:Math.sin(ts/5000)*40,inv:0,xp:0,need:1,hp:1,max:1,lvl:1,kills:0,coins:0,s:0};E=[];P=[];GM=[];FX=[];EP=[];draw();G=null}
home();requestAnimationFrame(loop);
