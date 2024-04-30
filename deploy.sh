rm -rf dist &&
npm run build &&
git add . &&
git commit -m "解决Network Error, 'AxiosError'问题" &&
git push -u origin main
