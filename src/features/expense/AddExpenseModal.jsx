import AddButton from '../../ui/AddButton';
import InputLabel from '../../ui/InputLabel';
import Modal from '../../ui/Modal';
import Dropdown from '../../ui/Dropdown';
import TextInput from '../../ui/TextInput';
import { useState } from 'react';
import { useBudget } from '../budget/BudgetContext';

function AddExpenseModal({ setShowAddExpenseModal, budget = null }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { addExpense } = useBudget();

  function onAddExpense() {
    if (!description || !amount || isNaN(amount)) return;
    const newExpense = {
      id: Date.now(),
      description,
      amount,
    };
    addExpense(newExpense, budget.id);
    setShowAddExpenseModal(false);
  }
  return (
    <Modal heading="New Expense" setShowModal={setShowAddExpenseModal}>
      <InputLabel>Description</InputLabel>
      <TextInput value={description} setValue={setDescription} />
      <InputLabel>Amount</InputLabel>
      <TextInput value={amount} setValue={setAmount} />
      {budget === null && (
        <>
          <InputLabel>Budget</InputLabel>
          <Dropdown />
        </>
      )}
      <AddButton onClick={() => onAddExpense()} />
    </Modal>
  );
}

export default AddExpenseModal;
