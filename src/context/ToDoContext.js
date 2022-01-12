import { createContext } from "react";

export const initialData = {
    showForm: false,
    list: []
}

export const ToDoContext = createContext();
export const ToDoProvider = createContext();
