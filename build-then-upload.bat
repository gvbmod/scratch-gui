@echo off

cd build

git init
git lfs install
git lfs track '*.js'
git add .
git commit -m "Upload website release."
git branch -M website
git remote add origin https://github.com/gvbmod/GvbvdxxMod2.git
git lfs push --all https://github.com/gvbmod/GvbvdxxMod2.git website
git push -u origin website

cd ../