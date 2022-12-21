import Header from './components/Header';
import styles from './App.module.css';
import IncomeExpense from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
export default function App (){
  return(
    <div className={styles.container}>
      <Header/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
    </div>
  ) 
};