import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaAutor = ({ listaAutores }) => {
    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Fecha de Nacimiento</th>
                <th>Nacionalidad</th>
                <th>Acción</th>
            </tr>
        );
    }

    const celdas = () => {
        let numero=0;
        return (            
            listaAutores.map((autor) => (
                <tr key={autor.id}>
                    <th>{numero+=1}</th>
                    <td>{autor.nombres}</td>
                    <td>{autor.apellidos}</td>
                    <td>{autor.fechaNacimiento}</td>
                    <td>{autor.nacionalidad}</td>
                    <td>
                        <Link to={"/editarAutor/" + autor.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <>
            <h3>Listado de Autores</h3>
            <Link to="/agregarAutor" className="btn btn-primary mb-2">
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

export default TablaAutor;