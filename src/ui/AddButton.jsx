import Button from './Button';

function AddButton({ onClick }) {
  return (
    <div className="w-max ml-auto my-4">
      <Button styles="bg-blue-500 text-white" onClick={onClick}>
        Add
      </Button>
    </div>
  );
}

export default AddButton;
