# Sử dụng image nginx để serve static files
FROM nginx:alpine

# Copy build files vào nginx
COPY build/ /usr/share/nginx/html

# Copy file cấu hình nginx (nếu cần tùy chỉnh)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]