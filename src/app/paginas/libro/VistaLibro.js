import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaLibro from '../../componentes/libro/TablaLibro';

const VistaLibro = () => {
    const { datos: listaLibros } = useFetch('/libro');

    return (
        <TablaLibro
            listaLibros={listaLibros}
        />
    );
}

export default VistaLibro;