import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(amount => amount.amount)
    const income = amounts.filter(amount => amount > 0)
    const expense = amounts.filter(amount => amount < 0)

    const netIncome = income.length && income.reduce((acc, next) => (acc += next))
    const netExpense = expense.length && expense.reduce((acc, next) => (acc += next))
    
    return (
        <>
            <div className="income-expense">
                <div className="income">
                    <p>Income</p>
                    <span className="amount"> +${netIncome}.00 </span>
                </div>
                <div className="expense">
                    <p>Expense</p>
                    <span className="amount"> -${Math.abs(netExpense)}.00 </span>
                </div>
            </div>   
        </>
    );
};

export default IncomeExpense;