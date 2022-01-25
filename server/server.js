// const express = require('express');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.use(require('./routes'));

// app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));


//for passport insrt mongoose


const express = require('express');
//passport strategies

require("./models/User");
require("./services/passport");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");




const {ApolloServer} = require('apollo-server-express');
const path = require('path');
require("dotenv").config();

const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');
//const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();



// call passport authRoutes

require("./routes/authRoutes")(app);




const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:  ({req, res}) => ({ req, res }), authMiddleware
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//cookieSession for passport
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());




// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
