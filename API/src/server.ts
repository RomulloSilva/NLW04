import express, { response } from 'express';

const app = express();

/**
 * GET      = Busca
 * POST     = Salvar
 * PUT      = Alterar
 * DELETE   = Deletar
 * PATCH    = Alteração especifica
 */

 //http://localhost:3333/users

app.get("/", (request, response) =>{

    return response.json({message: "Hello my name is Romulo"});
});

app.post("/", (request, response) =>{

    return response.json({message: "Os dados foram salvos com sucesso!!"});
});

app.listen(3333, ()=> console.log("Servidor está rodando!!"));
