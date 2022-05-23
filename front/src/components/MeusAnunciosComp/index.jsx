import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './index.css'

const MeusAnunciosComp = () => {
    const [meusAnuncios, setMeusAnuncios] = useState([])

    useEffect(() => {
        const url = 'http://localhost:8080/api/anuncios/'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMeusAnuncios(data.reverse().filter(anuncio => anuncio.usuario_id == localStorage.getItem('usuarioId')))
            })
    }, [''])

    console.log("Meus anuncios: ", meusAnuncios)
    return(
        <div className="meus-anuncios-body">
            <div className="meus-anuncios-titulo">
                <h1>Meus Anúncios</h1>
            </div>
            <div className="meus-anuncios-container">
                {meusAnuncios.map(anuncio => (
                    <>
                        <div className="meus-anuncios-card">
                            <div className="meus-anuncios-card-img">
                                <img src={anuncio.imagem} alt="" className='meus-anuncios-img'/>
                            </div>
                            <div className="meus-anuncios-card-title-desc">
                                <div className="meus-anuncios-card-titulo">
                                    {anuncio.nome}
                                </div>
                                <div className="meus-anuncios-card-desc">
                                    {anuncio.descricao}
                                </div>
                            </div>
                        </div>
                        <div className="button-meus-anuncio">
                            <Button variant="outlined" color="error">
                                EXCLUIR
                            </Button>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default MeusAnunciosComp