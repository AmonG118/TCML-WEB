# 🚀 TCML 網站部署指南

## 部署狀態

✅ **項目已準備好部署**
- Build: ✓ 成功編譯
- TypeScript: ✓ 類型檢查通過
- Mobile Responsive: ✓ 完整實現
- Vercel Config: ✓ 已配置

## 快速部署步驟

### 步驟 1: 推送到 GitHub

```bash
# 初始化或設定遠端倉庫
git remote add origin https://github.com/YOUR_USERNAME/tcml-web.git
git branch -M main
git push -u origin main
```

### 步驟 2: 連接 Vercel

1. 訪問 https://vercel.com/new
2. 選擇 "Import Git Repository"
3. 授權並選擇 `tcml-web` 倉庫
4. Vercel 會自動偵測 Next.js 框架設定

### 步驟 3: 配置環境變數（可選）

在 Vercel Dashboard 中設定：
- `NEXT_PUBLIC_SITE_URL`: 生產域名 (https://www.tcml-mandarin.org)

### 步驟 4: 部署

1. 點擊 "Deploy"
2. 等待部署完成（通常 2-3 分鐘）
3. 獲得部署 URL

## 備選方案：使用 Vercel CLI

如果已登入 Vercel 帳戶：

```bash
# 使用互動式部署
vercel

# 或直接部署
vercel --prod
```

## 部署配置詳情

### 構建命令
```
npm run build
```

### 輸出目錄
```
.next
```

### 安裝命令
```
npm install
```

## 部署後檢查清單

- [ ] 首頁在 Vercel URL 上正確加載
- [ ] 所有部分（Hero、News、Taiwan Vibe、Mission、Footer）都顯示
- [ ] 桌面版響應式正常（>768px）
- [ ] 手機版響應式正常（<768px）
- [ ] 導航連結正確
- [ ] 按鈕互動正常
- [ ] 自訂網域已連接（可選）

## 自訂網域設定

在 Vercel Dashboard：
1. 進入 Project Settings → Domains
2. 添加自訂網域：www.tcml-mandarin.org
3. 按照指示更新 DNS 設定

## 環境

- **Node.js**: 18+
- **Package Manager**: npm
- **Framework**: Next.js 16.2.6
- **Build Tool**: Turbopack

## 首次部署注意事項

- 首次部署可能需要 3-5 分鐘
- 後續部署通常在 30 秒內完成
- 自動部署在每次推送到 main 分支時觸發

## 問題排除

### 構建失敗
檢查 Vercel 部署日誌中的錯誤訊息，通常顯示：
- 缺失依賴項
- 類型檢查失敗
- 環境變數未設定

### 部署後頁面空白
- 清除瀏覽器快取（Cmd+Shift+R 或 Ctrl+Shift+R）
- 檢查開發者工具中的錯誤訊息
- 確認所有資源都已正確加載

## 持續部署

Vercel 支援自動部署：
- 推送到 `main` → 自動部署到生產環境
- 推送到其他分支 → 自動創建預覽 URL

## 需要幫助？

- Vercel 文檔: https://vercel.com/docs
- Next.js 文檔: https://nextjs.org/docs
- 項目倉庫: 查看 README.md 獲取更多資訊
