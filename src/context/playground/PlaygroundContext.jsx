import { createContext, useReducer } from 'react';

import { globalReducer } from './reducers';

export const PlaygroundContext = createContext();

export const initialState = {
   playground: {
      selectedSidePanel: 'flex',
   },
};
export default function PlaygroundContextProvider({ children }) {
   const [globalState, globalDispatch] = useReducer(globalReducer, initialState);
   return (
      <PlaygroundContext.Provider
         value={{
            state: globalState,
            dispatch: globalDispatch,
         }}>
         {children}
      </PlaygroundContext.Provider>
   );
}
