import 'reflect-metadata';
import express, { response } from 'express';
import './database';
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

app.use(express.json());

app.use(router);

app.listen(3333, ()=> console.log("Servidor está rodando!!"));
