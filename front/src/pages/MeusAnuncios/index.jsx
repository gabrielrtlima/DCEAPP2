import React from 'react';
import Header from '../../components/Header';
import MeusAnunciosComp from '../../components/MeusAnunciosComp';
import './index.css'

const MeusAnuncios = () => {
    return(
        <>
            <div className="meus-anuncios-page-body">
                <Header />
                <MeusAnunciosComp />
            </div>
        </>
    )
}

export default MeusAnuncios;