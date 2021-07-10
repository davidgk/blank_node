## Backend

### Useful commands

* Create the drop old db test and recreate with migrations ( test) 

npm run recreate_db

## For development

```
 NODE_ENV=development npm run db_create
 NODE_ENV=development npm run db_migrate

```

* Create a Model:

sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
