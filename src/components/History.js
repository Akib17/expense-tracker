import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const History = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext)
    return (
        <>
            <div className="history">
                {
                    transactions.map(transaction => {
                        const sign = transaction.amount < 0 ? '-' : '+'
                        return (
                            <li key={transaction.id} className={transaction.amount < 0 ? 'expense' : 'income'}>
                                <div className="flex">
                                    <span className="text"> {transaction.text} </span>
                                    <span className="amount"> {sign} ${Math.abs(transaction.amount)} </span>
                                </div>
                                <div className="overlay">
                                    <span onClick={() => deleteTransaction(transaction.id)} style={{ cursor: 'pointer' }} className="remove"><i className="fas fa-trash"></i></span>
                                </div>
                            </li>
                        )
                    })
                }
            </div>
        </>
    );
};

export default History;