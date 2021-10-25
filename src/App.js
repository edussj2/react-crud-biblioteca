import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BarraNavegacion from './app/comunes/barraNavegacion/BarraNavegacion';
import VistaAutor from './app/paginas/autor/VistaAutor';
import AgregarAutor from './app/paginas/autor/AgregarAutor';
import EditarAutor from './app/paginas/autor/EditarAutor';
import VistaEditorial from './app/paginas/editorial/VistaEditorial';
import AgregarEditorial from './app/paginas/editorial/AgregarEditorial';
import EditarEditorial from './app/paginas/editorial/EditarEditorial';
import VistaLibro from './app/paginas/libro/VistaLibro';
import AgregarLibro from './app/paginas/libro/AgregarLibro';
import EditarLibro from './app/paginas/libro/EditarLibro';
import Inicio from './app/paginas/inicio/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <BarraNavegacion />
            <div className="container mt-4">
                <Switch>
                    <Route path="/inicio" exact><Inicio/></Route>
                    <Route path="/autores" exact><VistaAutor/></Route>
                    <Route path="/agregarAutor" exact><AgregarAutor/></Route>
                    <Route path="/editarAutor/:id" exact><EditarAutor/></Route>
                    <Route path="/editoriales" exact><VistaEditorial/></Route>
                    <Route path="/agregarEditorial" exact><AgregarEditorial/></Route>
                    <Route path="/editarEditorial/:id" exact><EditarEditorial/></Route>
                    <Route path="/libros" exact><VistaLibro/></Route>
                    <Route path="/agregarLibro" exact><AgregarLibro/></Route>
                    <Route path="/editarLibro/:id" exact><EditarLibro/></Route>
                    <Redirect to="/inicio"></Redirect>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;