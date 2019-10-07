# Webpack Simple Demo

ตัวอย่างการตั้งค่า Webpack สำหรับโปรเจค Web Development แบบง่ายๆ โดยแยกการตั้งค่าเป็นสองชุด

production เมื่อทำการ build จะได้ตัวไฟล์พร้อมใช้งานที่ ./dist/index.js
development จะตั้งค่าเพื่อใช้กับ Webpack Dev Server เป็นหลัก จะไม่มีการ output ไฟล์ใดๆ แต่อย่างใด

## วิธีใช้งาน

1. Clone Repository 

```
git clone https://github.com/wteja/webpack-demo.git
```

2. Install Dependencies

```
npm install
```

3. Start Development Server

```
npm run serve
```

4. หรือ Build Bundle

```
npm run build
```

## Dependecies

| Name                  | Description                                                                                                                     |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Webpack               | เอาไว้แพ็ครวมไฟล์จาว่าสคริปและไฟล์อื่นๆ                                                                                                 |
| webpack-cli           | เอาใว้ให้รันคำสั่ง webpack บน command line                                                                                           |
| css-loader            | ปลั้กอิน webpack ทำให้ไฟล์ JavaScript สามารถ import css ได้                                                                           |
| style-loader          | ปลั้กอิน webpack สำหรับแทรก <style> แล้วเอาสไตล์ทั้งหมดในแอป มากองรวมกันในไฟล์ html                                                       |
| file-loader           | ปลั้กอิน webpack ทำให้ import พวกไฟล์อื่นๆได้ เช่น รูปภาพ                                                                                 |
| html-webpack-template | ปลั้กอิน webpack ทำให้ใช้ html template ได้ เช่นเราทำไฟล์ html ต้นแบบมา แล้วเดี๋ยวมันจะแทรก JavaScript ที่มันรวมเป็นไฟล์เดียวแล้วให้ก่อนปิดแท็ก </body> |
| clean-webpack-plugin  | ลบทุกอย่างในโฟลเดอร์ output ก่อนทำการ build                                                                                         |
| webpack-dev-server    | ใช้สำหรับตอนพัฒนา มันจะมีเว็บเซิฟเวอร์มาให้ เมื่อทำการแก้ไขแล้วเซฟไฟล์จะรีเฟรชให้                                                               |