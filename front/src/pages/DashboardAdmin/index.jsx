import React, { useEffect, useState } from 'react'
import ListarFuncAdmin from '../../components/ListarFuncAdmin'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import './index.css'

const DashBoardAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('tipoUsuario') === 'Administrador'){
            setIsAdmin(true)
        }else {
            navigate('/inicio')
        }
    }, [isAdmin])


    return(
        <>
            <div className="body-dashboard">
                <Header />
                <ListarFuncAdmin />
            </div>
        </>
    )
}

export default DashBoardAdmin