@echo off
title SportsHub Local Server
cd /d "%~dp0"
echo Starting server from:
cd
echo.
echo Open in browser:
echo   Landing: http://localhost:5173/index.html
echo   Admin:   http://localhost:5173/admin.html
echo.
npx --yes serve . -l 5173 -n
pause
