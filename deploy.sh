rm -rf dist &&
npm run build &&
git add . &&
git commit -m "由于vite设置了路径导致错误，试试相对路径" &&
git push -u origin main
