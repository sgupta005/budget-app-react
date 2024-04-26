import { createContext, useContext, useEffect, useReducer } from 'react';

const URL = 'http://localhost:8000/budgets';

const BudgetContext = createContext();

const initialState = {
  budgets: [],
  isLoading: false,
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };
    case 'budgets/get':
      return { ...state, budgets: action.payload, isLoading: false };
    case 'budgets/add':
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
        isLoading: false,
      };
    case 'budgets/delete':
      return {
        ...state,
        isLoading: false,
        budgets: state.budgets.filter((budget) => budget.id !== action.payload),
      };
    case 'expenses/add':
      return {
        ...state,
        isLoading: false,
        budgets: state.budgets.map((budget) =>
          budget.id !== action.payload.id ? budget : action.payload.budget
        ),
      };
    case 'expenses/delete':
      return {
        ...state,
        isLoading: false,
        budgets: state.budgets.map((budget) =>
          budget.id !== action.payload.id ? budget : action.payload.budget
        ),
      };
    case 'error':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

function BudgetProvider({ children }) {
  const [{ budgets }, dispatch] = useReducer(reducer, initialState);

  async function addBudget(newBudget) {
    dispatch({ type: 'loading' });
    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBudget),
      });
      const data = await res.json();
      dispatch({ type: 'budgets/add', payload: data });
    } catch (e) {
      dispatch({
        type: 'error',
        payload: 'There was an error while adding the city',
      });
    }
  }

  async function deleteBudget(id) {
    dispatch({ type: 'loading' });
    try {
      const res = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
      });
      // const data = await res.json();
      dispatch({ type: 'budgets/delete', payload: id });
    } catch (e) {
      dispatch({
        type: 'error',
        payload: 'There was an error while deleting the budget',
      });
    }
  }

  async function addExpense(newExpense, budgetId) {
    dispatch({ type: 'loading' });
    try {
      const res = await fetch(`${URL}/${budgetId}`);
      const budget = await res.json();
      budget.expenses.push(newExpense);
      const updateRes = await fetch(`${URL}/${budgetId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(budget),
      });
      dispatch({ type: 'expenses/add', payload: { id: budgetId, budget } });
    } catch (e) {
      dispatch({
        type: 'error',
        payload: 'There was an error while adding the expense',
      });
    }
  }

  async function deleteExpense(expenseId, budgetId) {
    dispatch({ type: 'loading' });
    try {
      const res = await fetch(`${URL}/${budgetId}`);
      const budget = await res.json();
      budget.expenses = budget.expenses.filter(
        (expense) => expense.id !== expenseId
      );
      const updateRes = await fetch(`${URL}/${budgetId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(budget),
      });
      dispatch({ type: 'expenses/delete', payload: { id: budgetId, budget } });
    } catch (e) {
      dispatch({
        type: 'error',
        payload: 'There was an error while deleting the expense.',
      });
    }
  }

  useEffect(function () {
    async function getBudgets() {
      dispatch({ type: 'loading' });
      try {
        const res = await fetch(URL);
        const data = await res.json();
        dispatch({ type: 'budgets/get', payload: data });
      } catch (e) {
        dispatch({
          type: 'error',
          payload: 'There was an error while fetching budgets.',
        });
      }
    }
    getBudgets();
  }, []);

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        addBudget,
        deleteBudget,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

function useBudget() {
  const context = useContext(BudgetContext);
  if (context === undefined)
    throw new Error('The Budget Context was called outside its Provider');
  return context;
}

export { BudgetProvider, useBudget };
