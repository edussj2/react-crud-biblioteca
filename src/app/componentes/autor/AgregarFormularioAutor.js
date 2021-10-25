import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

const AgregarFormularioAutor = ({
    autor,
    onChange,
    onSubmit
}) => {

    return (
        <div>
            <h3>Agregar Autor</h3>
            <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Nombres:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="nombres"
                                placeholder="Ingrese nombres"
                                value={autor.nombres}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Apellidos:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="apellidos"
                                placeholder="Ingrese apellidos"
                                value={autor.apellidos}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Fecha Nacimiento:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="date"
                                name="fechaNacimiento"
                                placeholder="Ingrese fecha de nacimiento"
                                value={autor.fechaNacimiento}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nacionalidad:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="nacionalidad"
                                placeholder="Ingrese nacionalidad"
                                value={autor.nacionalidad}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight:"10px" }}>
                            Registrar
                        </Button>
                        <Link to="/autores" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default AgregarFormularioAutor;