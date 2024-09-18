# PUREFOREX

PUREFOREX เป็นแอปพลิเคชันเว็บที่แสดงกราฟ Forex แบบ Realtime และวิเคราะห์แนวโน้มโดยใช้ AI

## การติดตั้ง

1. โคลนโปรเจกต์:
   ```
   git clone https://github.com/your-username/pureforex.git
   cd pureforex
   ```

2. ติดตั้ง dependencies:
   ```
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. สร้างไฟล์ `.env` ในโฟลเดอร์ `backend` และเพิ่ม API key:
   ```
   ALPHA_VANTAGE_API_KEY=your_api_key_here
   ```

## การรัน

1. รัน backend:
   ```
   cd backend && npm start
   ```

2. ในอีก terminal หนึ่ง, รัน frontend:
   ```
   cd frontend && npm start
   ```

3. เปิดเบราว์เซอร์และไปที่ `http://localhost:3000`

## การทดสอบ

รันการทดสอบ backend:
```
cd backend && npm test
```

## การพัฒนาต่อ

- เพิ่มการวิเคราะห์แนวโน้มโดยใช้ AI
- เพิ่มระบบการซื้อขาย
- ปรับปรุง UI/UX