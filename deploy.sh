#!/bin/bash

# TCML 網站部署腳本 | TCML Website Deployment Script
# 使用方法 | Usage: bash deploy.sh <github_username>

set -e

# 顏色定義 | Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 檢查參數 | Check parameters
if [ -z "$1" ]; then
    echo -e "${RED}❌ 錯誤：需要 GitHub 用戶名${NC}"
    echo -e "${YELLOW}用法 | Usage: bash deploy.sh <github_username>${NC}"
    echo -e "${BLUE}示例 | Example: bash deploy.sh johndoe${NC}"
    exit 1
fi

GITHUB_USERNAME="$1"
REPO_URL="https://github.com/${GITHUB_USERNAME}/tcml-web.git"

echo -e "\n${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║        TCML 網站部署腳本 | Deployment Script             ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"

# 步驟 1: 檢查 Git 狀態
echo -e "\n${BLUE}[1/4]${NC} 檢查 Git 狀態 | Checking Git status..."
git status
echo -e "${GREEN}✓ Git 狀態正常${NC}"

# 步驟 2: 設定遠端倉庫
echo -e "\n${BLUE}[2/4]${NC} 設定遠端倉庫 | Setting up remote repository..."
git remote remove origin 2>/dev/null || true
git remote add origin "${REPO_URL}"
echo -e "${GREEN}✓ 遠端倉庫已設定：${REPO_URL}${NC}"

# 步驟 3: 更新分支名稱
echo -e "\n${BLUE}[3/4]${NC} 更新分支名稱 | Updating branch name..."
git branch -M main
echo -e "${GREEN}✓ 分支已更新為 main${NC}"

# 步驟 4: 推送到 GitHub
echo -e "\n${BLUE}[4/4]${NC} 推送到 GitHub | Pushing to GitHub..."
echo -e "${YELLOW}⚠ 請確保你已經在 GitHub 上建立倉庫：https://github.com/${GITHUB_USERNAME}/tcml-web${NC}"
echo -e "${YELLOW}⚠ 如果使用 SSH 金鑰，請先設定 SSH。如果使用 HTTPS，會提示輸入認證。${NC}"

read -p "按 Enter 鍵繼續 | Press Enter to continue..."

git push -u origin main

echo -e "\n${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║          ✓ 部署完成！| Deployment Complete!            ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"

echo -e "\n${BLUE}📋 下一步：| Next Steps:${NC}"
echo -e "  1. 訪問 Vercel: https://vercel.com/new"
echo -e "  2. 連接 GitHub 倉庫：${REPO_URL}"
echo -e "  3. 點擊 Deploy 按鈕"
echo -e "  4. 等待部署完成（2-3 分鐘）"
echo -e "\n${BLUE}📊 倉庫信息：| Repository Info:${NC}"
echo -e "  URL: ${REPO_URL}"
echo -e "  Branch: main"
echo -e "  Commits: $(git rev-list --count HEAD)"
echo -e "\n"
