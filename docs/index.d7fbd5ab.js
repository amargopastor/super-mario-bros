class o{constructor(o){this.position=o}update(o){}draw(o,t){}keyboard_event_down(o){}keyboard_event_up(o){}}const t=(o,t,e)=>{const i={right:500-t.w,left:0};return"red"!==e&&(i.right=500+t.w,i.left=0-t.w),o.x<i.right&&o.x>i.left&&o.y<500-t.h&&o.y>0};class e extends o{constructor(o={w:30,h:30},t={x:500+o.w,y:350}){super(t),this.goombaSize=o,this.goombaColor="blue",this.goombaSpeed=40}update(o){let e={x:this.position.x-this.goombaSpeed*o,y:this.position.y};t(e,this.goombaSize,this.goombaColor)&&(this.position=e)}draw(o,t){t.fillStyle=this.goombaColor,t.fillRect(this.position.x,this.position.y,this.goombaSize.w,this.goombaSize.h)}}let i;!function(o){o[o.UP=0]="UP",o[o.DOWN=1]="DOWN",o[o.LEFT=2]="LEFT",o[o.RIGHT=3]="RIGHT"}(i||(i={}));let r={ArrowUp:i.UP,ArrowDown:i.DOWN,ArrowLeft:i.LEFT,ArrowRight:i.RIGHT};class s extends o{constructor(o={w:30,h:30},t={x:10,y:350}){super(t),this.marioSize=o,this.marioColor="red",this.marioSpeed=0,this.marioAceleration=0,this.keyboardMap=r}update(o){this.marioSpeed=.9*this.marioSpeed+this.marioAceleration;let e={x:this.position.x+this.marioSpeed*o,y:this.position.y};t(e,this.marioSize,this.marioColor)&&(this.position=e)}draw(o,t){t.fillStyle=this.marioColor,t.fillRect(this.position.x,this.position.y,this.marioSize.w,this.marioSize.h)}keyboard_event_down(o){let t=this.keyboardMap[o];t==i.LEFT?this.marioAceleration=-10:t==i.RIGHT&&(this.marioAceleration=10)}keyboard_event_up(o){let t=this.keyboardMap[o];(t==i.RIGHT||t==i.LEFT)&&(this.marioAceleration=0)}}window.onload=()=>{console.log("ready");const o=document.getElementById("canvas"),t=o.getContext("2d"),i=new s,r=[new e,i];let a=0;const n=e=>{const i=(e-a)/1e3;a=e,r.forEach((o=>o.update(i))),t.clearRect(0,0,o.width,o.height),r.forEach((o=>o.draw(i,t))),window.requestAnimationFrame(n)};document.body.addEventListener("keydown",(o=>{i.keyboard_event_down&&i.keyboard_event_down(o.key)})),document.body.addEventListener("keyup",(o=>{i.keyboard_event_up&&i.keyboard_event_up(o.key)})),window.requestAnimationFrame(n)};
//# sourceMappingURL=index.d7fbd5ab.js.map