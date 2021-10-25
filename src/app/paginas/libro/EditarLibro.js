import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../servicios/api';
import useFetch from '../../hooks/useFetch';
import EditarFormularioLibro from '../../componentes/libro/EditarFormularioLibro';

const EditarLibro = () => {
    const [libro, setLibro] = useState({
        titulo: '',
        genero: '',
        activo: 0,
        idEditorial: 0
    });
    const [ autoresSeleccionados , setAutoresSeleccionados ] = useState([]);
    const listaEditorial = useFetch('/editorial');
    const listaAutor = useFetch('/autor');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchLibro = async () => {
            try {
                const datos = await buscar('/libro', id);
                setLibro({
                    titulo: datos.titulo,
                    genero: datos.genero,
                    activo: parseInt(datos.activo),
                    idEditorial: parseInt(datos.idEditorial)                    
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        const fetchAutores = async () => {
            try {
                const datos = await buscar('/detallelibro', id);
                setAutoresSeleccionados(datos);                
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchLibro();
        fetchAutores();
    }, [id])
    
    const handleChange = (event) => {   
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setLibro({
            ...libro,
            [nombre]: valor
        });
    }

    const handleChangeTypeahead = (nombre, valor) => {
        setLibro({
            ...libro,
            [nombre]: valor
        });
    }

    const buscarObjeto = (fk, valorNuevo) => {
        switch (fk) {
            case 'idEditorial':
                return listaEditorial.datos.find((editorial) => editorial.nombre === valorNuevo);
            default:
                return undefined;
        }
    }

    const handleChangeInputTypeahead = (fk, valorNuevo) => {
        const datos = buscarObjeto(fk, valorNuevo);
        const id = datos ? datos.id : -1;
        const valor = valorNuevo === '' ? 0 : id;
        handleChangeTypeahead(fk, valor);
    }

    const buscarObjetoPorID = (fk, id) => {
        switch (fk) {
            case 'idEditorial':
                return listaEditorial.datos.find((editorial) => editorial.id === id);
            default:
                return undefined;
        }
    }

    const onSelectedTypeahead = (fk, id) => {
        const datos = buscarObjetoPorID(fk, id);
        const opcionSeleccionado = datos ? Array(datos) : [];
        return opcionSeleccionado;
    }

    const idAutores = () => {         
        return autoresSeleccionados.map((autor) => autor.id);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const libroModificado = await modificar('/libro', id, libro);
                const autorModificado = await modificar('/detallelibro', id, {"idAutor": idAutores()}); 
                console.log(libroModificado);
                console.log(autorModificado);
                history.push('/libros');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <EditarFormularioLibro
                libro={libro}
                autoresSeleccionados={autoresSeleccionados}
                setAutoresSeleccionados={setAutoresSeleccionados}
                listaEditorial={listaEditorial.datos}                
                listaAutor={listaAutor.datos}                
                onChange={handleChange}
                onSelectedTypeahead={onSelectedTypeahead}
                onChangeInputTypeahead={handleChangeInputTypeahead}
                onChangeTypeahead={handleChangeTypeahead}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditarLibro;