import { Routes, Route } from "react-router-dom";
import { Inicial } from '../Paginas/inicial'
import { Lista } from "../Componentes/lista";
import { Perfil } from '../Paginas/perfil'
import { Serie } from "../Paginas/serie";
import { Favorito } from "../Componentes/favorito";

export function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Inicial/>}>
                <Route index element={<Lista/>}/>
                <Route index element={<Favorito/>}/>
                <Route path="perfil" element={<Perfil/>}/>
                <Route path="serie" element={<Serie/>}/>
            </Route>
        </Routes>
    )
}