# client_for_dictionary
This is the client part of my application that helps me learn English.

Установка Nginx на Ubuntu 
Обновление списка пакетов:
sudo apt update

Установка Nginx:
sudo apt install nginx

Проверка статуса Nginx:

sudo systemctl status nginx
Эта команда покажет, запущен ли Nginx. Если он запущен, вы увидите сообщение о том, что он работает.

Эта конфигурация Nginx

server {
    listen 80;
    server_name your_domain.com;

    location / {
        # Путь к статическим файлам React-приложения
        root /path/to/your/react/app/build;
        index index.html;
        try_files $uri /index.html;
    }

    location /api {
        # Проксирование запросов к серверу Express на порт 5000
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

Эта конфигурация Nginx настраивает проксирование запросов к серверу Express на порт 5000 для всех URL, начинающихся с /api. При этом все остальные запросы обрабатываются статическим React-приложением.

Не забудьте заменить /path/to/your/react/app/build на путь к вашему React-приложению. Также убедитесь, что ваш сервер Express настроен для обработки запросов, отправленных на путь /api.