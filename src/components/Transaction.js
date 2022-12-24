import React from 'react'
import axios from '../BaseAxios'
import styles from './../Styling/Transaction.module.css'
export default function Transaction ({title,amount,id,clicked}){
    let color = '';
    amount>=0?color ='green':color = 'red';

    function deleteTransaction(){
      axios.delete(`/${id}`)
      .then((res)=>{
        clicked();
        console.log(res);

      })
      .catch(err=>{
        console.log(err);
      })
    }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={deleteTransaction}>X</button>
        <li style ={{borderRightColor:color}}>
            {title}<span>${amount}</span>
        </li>
    </div>
  )
}
