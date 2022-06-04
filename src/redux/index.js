import  {configureStore} from '@reduxjs/toolkit';
import phoneReducer from './phones/reducer';

export const store = configureStore({
    reducer: {
        phone: phoneReducer,
    },
});