import Button from '../../ui/Button';
import { useState } from 'react';
import ViewExpensesModal from '../expense/ViewExpensesModal';
import AddExpenseModal from '../expense/AddExpenseModal';

function Budget({ budget, showButtons }) {
  const [showExpenses, setShowExpenses] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);

  const { name, limit, expenses } = budget;
  const spent = expenses.reduce((total, expense) => {
    return (total += +expense.amount);
  }, 0);
  const spentPerc = (spent / limit) * 100;

  return (
    <div className="w-[32rem] mx-auto border-2 border-gray-200 px-6 py-4 h-52 rounded-lg">
      <div className="flex text-2xl justify-between ">
        <p>{name}</p>
        <p>
          ${spent}/${limit}
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 my-8">
        <div
          className={`
          ${spentPerc <= 50 && 'bg-blue-500'}
          ${spentPerc > 50 && spentPerc < 100 && 'bg-yellow-300'}
          ${spentPerc >= 100 && 'bg-red-500'}
          h-4 rounded-full
          `}
          style={{ width: `${spentPerc}%`, maxWidth: '100%' }}
        ></div>
      </div>

      <div className="w-max ml-auto space-x-2">
        {showButtons && (
          <>
            <Button
              styles="text-blue-500 border-2 border-blue-500"
              onClick={() => setShowAddExpenseModal(true)}
            >
              Add Expense
            </Button>
            <Button
              styles="border-2 border-gray-400 text-gray-500"
              onClick={() => setShowExpenses(true)}
            >
              View Expenses
            </Button>
          </>
        )}
        {showAddExpenseModal && (
          <AddExpenseModal
            setShowAddExpenseModal={setShowAddExpenseModal}
            budget={budget}
          />
        )}
        {showExpenses && (
          <ViewExpensesModal
            budget={budget}
            showExpenses={showExpenses}
            setShowExpenses={setShowExpenses}
          />
        )}
      </div>
    </div>
  );
}

export default Budget;
