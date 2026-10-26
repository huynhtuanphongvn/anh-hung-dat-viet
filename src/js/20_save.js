/*== MODULE 20_save | owner:A | SV (luu coin/ve/tuong), save, owned ==*/
let SV={coin:0,tk:3,own:['khien','yk','dt','lvh'],up:{},pt:0,lg:0};
try{const s=JSON.parse(localStorage.getItem('av_save'));if(s)SV=Object.assign(SV,s)}catch(e){}
const save=()=>{try{localStorage.setItem('av_save',JSON.stringify(SV))}catch(e){}};
const owned=()=>CH.filter(c=>SV.own.includes(c.id));
