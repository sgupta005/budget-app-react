import { useBudget } from '../features/budget/BudgetContext';

function Dropdown({ value, setValue }) {
  const { budgets } = useBudget();
  return (
    <select
      className="px-3 border-2 border-gray-200 w-full rounded-md h-10 text-gray-500 text-lg mt-2 mb-4 bg-white"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {budgets.map((budget) => (
        <option key={budget.id} value={budget.id}>
          {budget.name}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
