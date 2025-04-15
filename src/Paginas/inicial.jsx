import { BarraNavegacao } from "../Componentes/barraNavegacao";
import { Cabecalho } from "../Componentes/cabecalho";

import { Footer } from "../Componentes/footer";
import { Outlet } from "react-router-dom";

export function Inicial() {
    return(
        <>
            <Cabecalho/>
            <BarraNavegacao/>
            <Outlet/>
            <Footer/>
            
        </>
    )
}