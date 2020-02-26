// Mi primera acción : acción dice lo que tiene que hacer
// interface es una regla que se debe cumplir

interface Action{
    type:string;
    payload?: any; // parametros que podemos enviarle a la acción
}


// Para que sirve ---> la utilizaremos en un Reducer ( que es una función que recibe dos parametros)
// el objetivo del reducer es regresar un estado
function reducer(state = 10, action: Action) {

    
    // if (action.type === 'INCREMENTAR') {
    //     return state += 1;
    // }

    // Generalmente se utiliza un switch() : ya que nos permite rapidamente que acción tomar

    switch (action.type) {
        case 'INCREMENTAR':
              return state +=1;
            
        case 'DECREMENTAR':
            return state -= 1;

        case 'MULTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;

        default:
            return state;
    }





    return state; // siempre debe regresar un estado
}


// Uso del reducer
const incrementadorAction: Action ={
    type: 'INCREMENTAR'
};

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

const dividirAction: Action ={
    type: 'DIVIDIR',
    payload: 2
}
console.log('incrementadorAction:',reducer(10, incrementadorAction)); 
console.log('decrementadorAction:',reducer(10, decrementadorAction)); 
console.log('multiplicarAction:',reducer(10, multiplicarAction)); 
console.log('dividirAction:', reducer(10, dividirAction)); 



// Tarea 
// dividirAction