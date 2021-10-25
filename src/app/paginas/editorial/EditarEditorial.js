import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../servicios/api';
import EditarFormularioEditorial from '../../componentes/editorial/EditarFormularioEditorial';

const EditarEditorial = () => {
    const [editorial, setEditorial] = useState({
        nombre: '',
        pais: '',
    });

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchEditorial = async () => {
            try {
                const datos = await buscar('/editorial', id);
                setEditorial({
                    nombre: datos.nombre,
                    pais: datos.pais
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchEditorial();
    }, [id])

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
                const editorialModificada = await modificar('/editorial', id, editorial);
                console.log(editorialModificada);
                history.push('/editoriales');
            }           
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <EditarFormularioEditorial
                editorial={editorial}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditarEditorial;