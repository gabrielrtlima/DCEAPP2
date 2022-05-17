import Header from '../../components/Header';
import React from 'react';
import Anuncios from '../../components/Anuncios';
import { Navigate } from 'react-router-dom';

import './index.css';

const Inicio = () => {
    // if(localStorage.getItem('token') === null){
    //     return <Navigate to="/login" />
    // }

    return(
        <>
            <div className="inicio-body">
                <Header />
                <div className="inicio-container">
                    <Anuncios />        
                </div>
            </div>
        </>
    );
}

export default Inicio;