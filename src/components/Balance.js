import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(amount => amount.amount)
    const total = amounts.length && amounts.reduce((acc, next) => (acc += next))
    return (
        <>
            <div className="balance">
                <p>Your balance</p>
                <p className="amount"> ${total}.00 </p>
            </div>   
        </>
    );
};

export default Balance;