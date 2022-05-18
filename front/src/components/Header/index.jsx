import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { FaAngleDown, FaPlus } from "react-icons/fa";


import './index.css'

const Header = () => {
    const navigate = useNavigate();
    const [userLogado, setUserLogado] = useState(false);
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const userEmail = localStorage.getItem('usuarioEmail');

    const handleMenu = (e) => {
        e.preventDefault();
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleQuit = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuarioEmail');
        setUserLogado(false);
        setAnchorEl(null);
        navigate('/');
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setUserLogado(true);
        } else {
            setUserLogado(false);
        }
    }, [])

    const usuario = async () => {
        const response = await fetch('http://localhost:8080/api/usuario/' + userEmail, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        const data = await response.json();
        setNomeUsuario(data.nome)
        localStorage.setItem('usuarioNome', data.nome);
        localStorage.setItem('usuarioEmail', data.email);
        localStorage.setItem('usuarioId', data.id);
        localStorage.setItem('tipoUsuario', data.tipoUsuario[0].id);
        
    }
    usuario();

    return(
        <header>
            <div className='header-logo'>
                <Link to="/">DOAGUS</Link>
            </div>
            <div className='header-navigate'>
                {userLogado ? (
                    <>
                        <div className="header-navigate-criar header-navigate-links">
                            <Link to=""><FaPlus /> Anúncio</Link>
                        </div>
                        <div className="header-navigate-inicio header-navigate-links">
                            <Link to="/inicio">Início</Link>
                        </div>
                        <div className="header-navigate-anuncios header-navigate-links">
                            <Link to="/anuncios">Anúncios</Link>
                        </div>
                        <div className="header-navigate-perfil header-navigate-links">
                            <Link to="" onClick={handleMenu}>{nomeUsuario}</Link>
                            <FaAngleDown onClick={handleMenu}/>
                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Editar perfil</MenuItem>
                                <MenuItem onClick={handleClose}>Meus anúncios</MenuItem>
                                <MenuItem onClick={handleQuit}>Sair</MenuItem>
                            </Menu>
                        </div>  
                    </>
                ) : (
                    <>
                        <div className="header-navigate-home">
                        <Link to='/'>HOME</Link>
                        </div>
                        <div className="header-navigate-login">
                            <Link to='/login'>ENTRAR</Link>
                        </div>
                        <div className="header-navigate-register">
                            <Link to='/sobre' on>SOBRE</Link>
                        </div>  
                    </>
                )}

            </div>
        </header>
    );
}

export default Header