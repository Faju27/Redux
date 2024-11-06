import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : "todo",
    initialState : {
        todoList : []
    },
    reducers : {
        addToList : (state,action ) => {
            const {payload} =action
            state.todoList = [payload, ...state.todoList]
            console.log(state.todoList);
        },
        removeFromlist : (state, action ) => {
            const {id} = action.payload
            state.todoList = state.todoList.filter(item => item.id != id)
        },
        updateList : (state,action ) => {

        },
        updateStatus : ( state, action ) => {
            const {id} = action.payload
            state.todoList =  state.todoList.map(item => {
                if (item.id = id) {
                    return {...todo, completed: !todo.completed, updatedAt: new Date().toLocaleString()}
                }
                return item
            })
        },
    }

})

export const { addToList, removeFromlist, updateList, updateStatus} = todoSlice.actions
export const {reducer : todoReducer} = todoSlice
// export const todoReducer = todoSlice.reducer