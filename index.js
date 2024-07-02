const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./controllers/typeDefs.js");
const { resolvers } = require("./controllers/resolvers.js");
require("./drivers/connect-db.js");

const app = express();

async function start() {
  app.use(cors());
  app.use(express.json());
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
  });
  await apollo.start();
  apollo.applyMiddleware({ app });
  app.set("PORT", process.env.PORT || 4000);
  app.use("/", (req, res) =>
    res.status(200).send("Conectado correctamente <3")
  );

  app.listen(app.get("PORT"), () =>
    console.log(`Server ready at port ${app.get("PORT")}`)
  );
}

start();
