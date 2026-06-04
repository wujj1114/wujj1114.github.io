@echo off
:: 設定編碼為 UTF-8，確保繁體中文輸入不卡頓、不亂碼
chcp 65001 >nul

echo ===================================================
echo   自動化 Git 提交與推送工具 (Git Push Automation)
echo ===================================================
echo.

:: 執行 git add .
echo [步驟 1/3] 正在暫存所有變更 (git add .) ...
git add .
if %errorlevel% neq 0 (
    echo [錯誤] git add 失敗，請檢查是否處於 Git 專案目錄下。
    goto end
)
echo 暫存成功！
echo.

:: 提示使用者輸入 Commit 訊息
echo [步驟 2/3] 請輸入 Commit 說明（提交訊息）：
set /p commit_msg="> "

:: 檢查使用者是否直接按 Enter 輸入空白
if "%commit_msg%"=="" (
    echo [警示] 偵測到未輸入說明，自動代入預設訊息：「日常更新與內容調整」。
    set commit_msg=日常更新與內容調整
)

:: 執行 git commit
echo.
echo 正在執行本地提交 (git commit) ...
git commit -m "%commit_msg%"
if %errorlevel% neq 0 (
    echo [提示] 沒有偵測到任何需要提交的變更，或變更已被提交。
    goto end
)
echo 提交成功！
echo.

:: 執行 git push
echo [步驟 3/3] 正在推送至遠端儲存庫 (git push) ...
git push
if %errorlevel% neq 0 (
    echo [錯誤] git push 失敗，請確認網路連線或遠端權限是否正確。
    goto end
)
echo.
echo ===================================================
echo   恭喜！所有變更已成功 Commit 並 Push 至遠端儲存庫！
echo ===================================================

:end
echo.
echo 請按任意鍵結束視窗...
pause >nul