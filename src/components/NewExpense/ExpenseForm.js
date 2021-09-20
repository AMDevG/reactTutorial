import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    // MANAGING STATE AS ONE OBJECT

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // Need to update all keys in state, React does not merge, will overwrite
    // ...userInput copies values over and still allows editing to specified keys
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput, 
        //     enteredTitle: event.target.value,
        // });
        // Because React schedules state updates, prevState guarantees it is update the LATEST state
        // setUserInput( (prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    //preventDefault is JS method that stops default of request being sent (stays on current page)
    const submitHandler = (event) => { 
        event.preventDefault();
        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // Clears form after submit
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return ( 
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"  value={enteredTitle} onChange={titleChangeHandler} /> 
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
                
            <div className="new-actions">
                <button type="submit" onClick=""> Add Expense </button>
            </div> 
        </form>
    );
};

export default ExpenseForm;