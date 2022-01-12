import React, { useReducer } from "react";

import Header from "../structure/Header/Header";
import ToDoList from "../pages/ToDoList/ToDoList";
import Form from "../pages/Form/Form";

import { initialData, ToDoContext, ToDoProvider } from "../../context/ToDoContext";

import toDoContextReducer from "../../services/ToDoContextReducer";

const App = (props) => {

    const [state, dispatch] = useReducer(toDoContextReducer, props.initialData || initialData);

    return (
        <>
            <Header />

            <ToDoContext.Provider value={dispatch}>
                <ToDoProvider.Provider value={state}>
                    {!state.showForm && (<ToDoList />)}

                    {state.showForm && (<Form />)}
                </ToDoProvider.Provider>
            </ToDoContext.Provider>
        </>
    );
}

export default App;
