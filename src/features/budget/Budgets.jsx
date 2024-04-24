import Budget from './Budget';

const budgets = [
  {
    name: 'Groceries',
    limit: 250,
    expenses: [
      {
        description: 'icecream',
        amount: 100,
      },
      { description: 'condoms', amount: 100 },
    ],
  },
  {
    name: 'Entertainment',
    limit: 250,
    expenses: [
      {
        description: 'Tv',
        amount: 100,
      },
      { description: 'Movies', amount: 100 },
    ],
  },
  {
    name: 'Food',
    limit: 250,
    expenses: [
      {
        description: 'icecream',
        amount: 100,
      },
      { description: 'kurkure', amount: 100 },
    ],
  },
];

function Budgets() {
  return (
    <div className="flex flex-wrap my-12 gap-y-8">
      {budgets.map((budget) => (
        <Budget key={budget.name} budget={budget} />
      ))}
    </div>
  );
}

export default Budgets;
