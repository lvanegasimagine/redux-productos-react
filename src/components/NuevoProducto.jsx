import { crearNuevoProductoAction} from '../actions/productoActions.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const NuevoProducto = ({history}) => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    // utilizar use dispatch y te crea una funcion

    const dispatch = useDispatch();
    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto));

    // acceder a las propiedades del store

    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);

    const submitNuevoProducto = e => {
        e.preventDefault();

        //validar formulario
        if(nombre.trim === '' || precio <= 0){
            return;
        }

        //si no hay errores
        //crear el nuevo producto
        agregarProducto({
            nombre, precio
        });
        history.push('/');
    }
    return ( <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Agregar Nuevo Producto
                    </h2>
                    <form onSubmit={submitNuevoProducto}>
                        <div className="form-group">
                            <label htmlFor="">Nombre Producto</label>
                            <input type="text" className="form-control" placeholder="Nombre Producto" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Precio Producto</label>
                            <input type="number" className="form-control" placeholder="Precio Producto" name="precio" value={precio} onChange={e => setPrecio(Number(e.target.value))}/>
                        </div>
                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">agregar</button>
                    </form>
                    {
                        cargando ? <p> Cargando.... </p> : null
                    }
                </div>
            </div>
        </div>
    </div> );
}

export default NuevoProducto;