import React from 'react'
import styles from './../Styling/Header.module.css'
export default function Header ({transactions}){
  let myBalance = 0;
  transactions.forEach(transaction => {
    myBalance+=parseInt(transaction.Amount);
  });
  return (
    <div className={styles.container}>
      <h2 >Expense Tracker</h2>
      <h4>Your Balance</h4>
      <h1>${myBalance}</h1>
    </div>
   
  )
}
