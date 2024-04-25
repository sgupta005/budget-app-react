import Budget from './Budget';
import { useBudget } from './BudgetContext';

function Budgets() {
  const { budgets } = useBudget();
  return (
    <div className="flex flex-wrap my-12 gap-y-8">
      {budgets.map((budget) => (
        <Budget key={budget.name} budget={budget} />
      ))}
    </div>
  );
}

export default Budgets;
