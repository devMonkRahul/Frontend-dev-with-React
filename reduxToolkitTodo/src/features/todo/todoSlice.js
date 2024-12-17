import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {
            id: 1, title: "Learn Redux", completed: false
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
                title: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const todoToEdit = state.todos.find((todo) => todo.id === action.payload.id)
            todoToEdit.title = action.payload.title
        },
        toggleTodo: (state, action) => {
            const todoToToggle = state.todos.find((todo) => todo.id === action.payload)
            todoToToggle.completed = !todoToToggle.completed
        }
    }
})

export const { addTodo, removeTodo, editTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer