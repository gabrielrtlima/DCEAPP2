import './index.css';
import Header from '../../components/Header';

const Home = () => {
    return (
        <>
            <div className="home-body">
                <Header />
                <div className="home-container">
                    <div className="home-card-container">
                        {/* <div className="home-img">
                        </div> */}
                        <img srcSet="./logo.png"/>
                        <div className="home-texto">
                            <p>
                                DOAGUS é um sistema criado para intermediar a comunicação entre pessoas que desejam doar móveis em Garanhuns. A ideia surgiu de um projeto na Faculdade UPE, desenvolvido por alunos do curso de Engenharia de Software.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;