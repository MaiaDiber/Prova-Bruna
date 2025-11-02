import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import api from './axios'
import './index.scss'

export default function Teens(){
    const [nome, setNome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [email, setEmail] = useState('')
    const [carregando, setCarregando] = useState(false)

    const Navigate = useNavigate()

    async function cadastrarUsuario() {
        if (!nome || !dataNascimento || !email) {
            alert('Preencha todos os campos!')
            return
        }

        setCarregando(true)

        try {
            const dadosUsuario = {
                nome: nome,
                data_nascimento: dataNascimento,
                email: email
            }

           
            const resposta = await api.post('/Cadastrar', dadosUsuario)
            
            alert('Cadastrado com sucesso!')
            
           
            setNome('')
            setDataNascimento('')
            setEmail('')

            Navigate('/Quiz')
            
        } catch (err) {
            if (err.response) {
                alert(err.response.data.erro || 'Erro ao cadastrar')
            } else if (err.request) {
                alert('Erro de conexão. Verifique se o servidor está rodando.')
            } else {
                alert('Erro: ' + err.message)
            }
        } finally {
            setCarregando(false)
        }
    }

    return(
        <>
       <section className='all'>
         <section className='jovem-b'>
                <h1><strong>RESOLVA SEUS PROBLEMAS</strong> </h1>

                <div className="row"></div>

                <div className="avo">
                    <div className="text">
                        <h2>Preencha para se cadastrar: </h2>
                    </div>

                    <label> 
                        <p>Nome completo</p>
                        <input 
                            type="text" 
                            placeholder='Digite seu nome' 
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)} 
                            disabled={carregando}
                        />
                    </label>
                    
                    <label> 
                        <p>Data de nascimento</p>
                        <input 
                            type="date" 
                            value={dataNascimento} 
                            onChange={(e) => setDataNascimento(e.target.value)} 
                            disabled={carregando}
                        />
                    </label>
                    
                    <label> 
                        <p>E-mail</p>
                        <input 
                            type="email" 
                            placeholder='Digite seu e-mail' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            disabled={carregando}
                        />
                    </label>

                    <button 
                        type='button' 
                        onClick={cadastrarUsuario}
                        disabled={carregando}
                    >
                        {carregando ? 'Cadastrando...' : 'Cadastre-se'}
                    </button>
                </div>
            </section>
       </section>
        </>
    )
}