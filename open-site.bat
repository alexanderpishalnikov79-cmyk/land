@echo off
setlocal

cd /d "%~dp0"

if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo Failed to install dependencies.
    pause
    exit /b 1
  )
)

echo Starting local site...
start "" cmd /c "cd /d ""%~dp0"" && npm run dev -- --host 127.0.0.1 --port 4173"

timeout /t 4 /nobreak >nul
start "" "http://127.0.0.1:4173"

exit /b 0
