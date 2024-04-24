import Button from '../../ui/Button';

function Expense() {
  return (
    <div className="flex justify-between text-xl mb-8">
      <p>Description</p>
      <div className="flex space-x-4">
        <p>$100</p>
        <button className="border-2 border-red-300 text-red-300 rounded-[3px] w-8">
          &#10005;
        </button>
      </div>
    </div>
  );
}

export default Expense;
