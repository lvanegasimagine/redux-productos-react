/* eslint-disable import/no-anonymous-default-export */
import { MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../types';

const initialState = {
    alerta: null
}

export default function(state = initialState, action){
    switch(action.type){
        default: return state
    }
}