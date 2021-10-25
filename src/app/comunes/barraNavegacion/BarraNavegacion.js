import React from 'react';
import { NavLink } from 'react-router-dom';
import './BarraNavegacion.css';

const BarraNavegacion = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink to="/home" className="container-title">Biblioteca</NavLink>                   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" >
                            <NavLink to="/autores" className="opt-barra">
                                Autor
                            </NavLink>
                            <NavLink to="/editoriales" className="opt-barra">
                                Editorial
                            </NavLink>
                            <NavLink to="/libros" className="opt-barra">
                                Libro
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default BarraNavegacion;