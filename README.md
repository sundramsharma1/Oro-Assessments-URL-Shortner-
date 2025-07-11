# 🔗 Mini URL Shortener API

A simple and powerful REST API that shortens long URLs into compact, shareable links — built with Node.js, Express.js, MongoDB, and Docker.

[![Tech Stack](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](#)

---

## 🚀 Live Deployed api link

🌍 Deployed on Railway  
🔗 https://oro-assessments-url-shortner-production.up.railway.app

---

## 📌 Features

- 🔗 Shorten long URLs with a unique code
- ⏳ Optional expiry date for URLs
- 🔁 Redirect to original URL using short code
- ✅ Validates input URLs
- 📈 Tracks number of clicks (analytics)
- 🛡️ Rate limiting to prevent abuse
- 🐳 Docker-ready for deployment

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Validation**: `valid-url` package
- **Analytics**: Click counter
- **Deployment**: Railway
- **DevOps**: Docker, Docker Compose

---

## 📬 API Endpoints

### ➤ POST `/shorten`
**Shorten a URL**

```json
Request Body:
{
  "url": "https://example.com",
  "expiryDate": "2025-12-31" // optional
}
```

**Response:**
```json
{
  "shortUrl": "https://your-base-url/abc123"
}
```

---

### ➤ GET `/code`
**Redirects to the original long URL**

**Response:**
- 302 Redirect (on success)
- 410 Gone (if expired)
- 404 Not Found (if code doesn't exist)

---

### ➤ GET `/stats/code`
**Number of short link has been clicked**

**Response:**
```json
{
  "originalUrl": "https://www.google.com",
  "clicks": 1,
  "createdAt": "2025-07-11T07:48:02.593Z",
  "expiryDate": "2025-07-13T00:00:00.000Z"
}
```

---

### ➤ DELETE `/code`
**Delete URL**

**Response:**
- 200 Short Url Deleted

---

## 🔧 Local Setup

```bash
git clone https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-.git
cd Oro-Assessments-URL-Shortner-
npm install
```

Create `.env`:

```
MONGODB_URI=Your Mongodb Url
BASE_URL=http://localhost:3000
PORT=3000
```

Run:
```bash
npm start
```

---

## 🐳 Docker Setup

Build with Docker:

```bash
docker compose up --build
```

Run with Docker:
```bash
docker compose up
```

Close Docker:
```bash
docker compose down
```


---

## 🧪 Postman Test Images (Screenshots)

### 🖥️ Local Machine API Tests:
📥 [Download Postman Collection](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Local%20Machine/On%20the%20local%20machine%20Api%20Check.postman_collection.json)

1. **POST /shorten (valid)**
    
   ![Local Test 1](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Local%20Machine/1.png)

2. **GET /:code (valid redirect)**
   
   ![Local Test 2](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Local%20Machine/2.png)

3. **GET /stats/code (clicked link count)**
   
   ![Local Test 3](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Local%20Machine/3.png)

4. **DELETE /:code (short url deleted)**
    
   ![Local Test 4](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Local%20Machine/6.png)

5. **POST /shorten (Invalid url)**
   
   ![Local Test 5](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Local%20Machine/4.png)

6. **GET /:code (url not found)**
    
   ![Local Test 6](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Local%20Machine/5.png)
   
---

### 🌐 Deployed API Tests (Railway):
📥 [Download Postman Collection](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Deployed/Deployed%20Api%20Check.postman_collection.json)

1. **POST /shorten (valid)**
    
   ![Local Test 1](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Deployed/1.png)

2. **GET /:code (valid redirect)**
   
   ![Local Test 2](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Deployed/2.png)

3. **GET /stats/code (clicked link count)**
   
   ![Local Test 3](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Deployed/3.png)

4. **DELETE /:code (short url deleted)**
    
   ![Local Test 4](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Deployed/6.png)

5. **POST /shorten (Invalid url)**
   
   ![Local Test 5](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Deployed/5.png)

6. **GET /:code (url not found)**
    
   ![Local Test 6](https://github.com/sundramsharma1/Oro-Assessments-URL-Shortner-/blob/master/Images/Api%20Test%20on%20Deployed/4.png)

---

## ✅ Test Cases Covered

| Scenario                       | Method   | Status |
|-------------------------------|----------|--------|
| Shorten valid URL             | `POST`   | ✅ 200 |
| Invalid URL input             | `POST`   | ❌ 400 |
| Redirect to original URL      | `GET`    | ✅ 302 |
| Expired URL                   | `GET`    | ⚠️ 410 |
| Short code not found          | `GET`    | ❌ 404 |
| Missing request body          | `POST`   | ❌ 400 |
| Rate limiting (bonus)         | Any      | 🔒 429 |
| Click analytics (bonus)       | `GET`    | 📈 counted |

---

## 🙋‍♂️ Author

👤 **Sundram Sharma**  
🎓 B.Tech (IT) Student  

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).
