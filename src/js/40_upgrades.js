/*== MODULE 40_upgrades | owner:A | UPG: nang cap khi len cap ==*/
const UPG=[
{n:'Sức mạnh',d:'+25% sát thương',f:()=>G.dmg*=1.25},
{n:'Tốc độ đánh',d:'+18% tốc độ tấn công',f:()=>G.rate*=1.18},
{n:'Thêm đòn đánh',d:'Vũ khí hoặc phép thuật mạnh thêm một bậc',f:()=>G.cnt++,ok:()=>G.cnt<5},
{n:'Phạm vi',d:'+20% vùng ảnh hưởng',f:()=>G.area*=1.2},
{n:'Nhanh chân',d:'+10% tốc độ di chuyển',f:()=>G.spd*=1.1},
{n:'Tăng máu',d:'+25 máu tối đa, hồi 30 máu',f:()=>{G.max+=25;G.hp=Math.min(G.max,G.hp+30)}},
{n:'Hồi phục',d:'+0.6 máu mỗi giây',f:()=>G.reg+=.6},
{n:'Nam châm',d:'+40% tầm hút kinh nghiệm',f:()=>G.mag*=1.4},
{n:'Chí mạng',d:'+10% tỉ lệ đòn chí mạng (gấp đôi sát thương)',f:()=>G.crit+=.1,ok:()=>G.crit<.5},
{n:'Giáp sắt',d:'Giảm 10% sát thương nhận vào',f:()=>G.arm+=.1,ok:()=>G.arm<.5},
{n:'Hút máu',d:'Hồi máu theo sát thương gây ra',f:()=>G.ls+=.01,ok:()=>G.ls<.05},
{n:'Thông thái',d:'+25% kinh nghiệm nhận được',f:()=>G.xg*=1.25},
{n:'Thiền định',d:'Kỹ năng riêng hồi nhanh hơn 12%',f:()=>G.cdr*=.88,ok:()=>G.cdr>.45},
{n:'Xuyên thấu',d:'Đạn bay xuyên thêm 1 kẻ địch',f:()=>G.pr++,ok:()=>G.pr<3&&['cung','tho','sach','dao'].includes(ch.w)},
{n:'Bất khuất',d:'Hồi sinh một lần với 50% máu',f:()=>G.rev++,ok:()=>G.rev<2},
{n:'Gai nhọn',d:'Phản thêm 5 sát thương cho kẻ địch chạm vào bạn',f:()=>G.th+=5,ok:()=>G.th<30}];
