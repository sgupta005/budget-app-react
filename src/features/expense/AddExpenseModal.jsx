import AddButton from '../../ui/AddButton';
import InputLabel from '../../ui/InputLabel';
import Modal from '../../ui/Modal';
import Dropdown from '../../ui/Dropdown';
import TextInput from '../../ui/TextInput';
import { useState } from 'react';
import { useBudget } from '../budget/BudgetContext';

function AddExpenseModal({ setShowAddExpenseModal, budget }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { addExpense, budgets } = useBudget();
  const [selectedBudget, setSelectedBudget] = useState(() => budgets[0].id);

  function onAddExpense() {
    if (!description || !amount || isNaN(amount)) return;
    const newExpense = {
      id: Date.now(),
      description,
      amount,
    };
    if (budget) addExpense(newExpense, budget.id);
    if (!budget && selectedBudget) addExpense(newExpense, selectedBudget);
    setShowAddExpenseModal(false);
  }
  return (
    <Modal heading="New Expense" setShowModal={setShowAddExpenseModal}>
      <InputLabel>Description</InputLabel>
      <TextInput value={description} setValue={setDescription} />
      <InputLabel>Amount</InputLabel>
      <TextInput value={amount} setValue={setAmount} />
      {!budget && (
        <>
          <InputLabel>Budget</InputLabel>
          <Dropdown value={selectedBudget} setValue={setSelectedBudget} />
        </>
      )}
      <AddButton onClick={() => onAddExpense()} />
    </Modal>
  );
}

export default AddExpenseModal;
