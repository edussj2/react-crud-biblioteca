import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaEditorial = ({ listaEditoriales }) => {
    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Nombre</th>
                <th>País</th>
                <th>Acción</th>
            </tr>
        );
    }

    const celdas = () => {
        let numero = 0;
        return (
            listaEditoriales.map((editorial) => (
                <tr key={editorial.id}>
                    <th>{numero += 1}</th>
                    <td>{editorial.nombre}</td>
                    <td>{editorial.pais}</td>
                    <td>
                        <Link to={"/editarEditorial/" + editorial.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <>
            <h3>Listado de Editoriales</h3>
            <Link to="/agregarEditorial" className="btn btn-primary mb-2">
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

export default TablaEditorial;