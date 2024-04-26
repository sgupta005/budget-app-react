import Budget from './Budget';
import { useBudget } from './BudgetContext';

function Budgets() {
  const { budgets } = useBudget();
  const totalBudget = {
    name: 'Total',
    limit: budgets.reduce((totalLimit, budget) => {
      return totalLimit + Number(budget.limit);
    }, 0),
    expenses: budgets.reduce((totalExpenses, budget) => {
      return [...totalExpenses, ...budget.expenses];
    }, []),
  };

  return (
    <div className="flex flex-wrap my-12 gap-y-8">
      {budgets.map((budget) => (
        <Budget key={budget.name} budget={budget} showButtons={true} />
      ))}
      <Budget budget={totalBudget} showButtons={false} />
    </div>
  );
}

export default Budgets;
