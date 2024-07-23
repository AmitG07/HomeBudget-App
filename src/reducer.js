const initialState = {
    budgetItems: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BUDGET_ITEM':
        return {
          ...state,
          budgetItems: [...state.budgetItems, { ...action.payload, id: state.budgetItems.length + 1 }],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
