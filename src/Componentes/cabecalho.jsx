import estilo from './cabecalho.module.css';

// estrutua React para componentes
export function Cabecalho() {
    return (
        // para cada return eu só posso renderizar um único componente
        <header className={estilo.container}>
            <h1>MovieFlix</h1>
        </header>
        
    )
}