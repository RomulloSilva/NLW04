import 'reflect-metadata';
import express, { response } from 'express';
import createConnection from  './database';
import { router } from './router';

const app = express();




/**
 * GET      = Busca
 * POST     = Salvar
 * PUT      = Alterar
 * DELETE   = Deletar
 * PATCH    = Alteração especifica
 */

 //http://localhost:3333/users

createConnection();

app.use(express.json());

app.use(router);

export {app};