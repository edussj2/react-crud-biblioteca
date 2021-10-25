const BASE_URL_API = 'http://127.0.0.1:8000/api/v1';

export const envioPeticion = async (url, metodo, data) => {
    const respuesta = await fetch(`${BASE_URL_API}${url}`, {        
        method: metodo,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : undefined
    })

    const respuestaJSON = await respuesta.json();

    if (respuesta.status !== 200 && respuesta.status !== 201) {
        let error;
        if (respuestaJSON && respuestaJSON.errors) {
            error = respuestaJSON.errors[0].message;
        }
        throw Error(error || 'Hubo un error.');
    }

    return respuestaJSON.data;
}