(()=>{var y,o,r=0,e={x:100,y:100,dir:2,st:0,tcd:0,scd:0,sch:0,sdr:0,coll:0,rec:0,boost:1},i={x:500,y:300,dir:0,st:0,tcd:0,scd:0,sch:0,sdr:0,coll:0,rec:0,boost:1};var l=[],f=0,x,c,t=new Set,a=new Audio("plop.wav"),T=new Audio("qiu.wma"),v=new Image;v.src="logo.png";function g(){if(o.resetTransform(),o.clearRect(0,0,x,c),console.log("drawing"),r==1&&(o.fillStyle=`hsl(${f%360}, 50%, 50%)`,o.fillText("Player 1 win!",250,180),o.fillText("Click to restart.",250,200)),r==2&&(o.fillStyle=`hsl(${f%360}, 50%, 50%)`,o.fillText("Player 2 win!",250,180),o.fillText("Click to restart.",250,200)),r==0){switch(e.dir%4==0&&(o.beginPath(),o.moveTo(e.x,e.y-10),o.lineTo(e.x+10,e.y),o.lineTo(e.x+10,e.y+10),o.lineTo(e.x,e.y),o.lineTo(e.x-10,e.y+10),o.lineTo(e.x-10,e.y),o.lineTo(e.x,e.y-10),o.fillStyle=`hsl(${e.st*120}, 50%, 50%)`,o.fill()),e.dir%4==1&&(o.beginPath(),o.moveTo(e.x+10,e.y),o.lineTo(e.x,e.y+10),o.lineTo(e.x-10,e.y+10),o.lineTo(e.x,e.y),o.lineTo(e.x-10,e.y-10),o.lineTo(e.x,e.y-10),o.lineTo(e.x+10,e.y),o.fillStyle=`hsl(${e.st*120}, 50%, 50%)`,o.fill()),e.dir%4==2&&(o.beginPath(),o.moveTo(e.x,e.y+10),o.lineTo(e.x-10,e.y),o.lineTo(e.x-10,e.y-10),o.lineTo(e.x,e.y),o.lineTo(e.x+10,e.y-10),o.lineTo(e.x+10,e.y),o.lineTo(e.x,e.y+10),o.fillStyle=`hsl(${e.st*120}, 50%, 50%)`,o.fill()),e.dir%4==3&&(o.beginPath(),o.moveTo(e.x-10,e.y),o.lineTo(e.x,e.y-10),o.lineTo(e.x+10,e.y-10),o.lineTo(e.x,e.y),o.lineTo(e.x+10,e.y+10),o.lineTo(e.x,e.y+10),o.lineTo(e.x-10,e.y),o.fillStyle=`hsl(${e.st*120}, 50%, 50%)`,o.fill()),i.dir%4){case 0:o.beginPath(),o.moveTo(i.x,i.y-10),o.lineTo(i.x+10,i.y),o.lineTo(i.x+10,i.y+10),o.lineTo(i.x,i.y),o.lineTo(i.x-10,i.y+10),o.lineTo(i.x-10,i.y),o.lineTo(i.x,i.y-10),o.fillStyle=`hsl(${i.st*120}, 50%, 50%)`,o.fill();break;case 1:o.beginPath(),o.moveTo(i.x+10,i.y),o.lineTo(i.x,i.y+10),o.lineTo(i.x-10,i.y+10),o.lineTo(i.x,i.y),o.lineTo(i.x-10,i.y-10),o.lineTo(i.x,i.y-10),o.lineTo(i.x+10,i.y),o.fillStyle=`hsl(${i.st*120}, 50%, 50%)`,o.fill();break;case 2:o.beginPath(),o.moveTo(i.x,i.y+10),o.lineTo(i.x-10,i.y),o.lineTo(i.x-10,i.y-10),o.lineTo(i.x,i.y),o.lineTo(i.x+10,i.y-10),o.lineTo(i.x+10,i.y),o.lineTo(i.x,i.y+10),o.fillStyle=`hsl(${i.st*120}, 50%, 50%)`,o.fill();break;case 3:o.beginPath(),o.moveTo(i.x-10,i.y),o.lineTo(i.x,i.y-10),o.lineTo(i.x+10,i.y-10),o.lineTo(i.x,i.y),o.lineTo(i.x+10,i.y+10),o.lineTo(i.x,i.y+10),o.lineTo(i.x-10,i.y),o.fillStyle=`hsl(${i.st*120}, 50%, 50%)`,o.fill();break;default:console.log(i.dir)}o.beginPath(),o.moveTo(0,0),o.lineTo(0,400),o.lineTo(600,400),o.lineTo(600,0),o.lineTo(0,0),o.stroke(),o.beginPath(),o.moveTo(150,50),o.lineTo(160,50),o.lineTo(160,150),o.lineTo(150,150),o.lineTo(150,50),o.stroke(),o.beginPath(),o.moveTo(450,350),o.lineTo(440,350),o.lineTo(440,250),o.lineTo(450,250),o.lineTo(450,350),o.stroke(),o.beginPath(),o.moveTo(100,250),o.lineTo(250,250),o.lineTo(250,260),o.lineTo(100,260),o.lineTo(100,250),o.stroke(),o.beginPath(),o.moveTo(350,140),o.lineTo(500,140),o.lineTo(500,150),o.lineTo(350,150),o.lineTo(350,140),o.stroke();for(let s=0;s<l.length;s+=1)o.beginPath(),o.moveTo(l[s][0]-4,l[s][1]-4),o.lineTo(l[s][0]+4,l[s][1]-4),o.lineTo(l[s][0]+4,l[s][1]+4),o.lineTo(l[s][0]-4,l[s][1]+4),o.lineTo(l[s][0]-4,l[s][1]-4),o.fillStyle=`hsl(${60}, 50%, 50%)`,o.fill()}}function u(s){(e.x<10||e.x>590||e.y<10||e.y>390||140<e.x&&e.x<170&&40<e.y&&e.y<160||430<e.x&&e.x<460&&240<e.y&&e.y<360||90<e.x&&e.x<260&&240<e.y&&e.y<270||340<e.x&&e.x<510&&130<e.y&&e.y<160)&&(e.coll=1),(i.x<10||i.x>590||i.y<10||i.y>390||140<i.x&&i.x<170&&40<i.y&&i.y<160||430<i.x&&i.x<460&&240<i.y&&i.y<360||90<i.x&&i.x<260&&240<i.y&&i.y<270||340<i.x&&i.x<510&&130<i.y&&i.y<160)&&(i.coll=1);for(let n=0;n<l.length;n+=1)e.x-14<l[n][0]&&l[n][0]<e.x+14&&e.y-14<l[n][1]&&l[n][1]<e.y+14&&(e.coll=1,l.splice(n,1));for(let n=0;n<l.length;n+=1)i.x-14<l[n][0]&&l[n][0]<i.x+14&&i.y-14<l[n][1]&&l[n][1]<i.y+14&&(i.coll=1,l.splice(n,1));for(let n=0;n<l.length;n+=1)(l[n][0]<4||l[n][0]>596||l[n][1]<4||l[n][1]>396||146<l[n][0]&&l[n][0]<164&&46<l[n][1]&&l[n][1]<154||436<l[n][0]&&l[n][0]<454&&246<l[n][1]&&l[n][1]<354||96<l[n][0]&&l[n][0]<254&&246<l[n][1]&&l[n][1]<264||346<l[n][0]&&l[n][0]<504&&136<l[n][1]&&l[n][1]<154)&&l.splice(n,1);e.coll==1&&(e.sch==1&&(e.sch=0,e.sdr=20,a.play()),e.sdr==0&&(r=2),e.coll=0),i.coll==1&&(i.sch==1&&(i.sch=0,i.sdr=20,a.play()),i.sdr==0&&(r=1),i.coll=0),e.sdr>0&&(e.sdr-=1),i.sdr>0&&(i.sdr-=1),t.has("a")&&e.tcd==0&&(e.tcd=20,e.dir+=3),t.has("d")&&e.tcd==0&&(e.tcd=20,e.dir+=1),t.has("s")&&e.scd==0&&(e.scd=100,e.st+=2,e.st%3==0&&(e.boost=1),e.st%3==2&&(e.sch=1,e.boost=0),e.st%3==1&&(e.sch=0)),t.has(" ")&&e.rec==0&&(e.rec=30,T.play(),e.dir%4==0&&l.push([e.x,e.y-15,0,200+100*e.boost]),e.dir%4==1&&l.push([e.x+15,e.y,1,200+100*e.boost]),e.dir%4==2&&l.push([e.x,e.y+15,2,200+100*e.boost]),e.dir%4==3&&l.push([e.x-15,e.y,3,200+100*e.boost])),e.rec>0&&(e.rec-=1),(t.has("0")||t.has("Insert"))&&i.rec==0&&(i.rec=30,T.play(),i.dir%4==0&&l.push([i.x,i.y-15,0,200+100*i.boost]),i.dir%4==1&&l.push([i.x+15,i.y,1,200+100*i.boost]),i.dir%4==2&&l.push([i.x,i.y+15,2,200+100*i.boost]),i.dir%4==3&&l.push([i.x-15,i.y,3,200+100*i.boost])),i.rec>0&&(i.rec-=1),e.scd>0&&(e.scd-=1),e.tcd>0&&(e.tcd-=1),t.has("w")&&(e.dir%4==0&&(e.y-=100*s,e.st%3==1&&(e.y-=20*s)),e.dir%4==1&&(e.x+=100*s,e.st%3==1&&(e.x+=20*s)),e.dir%4==2&&(e.y+=100*s,e.st%3==1&&(e.y+=20*s)),e.dir%4==3&&(e.x-=100*s,e.st%3==1&&(e.x-=20*s))),t.has("ArrowLeft")&&i.tcd==0&&(i.tcd=20,i.dir+=3),t.has("ArrowRight")&&i.tcd==0&&(i.tcd=20,i.dir+=1),i.tcd>0&&(i.tcd-=1),t.has("ArrowDown")&&i.scd==0&&(i.scd=100,i.st+=2,i.st%3==0&&(i.boost=1),i.st%3==2&&(i.sch=1,i.boost=0),i.st%3==1&&(i.sch=0)),i.scd>0&&(i.scd-=1),t.has("ArrowUp")&&(i.dir%4==0&&(i.y-=100*s,i.st%3==1&&(i.y-=20*s),console.log(i.x,i.y)),i.dir%4==1&&(i.x+=100*s,i.st%3==1&&(i.x+=20*s),console.log(i.x,i.y)),i.dir%4==2&&(i.y+=100*s,i.st%3==1&&(i.y+=20*s),console.log(i.x,i.y)),i.dir%4==3&&(i.x-=100*s,i.st%3==1&&(i.x-=20*s),console.log(i.x,i.y)));for(let n=0;n<l.length;n+=1)l[n][2]==0&&(l[n][1]-=l[n][3]*s),l[n][2]==1&&(l[n][0]+=l[n][3]*s),l[n][2]==2&&(l[n][1]+=l[n][3]*s),l[n][2]==3&&(l[n][0]-=l[n][3]*s)}function b(s){let n=s-f;f=s,u(n/1e3),g(),window.requestAnimationFrame(b)}function d(){x=600,c=400,y.width=x,y.height=c}function h(s){switch(console.log(t),s.type){case"keydown":console.log(s.key),t.add(s.key);break;case"keyup":t.delete(s.key);break;default:console.warn("Wut?")}}function m(s){r=0,e.x=100,e.y=100,e.dir=2,e.st=0,e.coll=0,e.scd=0,e.rec=0,e.boost=1,e.scd=0,e.sdr=0,e.sch=0,e.tcd=0,i.x=500,i.y=300,i.dir=0,i.st=0,i.coll=0,i.scd=0,i.rec=0,i.boost=1,i.scd=0,i.sdr=0,i.sch=0,i.tcd=0,l=[]}function w(){y=document.getElementById("canvas"),o=y.getContext("2d"),window.addEventListener("keydown",h),window.addEventListener("keyup",h),window.addEventListener("resize",d),y.addEventListener("click",m),d(),b(performance.now())}w();})();
//# sourceMappingURL=main.js.map
