import { createSlice } from "@reduxjs/toolkit";
 
const initialState={
    username:'',
    email:'',
}
    export const userSlice=createSlice({
        name:"user",
        initialState,
        reducers:{
            loginRedux:(state,action)=>{
                console.log(action.payload.data)
                state.email=action.payload.data.email
                 state.username=action.payload.data.username
                        },
        }
    })
export default userSlice.reducer
export const {loginRedux} =userSlice.actions  

