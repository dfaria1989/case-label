# Doctor Case Label API

## Index

[1. Getting Started BACK](#markdown-header-back)

[2. Getting Started Front](#markdown-header-front)

[3. Tests](#markdown-header-tests)

----


## Getting Started Back-End

For the initial usage you should have docker compose installed on your machine.

### 1. Clone this rep to your local machine.

### 2. **.env** file

The **.env** file must contains the following environment vars:

```env
# Port
PORT=3060

# Debug
LOG_LEVEL='error'

# JWT
JWT_SECRET = gyantchallenge

# DB Configurations
MONGODB_URI = mongodb://mongo:27017/
MONGODB_DB_MAIN = case-label
```

### 3. Run project into docker container
- Open local cli in your root project and run:

```nodejs
npm run up
```
**Wait a few minutes to complete...**

It will install all the dependencies on your machine, copy them and initialize the docker container.

### 4. Run seeds
- After step 3, run the command below to populate collections into conditions document

```nodejs
npm run seed
```

### 4. Test the endpoints (Optional)
- To test all cases, you must import the collection Gyant-challenge.postman_collection into Postamn(is in project root).

Must be run by the respective order:
- Add user
- Login with chosen user (save the jwt)
- Create some cases (use the Authorization with bearer token)
- Get conditions (use the Authorization with bearer token)
- Get cases (use the Authorization with bearer token)
- Patch case label (use the id from conditions && cases and use the Authorization with bearer token)

----

## Getting Started Front-End

For the initial usage you should have back-end running on your machine.

### 1. **.env** file

The **.env** file must contains the following environment vars:

```env
REACT_APP_API_URL = http://localhost:3060/api/
```

### 2. Run project on your local machine
- Open local cli in /web root project and run:

```nodejs
npm install && npm start
```
It will install all the dependencies on your machine and launch the react app in your local machine.

### 3. App credentials - Login
  After you ran the back-end seeders, you must use these credentials to login:
- username: joesmith
- password: joesmith


## Tests

The tests coverage 0% of components... inc

## Built With

* [nodejs](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [expressjs](https://expressjs.com/) - Nodejs framework used
* [typescript](https://www.typescriptlang.org/) - TypeScript extends JavaScript by adding types to the language. TypeScript speeds up your development experience by catching errors and providing fixes...
* [mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js
## Logs

* Use [winston](https://www.npmjs.com/package/winston) to deal with logs  

## Roadmap

* [x] Define initial structure
* [x] Integrate TypeScript language programming
* [x] Add all required seeds
* [ ] Add required tests
* [ ] Add logs
* [ ] Add swagger documentation
