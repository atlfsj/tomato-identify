rm -rf dist &&
npm run build &&
git add . &&
git commit -m "新增写死的前端：echarts图谱和ai大模型功能固定问答" &&
git push -u origin main
