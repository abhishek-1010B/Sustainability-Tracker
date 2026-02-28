const express = require('express');
// import apollo server
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const path = require('path');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  // REMOVE the production static check here. 
  // Vercel handles static files via the 'rewrites' in vercel.json.
  
  db.once('open', () => {
    // Only listen if NOT on Vercel
    if (process.env.NODE_ENV !== 'production') {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
      });
    }
  });
};

startApolloServer(typeDefs, resolvers);

// MANDATORY FOR VERCEL
module.exports = app;

// call the async function to start the server
startApolloServer(typeDefs, resolvers);