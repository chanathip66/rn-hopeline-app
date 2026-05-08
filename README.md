# ✍️ Hopeline — Your Writing Solutions

แอปพลิเคชันมือถือ (React Native + Expo) สำหรับหน้า **Authentication** ของแพลตฟอร์ม *Hopeline* ซึ่งประกอบด้วยหน้า Splash, Sign In และ Sign Up พร้อมรองรับการลงชื่อเข้าใช้ผ่าน Social (Google / Facebook / X)

> 🎓 Submitted by **Chanathip Chueycherm (6852D10005)**

---

## 📱 หน้าจอของแอป (Screenshots)

| Splash | Sign In | Sign Up |
|:---:|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/ea9e30e1-4678-4381-b0fe-57ea78e27af0" width="220" /> | <img src="https://github.com/user-attachments/assets/a1d2616a-af14-430f-9258-5091d9d6c8ec" width="220" /> | <img src="https://github.com/user-attachments/assets/1ba85127-c733-4b0d-a958-4722204e084f" width="220" /> |

### 🎬 Demo Video

https://github.com/user-attachments/assets/02270911-d228-4227-a33a-22a34dff36d7

---

## ✨ Features

- 🎨 **Splash Screen** — โลโก้แบรนด์ Hopeline พร้อม animation เปลี่ยนหน้าอัตโนมัติไปยัง Sign In หลัง 1.8 วินาที
- 🔐 **Sign In** — ฟอร์มสำหรับ Email / Password พร้อมลิงก์ *Forget Password*
- 📝 **Sign Up** — ฟอร์มสมัครสมาชิก (Email / Password / Confirm Password)
- 🌐 **Social Login UI** — รองรับปุ่ม Google, Facebook, และ X
- 🧭 **File-based Routing** ด้วย `expo-router` (Stack navigation + slide animation)
- 📱 รองรับทั้ง **iOS**, **Android**, และ **Web**
- ⚡ ใช้ **React Native New Architecture** + **React Compiler** (experimental)

---

## 🛠️ Tech Stack

| หมวด | เทคโนโลยี |
|---|---|
| Framework | [Expo](https://expo.dev) `~54.0.33` |
| UI | React Native `0.81.5`, React `19.1.0` |
| Navigation | [expo-router](https://docs.expo.dev/router/introduction/) `~6.0.23` |
| Language | TypeScript `~5.9.2` |
| Icons | `@expo/vector-icons` (FontAwesome5) |
| Others | `react-native-reanimated`, `react-native-gesture-handler`, `react-native-safe-area-context` |

---

## 📁 โครงสร้างโปรเจกต์

```
rn-hopeline-app/
├── app/                      # หน้าจอของแอป (expo-router file-based routing)
│   ├── _layout.tsx           # Root Stack Layout
│   ├── index.tsx             # Splash Screen
│   ├── signin.tsx            # หน้า Sign In
│   └── signup.tsx            # หน้า Sign Up
├── components/
│   └── Logo.tsx              # โลโก้ Hopeline (ใช้ซ้ำทุกหน้า)
├── assets/
│   ├── icon/                 # Social icons (google / facebook / x)
│   └── images/               # App icons, splash, favicon
├── app.json                  # Expo config
├── package.json
└── tsconfig.json
```

---

## 🚀 การติดตั้งและใช้งาน

### 1. ติดตั้ง dependencies

```bash
npm install
```

### 2. รันแอป

```bash
npx expo start
```

จากนั้นเลือกเปิดผ่าน:

- 📱 **Expo Go** — สแกน QR code บนมือถือ
- 🤖 **Android Emulator** — กด `a`
- 🍎 **iOS Simulator** — กด `i`
- 🌐 **Web Browser** — กด `w`

### 3. สคริปต์อื่น ๆ

```bash
npm run android   # เปิดบน Android
npm run ios       # เปิดบน iOS
npm run web       # เปิดบนเว็บเบราว์เซอร์
npm run lint      # ตรวจสอบ code style
```

---

## 🎨 Brand Color

```ts
BRAND_COLOR = "#3D0A4E"   // Deep Purple
```

---

## 👤 ผู้พัฒนา

**Chanathip Chueycherm**
รหัสนักศึกษา: `6852D10005`

🔗 GitHub: [@chanathip66](https://github.com/chanathip66)

---

## 📄 License

โปรเจกต์นี้จัดทำขึ้นเพื่อการศึกษาเท่านั้น (Academic / Educational use)
