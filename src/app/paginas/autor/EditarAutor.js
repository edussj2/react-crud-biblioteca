import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../servicios/api';
import EditarFormularioAutor from '../../componentes/autor/EditarFormularioAutor';

const EditarAutor = () => {
    const [autor, setAutor] = useState({
        nombres: '',
        apellidos: '',
        fechaNacimiento: '',
        nacionalidad: ''
    });

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchAutor = async () => {
            try {
                const datos = await buscar('/autor', id);
                setAutor({
                    nombres: datos.nombres,
                    apellidos: datos.apellidos,
                    fechaNacimiento: datos.fechaNacimiento,
                    nacionalidad: datos.nacionalidad
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchAutor();
    }, [id])

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
                const autorModificado = await modificar('/autor', id, autor);
                console.log(autorModificado);
                history.push('/autores');
            }           
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <EditarFormularioAutor
                autor={autor}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditarAutor;