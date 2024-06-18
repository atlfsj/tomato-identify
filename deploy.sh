rm -rf dist &&
npm run build &&
git add . &&
git commit -m "相对路径不行，换绝对路径试试" &&
git push -u origin main
