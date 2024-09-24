# Appfellas Server

Appfellas, kullanıcıların uçuş bilgilerini takip edebilecekleri bir uygulamadır. Bu, uygulamanın backend kısmını içeren projedir.

## Gereksinimler

- Node.js (v14 veya üzeri)
- NPM (Node Package Manager)
- MongoDB (veya başka bir veritabanı bağlantısı)

## Başlangıç

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/Eness2001/appfellas-server.git
cd appfellas-server

### 2. Bağımlılıkları indirin
npm install

### 3. Ortam değişkenlerini ayarlayın
APP_ID=1389520e
APP_KEY=de98b7fa84a5fcaa5d90586cda08a0eb
MONGO_URI=mongodb://localhost:27017/appfellas
PORT=5000

  ### 4. Sunucuyu Başlatın
npm start 

