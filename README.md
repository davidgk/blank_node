## Example blank project for start new stuffs
  
this project use sequelize (with postgres) , docker , docker compose

### To run tests
 
```
    docker-compose up -d --no-recreate db
    cd backend
    npm run recreate_db
    npm run db_migrate
    npm run test
```

