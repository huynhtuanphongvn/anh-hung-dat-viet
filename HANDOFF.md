# HANDOFF — "Anh Hùng Đất Việt" (v0.9)

> Dành cho Claude (bất kỳ tài khoản nào) làm việc cùng dự án. Đọc hết file này TRƯỚC khi làm. Người dùng là cầu nối giữa các tài khoản; Claude không nhớ gì giữa các cuộc trò chuyện. Giao tiếp bằng tiếng Việt, ngắn gọn, ưu tiên tiết kiệm hạn mức.

## 1. Dự án
Game sinh tồn kiểu Vampire Survivors chạy trên trình duyệt, chủ đề danh tướng Việt Nam. Một file HTML tự chứa (không ảnh ngoài, không thư viện ngoài). Chơi chủ yếu trên **máy tính**; mục tiêu: phát hành trên website (**GitHub Pages**, dùng `index.html`). Game 3D sau này là dự án hoàn toàn riêng, repo riêng, không dùng chung code.

## 2. Hệ thống đã có
- 20 tướng, 4 cấp: Bình thường(0) / Nổi tiếng(1) / Danh tiếng(2) / Huyền thoại(3). Chỉ số gốc nhân theo cấp (hp ×1/1.3/1.65/2.1, sát thương ×1/1.08/1.18/1.32...). Tướng khởi đầu: khien, yk, dt, lvh.
- 8 loại vũ khí (`w`): kiem, dao, chuy, cung, khien, no, tho (phép thơ văn), sach (phép bác học). Mỗi tướng có kỹ năng riêng theo `w`.
- Chiến đấu: tự đánh; Tiến hóa vũ khí (echo ở cấp vũ khí ≥2, mỗi đòn thứ 5 là "tất sát"); crit; vật lý/phép (kháng khác nhau); 5 loại quái + trùm + đàn + tinh anh; bản đồ có sông/cầu; juice (rung màn hình, hit-stop, số sát thương, hạt, âm thanh, phím M tắt tiếng).
- Meta: coin rơi khi chơi → nâng 4 chỉ số gốc/tướng; vé (1 vé/2 phút sống sót + 1/trùm) → quay vé (có bảo đảm: 10 lượt ≥ Danh tiếng, 40 lượt Huyền thoại; tướng trùng đổi coin); kho tướng + hồ sơ (chân dung SVG tranh khắc, tiểu sử).
- Lưu tiến trình: `localStorage` khóa `av_save` (SV: coin, tk, own, up, pt, lg) và `es_best`. **Không đổi cấu trúc SV nếu chưa báo — sẽ mất tiến trình người chơi.**

## 3. Cấu trúc repo
```
index.html            ← file chạy được (SINH RA bởi build.py, không sửa tay)
build.py              ← python3 build.py : ghép src/js/*.js vào template → index.html
src/index.template.html   (HTML + CSS)
src/js/NN_ten.js      ← module, ghép theo thứ tự tên file
tools/smoke_test.js   ← node tools/smoke_test.js tools/game.js  (phải in ALL_OK 20)
CHANGELOG.md
```
Module (owner gợi ý: A = lõi game, B = nội dung):
| File | Nội dung | Owner |
|---|---|---|
| 10_data_heroes | CH (tướng gốc), RO, WP (kỹ năng theo vũ khí), NEW (tướng mới), thang cấp | B |
| 12_data_bio_sketch | SK (mũ/râu/giáp cho tranh), BIO2 (tiểu sử) | B |
| 30_art, 86_sprites | vẽ chân dung `art()`, nhân vật/quái trong game `hero()`, `foe()` | B |
| 20_save, 35_ui_screens, 40_upgrades | lưu, màn hình UI, nâng cấp khi lên cấp | A |
| 50_state_input, 60_combat_core, 65_fx_sound, 70_weapons_skills, 80_update, 85_render, 90_main | lõi chiến đấu, vòng lặp, vẽ | A |
| src/index.template.html | HTML/CSS (giao diện menu) | A |

## 4. Quy tắc làm việc (tránh xung đột)
1. **Nguồn gốc duy nhất** = repo GitHub. Chỉ **một người hợp nhất** (người dùng, hoặc tài khoản A) cập nhật repo.
2. Mỗi Claude chỉ sửa module thuộc phần mình phụ trách. Cần sửa module của bên kia → ghi yêu cầu cho người dùng chuyển.
3. **Chỉ trả lại file module đã đổi (nguyên file, hoặc đoạn sửa chính xác)**. Không viết lại cả game, không dán lại file không đổi.
4. Trước khi bàn giao: chạy `python3 build.py && node --check tools/game.js && node tools/smoke_test.js tools/game.js` (nếu có công cụ chạy mã); báo kết quả.
5. Mỗi thay đổi thêm 1 dòng vào `CHANGELOG.md` (ngày, module, nội dung); tăng số phiên bản ở đầu file này.
6. Quy ước dữ liệu tướng (trong `NEW`): `{id,n,t,w,rt,ic,col,ro,hp,sp,[arm,crit,dm,xg,ar,th]}`; thêm tướng ⇒ cũng thêm `SK[id]=[mũ0-5,râu0-2,giáp0/1]` và `BIO2[id]` (4–5 câu, đúng sử liệu, ghi rõ là truyền thuyết nếu vậy). Không đổi `id` đã có (nằm trong dữ liệu lưu).
7. Môi trường chạy: file đơn, **không ảnh ngoài / thư viện ngoài**; chỉ Google Fonts (Baloo 2, Noto Serif). Mã dạng nén (nhiều lệnh trên một dòng) — giữ phong cách, đừng định dạng lại.
8. Tiết kiệm hạn mức: đưa Claude chỉ module cần thiết + mục 4–6 của file này; trả lời ngắn; không giải thích lại những gì đã có.

## 5. Việc đang chờ (gợi ý, người dùng quyết định thứ tự)
- Thêm tướng: Nguyễn Trung Trực, Phan Đình Phùng, Hoàng Hoa Thám (chờ người dùng chọn cấp/vai trò).
- Cân bằng độ khó theo phản hồi (0–3 phút; sau phút 10).
- Hiệu ứng khi quay vé ra Huyền thoại; thêm bản đồ thứ hai; vật phẩm rơi (hồi máu/nam châm/bom).
- Hình ảnh tướng: hiện là SVG vẽ bằng mã; nếu người dùng cung cấp ảnh/tranh, nhúng bằng data URI.
- Triển khai GitHub Pages; (tùy chọn) lưu tiến trình lên mạng cần backend riêng.
