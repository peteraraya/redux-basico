import { createStore, Store } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

const store: Store = createStore( contadorReducer );

// Nos subribimos para mostrar info
store.subscribe(()=>{
    console.log('Subs:',store.getState());
})

store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );