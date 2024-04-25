import Modal from '../../ui/Modal';
import InputLabel from '../../ui/InputLabel';
import TextInput from '../../ui/TextInput';
import AddButton from '../../ui/AddButton';
import { useState } from 'react';
import { useBudget } from './BudgetContext';

function AddBudgetModal({ showAddBudgetModal, setShowAddBudgetModal }) {
  const [name, setName] = useState('');
  const [maxSpending, setMaxSpending] = useState('');
  const { addBudget } = useBudget();

  function onAddBudget() {
    if (!name || !maxSpending || isNaN(maxSpending)) return;
    const newBudget = {
      name,
      limit: Number(maxSpending),
      expenses: [],
    };
    addBudget(newBudget);
    setShowAddBudgetModal(false);
  }
  return (
    <Modal
      heading="New Budget"
      showModal={showAddBudgetModal}
      setShowModal={setShowAddBudgetModal}
    >
      <InputLabel>Name</InputLabel>
      <TextInput value={name} setValue={setName} />
      <InputLabel>Maximum Spending</InputLabel>
      <TextInput value={maxSpending} setValue={setMaxSpending} />
      <AddButton onClick={onAddBudget} />
    </Modal>
  );
}

export default AddBudgetModal;
