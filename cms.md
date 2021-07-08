
## For full deployment run the following commands, but intend to avoid `git init`

git remote remove origin
rm -rf .git
npm install && npm run build

cd build/
git init
git remote add origin https://github.com/sebasmos/sebasmos.github.io
git add .
git commit -m "deploying"
git push -u origin master
--end..
git pull origin master
git pull --allow-unrelated-histories origin master
git pull origin master

#### Updating info: 
git clone https://github.com/sebasmos/sebasmos_web.github.io
npm install && npm run build
npm start or npm run start 

### pushing changes onto storage repository: 
git add .
git commit -m "updating"
git push -u origin master 
git pull origin master
git pull --allow-unrelated-histories origin master
git pull origin master

-----end-------------------------------

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


### Test locally

`npm run start` or `npm start`

### Change favicon

https://www.favicon-generator.org/
