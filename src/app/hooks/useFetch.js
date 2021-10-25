import { useState, useEffect } from 'react';
import { listar } from '../../servicios/api';

const useFetch = (url) => {
    const [ datos, setDatos ] = useState([]);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const dofetch = async () => {
            try {
                const datos = await listar(url);
                setDatos(datos);
            } catch (error) {
                setError(error.message);
            }
        }
        dofetch();
    }, [url])

    return {
        datos,
        error
    };
}

export default useFetch;