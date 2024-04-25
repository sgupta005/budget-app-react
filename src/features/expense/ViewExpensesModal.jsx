import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import Expense from './Expense';

function ViewExpensesModal({ showExpenses, setShowExpenses, budget }) {
  const { name, id } = budget;
  console.log(id);
  return (
    <Modal
      showModal={showExpenses}
      setShowModal={setShowExpenses}
      heading={
        <>
          Expenses-{`${name} `}
          <Button styles="border-2 border-red-300 text-red-300">Delete</Button>
        </>
      }
    >
      <Expense />
      <Expense />
    </Modal>
  );
}

export default ViewExpensesModal;
