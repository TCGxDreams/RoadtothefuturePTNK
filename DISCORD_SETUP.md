# 🎯 Hướng Dẫn Tích Hợp Discord Cho Tính Năng "Chia Sẻ Ký Ức"

## Cách Tạo Discord Webhook

1. **Mở Discord Server**
   - Chọn server bạn muốn nhận stories
   - Click vào tên server → Server Settings

2. **Tạo Webhook**
   - Vào Integrations → Webhooks
   - Click "New Webhook"
   - Đặt tên (VD: "Legacy Stories")
   - Chọn channel (VD: #stories hoặc #testimonials)
   - Click "Copy Webhook URL"

3. **Cấu Hình**
   - Mở file `.env` trong project
   - Paste URL vào: `VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...`
   - Save file
   - Restart dev server: `npm run dev`

## Ví Dụ .env

```env
VITE_API_KEY=your_gemini_key_here
VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz
```

## Test Tính Năng

1. Vào trang "Tương Lai" (Future Page)
2. Kéo xuống form "Chia Sẻ Ký Ức"
3. Điền thông tin test:
   - Tên: "Nguyễn Văn A"
   - Năm: "1968"
   - Mặt trận: "Đường Trường Sơn"
   - Câu chuyện: "Test message từ website"
4. Click "Gửi Vào Thư Viện Di Sản"
5. Kiểm tra Discord channel

## Lưu Ý Bảo Mật

⚠️ **QUAN TRỌNG**: Không commit file `.env` lên Git!
- File `.env` đã được thêm vào `.gitignore`
- Chỉ share webhook URL với team members
- Nếu URL bị lộ, regenerate webhook trong Discord settings

## Tính Năng Dự Phòng

Nếu không setup Discord webhook:
- Stories vẫn được lưu vào localStorage
- Counter vẫn tăng
- User vẫn thấy thông báo thành công
- Sau này có thể export data từ localStorage

📝 **Created**: 2025-12-04
