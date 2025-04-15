import { BarraNavegacao } from "../Componentes/barraNavegacao";
import { Cabecalho } from "../Componentes/cabecalho";
import { Conteudo } from "../Componentes/conteudo";
import { Footer } from "../Componentes/footer";

export function Inicial() {
    return(
        <>
            <Cabecalho/>
            <BarraNavegacao/>
            <Conteudo/>
            <Footer/>
        </>
    )
}