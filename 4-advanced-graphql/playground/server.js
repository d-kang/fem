const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');
const fs = require('fs')
const path = require('path');

const filePath = path.join(__dirname, 'typedefs.graphql')
const typeDefs = fs.readFileSync(filePath, 'utf-8');

const serverOptions = {
  port: 4000,
  endpoint: '/graphql',
  playground: '/docs',
  tracing: true,
  debug: true,
}

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(serverOptions, ({ port }) => console.log(`server on http://localhost:4000/graphql`))