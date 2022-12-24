import React from 'react'
import styles from './../Styling/IncomeExpenses.module.css'
export default function IncomeExpenses ({transactions}) {
  let income = 0;
  let expense = 0;
  transactions.forEach(transaction => {
    if(transaction.amount>0){
      income+=parseInt(transaction.Amount);
    }
    else{
      expense+=parseInt(transaction.Amount);
    }
  });
  return (
    <div className={styles.container}>
        <div className={styles.income}>
            <h4>Income</h4>
            <p>+${income}</p>
        </div>
        <div className={styles.expense}>
            <h4>Expense</h4>
            <p>-${expense}</p>
        </div>
    </div>
  )
}
