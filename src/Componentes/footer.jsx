import estilos from './footer.module.css'

export function Footer() {
    return (
        <footer className={estilos.container}>
            <h2>Plataforma de filmes</h2>
            <h2>&copy; Todos os direitos reservados</h2>
        </footer>
    )
}