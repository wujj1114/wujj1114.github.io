# 小農探險家 (Little Farmer Explorer)

一個互動式農業教育遊戲,透過地圖探索學習農業知識。

## 🌾 專案特色

- 🎮 互動式遊戲地圖
- 📚 農業知識問答
- 🎨 現代化 UI 設計
- 📱 響應式設計,支援各種裝置

## 🚀 線上展示

訪問 GitHub Pages: [https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/](https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/)

## 🛠️ 技術堆疊

- **框架**: React 19 + TypeScript
- **建構工具**: Vite 6
- **樣式**: Tailwind CSS
- **部署**: GitHub Pages

## 📦 本地開發

### 安裝相依套件
\`\`\`bash
npm install
\`\`\`

### 啟動開發伺服器
\`\`\`bash
npm run dev
\`\`\`

### 建構生產版本
\`\`\`bash
npm run build
\`\`\`

### 預覽建構結果
\`\`\`bash
npm run preview
\`\`\`

## 📁 專案結構

\`\`\`
.
├── components/          # React 元件
│   ├── CompletionScreen.tsx
│   ├── FeedbackModal.tsx
│   ├── GameMap.tsx
│   ├── IntroScreen.tsx
│   ├── Logo.tsx
│   └── QuestionBox.tsx
├── public/             # 靜態資源
│   └── images/         # 圖片檔案
├── App.tsx             # 主應用程式元件
├── constants.ts        # 常數定義
├── types.ts            # TypeScript 型別定義
└── vite.config.ts      # Vite 設定檔
\`\`\`

## 🌐 部署到 GitHub Pages

1. **建立 GitHub Repository**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   \`\`\`

2. **啟用 GitHub Pages**
   - 前往 Repository Settings → Pages
   - Source: 選擇 "Deploy from a branch"
   - Branch: 選擇 \`gh-pages\` 或直接上傳 \`dist\` 資料夾內容

3. **手動部署 (選項一)**
   \`\`\`bash
   # 建構專案
   npm run build
   
   # 將 dist 資料夾內容推送到 gh-pages 分支
   git subtree push --prefix dist origin gh-pages
   \`\`\`

4. **使用 GitHub Actions 自動部署 (選項二)**
   - 參考 `.github/workflows/deploy.yml` 設定檔

## 📝 授權

此專案採用 MIT 授權

## 👨‍💻 作者

建立於 2025年

---

Built with ❤️ using React + Vite
