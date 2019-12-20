import React,{ useEffect,useState } from 'react';
import './App.css';
let i = true
function App(props){
  const [count,setCount] = useState(()=>{return props.defaultCount || 0})
  const [name,setNameFn] = useState('Mike')
  return <div>
    <button type="button" onClick={()=>{setCount(count+1);setNameFn('xxx');i=!i}}>{name}</button>
    {count}
  </div>
}

export default App;
