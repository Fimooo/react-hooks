import React,{ createContext,useState,Component,useContext } from 'react';
import './App.css';
const CountContext = createContext();
class Foo extends Component{
  render() {
    return (
      <div>
        <CountContext.Consumer>
          {
            data=>(<div>{data}</div>)
          }
        </CountContext.Consumer>

      </div>
    )
  }
}

class Bar extends Component {
  static contextType = CountContext
  render() {
    const count = this.context
    return (
      <div>
        {count}
      </div>
    )
  }
}
function Files(params) {
  const count= useContext(CountContext)
  return <h1>{count}</h1>
}
function App(props){
  const [count, setCount] = useState(0)
  return <div>
    <button type="button" onClick={()=>{setCount(count+1);}}>add:</button>
    {count}
    <CountContext.Provider value={count}>
      <Foo/>
      <Bar/>
      <Files/>
    </CountContext.Provider>
  </div>
}

export default App;
