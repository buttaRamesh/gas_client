@echo off
echo ================================================
echo  Pulling Claude's Changes to Local Repo
echo ================================================
echo.

echo [1/4] Cleaning up any unfinished merges...
git merge --abort 2>nul
git reset --hard HEAD

echo.
echo [2/4] Fetching latest changes from remote...
git fetch origin

echo.
echo [3/4] Switching to Claude's branch...
git checkout claude/gav0-011CUTvDhFkMzfPBwMHZGGyX

echo.
echo [4/4] Pulling latest changes...
git pull origin claude/gav0-011CUTvDhFkMzfPBwMHZGGyX

echo.
echo ================================================
echo  SUCCESS! Your local repo is now updated
echo ================================================
echo.
echo Current branch: claude/gav0-011CUTvDhFkMzfPBwMHZGGyX
echo.
echo WARNING: This script resets your local changes.
echo Make sure to commit any work before running!
echo.
pause
