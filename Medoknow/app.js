if (window.VANTA) {

    VANTA.WAVES({
        el: "#nav",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 300.00,
        minWidth: 200.00,
        scale: 1.00,
  scaleMobile: 1.00,
  color: 0x268a98,
  shininess: 150.00,
  waveHeight: 22.00,
  waveSpeed: 1.45
      })
}
const but=document.querySelector("#iconse");
const loader=document.querySelector("#loader");
const medn=document.querySelector("#medname");
const search=document.querySelector("#search input");
const brand=document.querySelector("#brand p");
const composition=document.querySelector("#compo p");
const use=document.querySelector("#uses p");
const precrip=document.querySelector("#prec p");
const side=document.querySelector("#sidee p");
const brandh=document.querySelector("#brand h1");
const compositionh=document.querySelector("#compo h1");
const useh=document.querySelector("#uses h1");
const precriph=document.querySelector("#prec h1");
const sideh=document.querySelector("#sidee h1");
const nomat=document.querySelector("#NOMATCH");
const despp=document.querySelector("#desp")
but.addEventListener("click",()=>{
  loader.style.display="inline";
  medn.style.display="none"
  despp.style.display="none";
    setTimeout(()=>{
      loader.style.display="none";
      let name=search.value;
      name=name.toUpperCase();
    const medi=medName[name];
    medn.innerText=`${name}`;
    medn.style.display="inline"
    despp.style.display="inline";
    if(medi==undefined)
    {
      
     nomat.innerText="NO MATCH!!!";
     brandh.innerText="";
       compositionh.innerText="";
       useh.innerText="";
       precriph.innerText="";
       sideh.innerText="";
       brand.innerText="";
       composition.innerText="";
       use.innerText="";
       precrip.innerText="";
       side.innerText="";

    }
    else
    {
       brand.innerText=medi["brand"];
       nomat.innerText="";
       composition.innerText=medi["composition"];
       use.innerText=medi["uses"];
       precrip.innerText=medi["precautions"];
       side.innerText=medi["sideEffects"];
       brandh.innerText="BRAND";
       compositionh.innerText="COMPOSITION";
       useh.innerText="USES";
       precriph.innerText="PRECAUTIONS";
       sideh.innerText="SIDE EFFECTS";

    }  



    },3000 );
   
});