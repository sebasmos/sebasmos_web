### For full deployment run the following commands, but intend to avoid `git init`

---

npm install && npm run build # update index.html & manifest
cd build/
git init # try to avoid this
git remote add origin https://github.com/sebasmos/sebasmos.github.io.git
git add .
git commit -m "deploying from stractch"
git push -u origin master
git push origin master
git pull
git pull origin master
git pull --allow-unrelated-histories origin master
git pull origin master
git add .
git commit -m "done"
git push -u origin master
cd ..

---

### Ideally only use this commands, but making sure that the `build/` folder is also included and updated

npm install && npm run build
git init
git remote add origin https://github.com/sebasmos/sebasmos.github.io.git
git remote set-url origin https://github.com/sebasmos/sebasmos.github.io.git
git add .
git commit -m "done"
git push -u origin master
git pull
git push origin master

### Errors

For some related errors check

https://www.npmjs.com/package/webpack/v/4.44.2
