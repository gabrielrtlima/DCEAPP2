import Header from '../../components/Header';
import React from 'react';
import Anuncios from '../../components/Anuncios';



const AnunciosPage = () => {
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

export default AnunciosPage;