@echo off
REM TCML 網站部署腳本 | TCML Website Deployment Script (Windows)
REM 使用方法 | Usage: deploy.bat <github_username>

setlocal enabledelayedexpansion

REM 檢查參數
if "%1"=="" (
    echo.
    echo ❌ 錯誤：需要 GitHub 用戶名
    echo 用法 | Usage: deploy.bat ^<github_username^>
    echo 示例 | Example: deploy.bat johndoe
    echo.
    pause
    exit /b 1
)

set GITHUB_USERNAME=%1
set REPO_URL=https://github.com/!GITHUB_USERNAME!/tcml-web.git

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║        TCML 網站部署腳本 - Deployment Script             ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM 步驟 1: 檢查 Git 狀態
echo [1/4] 檢查 Git 狀態 | Checking Git status...
git status
if %errorlevel% neq 0 (
    echo ❌ Git 命令失敗
    pause
    exit /b 1
)
echo ✓ Git 狀態正常
echo.

REM 步驟 2: 設定遠端倉庫
echo [2/4] 設定遠端倉庫 | Setting up remote repository...
git remote remove origin 2>nul
git remote add origin "!REPO_URL!"
if %errorlevel% neq 0 (
    echo ❌ 設定遠端倉庫失敗
    pause
    exit /b 1
)
echo ✓ 遠端倉庫已設定：!REPO_URL!
echo.

REM 步驟 3: 更新分支名稱
echo [3/4] 更新分支名稱 | Updating branch name...
git branch -M main
if %errorlevel% neq 0 (
    echo ❌ 更新分支失敗
    pause
    exit /b 1
)
echo ✓ 分支已更新為 main
echo.

REM 步驟 4: 推送到 GitHub
echo [4/4] 推送到 GitHub | Pushing to GitHub...
echo ⚠ 請確保你已經在 GitHub 上建立倉庫：https://github.com/!GITHUB_USERNAME!/tcml-web
echo ⚠ 如果使用 HTTPS，會提示輸入認證（用戶名和個人存取令牌）。
echo.
pause

git push -u origin main
if %errorlevel% neq 0 (
    echo ❌ 推送到 GitHub 失敗
    echo 可能的原因：
    echo   - 倉庫不存在（請先在 GitHub 建立）
    echo   - 認證失敗（檢查用戶名和 token）
    echo   - 網路問題
    pause
    exit /b 1
)

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║          ✓ 推送完成！Deployment Complete!               ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

echo 📋 下一步：| Next Steps:
echo   1. 訪問 Vercel: https://vercel.com/new
echo   2. 連接 GitHub 倉庫：!REPO_URL!
echo   3. 點擊 Deploy 按鈕
echo   4. 等待部署完成（2-3 分鐘）
echo.
echo 📊 倉庫信息：| Repository Info:
echo   URL: !REPO_URL!
echo   Branch: main
echo.

pause
