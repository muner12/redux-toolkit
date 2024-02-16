import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const getUserList=createAsyncThunk("user/fetchlist",async()=>{
    try {
        const response = await fetch("https://63c83bb3e52516043f4e9844.mockapi.io/user");
       
        if (!response.ok) {
          throw new Error("Failed to fetch user list");
        }
        return response.json(); // assuming response.data is in JSON format
      } catch (error) {
        throw new Error(error.message);
      }
});

export const postContact=createAsyncThunk("contact/addContact",async(formData)=>{
    try {
        let response = await fetch("http://localhost:8080/api/contact",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)

        });
        return response.json();
    } catch (error) {
        throw new Error(error.message);
    }
})

const userDetailsSlice=createSlice({
    name:"userDetails",
    initialState:{
        inc:0,
        loading:false,
        error:null,
        data:[],
        contact:[]
    },
    reducers:{
        increament:(state)=>{
            state.inc=state.inc+1;
        },
        decrement:(state)=>{
            state.inc=state.inc-1;
        },
        incByAmount:(state,action)=>{
            console.log(action);
            state.inc=action.payload
        },
        decByAmount:(state,action)=>{
            state.inc=action.payload
        }

    },
    extraReducers:(builders)=>{
            builders.addCase(getUserList.pending,(state)=>{

                state.loading=true
            })
            .addCase(getUserList.fulfilled,(state,action)=>{
                state.loading=false

                state.data=action.payload;
            })
            .addCase(getUserList.rejected,(state,action)=>{
                state.loading=false
                state.error=action.payload
            })
            .addCase(postContact.pending,(state)=>{
                state.loading=true
            }).addCase(postContact.fulfilled,(state,action)=>{
                state.loading=false
                state.contact.push(action.payload);
            })
            .addCase(postContact.rejected,(state,action)=>{
                state.loading=false
                state.error=action.payload.message;
            });
    }
});


export default  userDetailsSlice.reducer;

export const {incByAmount,increament,decrement,decByAmount}=userDetailsSlice.actions

