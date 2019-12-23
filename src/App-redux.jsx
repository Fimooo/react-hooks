import React,{ PureComponent,useReducer,createContext,useState,useRef,Component,useContext,useMemo,memo,useCallback } from 'react';
import './App.css';
import Second from './Second.jsx'
const Redux = createContext()
const initialState={
  home:{
    name:'scl'
  },
  count:0
}

function initial(params) {
  return {   
    home:{
      name:'scl'
    },
    count:0
  }
}

function reducer(state,action) {
  switch (action.type) {
    case 'add':
      return {...state,count:state.count+1}
      break;
      case 'redu':
        return {...state,count:state.count-1}
        break;
    default:
      throw new Error()
  }
}

function Aa(props) {
  const reduxState = useContext(Redux)
  console.log(reduxState)
  return<ul>{reduxState.state.home.name+"a"}
    <Bb></Bb>
  </ul>
}

function Bb(props) {
  const reduxState = useContext(Redux)
  return<p>{reduxState.state.home.name+"b"}<Cc></Cc></p>
}

function Cc(props) {
  const reduxState = useContext(Redux)
  return<div>{reduxState.state.home.name+"c"}</div>
}

function App(props){
  const [state, dispatch] = useReducer(reducer, initialState, initial)
  return <div>
  <Redux.Provider value={{state,dispatch}}>
  {state.count}
  <button onClick={()=>dispatch({type:'redu'})}>-1</button>
  <button onClick={()=>dispatch({type:'add'})}>+1</button>
  <Aa />
  </Redux.Provider>
  </div>
}

export default App;
