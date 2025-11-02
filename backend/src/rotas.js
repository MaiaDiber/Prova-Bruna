import endpoint from "./controller/cadastroController.js";

export default function Rotas(servidor) {
    servidor.use(endpoint) 
}