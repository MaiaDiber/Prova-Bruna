import { EnviarCadastro } from "../Repository/cadastrorepository.js";
import { Router } from "express";

const endpoint = Router()

endpoint.post('/Cadastrar', async (req, resp) => {
    try {
        let corpo = req.body;
        
        // VALIDAÇÃO DOS CAMPOS
        if (!corpo.nome || !corpo.data_nascimento || !corpo.email) {
            return resp.status(400).send({
                erro: "Todos os campos são obrigatórios"
            })
        }

        let usuario = await EnviarCadastro(corpo)

        resp.send({ 
            mensagem: "Usuário cadastrado com sucesso",
            id: usuario.insertId 
        })
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoint