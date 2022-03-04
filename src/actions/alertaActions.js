import { MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../types';

export function mostrarAlertaAction(alerta){
    return (dispatch) => {
        dispatch(crearAlerta(alerta))
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})