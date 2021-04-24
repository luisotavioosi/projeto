import express, { request, response } from "express";
import "./src/database";
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
        message: "Teste get"
    });

});
app.post("/",(request, response) => {
    return response.json({message: "usuario logado"})
});
app.listen(3333, () => console.log("server run 3333"));