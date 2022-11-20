

# Middleware

### Ý nghĩa
- Phần mềm trung gian (đứng giữa các thành phần trong mô hình phần mềm)

Browser (client) =========== Request =============> Server (Node)


Browser (client) <=========== Response ============= Server (Node)

### Vai trò
- Giống như "Bác bảo vệ"

Nhà ==========================> Bác bảo vệ 1 (Middleware 1): Bác bảo vệ 2 (Middleware 2):Sự kiện (soát vé)


Nhà <========================== Sự kiện

1. Soát vé (kiểm soát -> Validation)
2. Không cho vào
3. Cho phép vào (Validation passed -> cho vào)
4. Chỉnh sửa / thay đổi


### Ứng dụng
- Dựng chức năng xác thực (Authentication)
- Dựng chức năng phân quyền (Authorization)
- Để chia sẻ các giá trị của biến tới tất cả các view (BackEnd)
