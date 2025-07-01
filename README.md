# FE Test - AgileTech

## 1. Công nghệ sử dụng
- React + TypeScript
- CSS Module + SASS
- React Router v6
- Axios (có interceptor refresh token)
- Docker (Nginx serve static build)
- Responsive UI

---

## 2. Chức năng đã hoàn thành

### A. Cắt giao diện & chia component
- Cắt giao diện Home, Login, Profile theo đúng Figma.
- Chia nhỏ thành các component: Header, HeroSection, Features, Testimonials (Slide), Footer.
- Sử dụng CSS Module/SASS cho từng component.

### B. Responsive
- Tất cả các trang đều responsive, có media query cho mobile/tablet.

### C. Authentication
- Đăng nhập (login) với username, nhận accessToken và refreshToken.
- Lưu token vào localStorage.
- Logout: xóa token, chuyển về trang login.
- Header tự động đổi trạng thái khi đăng nhập/đăng xuất.

### D. Refresh Token
- Axios interceptor tự động gọi `/auth/refreshToken` khi accessToken hết hạn (401).
- Lưu lại accessToken mới, retry request cũ.

### E. CRUD Posts (trang Profile)
- Hiển thị danh sách posts dạng bảng, phân trang, tìm kiếm theo title.
- Thêm mới post (modal form).
- Xoá post (nút 🗑️).
### F. Routing & Protected Route
- Sử dụng React Router v6.
- Các route `/profile`, `/posts` được bảo vệ, chỉ vào được khi đã đăng nhập.
- Home tự động render giao diện SignIn/NotSignIn theo trạng thái đăng nhập.

### G. Docker & Deploy
- Có file Dockerfile chuẩn: build React, copy vào Nginx serve static.
- Đã hướng dẫn deploy lên VPS, build/run Docker container, mở port 80.

---

## 3. Cách chạy project

### Chạy local
```bash
cd test_intern
npm install
npm start
```

### Build production
```bash
npm run build
```

### Chạy bằng Docker
```bash
# Build image
sudo docker build -t my-react-app .

# Run container
sudo docker run -d --name my-react-app -p 80:80 my-react-app
```

---

## 4. Các yêu cầu test đã làm được

| Yêu cầu đề bài | Đã làm được? | Ghi chú |
|----------------|--------------|---------|
| Sử dụng CSS Module/SASS | ✅ | Có |
| Chia layout, component rõ ràng | ✅ | Có |
| Cắt giao diện Home, Slide | ✅ | Có |
| Sử dụng TypeScript | ✅ | Toàn bộ code |
| Responsive | ✅ | Có media query |
| Authentication Login/Logout | ✅ | Có |
| Refresh token | ✅ | Axios interceptor |
| Deploy Docker, VPS | ✅ | Có Dockerfile, hướng dẫn |
| Support SSL | ⚠️ | Có hướng dẫn, chưa cấu hình mẫu |
| Pagination | ✅ | Có |
| Tìm kiếm/filter | ✅ | Có |
| Bảo vệ route | ✅ | Có |
| Giao diện giống Figma | ✅ | Đã tối ưu |


