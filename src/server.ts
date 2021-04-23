import express, { request, response } from "express";
const app = express();

/**
 * GET = buscas
 * POST = criacao
 * PUT = Alteração
 * Delete = deletar
 * Patch = alterar uma informação especifica
 */
app.get("/", (request, response) => {
    return response.json({
        message: "Ola mundo"
    });

});
app.post("/",(request, response) => {
    return response.json({message: "usuario logado"})
});
app.listen(3333, () => console.log("server run 3333"));