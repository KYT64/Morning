
const data=[
{welcome:true,title:"Sana özel hazırlanmış bulmacaya hoşgeldin Patroniçem :)"},
{q:"Bir çalışan haftanın kaç günü çalışmalıdır.",answers:["yedi","7"],popup:"El Insaf :D"},
{q:"En muhteşem partnerler hangi ulaşım aracını kullanmayı severler?",answers:["motosiklet","motosikleti"],popup:"Harikasın, kaskını hazırla birlikte yola çıkacağız"},
{q:"Yetişkin bir Yiğit, hangi yolu seçmeyi sever?",answers:["zor"],popup:"Bak Birbirimizi cok iyi tanıyoruz :D"},
{end:true}
];
let step=0;const app=document.getElementById("app");
function boxes(n){let h='<div class="boxes">';for(let i=0;i<n;i++)h+='<div class="box"></div>';return h+'</div>';}
function render(){
 const s=data[step];
 if(s.welcome){
  app.innerHTML=`<h1>${s.title}</h1><p>Hazırsan başlayalım 😊</p><button id="b">Başla</button>`;
  b.onclick=()=>{step++;render();}
 }else if(s.end){
  app.innerHTML=`<h1>Günaydın Patroniçem ☀️</h1>
  <p>Sana bugün farklı bir şekilde "Günaydın" demek istedim.</p>
  <p><strong>Umarım günün çok güzel geçer❤️</strong></p>
  <div class="heart">❤️</div>`;
 }else{
  app.innerHTML=`<h2>Soru ${step}</h2><p>${s.q}</p>${boxes(s.answers[0].length)}
  <input id="ans" placeholder="Cevabını yaz"><br><br><button id="ok">Kontrol Et</button>`;
  ok.onclick=()=>{
    const v=ans.value.trim().toLowerCase();
    if(s.answers.includes(v)){
      app.innerHTML+=`<div class="msg">${s.popup}<br><br><button id="next">Devam</button></div>`;
      next.onclick=()=>{step++;render();}
    }else{
      ans.animate([{transform:"translateX(-5px)"},{transform:"translateX(5px)"},{transform:"translateX(0)"}],{duration:220});
    }
  }
 }
}
render();
