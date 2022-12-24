import React,{useState} from 'react'
import axios from './../BaseAxios';

import styles from './../Styling/AddTransaction.module.css'
function Addtransaction({transactions,clicked}){

    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    
    function SaveTransaction(e){
        e.preventDefault();
        const transaction ={Title:text,Amount:amount};
        axios.post('/',transaction)
        .then((result)=>{
            clicked();
        })
        .catch((err)=>{
        })
    }
  return (
    <div className={styles.container}>
        <h3>Add new Transaction</h3>
        <hr/>
        <form >
            <div>
                <label >Text</label><br/>
                <input type="text"  onChange={(e)=>setText(e.target.value)} placeholder='Enter text..'/>
            </div>
            <div>
                <label>Amount<br/>
                (negative - expense,positive - income)</label>
                <input type="number"  onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount' />
            </div>
            <button onClick={SaveTransaction}>Add Transaction</button>
        </form>
    </div>
  )
}
export default Addtransaction;