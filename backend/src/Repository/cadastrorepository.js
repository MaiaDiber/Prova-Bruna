import conexao from "./connection.js";

export async function EnviarCadastro(corpo) {
    const comando = `INSERT INTO Intencoes (Nome, Data_nascimento, email)
                     VALUES (?, ?, ?)`

    const connection = await conexao


    const [resposta] = await connection.query(comando, [
        corpo.nome, 
        corpo.data_nascimento, 
        corpo.email
    ]);
    
    return resposta;
}