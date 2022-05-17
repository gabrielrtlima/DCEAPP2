import Header from '../../components/Header';
import Filtro from '../../components/Filtro';
import React from 'react';
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
                    <Filtro />                    
                </div>
            </div>
        </>
    );
}

export default Inicio;