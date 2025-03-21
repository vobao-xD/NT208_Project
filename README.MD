# 📝 Text to Everything

## 📌 Tổng quan  
**Đồ án môn học:** Lập trình Ứng dụng Web - **NT208.P23.ANTT**  
**Giảng viên hướng dẫn:** Trần Tuấn Dũng  

### 👨‍💻 Thành viên nhóm  
- **Võ Quốc Bảo** - 23520146  
- **Hà Sơn Bin** - 23520149  
- **Nguyễn Đoàn Gia Khánh** - 23520720  
- **Tạ Ngọc Ân** - 23520030  
- **Nguyễn Thái Học** - 23520549  

---

## 🚀 Giới thiệu  
**Text to Everything** là một ứng dụng AI giúp người dùng chuyển đổi văn bản thành nhiều định dạng khác nhau như **hình ảnh, video, giọng nói**, v.v.  
Ứng dụng hỗ trợ **đa ngôn ngữ** và tối ưu hóa cho **tiếng Việt**.

---

## ✨ Tính năng chính  
✅ **Text-to-Image:** Chuyển văn bản thành hình ảnh bằng AI.  
✅ **Text-to-Video:** Tạo video từ văn bản với hiệu ứng động.  
✅ **Text-to-Speech:** Chuyển văn bản thành giọng nói tự nhiên.  
✅ **Speech-to-Text:** Chuyển đổi giọng nói thành văn bản.  
✅ **Lưu trữ & Chia sẻ:** Lưu nội dung và chia sẻ trên mạng xã hội.  

---

## 🏗 Công nghệ sử dụng  
- **Backend:** FastAPI (Python)  
- **Frontend:** React + Tailwind  
- **Cơ sở dữ liệu:** PostgreSQL  
- **AI Models:** OpenAI, Stable Diffusion, ElevenLabs, (coming soon...)  
- **Triển khai:** *Chưa cập nhật*  

---

## 📦 Cài đặt  

### 🔧 Yêu cầu hệ thống  
- Python 3.10+  
- PostgreSQL  

### 🖥️ Cài đặt Backend (FastAPI)  

#### 1️⃣ **Clone repository**  
```bash
git clone https://github.com/vobao-xD/NT208_Project.git
cd NT208_Project/backend
```
#### 2️⃣  **Tạo môi trường ảo & cài đặt dependencies**  
```bash
python -m venv venv
source venv/bin/activate  # Trên Linux/macOS
venv\Scripts\activate      # Trên Windows

pip install -r requirements.txt
```
####3️⃣ **Cấu hình cơ sở dữ liệu**
Tạo file .env và điền thông tin:
```ini
DATABASE_URL=postgresql://user:password@localhost:5432/your_database
SECRET_KEY=your_secret_key
```
####4️⃣ **Chạy server FastAPI**
```bash
uvicorn main:app --reload
```
####5️⃣ **Truy cập API Docs**
Mở trình duyệt và truy cập:
👉 http://localhost:8000/docs
### 🖥️ Cài đặt Frontend 
```bash
cd NT208_Project/frontend

npm install
npm run dev
```
### thêm hướng dẫn cài đặt frontend
## 📌 API Endpoints

| Method | Endpoint              | Chức năng                          |
|--------|-----------------------|-----------------------------------|
| `POST` | `/api/register`       | Đăng ký tài khoản                 |
| `POST` | `/api/login`          | Đăng nhập                         |
| `POST` | `/api/text-to-image`  | Chuyển văn bản thành hình ảnh     |
| `POST` | `/api/text-to-video`  | Tạo video từ văn bản              |
| `POST` | `/api/text-to-speech` | Chuyển văn bản thành giọng nói    |
| `POST` | `/api/speech-to-text` | Nhận diện giọng nói               |
