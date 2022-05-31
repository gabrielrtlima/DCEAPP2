import React from 'react';
import './index.css';
import Header from '../../components/Header';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

const Sobre = () => {
    return (
        <div className="home-body">
            <Header />
            <div className="home-container">
                <h1>Sobre Nós</h1>
                <div className="home-card-container">
                    <div className="home-texto">
                        <p>
                            Nós do sistema DOAGUS temos como objetivo
                            prover uma forma de as pessoas divulgarem
                            com facilidade móveis que desejam doar.
                            Aqui você encontrará vários anúncios, contendo
                            em cada um deles uma forma de contatar o anunciante.
                            É possível, inclusive, filtrar por categorias de
                            preferência! Cadastre-se aqui no nosso site para ter
                            acesso a todas essas funcionalidades!
                            Somos os alunos Rafael Souza e Gabriel
                            Rodrigues do curso de Engenharia de Software da UPE
                            Campus Garanhuns e esperamos que você tenha uma ótima
                            experiência.
                        </p>
                        <br></br>
                        <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" endIcon={<SendIcon />}>
                                CADASTRAR
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;