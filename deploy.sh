rm -rf dist &&
npm run build &&
git add . &&
git commit -m "绝对路径不行，使用import.meta.env.BASE_URL来获取基本 URL" &&
git push -u origin main
