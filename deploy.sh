rm -rf dist &&
npm run build &&
git add . &&
git commit -m "解决cors问题" &&
git push -u origin main
