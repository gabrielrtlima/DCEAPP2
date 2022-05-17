import { FaCar, FaPhone, FaMusic, FaBed } from 'react-icons/fa';
import React, { useState } from 'react';
import './index.css'

const Anuncios = () => {
    
    const [filtro, setFiltro] = useState('carro');

    return(
        <div className='corpo-anuncio'>
            <div className="filtro-container">
                <div className="filtro-circulo"><FaCar size={50} values={"carro"} onClick={() => setFiltro("carro")}/>Autos e peças</div>
                <div className="filtro-circulo"><FaPhone size={50} values={"celular"} onClick={() => setFiltro("celular")}/>Eletrônicos e Celulares</div>
                <div className="filtro-circulo"><FaMusic size={50} values={"musica"} onClick={() => setFiltro("musica")}/>Músicas e Hobbies</div>
                <div className="filtro-circulo"><FaBed size={50}values={"moveis"} onClick={(e) => setFiltro("Recentes")}/>Para sua casa</div>
            </div>
            { (filtro == "Recentes") ? (
                <>
                    <div className="anuncios-titulo-filtro-recente">
                        Anúncios Recentes
                    </div>
                    <div className="card-recentes">
                        <div className="card-recente-anuncio">
                            <div className="anuncio-foto">{"<IMAGEM ANUNCIO>"}</div>
                            <div className="anuncio-nome">{"<TITULO ANUNCIO>"}</div>
                        </div>
                        <div className="card-recente-anuncio">
                            <div className="anuncio-foto">{"<IMAGEM ANUNCIO>"}</div>
                            <div className="anuncio-nome">{"<TITULO ANUNCIO>"}</div>
                        </div>
                        <div className="card-recente-anuncio">
                            <div className="anuncio-foto">{"<IMAGEM ANUNCIO>"}</div>
                            <div className="anuncio-nome">{"<TITULO ANUNCIO>"}</div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="body-anuncio-filtrado">
                        <div className="anuncios-titulo-filtro-recente">
                        { filtro === 'carro' && <h1>Autos e peças</h1> }
                        { filtro === 'celular' && <h1>Eletrônicos e Celulares</h1> }
                        { filtro === 'musica' && <h1>Músicas e Hobbies</h1> }
                        { filtro === 'moveis' && <h1>Para sua casa</h1> }
                        </div>
                        <div className="container-anuncio-filtrado">
                            <div className="card-anuncio-filtrado">
                                <div className="anuncio-foto">{"<IMAGEM ANUNCIO>"}</div>
                                <div className="anuncio-titulo-desc">
                                    <div className="anuncio-titulo">{"TITULO ANUNCIO"}</div>
                                    <div className="anuncio-desc">
                                        <div className="anuncio-desc-texto">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-anuncio-filtrado">
                                <div className="anuncio-foto">{"<IMAGEM ANUNCIO>"}</div>
                                <div className="anuncio-titulo-desc">
                                    <div className="anuncio-titulo">{"TITULO ANUNCIO"}</div>
                                    <div className="anuncio-desc">
                                        <div className="anuncio-desc-texto">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor ctetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-anuncio-filtrado">
                                <div className="anuncio-foto">{"<IMAGEM ANUNCIO>"}</div>
                                <div className="anuncio-titulo-desc">
                                    <div className="anuncio-titulo">{"TITULO ANUNCIO"}</div>
                                    <div className="anuncio-desc">
                                        <div className="anuncio-desc-texto">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
    
}

export default Anuncios