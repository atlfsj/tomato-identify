rm -rf dist &&
npm run build &&
git add . &&
git commit -m "注意dist的路径（才明白为什么要分生产开发2个环境）" &&
git push -u origin main
