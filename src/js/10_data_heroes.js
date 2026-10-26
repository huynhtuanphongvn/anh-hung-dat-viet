/*== MODULE 10_data_heroes | owner:B | Du lieu tuong: CH, RO, WP, NEW, thang do hiem ==*/
const CH=[
{id:'kiem',n:'Trần Hưng Đạo',t:'Quốc công tiết chế',sn:'Hịch tướng sĩ',sd:'Mỗi 10 giây, tăng 40% tốc độ bắn trong 4 giây.',cd2:10,e:'Lửa',ic:'🔥',col:'#ff6b3d',d:'Cầu lửa phát nổ lan sang kẻ địch xung quanh.',hp:100,sp:150},
{id:'cung',n:'Lý Thường Kiệt',t:'Phòng tuyến Như Nguyệt',sn:'Nam quốc sơn hà',sd:'Mỗi 9 giây, sóng xung kích lớn gây sát thương và đẩy lùi quân địch.',cd2:9,e:'Nước',ic:'💧',col:'#38a3ff',d:'Giọt nước xoay quanh người, đẩy lùi kẻ địch.',hp:120,sp:145},
{id:'chuy',n:'Quang Trung',t:'Hoàng đế Nguyễn Huệ',sn:'Thần tốc',sd:'Mỗi 8 giây, 2 giây chạy nhanh hơn 80%, bất tử và gây sát thương khi chạm địch.',cd2:8,e:'Điện',ic:'⚡',col:'#ffd23f',d:'Tia sét nảy qua nhiều kẻ địch liên tiếp.',hp:90,sp:165},
{id:'dao',n:'Bà Triệu',t:'Nhụy Kiều tướng quân',sn:'Voi chiến',sd:'Mỗi 11 giây, hồi 15% máu và bắn vòng đao khí ra xung quanh.',cd2:11,e:'Cỏ',ic:'🍃',col:'#4cc86a',d:'Phi tiêu lá xuyên thủng, tự hồi máu.',hp:110,sp:150},
{id:'tho',n:'Nguyễn Trãi',t:'Nhà thơ · Nhà văn',sn:'Bình Ngô đại cáo',sd:'Mỗi 10 giây, áng văn chấn động đẩy lùi và gây sát thương mọi kẻ địch xung quanh.',cd2:10,col:'#c9a2ff',hp:90,sp:150},
{id:'sach',n:'Lê Quý Đôn',t:'Bảng nhãn · Nhà bác học',sn:'Thiên văn',sd:'Mỗi 11 giây, 6 thiên thạch giáng xuống kẻ địch.',cd2:11,col:'#5fd0c8',hp:95,sp:150},
{id:'khien',n:'Lê Lai',t:'Công thần Lam Sơn',sn:'Liều mình cứu chúa',sd:'Mỗi 18 giây, bất tử 1,5 giây, hồi 15% máu và hất lùi kẻ địch.',cd2:18,col:'#9fb2c8',hp:190,sp:135},
{id:'no',n:'An Dương Vương',t:'Vua Âu Lạc · Nỏ thần',sn:'Nỏ thần Kim Quy',sd:'Mỗi 12 giây, bắn vòng 16 mũi tên thần xuyên thấu.',cd2:12,col:'#e0b04a',hp:80,sp:145}];
const IC={kiem:'⚔️',dao:'🗡️',chuy:'🔨',cung:'🏹',tho:'🖋️',sach:'📚'},DD={kiem:'Kiếm: chém hình cung quét kẻ địch phía trước.',dao:'Đao: xoay chém mọi kẻ địch áp sát.',chuy:'Chùy: giáng xuống vùng đất, gây sát thương diện rộng.',cung:'Cung: bắn tên xuyên thủng từ xa.',tho:'Phép thơ văn: mực tàu tầm nhiệt, vần thơ tỏa vòng, sấm văn nảy.',sach:'Phép bác học: sao băng, tia sáng xuyên thấu, làm chậm kẻ địch.'};
const RO={
kiem:{ro:'Chỉ huy · Cân bằng',hp:110,sp:150,arm:.1,dm:1.1},
dao:{ro:'Đấu sĩ · Vật lý cận chiến',hp:130,sp:150,crit:.08},
chuy:{ro:'Đột kích · Vật lý',hp:105,sp:175,crit:.15,dm:1.05},
cung:{ro:'Xạ thủ · Vật lý tầm xa',hp:85,sp:150,dm:1.2},
khien:{ro:'Đỡ đòn · Tanker',hp:130,sp:135,arm:.12,th:5,dm:.9,ic:'🛡️',d:'Khiên: giáng khiên đẩy lùi mọi kẻ địch áp sát, phản đòn khi bị chạm.'},
no:{ro:'Xạ thủ · Bùng nổ',hp:80,sp:145,dm:1.25,crit:.1,ic:'🎯',d:'Nỏ liên châu: bắn loạt tên xuyên thấu cực mạnh.'},
tho:{ro:'Pháp sư · Sát thương phép',hp:80,sp:150,dm:1.15,ar:1.15},
sach:{ro:'Pháp sư · Kiểm soát',hp:95,sp:150,xg:1.25,mg:1.5}};
CH.forEach(c=>{c.ic=IC[c.id];c.d=DD[c.id];Object.assign(c,RO[c.id])});
const RT=[{n:'Bình thường',c:'#9aa5b1'},{n:'Nổi tiếng',c:'#4aa3ff'},{n:'Danh tiếng',c:'#b06cff'},{n:'Huyền thoại',c:'#ffb21e'}],RT0={kiem:3,chuy:3,dao:2,cung:2,tho:2,sach:1,no:1,khien:0};
const WP={kiem:{sn:'Quân lệnh',sd:'Mỗi 10 giây, +40% tốc độ đánh trong 4 giây.',cd2:10},dao:{sn:'Hồi khí',sd:'Mỗi 11 giây, hồi 15% máu và bắn vòng đao khí.',cd2:11},chuy:{sn:'Thần tốc',sd:'Mỗi 8 giây, 2 giây chạy nhanh, bất tử, gây sát thương khi chạm.',cd2:8},cung:{sn:'Sóng xung kích',sd:'Mỗi 9 giây, sóng xung kích đẩy lùi quân địch.',cd2:9},khien:{sn:'Liều mình',sd:'Mỗi 18 giây, bất tử 1,5 giây, hồi 15% máu và hất lùi.',cd2:18},no:{sn:'Loạt tên thần',sd:'Mỗi 12 giây, bắn vòng 16 mũi tên xuyên thấu.',cd2:12},tho:{sn:'Áng văn chấn động',sd:'Mỗi 10 giây, đẩy lùi và gây sát thương kẻ địch xung quanh.',cd2:10},sach:{sn:'Thiên văn',sd:'Mỗi 11 giây, 6 thiên thạch giáng xuống.',cd2:11}};
const NEW=[
{id:'yk',n:'Yết Kiêu',t:'Tướng thủy chiến nhà Trần',w:'dao',rt:0,ic:'🤿',col:'#4aa3a3',ro:'Đấu sĩ · Vật lý',hp:115,sp:155},
{id:'dt',n:'Dã Tượng',t:'Gia tướng nhà Trần',w:'cung',rt:0,ic:'🐘',col:'#b8956a',ro:'Xạ thủ · Vật lý',hp:95,sp:150,dm:1.1},
{id:'lvh',n:'Lê Văn Hưu',t:'Sử gia',w:'sach',rt:0,ic:'📖',col:'#8fa8d8',ro:'Pháp sư · Hỗ trợ',hp:85,sp:150,xg:1.15},
{id:'pnl',n:'Phạm Ngũ Lão',t:'Danh tướng nhà Trần',w:'chuy',rt:1,ic:'🔨',col:'#d4764a',ro:'Đột kích · Vật lý',hp:125,sp:165,crit:.1,dm:1.1},
{id:'cva',n:'Chu Văn An',t:'Nhà giáo · Thầy của muôn đời',w:'tho',rt:1,ic:'🎓',col:'#c9a2ff',ro:'Pháp sư · Sát thương phép',hp:85,sp:150,dm:1.2,ar:1.1},
{id:'tqt',n:'Trần Quốc Toản',t:'Thiếu niên anh hùng',w:'kiem',rt:1,ic:'🚩',col:'#ff7a7a',ro:'Chỉ huy · Cân bằng',hp:105,sp:170,crit:.12,dm:1.15},
{id:'nq',n:'Ngô Quyền',t:'Vua · Chiến thắng Bạch Đằng',w:'khien',rt:2,ic:'⚓',col:'#5aa0d8',ro:'Đỡ đòn · Tanker',hp:185,sp:140,arm:.2,th:7},
{id:'tt',n:'Trưng Trắc',t:'Nữ vương · Hai Bà Trưng',w:'kiem',rt:2,ic:'👑',col:'#ff9ac2',ro:'Chỉ huy · Vật lý',hp:125,sp:155,arm:.1,crit:.12,dm:1.2},
{id:'ll',n:'Lê Lợi',t:'Bình Định Vương · Vua Lê',w:'kiem',rt:3,ic:'🐢',col:'#48d19a',ro:'Chỉ huy · Toàn diện',hp:150,sp:160,arm:.15,crit:.12,dm:1.3,xg:1.15},
{id:'tg',n:'Thánh Gióng',t:'Phù Đổng Thiên Vương',w:'chuy',rt:3,ic:'🐎',col:'#ffb21e',ro:'Đột kích · Sức mạnh thần',hp:140,sp:175,arm:.12,crit:.15,dm:1.4},
{id:'ndc',n:'Nguyễn Đình Chiểu',t:'Nhà thơ yêu nước · Đồ Chiểu',w:'tho',rt:3,ic:'✒️',col:'#7fa8ff',ro:'Pháp sư · Thi sĩ yêu nước',hp:95,sp:150,dm:1.35,ar:1.2,crit:.1,xg:1.2},
{id:'td',n:'Trương Định',t:'Bình Tây Đại nguyên soái',w:'dao',rt:3,ic:'🏴',col:'#e0603a',ro:'Đấu sĩ · Du kích',hp:135,sp:165,arm:.1,crit:.12,dm:1.3}];
CH.push(...NEW);
CH.forEach(c=>{c.w=c.w||c.id;const w=WP[c.w];c.rt=c.rt??RT0[c.id];c.sn=c.sn||w.sn;c.sd=c.sd||w.sd;c.cd2=c.cd2||w.cd2;c.d=c.d||DD[c.w]||RO[c.w].d});
CH.forEach(c=>{const r=c.rt;c.hp=Math.round(c.hp*[1,1.3,1.65,2.1][r]);c.dm=+((c.dm||1)*[1,1.08,1.18,1.32][r]).toFixed(2);c.sp=Math.round(c.sp*[1,1.03,1.06,1.1][r]);c.arm=+((c.arm||0)+[0,.02,.04,.08][r]).toFixed(3);c.crit=+((c.crit||0)+[0,.02,.05,.08][r]).toFixed(3);c.xg=+((c.xg||1)*[1,1.05,1.1,1.15][r]).toFixed(2)});
