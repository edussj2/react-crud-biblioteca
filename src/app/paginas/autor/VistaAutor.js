import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaAutor from '../../componentes/autor/TablaAutor';

const VistaAutor = () => {
    const { datos: listaAutores } = useFetch('/autor');
    
    return (
        <TablaAutor
            listaAutores={listaAutores}
        />
    );
}

export default VistaAutor;