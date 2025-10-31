import {Route, Routes, BrowserRouter} from 'react-router'
import Teens from './pages'
import Quiz from './pages/quiz'


export default function Navegação (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Teens/>} />
            <Route path='/Quiz' element={<Quiz/>} />
        </Routes>
        </BrowserRouter>
    )
}