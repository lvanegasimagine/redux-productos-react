import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productoActions';
import Swal from 'sweetalert2';

const Producto = ( {producto} ) => {
  
    const dispatch = useDispatch();
    const {id, nombre, precio } = producto;

    const confirmarEliminarProducto = id => {

      Swal.fire({
        title: '¿Estas Seguro?',
        text: "Un Producto que se elimina no se puede recuperar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Proceder',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(borrarProductoAction(id));
        }
      })

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
