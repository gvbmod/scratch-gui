@echo off
echo Pushing scratch-gui to github...
git lfs uninstall
git init
git rm -r --cached .
git add .
git commit -m "Upload main source code."
git branch -M main
git remote add origin https://github.com/gvbmod/scratch-gui.git
git push -f --no-verify origin main