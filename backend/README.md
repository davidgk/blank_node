## Backend

### Useful commands

* Create the drop old db test and recreate with migrations ( test) 

npm run recreate_db

## For development

```
 NODE_ENV=development npm run db_create
 NODE_ENV=development npm run db_migrate

```

## For production

```
 NODE_ENV=production npm run db_create
 NODE_ENV=production npm run db_migrate
 npm run start
```


## From Docker ( Broken : TO be fixed)

Will need prod DB up and migrated 

```
    dkc up -d --no-recreate backend
```


