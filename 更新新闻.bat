@echo off
chcp 65001 >nul
echo.
echo ====================================
echo    昆仑巢新闻数据更新工具
echo ====================================
echo.

cd /d "%~dp0"

echo [1/2] 检查 Node.js...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 未检测到 Node.js，请先安装 Node.js
    echo    下载地址: https://nodejs.org/
    echo.
    pause
    exit /b 1
)
echo ✓ Node.js 已安装
echo.

echo [2/2] 转换新闻数据...
node scripts\convert-news.js

if %errorlevel% equ 0 (
    echo.
    echo ====================================
    echo    ✅ 更新成功！
    echo ====================================
    echo.
    echo 下一步：刷新浏览器查看更新
    echo.
) else (
    echo.
    echo ====================================
    echo    ❌ 更新失败
    echo ====================================
    echo.
    echo 请检查 news-data.csv 文件格式
    echo.
)

pause
