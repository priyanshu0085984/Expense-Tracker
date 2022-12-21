import React from 'react'
import styles from './../Styling/IncomeExpenses.module.css'
export default function IncomeExpenses () {
  return (
    <div className={styles.container}>
        <div className={styles.income}>
            <h4>Income</h4>
            <p>+$0.00</p>
        </div>
        <div className={styles.expense}>
            <h4>Expense</h4>
            <p>-$0.00</p>
        </div>
    </div>
  )
}
