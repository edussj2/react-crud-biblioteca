import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const AgregarFormularioLibro = ({    
    libro,
    autoresSeleccionados,
    setAutoresSeleccionados,
    listaEditorial,
    listaAutor,
    onChange,
    onSelectedTypeahead,
    onChangeInputTypeahead,
    onChangeTypeahead,
    onSubmit
}) => {

    return (
        <div>
            <h3>Agregar Libro</h3>
            <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Titulo:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="titulo"
                                placeholder="Ingrese titulo"
                                value={libro.titulo}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>                    
                    <Col>
                        <Form.Group>
                            <Form.Label>Genero:</Form.Label>
                            <Form.Control 
                                size="sm"
                                as="select"
                                name="genero"
                                value={libro.genero}
                                onChange={onChange}
                                required
                            >
                                <option value="">-- Seleccionar --</option>
                                <option value="Aventura">Aventura</option>
                                <option value="Policiaca">Policiaca</option>
                                <option value="Terror">Terror</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Editorial:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                placeholder="Elige una opción"
                                options={listaEditorial}
                                labelKey={opcion => String(opcion.nombre)}
                                selected={onSelectedTypeahead('idEditorial', libro.idEditorial)}
                                onInputChange={(valorNuevo) =>
                                    onChangeInputTypeahead('idEditorial', valorNuevo)}
                                onChange={(valorNuevo) => valorNuevo.length > 0 &&
                                    onChangeTypeahead('idEditorial', valorNuevo[0].id)}
                                inputProps = {{ required: true }}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Autor:</Form.Label>
                            <Typeahead
                                id="basic-typeahead-multiple"
                                labelKey={opcion => String(opcion.nombres + " " + opcion.apellidos + " - " + opcion.nacionalidad)}
                                multiple
                                onChange={setAutoresSeleccionados}
                                options={listaAutor}
                                placeholder="Selecciona autor(es)..."
                                selected={autoresSeleccionados}
                            />
                        </Form.Group>              
                    </Col>         
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                            Registrar
                        </Button>
                        <Link to="/libros" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default AgregarFormularioLibro;