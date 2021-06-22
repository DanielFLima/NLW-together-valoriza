import "reflect-metadata";
import express from 'express';
import { router } from "./routes";
import "./database";
//yarn add @type/express

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000,() =>{
  console.log("Server Rodando em http://localhost:3000");
})