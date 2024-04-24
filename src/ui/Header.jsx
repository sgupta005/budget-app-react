import AddButton from './AddButton';
import Button from './Button';
import InputLabel from './InputLabel';
import Modal from './Modal';
import SelectInput from './SelectInput';
import TextInput from './TextInput';

function Header() {
  return (
    <div className="flex space-x-4 justify-between mt-8 ">
      <p className="font-semibold text-4xl">Budgets</p>
      <div className="space-x-3">
        <Button styles="text-white bg-blue-500">Add Budget</Button>
        <Button styles="text-blue-500 border-2 border-blue-500">
          Add Expense
        </Button>
        {/* <Modal heading="New Budget">
          <InputLabel>Name</InputLabel>
          <TextInput />
          <InputLabel>Maximum Spending</InputLabel>
          <TextInput />
        </Modal>
        <Modal heading="New Expense">
          <InputLabel>Description</InputLabel>
          <TextInput />
          <InputLabel>Amount</InputLabel>
          <TextInput />
          <InputLabel>Budget</InputLabel>
          <SelectInput />
          <AddButton />
        </Modal> */}
      </div>
    </div>
  );
}

export default Header;
