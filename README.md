# 個人網站設計

一個簡潔有力的個人介紹網站。

## 🌟 特色功能

### 🎨 視覺設計
- **深淺切換**：淺色和深色主題，支援系統自動切換
- **平台支援**：完美適配桌面、平板和手機設備
- **流暢動畫**：淡入動畫和懸浮效果提升用戶體驗
- **優美布局**：居中對齊的內容和優雅的視覺層次

### ✨ 交互功能
- **打字效果**：使用 Typed.js 實現動態打字動畫
- **主題切換**：右上角一鍵切換明暗主題，設定會自動保存
- **關於我彈窗**：點擊選單查看更多個人信息
- **社交連結**：快速訪問 Discord、GitHub 和個人網站
- **404 頁面**：自定義 404 錯誤頁面，保持一致的視覺風格

### 🔧 技術特點
- **現代 CSS**：使用 CSS 變量實現主題系統
- **無障礙設計**：完整的 ARIA 標籤和鍵盤導航支援
- **性能優化**：圖片尺寸預設定，減少版面位移（CLS）

## 🚀 快速開始

### 環境需求
- Node.js (推薦 14.0 或更高版本)
- npm 或 yarn

### 安裝與運行

1. **克隆項目**
   ```bash
   git clone https://github.com/CyueX7/aboutMe.git
   cd hello
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **開發模式**
   ```bash
   npm start
   ```
   打開瀏覽器訪問 `http://localhost:8080`

4. **構建生產版本**
   ```bash
   npm run build
   ```

## 📁 項目結構

```
hello/
├── index.html          # 主頁面
├── 404.html           # 404 錯誤頁面
├── css/
│   └── style.css      # 主要樣式文件
├── js/
│   ├── app.js         # 主要 JavaScript 邏輯
│   └── vendor/        # 第三方庫
├── img/
│   └── a1.png         # 圖片
├── package.json       # 項目配置
├── webpack.*.js       # Webpack 配置文件
└── README.md         # 項目說明
```

## 🎯 主要文件說明

### HTML 文件
- `index.html` - 主頁面，包含個人介紹和所有互動功能
- `404.html` - 自定義 404 頁面，與主頁面保持一致的設計風格

### CSS 樣式
- `css/style.css` - 主要樣式文件
  - CSS 變量系統實現雙主題
  - 響應式設計媒體查詢
  - 流暢的動畫效果
  - 404 頁面專用樣式

### JavaScript 功能
- `js/app.js` - 主要功能實現
  - 主題切換邏輯
  - 選單交互控制
  - 模態框功能
  - Typed.js 打字效果初始化

## 🎨 自定義設定

### 修改個人信息
1. **頭像**：替換 `img/a1.png` 為你的頭像圖片
2. **個人介紹**：編輯 `index.html` 中的文字內容
3. **社交連結**：修改 `index.html` 中的社交媒體連結
4. **關於我內容**：編輯模態框中的個人介紹文字

### 調整主題顏色
在 `css/style.css` 中修改 CSS 變量：
```css
:root {
  --body-bg: #f4f7f6;          /* 背景顏色 */
  --text-primary: #333333;     /* 主要文字顏色 */
  --discord-bg: #5865F2;       /* Discord 按鈕顏色 */
  /* 更多顏色變量... */
}
```


## 🌐 瀏覽器支援

- Chrome (推薦)
- Firefox
- Safari
- Edge
- 支援所有現代瀏覽器的最新版本

## 📄 授權

本項目採用 [MIT 授權](LICENSE.txt)。

## 👨‍💻 作者

**cyue.x7**
- Discord: [加入伺服器](https://discord.gg/aaM4NBuU5q)
- GitHub: [CyueX7](https://github.com/CyueX7)
- 網站: [tirms.xyz](https://tirms.xyz)

---

如果你喜歡這個項目，請考慮給它一個 ⭐！

## *by cyue.x7*
