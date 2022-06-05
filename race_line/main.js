(()=>{var h=class{constructor(t,e,i,r,l,v){this.name=t,this.speed=50,this.positionX=200,this.positionY=r,this.targetY=r,this.movementTimer=0,this.context=i,this.color=e,this.upKeyCode=l,this.downKeyCode=v,this.trail=[{x:0,y:r}]}maxedOutMovement(){return this.movementTimer>0}moveUp(){this.maxedOutMovement()||(this.movementTimer=.25,this.targetY=this.targetY-10)}moveDown(){this.maxedOutMovement()||(this.movementTimer=.25,this.targetY=this.targetY+10)}update(t){this.trail.push({x:this.positionX,y:this.positionY}),this.positionX=this.positionX+this.speed*t;let e;Math.abs(this.targetY-this.positionY)>0?(e=(this.speed-30)*(Math.cos(this.movementTimer/.25*Math.PI)+1),this.targetY-this.positionY>0?this.positionY=Math.min(this.targetY,this.positionY+e*t):this.positionY=Math.max(this.targetY,this.positionY-e*t)):e=this.speed,this.positionX=this.positionX+e*t,this.movementTimer>0&&(this.movementTimer=this.movementTimer-t)}draw(t){this.context.resetTransform(),this.drawTrail(t)}drawTrail(t){this.cutTrail(t);let e=this.context;e.beginPath(),e.lineWidth=2,e.moveTo(this.trail[0].x-t,this.trail[0].y);for(let i of this.trail)e.lineTo(i.x-t,Math.round(i.y));e.strokeStyle=this.color,e.stroke()}cutTrail(t){this.trail=this.trail.filter(e=>e.x>=t-200)}};var x=class{constructor(t){this.end=4300;this.squares=[{x:0,y:0,size:50},{x:0,y:400,size:50},{x:200,y:400,size:50},{x:200,y:0,size:50},{x:400,y:400,size:50},{x:400,y:0,size:50},{x:600,y:400,size:50},{x:600,y:0,size:50},{x:800,y:400,size:50},{x:800,y:0,size:50},{x:1e3,y:400,size:50},{x:1e3,y:0,size:50},{x:1200,y:400,size:50},{x:1200,y:0,size:50},{x:1400,y:400,size:50},{x:1400,y:0,size:50},{x:1600,y:400,size:50},{x:1600,y:0,size:50},{x:1620,y:200,size:50},{x:1800,y:400,size:50},{x:1800,y:0,size:50},{x:2e3,y:400,size:50},{x:2e3,y:0,size:50},{x:2200,y:0,size:50},{x:2200,y:400,size:50},{x:2400,y:0,size:100},{x:2400,y:400,size:100},{x:2600,y:200,size:50},{x:2600,y:0,size:100},{x:2600,y:400,size:100},{x:2750,y:320,size:80},{x:2750,y:200,size:80},{x:2750,y:80,size:80},{x:2900,y:400,size:100},{x:2900,y:200,size:100},{x:2900,y:0,size:100},{x:3300,y:0,size:350},{x:3300,y:400,size:350},{x:3800,y:200,size:150},{x:3800,y:0,size:150},{x:3800,y:400,size:150}];this.context=t}collide(t,e){for(let i of this.squares){let r=i.x-i.size/2;if(t>=r&&t<=r+i.size){let l=i.y-i.size/2;if(e>=l&&e<=l+i.size)return!0}}return!1}finish(t){return t>=this.end}draw(t){let e=this.context;for(let i of this.squares){let r=i.x-i.size/2-t,l=i.y-i.size/2;e.strokeStyle="white",e.strokeRect(r,l,i.size,i.size)}t<2500&&(e.font="30px sans-serif",e.textAlign="left",e.fillStyle="green",e.fillText("Left is green",400-t,300),e.fillText("Use 'w' and 's' to move",800-t,300),e.fillStyle="orange",e.fillText("Right is orange",400-t,130),e.fillText("Use 'up' and 'down' to move",800-t,130),e.fillStyle="grey",e.fillText("avoid the squares =>",1300-t,210),e.fillStyle="grey",e.fillText("get to finish first!",1900-t,210),e.beginPath(),e.moveTo(2400-t,50),e.lineTo(2400-t,350),e.strokeStyle="grey",e.stroke()),e.beginPath(),e.moveTo(4300-t,0),e.lineTo(4300-t,400),e.strokeStyle="grey",e.stroke()}};var y,s,o,f,u,d=!1,p,c=!1,z,g=0,a,m;function T(){if(d){s.fillStyle="red",s.fillRect(0,0,a,m),s.font="30px sans-serif",s.textAlign="center",s.fillStyle="black",s.fillText(`\u{1F648} ${p} lost`,200,200);return}if(c){s.fillStyle="green",s.fillRect(0,0,a,m),s.font="30px sans-serif",s.textAlign="center",s.fillStyle="black",s.fillText(`\u{1F680} ${z} won`,200,200);return}s.resetTransform(),s.clearRect(0,0,a,m),s.fillStyle="black",s.fillRect(0,0,a,m);for(let n of o)n.draw(f);u.draw(f)}function w(n){if(d||c)return;for(let e of o)e.update(n);f=o.reduce((e,i)=>e+i.positionX,0)/o.length-a/2;for(let e of o)u.collide(e.positionX,e.positionY)&&(d=!0,p=e.name);for(let e of o)u.finish(e.positionX)&&(c=!0,z=e.name)}function b(n){let t=n-g;g=n,w(t/1e3),T(),window.requestAnimationFrame(b)}function C(n){for(let t of o)n.code==t.upKeyCode&&t.moveUp(),n.code==t.downKeyCode&&t.moveDown()}function Y(){y=document.getElementById("canvas"),a=y.width,m=y.height,f=a/2,s=y.getContext("2d"),window.addEventListener("keydown",C),o=[new h("right player","orange",s,190,"ArrowUp","ArrowDown"),new h("left player","green",s,210,"KeyW","KeyS")],u=new x(s),b(performance.now())}Y();})();
//# sourceMappingURL=main.js.map
