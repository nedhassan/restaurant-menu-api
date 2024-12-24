const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema.js');
const resolvers = require('./api/menu.js');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
