import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import { useBudget } from '../budget/BudgetContext';
import Expense from './Expense';

function ViewExpensesModal({ showExpenses, setShowExpenses, budget }) {
  const { name, id } = budget;
  const { deleteBudget } = useBudget();
  function handleDelete() {
    setShowExpenses(false);
    deleteBudget(id);
  }

  return (
    <Modal
      showModal={showExpenses}
      setShowModal={setShowExpenses}
      heading={
        <>
          Expenses-{`${name} `}
          <Button
            styles="border-2 border-red-300 text-red-300"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </>
      }
    >
      {budget.expenses.map((expense) => (
        <Expense key={expense.description} expense={expense} budget={budget} />
      ))}
    </Modal>
  );
}

export default ViewExpensesModal;
