import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaEditorial from '../../componentes/editorial/TablaEditorial';

const VistaEditorial = () => {
    const { datos: listaEditoriales} = useFetch('/editorial');

    return (
        <TablaEditorial
            listaEditoriales={listaEditoriales}
        />
    );
}

export default VistaEditorial;