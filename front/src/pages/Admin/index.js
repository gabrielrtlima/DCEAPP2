import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Table from '../../components/Tabela/index';
import Select from '../../components/Select/index';
import MenuOpen from '../../components/MenuOpen/index';
import './index.css';

const Admin = () => {
    function createDataAnuncio(id, nome, categoria, usuario_id, options) {
        return {
          id,
          nome,
          categoria,
          usuario_id,
          options,
        };
    }
      
    function createDataUser(id, nome, email, telefone, options) {
        return {
            id,
            nome,
            email,
            telefone,
            options,
        };
    }

    const rowsAnuncio = [
        createDataAnuncio(1, "Computador i7", "tecnologia", 3, <MenuOpen />),
        createDataAnuncio(2, "Computador i7", "tecnologia", 3, <MenuOpen />),
        createDataAnuncio(3, "Computador i7", "tecnologia", 3, <MenuOpen />),
        createDataAnuncio(4, "Computador i7", "tecnologia", 3, <MenuOpen />),
        createDataAnuncio(5, "Computador i7", "tecnologia", 3, <MenuOpen />),
        createDataAnuncio(6, "Computador i7", "tecnologia", 3, <MenuOpen />),
        createDataAnuncio(7, "Computador i7", "tecnologia", 3, <MenuOpen />),
    ];
    
    const rowsUser = [
        createDataUser(1, "Rafael Souza", "rafael@example.com", "+55111111111", <MenuOpen />),
        createDataUser(2, "Rafael Souza", "rafael@example.com", "+55111111111", <MenuOpen />),
        createDataUser(3, "Rafael Souza", "rafael@example.com", "+55111111111", <MenuOpen />),
        createDataUser(4, "Rafael Souza", "rafael@example.com", "+55111111111", <MenuOpen />),
        createDataUser(5, "Rafael Souza", "rafael@example.com", "+55111111111", <MenuOpen />),
        createDataUser(6, "Rafael Souza", "rafael@example.com", "+55111111111", <MenuOpen />),
        createDataUser(7, "Rafael Souza", "rafael@example.com", "+55111111111", <MenuOpen />),
    ];

    return(
        <>
            <Header />
            <div className="body-inicio">
                <div className="body-inicio-content">
                    <Table 
                        rowsAnuncio={rowsAnuncio}
                        rowsUser={rowsUser}
                    />
                </div>
            </div>
        </>
    );
}

export default Admin;