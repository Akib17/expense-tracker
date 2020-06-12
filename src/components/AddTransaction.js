import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState()
    
    const newTransaction = {
        text,
        amount: +amount,
        id: Math.round(Math.random() * 100000)
    }
    
    const submitHandler = e => {
        e.preventDefault()
        addTransaction(newTransaction)
        setAmount('')
        setText('')
    }
    
    return (
        <>
            <div className="add-transaction">
                <h3>Add new transaction</h3>
                <hr />
                <br/>
                <form onSubmit={submitHandler}>
                    <label htmlFor="balanceText">Your income or expense details</label>
                    <input type="text" className="input" placeholder="Income details" value={text} onChange={(e) => setText(e.target.value)} name="balanceText" />
                    <br />
                    <br />
                    <label htmlFor="amount">Use (-) for expense.</label>
                    <input type="text" className="input" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} name="amount" />
                    <br />
                    <br />
                    <button className="btn-submit">Add</button>
                </form>
            </div>   
        </>
    );
};

export default AddTransaction;