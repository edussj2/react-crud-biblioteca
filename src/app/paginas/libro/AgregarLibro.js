import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../servicios/api';
import useFetch from '../../hooks/useFetch';
import AgregarFormularioLibro from '../../componentes/libro/AgregarFormularioLibro';

const AgregarLibro = () => {
    const [ libro, setLibro ] = useState({
        titulo: '',
        genero: '',
        idEditorial: 0        
    });
    const [ autoresSeleccionados , setAutoresSeleccionados ] = useState([]);
    const listaEditorial = useFetch('/editorial');
    const listaAutor = useFetch('/autor');
    const history = useHistory();

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
                const libroNuevo = await crear('/libro', libro);
                const autoresNuevos = await crear('/detallelibro', {
                    "idLibro": libroNuevo.id,
                    "idAutor": idAutores()
                }); 
                console.log(libroNuevo);
                console.log(autoresNuevos);
                history.push('/libros');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return (
        <>  
            <AgregarFormularioLibro
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

export default AgregarLibro;