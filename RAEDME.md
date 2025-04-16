# 🚰 SantexQidir

**SantexQidir** — foydalanuvchilarga o‘z hududidagi ishonchli va tajribali santexniklarni tez va oson topish imkonini beruvchi veb platforma.

---

## 🎯 Loyihaning Maqsadi

- Foydalanuvchilarga yaqin atrofdagi ishonchli santexniklarni onlayn tarzda topish imkonini yaratish  
- Santexniklarga o‘z xizmatlarini targ‘ib qilish va yangi mijozlar topishda yordam berish  
- Xizmatlarga tez va oson buyurtma berish tizimini yaratish  
- Mijozlar va santexniklar o‘rtasida shaffof va samarali aloqa tizimini yo‘lga qo‘yish

---

## 🔧 Foydalanilgan Texnologiyalar

- **Backend:** Node.js, Express  
- **Frontend:** HTML, CSS, JavaScript  
- **Ma’lumotlar bazasi:** MongoDB  
- **Autentifikatsiya:** JWT (JSON Web Token)  
- **Xavfsizlik:** Parol hashing, input validation, email verifikatsiyasi  
- **Geo-xizmatlar:** Lokatsiya asosida qidiruv

---

## 👥 Rollar

### 🧑‍💼 Mijoz (Customer)

- Ro‘yxatdan o‘tish va tizimga kirish  
- Hudud bo‘yicha santexniklarni izlash  
- Santexnik profilini ko‘rish va xizmatga buyurtma berish

### 🛠️ Santexnik (Service Provider)

- Ro‘yxatdan o‘tish va xizmatlarni tizimga kiritish  
- Kelgan buyurtmalarni ko‘rish va qabul qilish  
- Shaxsiy profil orqali xizmatlarini boshqarish

### 🧑‍💻 Admin

- Tizimdagi barcha foydalanuvchilarni nazorat qilish  
- Xizmat turlari (kategoriyalar)ni tahrirlash  
- Foydalanuvchi xabarlari va faoliyatini kuzatish

---

## ❗ Nofunksional Talablar

- 🔐 **Xavfsizlik:** JWT, parol hashing, input validation  
- ⚡ **Performance:** Tez ishlovchi RESTful API endpointlar  
- 🧼 **Kod sifati:** MVC arxitekturasi, modulga ajratilgan kod struktura  
- 🗃️ **Backup:** Ma’lumotlarni avtomatik saqlash va tiklash tizimi

---

## 🗃️ Ma’lumotlar Bazasi Modellari

### 1. `User`

- id  
- name  
- email  
- password  
- phoneNumber  
- role  
- location  
- createdAt  
- updatedAt  

---

### 2. `Service`

- id  
- name  
- description  
- price  
- providerId  
- createdAt  

---

### 3. `Order`

- id  
- customerId  
- providerId  
- serviceId  
- date  
- time  
- address  
- description  
- status  
- createdAt  

---

