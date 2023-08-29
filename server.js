const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const PORT = 4000;

const schema = buildSchema(
  `
  type Query {
    hello: String
  }
  `
);


const root = {
  hello: () => {
   return "Hello world!"
  },
}


app.use('/graphql', graphqlHTTP({
 schema: schema,
 rootValue: root,
 graphiql: true
}));



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


