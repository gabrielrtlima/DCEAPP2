import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { FaAngleDown } from "react-icons/fa";

import './index.css'

const Header = () => {
    const [userLogado, setUserLogado] = useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (e) => {
        e.preventDefault();
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <header>
            <div className='header-logo'>
                <Link to="/">DOAGUS</Link>
            </div>
            <div className='header-navigate'>
                {userLogado ? (
                    <>
                        <div className="header-navigate-inicio">
                            <Link to="/inicio">Início</Link>
                        </div>
                        <div className="header-navigate-anuncios">
                            <Link to="/inicio">Anúncios</Link>
                        </div>
                        <div className="header-navigate-perfil">
                            <Link to="" onClick={handleMenu}>PERFIL</Link>
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
                                <MenuItem onClick={handleClose}>Sair</MenuItem>
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