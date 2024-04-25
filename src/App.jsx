import { BudgetProvider } from './features/budget/BudgetContext';
import Budgets from './features/budget/Budgets';
import Header from './ui/Header';

function App() {
  return (
    <BudgetProvider>
      <div className="w-[80%] mx-auto">
        <Header />
        <Budgets />
      </div>
    </BudgetProvider>
  );
}

export default App;
