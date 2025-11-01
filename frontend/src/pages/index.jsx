import { useState } from 'react'
import './index.scss'



export default function Teens(){
    const [nome, setNome] = useState('')
    const [date, seDate] = useState(0)
    const [email, setEmail] = useState('')



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

                    <label> <p>Nome completo</p>
                        <input type="text" placeholder='Didite seu nome' value={nome} onChange={(e) => setNome(e.target.value)} />
                        </label>
                        <label> <p>Data de nascimento</p>
                            <input type="date" placeholder='Informe a data de nascimento'  value={date} onChange={(e) => seDate(e.target.value)} />
                            </label>
                            <label> <p>E-mail</p>
                                <input type="text" placeholder='Digite seu e-mail'  value={email} onChange={(e) => setEmail(e.target.value)} />
                                </label>

                                <button type='button'>Cadastre-se</button>
                </div>

                

                
            
        </section>
       </section>
        </>
    )
}