import { createContext, useReducer } from 'react';

import { globalReducer } from './reducers';

export const PlaygroundContext = createContext();

export const initialState = {
   playground: {
      selectedSidePanel: 'flex',
      history: [],
      components: {
         flex: {
            id: 'flex',
            label: 'Flex Layout',
            icon: '📦',
            children: [
               { id: 'flex-direction', label: 'Flex Direction', type: 'css' },
               { id: 'flex-wrap', label: 'Flex Wrap', type: 'css' },
               { id: 'justify-content', label: 'Justify Content', type: 'css' },
               { id: 'flex-component', label: 'Flex Component', type: 'js' },
            ],
         },
         grid: {
            id: 'grid',
            label: 'Grid Layout',
            icon: '🎯',
            children: [
               { id: 'grid-template', label: 'Grid Template', type: 'css' },
               { id: 'grid-areas', label: 'Grid Areas', type: 'css' },
               { id: 'grid-component', label: 'Grid Component', type: 'js' },
            ],
         },
         position: {
            id: 'position',
            label: 'Position',
            icon: '📍',
            children: [
               { id: 'position-type', label: 'Position Type', type: 'css' },
               { id: 'position-component', label: 'Position Component', type: 'js' },
            ],
         },
         spacing: {
            id: 'spacing',
            label: 'Spacing',
            icon: '↔️',
            children: [
               { id: 'margin', label: 'Margin', type: 'css' },
               { id: 'padding', label: 'Padding', type: 'css' },
               { id: 'spacing-component', label: 'Spacing Component', type: 'js' },
            ],
         },
      },
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
