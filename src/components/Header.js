import React from 'react'
import styles from './../Styling/Header.module.css'
export default function Header (){
  return (
    <div className={styles.container}>
      <h2>Expense Tracker</h2>
      <h4>Your Balance</h4>
      <h1>$0.00</h1>
    </div>
   
  )
}
