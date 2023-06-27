# URL Shortener 短網址產生器
![image](https://github.com/crowtorakawa/URLShortener/blob/main/shorts.png)

## 介紹

將長網址縮成短網址

## 功能

- 輸入原始網址轉換成5碼隨機英數組合的短網址
- 透過短網址轉址到原本網址
- 點擊 "點擊複製" 按鈕可以複製短網址至剪貼簿

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本機的資料夾
3. 右鍵點選 git bash here
   開啟後輸入
   ```bash
   $ git clone https://github.com/crowtorakawa/URLShortener.git
   ```
5. 建立 .env檔案 內容輸入
   MONGODB_URI = mongodb+srv://(帳號):(密碼)@(伺服器).ypf5ujz.mongodb.net/(Database名稱)?retryWrites=true&w=majority
   
6. 在終端機輸入以下，啟動程式：

   ```bash
   npm run dev
   ```
      
7. 若看見此行訊息則代表順利運行

   ```bash
    The server is listening on http://hostname:3000
    mongodb connected!
   ```

## 開發工具

- Node.js 14.16.0
- Body-parser 1.20.2
- Express 4.18.2
- Express-Handlebars 4.0.2
- MongoDB
- mongoose 5.9.7
- dotenv 16.1.4
