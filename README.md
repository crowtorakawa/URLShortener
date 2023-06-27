# URL Shortener 短網址產生器
![image](https://github.com/crowtorakawa/URLShortener/blob/main/shorts001.png)
![image](https://github.com/crowtorakawa/URLShortener/blob/main/shorts002.png)
![image](https://github.com/crowtorakawa/URLShortener/blob/main/shorts003.png)
![image](https://github.com/crowtorakawa/URLShortener/blob/main/shorts004.png)
![image](https://github.com/crowtorakawa/URLShortener/blob/main/shorts005.png)

## 介紹

將長網址縮成短網址

## 功能

- 輸入原始網址轉換成5碼隨機英數組合的短網址
- 透過短網址轉址到原本網址
- 點擊 Copy 按鈕可以複製短網址至剪貼簿
- 點擊 Back 按鈕回到短網址原畫面


## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：
   ```bash
   git clone https://github.com/go2Cshop/url.git
   ```
4. 建立 .env檔案 內容輸入
   MONGODB_URI= (MongoDB Atlas資料庫連線字串
   
5. 安裝相關套件，輸入：

   ```bash
   npm install 
   ```
   
6. 安裝完畢後，繼續輸入：

   ```bash
   npm run start
   ```
   
7. 若看見此行訊息則代表順利運行

   ```bash
    App is running on http://localhost:3000
   ```

## 開發工具

- Node.js 14.16.0
- Body-parser 1.20.2
- Express 4.18.2
- Express-Handlebars 4.0.2
- MongoDB
- mongoose 5.9.7
- dotenv 16.1.4
