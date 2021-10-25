import { envioPeticion } from './envioPeticion';

export const crear = (url, datos) => {
    return envioPeticion(url, 'POST', datos);
}

export const listar = (url) => {
    return envioPeticion(url, 'GET');
}

export const buscar = (url, id) => {
    return envioPeticion(`${url}/${id}`, 'GET');
}

export const modificar = (url, id, datos) => {
    return envioPeticion(`${url}/${id}`, 'PUT', datos);
}