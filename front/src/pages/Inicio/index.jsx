import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import './index.css';

const Inicio = () => {

    const [meusAnuncios, setMeusAnuncios] = useState([]);
    const [meusAnunciosMostrar, setMeusAnunciosMostrar] = useState([]);

    const usuarioId = localStorage.getItem('usuarioId');
    console.log(usuarioId)

    return(
        <>
        <Header />
        <div className="body-inicio">
            <div className="body-inicio-content">
                Olá, seja bem vindo {localStorage.getItem('usuarioNome')}.
            </div>
            <div className="container-meus-anuncios">
                <div className="container-meus-anuncios-title">
                    SEUS ANÚNCIOS
                </div>
                <div className="container-card">
                    {/* {meusAnunciosMostrar.map(anuncio => {
                        if(anuncio.usuario_id == usuarioId) { */}
                            <div className="card-meus-anuncios">
                                <div className="card-meus-anuncios-img">
                                    <img src={"anuncio.imagem"} />
                                </div>
                                <div className="card-meus-anuncios-title">
                                    {"anuncio.nome"}
                                </div>   
                            </div>
                        {/* }
                    })} */}
    
                </div>
            </div>
        </div>
        </>
    );
}

export default Inicio;