import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaLibro = ({ listaLibros }) => {
    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Titulo</th>
                <th>genero</th>
                <th>Editorial</th>           
                <th>Acción</th>
            </tr>
        );
    }

    const celdas = () => {
        let numero = 0;
        return (
            listaLibros.map((libro) => (
                <tr key={libro.id}>
                    <th>{numero += 1}</th>
                    <td>{libro.titulo}</td>
                    <td>{libro.genero}</td>
                    <td>{libro.nombreEditorial}</td>
                    <td>
                        <Link to={"/editarLibro/" + libro.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <>
            <h3>Listado de Libros</h3>
            <Link to="/agregarLibro" className="btn btn-primary mb-2">
                Agregar
            </Link>
            <Table responsive>
                <thead className="bg-dark text-light">
                    { encabezado() }
                </thead>
                <tbody>
                    { celdas() }
                </tbody>
            </Table>
        </>
    );
}

export default TablaLibro;