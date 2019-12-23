import React,{ PureComponent,useReducer,createContext,useState,useRef,Component,useContext,useMemo,memo,useCallback } from 'react';
import './App.css';

// const initialState={
//   count:0
// }

// function initial(params) {
//   return { count:0 }
// }

// function reducer(state,action) {
//   switch (action.type) {
//     case 'add':
//       return {count:state.count+1}
//       break;
//       case 'redu':
//         return {count:state.count-1}
//         break;
//     default:
//       throw new Error()
//   }
// }

function Second(props){
  const [state, dispatch] = useReducer()
  return <div>
    <h1>{state.count}</h1>
  </div>
}

export default Second;
