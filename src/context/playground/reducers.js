export const globalReducer = (state, action) => {
   switch (action.type) {
      case 'SET_PLAYGROUND_STATE':
         return {
            ...state,
            playground: {
               ...state.playground,
               selectedSidePanel: action.payload,
            },
         };

      default:
         return state;
   }
};
