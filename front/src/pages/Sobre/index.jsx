import React from 'react';
import './index.css';
import Header from '../../components/Header';

const Sobre = () => {
    return (
        <div className="home-body-sobre">
            <Header />
            <div className="home-container">
                <h1>Sobre Nós</h1>
                <div className="home-card-container-sobre">
                    <div className="home-img">
                        <img src="https://seeklogo.com/images/U/upe-universidade-de-pernambuco-logo-22AD28A03D-seeklogo.com.png" alt=""/>
                    </div>
                    <div className="home-texto">
                        {/* <p>
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
                            Campus Gara
                        </p> */}
                        <p>
                            O sistema DOAGUS foi desenvolvido por alunos do curso de Engenharia de Software da UPE Campus Garanhuns. O sistema foi desenvolvido para auxiliar pessoas que desejam doar, ajudando-as a encontrar pessoas que necessitam de algo.
                        </p>
                        <div className="card-aluno">
                            <div className="aluno-foto">
                                <img src="./ivaldir.png" alt=""/>
                            </div>
                            <div className="aluno-texto">
                                <p>
                                    Prof. Dr. Ivaldir Honorio
                                </p>
                            </div>
                        </div>
                        <div className="card-aluno">
                            <div className="aluno-foto">
                                <img src="./gabriel.png" alt=""/>
                            </div>
                            <div className="aluno-texto">
                                Gabriel Rodrigues
                            </div>
                        </div>
                        <div className="card-aluno">
                            <div className="aluno-foto">
                                <img src="./rafael.png" alt=""/>
                            </div>
                            <div className="aluno-texto">
                                Rafael Souza
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;