@echo off
echo ================================================
echo  Pulling Claude's Changes to Local Repo
echo ================================================
echo.

echo [1/3] Fetching latest changes from remote...
git fetch origin

echo.
echo [2/3] Switching to Claude's branch...
git checkout claude/analyze-client-app-011CUTvDhFkMzfPBwMHZGGyX

echo.
echo [3/3] Pulling latest changes...
git pull origin claude/analyze-client-app-011CUTvDhFkMzfPBwMHZGGyX

echo.
echo ================================================
echo  SUCCESS! Your local repo is now updated
echo ================================================
echo.
echo Current branch: claude/analyze-client-app-011CUTvDhFkMzfPBwMHZGGyX
echo.
pause
