import FormCadastro from '../../components/FormCadastro'
import Header from '../../components/Header';

const Cadastro = () => {
    return (
        <>
        <div className="home-body">
            <Header />
            <div className="home-container">
                <h1>CADASTRAR</h1>
                <div className="home-card-container" id="login-card">
                    <FormCadastro />
                </div>
            </div>
        </div>
    </>
    )
}

export default Cadastro;