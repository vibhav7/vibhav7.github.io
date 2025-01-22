export const globalReducer = (state, action) => {
   switch (action.type) {
      case 'SET_PLAYGROUND_STATE':
         return {
            ...state,
            playground: {
               ...state.playground,
               selectedSidePanel: action.payload,
               history: [...state.playground.history, action.payload],
            },
         };

      case 'SELECT_COMPONENT':
         return {
            ...state,
            playground: {
               ...state.playground,
               selectedComponent: action.payload,
               history: [...state.playground.history, action.payload],
            },
         };

      case 'GO_TO_HISTORY':
         return {
            ...state,
            playground: {
               ...state.playground,
               selectedSidePanel: action.payload,
               history: state.playground.history.slice(0, action.historyIndex + 1),
            },
         };

      default:
         return state;
   }
};
