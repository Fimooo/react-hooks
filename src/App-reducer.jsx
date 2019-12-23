import React,{ PureComponent,useReducer,createContext,useState,useRef,Component,useContext,useMemo,memo,useCallback } from 'react';
import './App.css';
import Second from './Second.jsx'
const initialState={
  count:0
}

function initial(params) {
  return { count:0 }
}

function reducer(state,action) {
  switch (action.type) {
    case 'add':
      return {count:state.count+1}
      break;
      case 'redu':
        return {count:state.count-1}
        break;
    default:
      throw new Error()
  }
}

function App(props){
  const [state, dispatch] = useReducer(reducer, initialState, initial)
  const meno=()=>{
    dispatch({type:'add'})
  }
  const add=()=>{

  }
  return <div>
  {state.count}
  <button onClick={()=>dispatch({type:'redu'})}>-1</button>
  <button onClick={()=>dispatch({type:'add'})}>+1</button>
  <Second></Second>
  </div>
}

export default App;
