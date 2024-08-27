import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id : 1, Text : " hello word"}]
}

function sayHello(){
    console.log("Say Hello");
    
}


export cosnt todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid,
                Text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.action

export default todoSlice.reducers