

# Updating ideas 
#### Update: 
`git clone https://github.com/sebasmos/sebasmos_web.git`
`npm install && npm run build` 
`npm start or npm run start ` and edit on this stage
To store changes then execute the following after deleting `node_modules/`, `build/` & `lock`
`git add .` 
`git commit -m "updating website"`
`git push -u origin master `
`git pull origin master`
`git pull --allow-unrelated-histories origin master`
`git pull origin master`


### Deploy:

`git remote remove origin`
`rm -rf .git`
`npm install && npm run build`
`cd build/`
`git init`
`git remote add origin https://github.com/sebasmos/sebasmos.github.io`
`git add .`
`git commit -m "deploying"`
`git push -u origin master`
--In case needed: ..
`git pull origin master`
`git pull --allow-unrelated-histories origin master`
`git pull origin master`


### Other error corrections: 
`npm install && npm run build # update index.html & manifest`
`cd build/`
`git init # try to avoid this`
`git remote add origin https://github.com/sebasmos/sebasmos.github.io.git`
`git add .`
`git commit -m "deploying from stractch"`
`git push -u origin master`
`git push origin master`
`git pull`
`git pull origin master`
`git pull --allow-unrelated-histories origin master`
`git pull origin master`
`git add .`
`git commit -m "done"`
`git push -u origin master`
`cd ..`

### Errors

For some related errors check

https://www.npmjs.com/package/webpack/v/4.44.2


### Test locally

`npm run start` or `npm start`

### Change favicon

https://www.favicon-generator.org/
