import './index.scss'
import { Link } from 'react-router'


export default function Teens(){
    return(
        <>
        <section className='jovem-b'>
            
                <h1><strong>RESOLVA SEUS PROBLEMAS</strong> </h1>

                <Link to={'/Quiz'} className='botão' type='button' >
                 <p>Clique aqui</p>
                  </Link>
            
        </section>
        </>
    )
}