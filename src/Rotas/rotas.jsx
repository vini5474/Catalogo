import { Routes, Route } from "react-router-dom";
import { Inicial } from '../Paginas/inicial'
import { Lista } from "../Componentes/lista";
import { Perfil } from '../Paginas/perfil'

export function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Inicial/>}>
                <Route index element={<Lista/>}/>
                <Route path="perfil" element={<Perfil/>}/>
            </Route>
        </Routes>
    )
}