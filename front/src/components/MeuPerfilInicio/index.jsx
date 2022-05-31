import './index.css'

const MeuPerfilInicio = () => {
    return (
        <div className="container-meus-anuncios">
            <div className="container-meus-anuncios-title">
                SEU PERFIL
            </div>
            <div className="meu-perfil-container">
                <div className="avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OzagelduOqZsuVoyAYQcGI-sHhwK7dIxVA&usqp=CAU" />
                </div>
                <div className="informacoes">
                    <div className="informacoes-nome">NOME:
                        <div className="informacoes-card">{localStorage.getItem('usuarioNome')}</div>
                    </div>
                    <div className="informacoes-email">EMAIL:
                        <div className="informacoes-card">{localStorage.getItem('usuarioEmail')}</div>
                    </div>
                    <div className="informacoes-id">ID:
                        <div className="informacoes-card">{localStorage.getItem('usuarioId')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeuPerfilInicio;