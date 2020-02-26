export interface Action {
    type:string;
    payload?: any;
}

export interface Reducer<T>{
    (state: T, action: Action):T //está funcion regresa el mismo tipo de variable que recibe 

}