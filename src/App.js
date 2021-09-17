import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {

  const expenses = [

    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020,7,13),
    },

    {
      id: 'e2',
      title: 'OnlyFans',
      amount: 94.12,
      date: new Date(2021,1,5),
    },
    {
      id: 'e3',
      title: 'Insurance',
      amount: 110.02,
      date: new Date(2021,6,15),
    },
  ];


  return (
    <div> 
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
