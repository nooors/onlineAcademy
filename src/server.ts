import express from "express";
import compression from "compression";
import cors from "cors";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";

import expressPlayGround from "graphql-playground-middleware-express";

const app = express();

app.use(cors());
app.use(compression());

const server = new ApolloServer({
  schema,
  introspection: true,
});

server.applyMiddleware({ app });

app.get(
  "/",
  expressPlayGround({
    endpoint: "/graphql",
  }),
);

const httpServer = createServer(app);

const PORT = 5200;

httpServer.listen(
  {
    port: PORT,
  },
  () =>
    console.log(
      `Acdemy online server runing on http://localhost:${PORT}/graphql`,
    ),
);
