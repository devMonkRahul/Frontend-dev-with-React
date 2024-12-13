import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Learn React",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    toggleTodo: (id) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {}
});

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;