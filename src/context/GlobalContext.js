import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialValue = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || []
}

export const GlobalContext = createContext(initialValue)

const GlobalContextProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialValue)

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions))
    })

    // Actions
    const deleteTransaction = id => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const addTransaction = transaction => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider   ;