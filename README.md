# api_typeORM_typeGraphQL-ApolloServer

My first api with TypeORM, Type-GraphQL and ApolloServer

In this API you can allow to manage products.

## Technologies and packages used for development

- Node.js
- Express
- dotenv (for managing environment variables)
- apollo-server-express
- reflect-metadata
- type-graphql
- typeorm
- MySQL
- ts-node
- typescript

# Getting Started

This README.md will guide you on how to install and use this API.

## Installation and initialization

### Clone the repository or download the zip:

```bash
$ git clone https://github.com/leidymgdev/api_typeORM_typeGraphQL-ApolloServer.git
```

## To install the dependencies

Use **npm** or **yarn** to install the dependencies.

```bash
$ npm install
```

```bash
$ yarn install
```

## Dependencies used

```json
  "dependencies": {
        "apollo-server-express": "^2.19.1",
        "express": "^4.17.1",
        "mysql": "^2.18.1",
        "reflect-metadata": "^0.1.13",
        "type-graphql": "^1.1.1",
        "typeorm": "^0.2.29"
    },
    "devDependencies": {
        "@types/express": "^4.17.9",
        "@types/node": "^14.14.20",
        "nodemon": "^2.0.7",
        "ts-node": "^9.1.1",
        "typescript": "^4.1.3"
    }
```

## Initialize the server

```bash
npm start
```

If everything is ok you will get the next messages:

- _"API running on port 8081 in environment development"_
  _"Database graphqlts is connected."_

## Checking if it's running correctly

Open this [url](http://localhost:8081/graphql) in the browser.

You should get the GraphQL IDE and look the documentation explorer about queries and moutations.
