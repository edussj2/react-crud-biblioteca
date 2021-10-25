import React from 'react';

const Inicio = () => {

    const styleHome = {
        background: "#0B2132", 
        color: "#ffffff", 
        padding: "20px", 
        borderRadius: "10px"
    }

    return (
        <div>
            <h2>Bienvenidos a:</h2>
            <h1 className="d-flex justify-content-center" style={styleHome}>Bliblioteca CRUD</h1>
        </div>
    );
}

export default Inicio;