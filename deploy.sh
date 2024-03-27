rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "初步完成拍照上传" &&
git branch -M main &&
git remote add origin git@github.com:atlfsj/tomato-identify.git &&
git push -f -u origin main &&
cd -
