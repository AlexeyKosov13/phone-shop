import { createSlice } from "@reduxjs/toolkit";

const phonesSlice = createSlice ({
    name: 'phones',
    initialState: {
        currentPhone: null
    },
    reducers: {
        setCurrentPhone: (state, action) => {
            state.currentPhone = action.payload;
            
        }
    }
});

export const {setCurrentPhone} = phonesSlice.actions;
export default phonesSlice.reducer;