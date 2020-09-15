import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from './AppReducer'

//initial state
const initialState = {
    items: [  ]
}

//context 
export const GlobalContext = createContext(initialState);

//Provider Component 
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem("items");
        return localData? JSON.parse(localData) : initialState;
    });

    useEffect(()=> {
        localStorage.setItem('items', JSON.stringify(state))},[state]);

    //actions

    function deleteItem(id){
        dispatch({
            type: 'JOB_DONE',
            payload: id
        })
    }

    function addItem(todo){
        dispatch({
            type: 'ADD_JOB',
            payload: todo
        })
    }

    function makeDone(id){
        dispatch({
            type: 'MAKE_DONE',
            payload: id
        })
    }

    return(
        <GlobalContext.Provider value={
            {
                items: state.items, 
                deleteItem,
                addItem,
                makeDone
            }
        }>
        {children}
        </GlobalContext.Provider>
    )
}