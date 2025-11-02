import mysql from 'mysql2/promise'

const conexao = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "nardi4321",
    database: "Prova_bruna"
})

console.log("FUNCIONANDO A CONEXÃO")

export default conexao