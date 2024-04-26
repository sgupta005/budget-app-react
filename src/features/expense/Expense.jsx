import { useBudget } from '../budget/BudgetContext';

function Expense({ expense, budget }) {
  const { id, description, amount } = expense;
  const { deleteExpense } = useBudget();
  function onDeleteExpense() {
    deleteExpense(id, budget.id);
  }
  return (
    <div className="flex justify-between text-xl mb-8">
      <p>{description}</p>
      <div className="flex space-x-4">
        <p>{amount}</p>
        <button
          className="border-2 border-red-300 text-red-300 rounded-[3px] w-8"
          onClick={() => onDeleteExpense()}
        >
          &#10005;
        </button>
      </div>
    </div>
  );
}

export default Expense;
