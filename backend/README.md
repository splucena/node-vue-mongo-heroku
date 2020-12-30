### Run babel

```
npx babel-node src/server.js
```

### Run node using nodemon

```
npx nodemon --exec npx babel-node src/server.js
```

### Mongo Basic Commands

```
show dbs # show existing databases
use vue-db # create database
db.products.insertMany([{}, {}]) # create products collection and insert data
db.products.find({}) # show all data from products
db.products.find({}).pretty() # formatted data
db.products.find({id: '123'}).pretty() # find by id, returns an array
db.products.findOne({id: '123'}).pretty() # returns an object

```
