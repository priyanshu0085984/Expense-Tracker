import React from 'react'
import styles from './../Styling/TransactionList.module.css'
export default function TransactionList (){
  return (
    <div className={styles.container}>
        <h3>History</h3>
        <hr/>
        <ul typeof="">
            <li>
                Cash<span>-$400</span>
                {/* <button>x</button> */}
            </li>
        </ul>
    </div>
  )
}
