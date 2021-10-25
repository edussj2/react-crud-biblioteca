import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../servicios/api';
import AgregarFormularioAutor from '../../componentes/autor/AgregarFormularioAutor';

const AgregarAutor = () => {
    const [ autor, setAutor ] = useState({
        nombres: '',
        apellidos: '',
        fechaNacimiento: '',
        nacionalidad: ''
    });

    const history = useHistory();

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setAutor({
            ...autor,
            [nombre]: valor
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const nuevoAutor = await crear('/autor', autor);
                console.log(nuevoAutor);
                history.push('/autores');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return (
        <>  
            <AgregarFormularioAutor
                autor={autor}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default AgregarAutor;