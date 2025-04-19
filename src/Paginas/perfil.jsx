import estilos from './perfil.module.css'
import { FaRegUserCircle } from "react-icons/fa";

export function Perfil() {
    return(
        <div className={estilos.container}>
            <h2>Perfil</h2>
            <div className={estilos.cards}>
                <FaRegUserCircle className={estilos.user} />
                <h1>Usuário 1</h1>
            </div>
        </div>
    )
}