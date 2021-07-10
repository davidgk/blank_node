## Backend

### Useful commands

* Create the drop old db test and recreate with migrations ( test) 

npm run recreate_db


* Create a Model:

sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
