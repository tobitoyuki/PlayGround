function drawFighter(c,f){const x=f.x,y=365+f.y,dir=f.face,accent=f.ch.accent,skin=f.ch.skin;const dodge=f.dodge>0,attack=f.attack>0,special=f.special>0,scale=f.isPlayer?1:1.04;c.save();c.translate(x,y);c.scale(dir*scale,scale);if(dodge)c.globalAlpha=.55;const aura=c.createRadialGradient(0,-95,8,0,-95,special?130:85);aura.addColorStop(0,accent+(special?'66':'28'));aura.addColorStop(1,'transparent');c.fillStyle=aura;c.beginPath();c.ellipse(0,-95,special?130:88,118,0,0,Math.PI*2);c.fill();c.fillStyle='rgba(0,0,0,.35)';c.beginPath();c.ellipse(0,3,44,9,0,0,Math.PI*2);c.fill();
 // legs and jacket silhouette
 const step=Math.sin(f.anim)*3*(Math.abs(f.x-(f.isPlayer?280:680))>0?1:0);c.fillStyle=f.skin[3];c.fillStyle=f.skin; // preserve local body palette below
 const coat=f.skin[3]||f.ch.outfit;c.fillStyle=coat;c.beginPath();c.moveTo(-26,-98);c.lineTo(27,-98);c.lineTo(37,-16);c.lineTo(18,-12);c.lineTo(8,-53);c.lineTo(1,-12);c.lineTo(-27,-13);c.closePath();c.fill();
 c.fillStyle='#17171c';c.beginPath();c.moveTo(-22,-18);c.lineTo(-4,-18);c.lineTo(-6,0);c.lineTo(-28,0);c.moveTo(7,-18);c.lineTo(27,-17);c.lineTo(31,0);c.lineTo(8,0);c.fill();c.fillStyle='#14141a';c.fillRect(-34,-4,17,5);c.fillRect(23,-4,17,5);
 // attacking arm and sleeve
 c.strokeStyle=coat;c.lineWidth=15;c.lineCap='round';c.beginPath();c.moveTo(-22,-91);c.lineTo(attack?26: -36,-73+(Math.sin(f.anim)*2));c.stroke();c.strokeStyle=skin;c.lineWidth=9;c.beginPath();c.moveTo(attack?15:-32,-73);c.lineTo(attack?54:-37,-69);c.stroke();
 // neck, face and hair
 c.fillStyle=skin;c.fillRect(-8,-119,16,24);c.fillStyle=skin;c.beginPath();c.ellipse(0,-137,22,27,0,0,Math.PI*2);c.fill();c.fillStyle='#34262a';c.fillRect(3,-140,12,3);c.fillStyle=f.skin[2];c.beginPath();c.moveTo(-23,-146);c.lineTo(-19,-164);c.lineTo(-7,-158);c.lineTo(0,-169);c.lineTo(8,-158);c.lineTo(19,-164);c.lineTo(25,-145);c.lineTo(17,-151);c.lineTo(14,-142);c.lineTo(8,-151);c.lineTo(1,-143);c.lineTo(-7,-153);c.lineTo(-15,-143);c.lineTo(-21,-145);c.closePath();c.fill();
 // distinctive markings / blindfold / weapon
 if(f.ch.short==='SUKUNA'){c.strokeStyle='#7d2838';c.lineWidth=2;c.beginPath();c.moveTo(5,-139);c.lineTo(15,-136);c.moveTo(7,-132);c.lineTo(14,-128);c.moveTo(-14,-144);c.lineTo(-7,-140);c.stroke()}
 if(f.ch.short==='GOJO'){c.fillStyle='#111119';c.fillRect(-23,-143,46,9);c.fillStyle='#e7e7ef';for(let i=-1;i<2;i++)c.fillRect(i*9-1,-143,4,8)}
 if(f.ch.short==='MAKI'){c.strokeStyle='#7c3434';c.lineWidth=2;c.beginPath();c.moveTo(14,-149);c.lineTo(20,-142);c.lineTo(14,-137);c.stroke();c.strokeStyle='#8b7b68';c.lineWidth=3;c.beginPath();c.moveTo(29,-84);c.lineTo(45,-1);c.stroke()}
 if(special){c.strokeStyle=accent;c.lineWidth=3;c.globalAlpha=.8;c.beginPath();c.arc(0,-91,64+Math.sin(f.anim*2)*8,-1.7,1.1);c.stroke();c.beginPath();c.arc(0,-91,76,-2.5,-.4);c.stroke();c.globalAlpha=dodge?.55:1}
 if(f.stun>0){c.fillStyle='#fff3c9';c.font='bold 17px sans-serif';c.fillText('✦',-6,-183)}c.restore();
}
