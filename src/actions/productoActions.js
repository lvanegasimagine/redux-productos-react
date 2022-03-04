import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR, COMENZAR_DESCARGA_PRODUCTOS, DESCARGA_PRODUCTOS_EXITO, DESCARGA_PRODUCTOS_ERROR, OBTENER_PRODUCTO_ELIMINAR, PRODUCTO_ELIMINADO_EXITO, PRODUCTO_ELIMINADO_ERROR, OBTENER_PRODUCTO_EDITAR, PRODUCTO_EDITADO_EXITO, PRODUCTO_EDITADO_ERROR, COMENZAR_EDICION_PRODUCTO} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
import { type } from '@testing-library/user-event/dist/type';

// Crear nuevos productos

export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            await clienteAxios.post('/productos', producto);
            dispatch(agregarProductoExito(producto))
            Swal.fire('Correcto', 'El producto se agrego correctamente', 'success');
        } catch (error) {
            dispatch(agregarProductoError(true));
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

// Funcion Mostrar Productos 

export function obtenerProductosAction(){ 
    return async (dispatch) => {
        dispatch(descargarProductos())

        try {
            const respuesta = await clienteAxios.get('/productos');
            console.log(respuesta);

            dispatch(descargaProductoExitosa(respuesta.data))
        } catch (error) {
            dispatch(descargaProductoError())
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargaProductoExitosa= productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargaProductoError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

// Funcion Eliminar Producto
export function borrarProductoAction(id){
    return async (dispatch) => {
        dispatch(obtenerProductosEliminar(id));

        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito());
            Swal.fire(
                'Eliminado',
                'El Producto fue Eliminado Exitosamente',
                'success'
            )
        } catch (error) {
            dispatch(eliminarProductoError());
        }
    }
}

const obtenerProductosEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

// Actualizando el Producto

export function obtenerProductoEditar(producto) {
    return (dispatch) => {
        dispatch(obtenerProductoEditarAction(producto))
    }
}

const obtenerProductoEditarAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
});

// Editar producto api y state

export function editarProductoAction(producto){
    return async(dispatch) => {
        dispatch(editarProducto(producto));
        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            dispatch(editarProductoExito(producto));
        } catch (error) {
            dispatch(editarProductoError());
            
        }
    }
}

const editarProducto = producto => ({
    type: COMENZAR_EDICION_PRODUCTO
})

const editarProductoExito = producto => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const editarProductoError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
})