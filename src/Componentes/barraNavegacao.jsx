import estilos from './barraNavegacao.module.css';
// estrutura componente
export function BarraNavegacao() {
    //eu só posso retornar 1 componente
    return (
        <nav className={estilos.container}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Perfil</li>
            </ul>
        </nav>
    )
}