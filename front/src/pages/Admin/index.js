import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Table from '../../components/Tabela/index';
import Select from '../../components/Select/index';
import MenuOpen from '../../components/MenuOpen/index';
import { anuncioDelete, userDelete } from './actions'
import './index.css';

const Admin = () => {
    const [anuncios, setAnuncios] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const url = 'https://dce-back.herokuapp.com/api/anuncios'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setAnuncios(data)
        })
    }, [])

    useEffect(() => {
        const url = 'https://dce-back.herokuapp.com/api/usuarios'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setUsuarios(data)
        })
    }, [])

    function createDataAnuncio(id, nome, categoria, usuario_id, options) {
        return {
          id,
          nome,
          categoria,
          usuario_id,
          options,
        };
    }
      
    function createDataUser(id, nome, email, options) {
        return {
            id,
            nome,
            email,
            options,
        };
    }

    const rowsAnuncio = (anuncios) => {
        return anuncios.map(anuncio => (
            createDataAnuncio(
                anuncio.id, 
                anuncio.nome, 
                anuncio.categoria, 
                anuncio.usuario_id,
                <MenuOpen 
                    id={anuncio.id}
                    deleteFunction={anuncioDelete}
                />
            )
        ))
    }
    
    const rowsUser = (users) => {
        return users.map(user => (
            createDataUser(
                user.id, 
                user.nome, 
                user.email, 
                <MenuOpen 
                    id={user.id}
                    deleteFunction={userDelete}
                />
            )
        ))
    }

    return(
        <>
            <Header />
            <div className="body-inicio">
                <div className="body-inicio-content">
                    <Table 
                        rowsAnuncio={rowsAnuncio(anuncios)}
                        rowsUser={rowsUser(usuarios)}
                    />
                </div>
            </div>
        </>
    );
}

export default Admin;