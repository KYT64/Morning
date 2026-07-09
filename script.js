
const data=[
{w:true,t:"Sana özel hazırlanmış bulmacaya hoşgeldin Patroniçem :)"},
{q:"Bir çalışan haftanın kaç günü çalışmalıdır.",a:["yedi","7"],m:"El Insaf :D"},
{q:"En muhteşem partnerler hangi ulaşım aracını kullanmayı severler?",a:["motosiklet","motosikleti"],m:"Harikasın, kaskını hazırla birlikte yola çıkacağız"},
{q:"Yetişkin bir Yiğit, hangi yolu seçmeyi sever?",a:["zor"],m:"Bak Birbirimizi cok iyi tanıyoruz :D"},
{e:true}
];
let s=0,app=document.getElementById("app");
const boxes=n=>'<div class="boxes">'+Array.from({length:n},()=>'<div class="box"></div>').join("")+'</div>';
function draw(){
 let d=data[s];
 if(d.w){
   app.innerHTML=`<h1>${d.t}</h1><button id="b">Başla</button>`;
   b.onclick=()=>{s++;draw();}
 }else if(d.e){
   app.innerHTML=`<h1>Günaydın Patroniçem ☀️</h1>
   <p>Sana bugün farklı bir şekilde "Günaydın" demek istedim.</p>
   <p><strong>Umarım günün çok güzel geçer❤️</strong></p>
   <div class="heart">❤️</div>`;
 }else{
   app.innerHTML=`<h2>Soru ${s}</h2><p>${d.q}</p>${boxes(d.a[0].length)}
   <input id="ans"><br><br><button id="ok">Kontrol Et</button>`;
   ok.onclick=()=>{
      const v=ans.value.trim().toLowerCase();
      if(d.a.includes(v)){
        app.innerHTML+=`<div class="msg">${d.m}<br><br><button id="n">Devam</button></div>`;
        n.onclick=()=>{s++;draw();}
      }else{
        ans.animate([{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(0)'}],{duration:220});
      }
   }
 }
}
draw();
