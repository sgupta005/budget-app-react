import Button from '../../ui/Button';
import Expense from '../expense/Expense';
import Modal from '../../ui/Modal';

function Budget({ budget }) {
  const { name, limit, expenses } = budget;
  const spent = expenses.reduce((total, expense) => {
    return (total += expense.amount);
  }, 0);
  return (
    <div className="w-[32rem] mx-auto border-2 border-gray-200 px-6 py-4 h-52 rounded-lg">
      <div className="flex text-2xl justify-between ">
        <p>{name}</p>
        <p>
          ${spent}/${limit}
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 my-8">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: '45%' }}
        ></div>
      </div>

      <div className="w-max ml-auto space-x-2">
        <Button styles="text-blue-500 border-2 border-blue-500">
          Add Expense
        </Button>
        <Button styles="border-2 border-gray-400 text-gray-500">
          View Expenses
        </Button>
        {/* View Expenses Modal */}
        {/* <Modal
          heading={
            <>
              Expenses-{`${name} `}
              <Button styles="border-2 border-red-300 text-red-300">
                Delete
              </Button>
            </>
          }
        >
          <Expense />
          <Expense />
        </Modal> */}
      </div>
    </div>
  );
}

export default Budget;
