import estilos from './perfil.module.css'
import { FaRegUserCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

export function Perfil() {
    return(
        <div className={estilos.container}>
            <h2>Perfil</h2>
            <div className={estilos.sectionCards}>
                <div className={estilos.card}>
                    <FaRegUserCircle className={estilos.user} />
                    <h1>Usuário 1</h1>
                </div>
                <div className={estilos.card}>
                    <FaRegUserCircle className={estilos.user} />
                    <h1>Usuário 2</h1>
                </div>
                <div className={estilos.card}>
                    <FaRegUserCircle className={estilos.user} />
                    <h1>Usuário 3</h1>
                </div>
            </div>
        </div>
    )
}