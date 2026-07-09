const cvs=document.getElementById('bg'),x=cvs.getContext('2d');let t=0;
function r(){cvs.width=innerWidth;cvs.height=innerHeight;const w=cvs.width,h=cvs.height;
let g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,"#ffd7a1");g.addColorStop(.35,"#c9ebff");g.addColorStop(1,"#78d2ef");x.fillStyle=g;x.fillRect(0,0,w,h);
let sy=h*.72; x.fillStyle="#4eb5dd";x.fillRect(0,sy,w,h-sy);
let sunY=h*.18-Math.min(step,3)*8;x.beginPath();x.arc(w*.72,sunY,60,0,7);x.fillStyle="#ffd86c";x.shadowBlur=40;x.shadowColor="#ffeaa0";x.fill();x.shadowBlur=0;
for(let i=0;i<3;i++){let cx=((t*0.2+i*250)%(w+300))-150; x.fillStyle="rgba(255,255,255,.75)";
cloud(cx,90+i*60);}
x.fillStyle="rgba(255,255,255,.18)";for(let i=0;i<12;i++){x.fillRect(0,sy+i*10+Math.sin(t*.02+i)*2,w,2);}
t++;requestAnimationFrame(r);}
function cloud(cx,cy){x.beginPath();x.arc(cx,cy,22,0,7);x.arc(cx+24,cy-12,28,0,7);x.arc(cx+55,cy,22,0,7);x.fill();}
let step=0;const d=[{w:1,t:"Sana özel hazırlanmış bulmacaya hoşgeldin Patroniçem :)"},{q:"Bir çalışan haftanın kaç günü çalışmalıdır.",a:["yedi","7"],m:"El Insaf :D"},{q:"En muhteşem partnerler hangi ulaşım aracını kullanmayı severler?",a:["motosiklet","motosikleti"],m:"Harikasın, kaskını hazırla birlikte yola çıkacağız"},{q:"Yetişkin bir Yiğit, hangi yolu seçmeyi sever?",a:["zor"],m:"Bak Birbirimizi cok iyi tanıyoruz :D"},{e:1}];
const c=document.getElementById('card');
const boxes=n=>'<div class="boxes">'+Array.from({length:n},()=>'<div class="box"></div>').join('')+'</div>';
function draw(){let s=d[step];
if(s.w){c.innerHTML=`<h1>${s.t}</h1><button id=b>Başla</button>`;b.onclick=()=>{step++;draw();};}
else if(s.e){c.innerHTML='<h1>Günaydın Patroniçem ☀️</h1><p>Sana bugün farklı bir şekilde "Günaydın" demek istedim.</p><p><b>Umarım günün çok güzel geçer ❤️</b></p><div class="heart">❤️</div>';}
else{c.innerHTML=`<h2>Soru ${step}</h2><p>${s.q}</p>${boxes(s.a[0].length)}<input id=i><br><br><button id=k>Kontrol Et</button>`;
k.onclick=()=>{let v=i.value.trim().toLowerCase();if(s.a.includes(v)){c.innerHTML+=`<div class="modal">${s.m}<br><br><button id=n>Devam</button></div>`;n.onclick=()=>{step++;draw();};}else{i.animate([{transform:'translateX(-4px)'},{transform:'translateX(4px)'},{transform:'translateX(0)'}],{duration:180});}}}}
draw();r();
