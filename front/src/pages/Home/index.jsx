import './index.css';
import Header from '../../components/Header';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <div className="home-body">
                <Header />
                <div className="home-container">
                    <h1>Olá!</h1>
                    <div className="home-card-container">
                        {/* <Grid container>
                            <Grid item xs={6}> */}
                                <img className='img-logo' srcSet="./logo.png" />
                            {/* </Grid>
                            <Grid item xs={6}> */}
                                <div className="home-texto">
                                    {/*<p>
                                        DOAGUS é um sistema criado para intermediar a comunicação entre pessoas que desejam doar móveis, objetos, carros, entre outros em Garanhuns. A ideia surgiu de um projeto na Faculdade UPE, desenvolvido por alunos do curso de Engenharia de Software.
                                    </p>*/}
                                    <p>
                                        Bem-vindo ao sistema DOAGUS!
                                    </p>
                                </div>
                            {/* </Grid>
                        </Grid> */}
                    </div>
                    {/* <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            sx={{ marginTop: 2, fontSize: 20 }}
                        >
                            Login / Registrar
                        </Button>
                    </Link> */}
                    <Link to="/sobre" className='link-home'> 
                        Clique aqui para nos conhecer! 😍
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;