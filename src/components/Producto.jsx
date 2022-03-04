import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productoActions';

const Producto = ( {producto} ) => {
  
    const dispatch = useDispatch();
    const {id, nombre, precio } = producto;

    const confirmarEliminarProducto = id => {

        dispatch(borrarProductoAction(id));
    }

    return (
    <tr>
      <td>{nombre}</td>
      <td> <span className="font-weight-bold">${precio}</span></td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2"><FontAwesomeIcon icon={faPencil} /></Link>
        <button type='button' className='btn btn-danger' onClick={() => confirmarEliminarProducto(id)}><FontAwesomeIcon icon={faTrash}/></button>
      </td>
    </tr>
  );
};

export default Producto;
