import { Reducer, Action } from './ngrx-fake/ngrx';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction, multiplicarAction } from './contador/contador.actions';
// Definiremos nuestro STORE

class Store<T>{
    // private state:T;

    constructor(private reducer: Reducer<T>,
                private state: T)
                {
                    // this.state= state;
                }
    // Obtengo estado
    getState(){
        return this.state;
    }

    // Disparo acciones
    dispatch( action:Action){
        // envio el estado actual y la acción que estoy resiviendo por parametro
        this.state = this.reducer(this.state,action);
        // no retorna nada solo ejecuta la acción
    }

}

// envio funcion más estado
const store = new Store( contadorReducer,10);

//Muestro el estado de la aplicación
console.log(store.getState());

// disparando el incrementador
store.dispatch( incrementadorAction);
console.log(store.getState());

// disparando el incrementador
store.dispatch(incrementadorAction);
console.log(store.getState());

// disparo el multiplicador de accion
store.dispatch( multiplicarAction);
console.log(store.getState());