import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../servicios/api';
import AgregarFormularioEditorial from '../../componentes/editorial/AgregarFormularioEditorial';

const AgregarEditorial = () => {
    const [ editorial, setEditorial ] = useState({
        nombre: '',
        pais: ''
    });

    const history = useHistory();

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setEditorial({
            ...editorial,
            [nombre]: valor
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const nuevoEditorial = await crear('/editorial', editorial);
                console.log(nuevoEditorial);
                history.push('/editoriales');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return (
        <>  
            <AgregarFormularioEditorial
                editorial={editorial}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default AgregarEditorial;