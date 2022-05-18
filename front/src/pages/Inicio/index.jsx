import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import MeusAnunciosInicio from '../../components/MeusAnunciosInicio';
import './index.css';

const Inicio = () => {
    return(
        <>
        <Header />
        <div className="body-inicio">
            <div className="body-inicio-content">
                Olá, seja bem vindo {localStorage.getItem('usuarioNome')}.
            </div>
            <MeusAnunciosInicio />
        </div>
        </>
    );
}

export default Inicio;