import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Table from '../../components/Tabela/index';
import Select from '../../components/Select/index';
import './index.css';

const Admin = () => {
    return(
        <>
            <Header />
            <div className="body-inicio">
                <div className="body-inicio-content">
                    <Select />
                    <Table />
                </div>
            </div>
        </>
    );
}

export default Admin;