import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Context from '../../store/Context';

const PrivateRoute = ({component: Component, ...rest}) => {
    const { token } = useContext(Context);

    return token ? <Outlet /> : <Navigate to="/401" />
}

export default PrivateRoute