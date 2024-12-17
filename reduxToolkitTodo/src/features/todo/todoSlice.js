import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {
            id: 1, title: "Learn Redux"
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const todoToEdit = state.todos.find((todo) => todo.id === action.payload.id)
            todoToEdit.title = action.payload.title
        }
    }
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer