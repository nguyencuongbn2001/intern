// npm install @apollo/server express graphql cors body-parser
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import pkg from 'body-parser';
const { json } = pkg;
import { resolvers } from './schema/resolvers.js';
import { typeDefs } from './schema/typeDefs.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { verifyToken } from './AuthJWT/Jwt.js';
dotenv.config()
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(
  '/graphql',
  cors(),
  json(),
  expressMiddleware(server, {
    context: async ({ req }) => { 
      const verified = verifyToken(req.headers.token);
      return {verified}
    },
  }),
);
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gxsuafq.mongodb.net/test`)
  .then(async () => {
    await new Promise((resolve) => httpServer.listen({ port: process.env.PORT || 8080 }, resolve));
    console.log(`🚀 Server ready at http://localhost:8080/graphql`)
    console.log('Connect mongodb successfull')
  });
