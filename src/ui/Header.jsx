import { useState } from 'react';
import Button from './Button';
import AddBudgetModal from '../features/budget/AddBudgetModal';
import AddExpenseModal from '../features/expense/AddExpenseModal';

function Header() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  return (
    <div className="flex space-x-4 justify-between mt-8">
      <p className="font-semibold text-4xl">Budgets</p>
      <div className="space-x-3">
        <Button
          styles="text-white bg-blue-500"
          onClick={() => setShowAddBudgetModal(true)}
        >
          Add Budget
        </Button>
        <Button
          styles="text-blue-500 border-2 border-blue-500"
          onClick={() => setShowAddExpenseModal(true)}
        >
          Add Expense
        </Button>

        {showAddBudgetModal && (
          <AddBudgetModal setShowAddBudgetModal={setShowAddBudgetModal} />
        )}
        {showAddExpenseModal && (
          <AddExpenseModal setShowAddExpenseModal={setShowAddExpenseModal} />
        )}
      </div>
    </div>
  );
}

export default Header;
