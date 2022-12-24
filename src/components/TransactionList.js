import React from 'react'
import  Transaction  from './Transaction'
import styles from './../Styling/TransactionList.module.css'
export default function TransactionList ({transactions,clicked}){
  return (
    <div className={styles.container}>
        <h3>History</h3>
        <hr/>
        <ul>
            {
              transactions.map( (transaction) => 
                {
                  return <Transaction
                  title={transaction.Title}
                  id = {transaction._id}
                  key ={transaction._id}
                  clicked ={clicked}
                  amount = {transaction.Amount} />
                }
              )
            }
        </ul>
    </div>
  )
}
