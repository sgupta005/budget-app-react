import { createContext, useContext, useEffect, useReducer } from 'react';

const URL = 'http://localhost:8000/budgets';

const BudgetContext = createContext();

const initialState = {
  budgets: [],
  isLoading: false,
  error: '',
};

//Get Budgets, Error, Loading, Add Budget, Delete Budget
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
    case 'error':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

function BudgetProvider({ children }) {
  const [{ budgets }, dispatch] = useReducer(reducer, initialState);

  async function addBudget(newBudget) {
    try {
      dispatch({ type: 'loading' });
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
        addBudget,
        budgets,
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
