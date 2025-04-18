# 🚰 SantexQidir

**SantexQidir** — foydalanuvchilarga o‘z hududidagi ishonchli va tajribali santexniklarni tez va oson topish imkonini beruvchi veb platforma.

---

## 🎯 Loyihaning Maqsadi

- Foydalanuvchilarga yaqin atrofdagi ishonchli santexniklarni onlayn tarzda topish imkonini yaratish  
- Santexniklarga o‘z xizmatlarini targ‘ib qilish va yangi mijozlar topishda yordam berish  
- Tezkor va qulay buyurtma berish tizimini shakllantirish  
- Mijozlar va santexniklar o‘rtasida samarali va shaffof aloqa tizimini yo‘lga qo‘yish

---

## 🔧 Foydalanilgan Texnologiyalar

- **Backend:** Node.js, Express.js  
- **Frontend:** HTML, CSS, JavaScript  
- **Ma’lumotlar bazasi:** MongoDB  
- **Autentifikatsiya:** JWT (JSON Web Token)  
- **Xavfsizlik:** Parol hashing, input validation, email verifikatsiyasi  
- **Geo-xizmatlar:** Lokatsiya asosida qidiruv + Region modeli orqali hududlar bo‘yicha saralash

---

## 👥 Rollar

### 🧑‍💼 Mijoz (Customer)
- Ro‘yxatdan o‘tish va tizimga kirish  
- Hudud bo‘yicha santexniklarni izlash  
- Santexnik profilini ko‘rish va xizmatga buyurtma berish

### 🛠️ Santexnik (Service Provider)
- Ro‘yxatdan o‘tish va xizmatlar qo‘shish  
- Kelgan buyurtmalarni ko‘rish va boshqarish  
- Profil orqali xizmatlar va lokatsiyani tahrirlash

### 🧑‍💻 Administrator (Admin)
- Barcha foydalanuvchilarni nazorat qilish  
- Hududlar (`Region`) va xizmat turlarini boshqarish  
- Foydalanuvchilar faoliyatini kuzatish

---

## 📍 Hudud Bo‘yicha Saralash

- Har bir foydalanuvchiga `Region` modeli orqali hudud biriktiriladi  
- Admin panel orqali hududlarni qo‘shish, o‘chirish va tahrirlash mumkin  
- Foydalanuvchi hudud tanlagach, o‘sha regiondagi santexniklar ko‘rsatiladi  
- Geo-coordinates (lokatsiya) bilan birga ishlaydi

---

## 📁 Ma’lumotlar Bazasi Modellari

### 1. `User`
- `id`  
- `name`  
- `email`  
- `password`  
- `phoneNumber`  
- `role` (customer | provider | admin)  
- `region` – `ObjectId` (Region modelga bog‘langan)  
- `location`: `{ type: 'Point', coordinates: [lng, lat], address }`  
- `createdAt`, `updatedAt`

---

### 2. `Region`
- `id`  
- `name` – (masalan: "Toshkent", "Samarqand", va h.k.)  
- `description`  
- `createdAt`

---

### 3. `Service`
- `id`  
- `name`  
- `description`  
- `price`  
- `providerId` (User modelga bog‘langan)  
- `createdAt`

---

### 4. `Order`
- `id`  
- `customerId`  
- `providerId`  
- `serviceId`  
- `time`  
- `address`  
- `description`  
- `status` (pending, accepted, completed, cancelled)  
- `createdAt`

---

## ❗ Nofunksional Talablar

- 🔐 **Xavfsizlik:** JWT, parol hashing, input validation  
- ⚡ **Performance:** Tez ishlovchi RESTful API endpointlar  
- 🧼 **Kod sifati:** MVC arxitekturasi, modulga ajratilgan kod struktura  
- 📦 **Zaxira:** Ma’lumotlarni avtomatik saqlash va tiklash imkoniyati
