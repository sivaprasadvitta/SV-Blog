// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//     currentUser :null,
//     error : null,
//     loading:false,
// }

// const userSlice = createSlice({
//     name:'user',
//     initialState,
//     reducers:{
//         signInStart :(state)=>{
//             state.loading = true;
//             state.error =null;
//         },
//         signInSuccess : (state,action)=>{
//             state.currentUser = action.payload;
//             state.loading=false;
//             state.error = null;
//         },
//         signInFailure :(state,action)=>{
//             state.loading=false;
//             state.error=action.payload;
//         }
//     }

// });



// export const {signInStart,signInSuccess,signInFailure} =  userSlice.actions;
// export default userSlice.reducer;     

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    signInStart: (state) => {
      state.isLoading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer; 
