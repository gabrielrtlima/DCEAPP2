import { FaCar, FaPhone, FaMusic, FaBed, FaBookmark } from 'react-icons/fa';
import { AiFillGold } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import './index.css'

const Anuncios = () => {

    const [filtro, setFiltro] = useState('');
    const [anuncios, setAnuncios] = useState([]);
    const [anunciosRecentes, setAnunciosRecentes] = useState([]);

    useEffect(() => {
        const url = 'https://dce-back.herokuapp.com/api/anuncios'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setAnuncios(data)
            let anunciosR = data.reverse()
            anunciosR = data.slice(0, 3)
            setAnunciosRecentes(anunciosR)
        })
    }, [])
    console.log(anuncios)

    return(
        <div className='corpo-anuncio'>
            <div className="filtro-container">
                <div className="filtro-circulo"><FaCar size={50} values={"carro"} color="white" onClick={() => setFiltro("carro")}/>Autos e peças</div>
                <div className="filtro-circulo"><FaPhone size={50} values={"celular"} color="white" onClick={() => setFiltro("celular")}/>Eletrônicos e Celulares</div>
                <div className="filtro-circulo"><FaMusic size={50} values={"musica"} color="white" onClick={() => setFiltro("musica")}/>Músicas e Hobbies</div>
                <div className="filtro-circulo"><FaBed size={50}values={"moveis"} color="white" onClick={(e) => setFiltro("moveis")}/>Para sua casa</div>
                <div className="filtro-circulo"><AiFillGold size={50}values={"moveis"} color="white" onClick={(e) => setFiltro("outros")}/>Outros</div>
                <div className="filtro-circulo"><FaBookmark size={50}values={"moveis"} color="white" onClick={(e) => setFiltro("todos")}/>Todos Anúncios</div>
            </div>
            { (filtro == "Recentes" || filtro == "") ? (
                <>
                    <div className="anuncios-titulo-filtro-recente">
                        Anúncios Recentes
                    </div>
                    <div className="card-recentes">
                    {anunciosRecentes.map(anuncio => (
                            <div className="card-recente-anuncio">
                                <div className="anuncio-principal-foto"><img src={anuncio.imagem} /></div>
                                <div className="anuncio-nome">{anuncio.nome.toUpperCase()}</div>
                            </div>
                    ))}
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
                        { filtro === 'outros' && <h1>Outros</h1> }
                        { filtro === 'todos' && <h1>Todos os Anúncios</h1> }
                        </div>
                        <div className="container-anuncio-filtrado">
                            {filtro != "todos" ? (
                                anuncios.filter(anuncio => anuncio.categoria === filtro).map(anuncio => (
                                    <div className="card-anuncio-filtrado">
                                        <div className="anuncio-principal-foto">
                                            <img src={anuncio.imagem} />    
                                        </div>
                                        <div className="anuncio-titulo-desc">
                                            <div className="anuncio-titulo">{anuncio.nome.toUpperCase()}</div>
                                            <div className="anuncio-desc">
                                                <div className="anuncio-desc-texto">{anuncio.descricao}</div>
                                            </div>
                                        </div>
                                    </div>
                            ))) : (
                                anuncios.map(anuncio => (
                                    <div className="card-anuncio-filtrado">
                                        <div className="anuncio-principal-foto">
                                            <img src={anuncio.imagem} />
                                        </div>
                                        <div className="anuncio-titulo-desc">
                                            <div className="anuncio-titulo">{anuncio.nome.toUpperCase()}</div>
                                            <div className="anuncio-desc">
                                                <div className="anuncio-desc-texto">{anuncio.descricao}</div>
                                            </div>
                                            <div className="anuncio-contato">
                                                <div className="anuncio-desc-texto">Contato: {anuncio.contato}</div>
                                            </div>
                                        </div>
                                    </div>
                            )))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
    
}

export default Anuncios