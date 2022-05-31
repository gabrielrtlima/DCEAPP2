import React, { useEffect, useState } from 'react';

const MeusAnunciosInicio = () => {
    const [todosAnuncios, setTodosAnuncios] = useState([]);
    const [meusAnuncios, setMeusAnuncios] = useState([]);
    const [anunciosRecentes, setAnunciosRecentes] = useState([]);

    useEffect(() => {
        const url = 'https://dce-back.herokuapp.com/api/anuncios'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setTodosAnuncios(data)
            let meusAnuncios = data.filter(anuncio => anuncio.usuario_id == localStorage.getItem('usuarioId'))
            // setMeusAnuncios(meusAnuncios)
            setMeusAnuncios(meusAnuncios)
            let anunciosR = meusAnuncios.reverse()
            anunciosR = anunciosR.slice(0, 2)
            setAnunciosRecentes(anunciosR)
        })
    }, [])

    console.log(anunciosRecentes)
    return(
        <div className="container-meus-anuncios">
            <div className="container-meus-anuncios-title">
                SEUS ÚLTIMOS ANÚNCIOS
            </div>
            <div className="container-meus-anuncios-body">
            {anunciosRecentes.map(anuncio => (
                <div className="container-card">
                    <div className="card-meus-anuncios">
                        <div className="card-meus-anuncios-img">
                            <img src={anuncio.imagem} />
                        </div>
                        <div className="card-meus-anuncios-title">
                            {anuncio.nome.toUpperCase()}
                        </div>   
                    </div>
                </div>
            ))}
            </div>

            {/* <div className="container-card">
                    <div className="card-meus-anuncios">
                        <div className="card-meus-anuncios-img">
                            <img src={"anuncio.imagem"} />
                        </div>
                        <div className="card-meus-anuncios-title">
                            {"anuncio.nome"}
                        </div>   
                    </div>
            </div> */}
        </div>
    )
}

export default MeusAnunciosInicio;