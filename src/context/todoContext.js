import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id : 1,
            todo: "todo message",
            complete: false,
        },
    ],
    addTodos: (todo) =>{},
    updateTodo: (id,todo) =>{},
    deleteTodo: (id)=>{},
    ToggleEvent : (id)=>{}
})

export const useTodo = () =>{
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider