import './index.css'
import { ImUsers, ImImages } from 'react-icons/im'
import { Link } from 'react-router-dom'

const ListarFuncAdmin = () => {
    return(
        <>
            <div className="container-listar">
                <div className="listar-title">PAINEL DE ADMINISTRAÇÃO</div>
                <div className="container-listar-cards">
                    <Link to="" className="listar-box">
                        <ImUsers size={90}/>
                        Usuários
                    </Link>
                    <Link to="" className="listar-box">
                        <ImImages size={90}/>
                        Anúncios
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ListarFuncAdmin