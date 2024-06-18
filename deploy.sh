rm -rf dist &&
npm run build &&
git add . &&
git commit -m "数据绝对路径无法找到，改为相对路径" &&
git push -u origin main
