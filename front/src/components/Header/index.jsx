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
        localStorage.clear()
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
        const response = await fetch('https://dce-back.herokuapp.com/api/usuario/' + userEmail, {
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
        localStorage.setItem('tipoUsuario', data.tipoUsuario[0].name);
        console.log(localStorage.getItem('tipoUsuario'))
    }
    usuario()

    const handleMeusAnuncios = () => {
        navigate('/meus-anuncios');
    }

    const handlePainelAdmin = () => {
        navigate('/admin')
    }

    return(
        <header>
            <div className='header-logo'>
                <Link to="/">DOAGUS</Link>
            </div>
            <div className='header-navigate'>
                {userLogado ? (
                    <>
                        <div className="header-navigate-criar header-navigate-links">
                            <Link to="/criar-anuncio"><FaPlus /> An??ncio</Link>
                        </div>
                        <div className="header-navigate-inicio header-navigate-links">
                            <Link to="/inicio">In??cio</Link>
                        </div>
                        <div className="header-navigate-anuncios header-navigate-links">
                            <Link to="/anuncios">An??ncios</Link>
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
                                {/* <MenuItem onClick={handleClose}>Editar perfil</MenuItem> */}
                                {/* <MenuItem onClick={handleMeusAnuncios} >Meus an??ncios</MenuItem> */}
                                {localStorage.getItem('tipoUsuario') === 'Administrador' && (
                                    <MenuItem onClick={handlePainelAdmin}>Administra????o</MenuItem>
                                )}
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