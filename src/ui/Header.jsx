import { useState } from 'react';
import AddButton from './AddButton';
import Button from './Button';
import InputLabel from './InputLabel';
import Modal from './Modal';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import AddBudgetModal from '../features/budget/AddBudgetModal';

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
        <AddBudgetModal
          showAddBudgetModal={showAddBudgetModal}
          setShowAddBudgetModal={setShowAddBudgetModal}
        />

        <Modal
          heading="New Expense"
          showModal={showAddExpenseModal}
          setShowModal={setShowAddExpenseModal}
        >
          <InputLabel>Description</InputLabel>
          <TextInput />
          <InputLabel>Amount</InputLabel>
          <TextInput />
          <InputLabel>Budget</InputLabel>
          <SelectInput />
          <AddButton />
        </Modal>
      </div>
    </div>
  );
}

export default Header;
