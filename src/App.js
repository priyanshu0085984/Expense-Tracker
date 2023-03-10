import { useEffect, useState } from 'react';
import Header from './components/Header';
import styles from './App.module.css';
import axios from './BaseAxios';
import IncomeExpense from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
export default function App (){

  const [transactions,setTransactions] = useState([])

  function getInfo(){
    console.log('Gathering Info');
      axios.get('/')
      .then((result)=>{
        console.log(result);
        setTransactions(result.data.data);
      })
      .catch((err)=>{
        console.log(err);
      })
      return true;
  }
  useEffect(()=>{
    getInfo()
  },[]);

  return(
    <div className={styles.container}>
      <Header transactions={transactions}/>
      <IncomeExpense transactions={transactions}/>
      <TransactionList clicked={getInfo} transactions={transactions}/>
      <AddTransaction  clicked={getInfo} transactions={transactions}/>
    </div>
  ) 
};