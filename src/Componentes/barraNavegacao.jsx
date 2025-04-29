import estilos from './barraNavegacao.module.css';
import { Link } from 'react-router-dom';
// estrutura componente
export function BarraNavegacao() {
    //eu só posso retornar 1 componente
    return (
        <nav className={estilos.container}>
            <ul>
                <Link to="/"><li>Filmes</li></Link>
                <Link to="serie"><li>Favoritos</li></Link>
                <Link to="perfil"><li>Perfils</li></Link>
            </ul>
        </nav>
    )
}