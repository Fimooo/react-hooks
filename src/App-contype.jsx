import React,{createContext} from 'react';
import logo from './logo.svg';
import './App.css';
//createContext不宜大为使用，会破坏组件的独立性
//createContext(defaultValue)     
//defaultValue为Consumer向上找不到Provider时默认所取的值，无对应的值也不报错
const BatteryContext = createContext()
const OnlineContext = createContext()

//
//contextType  简练jsx语法
class Leaf extends React.Component{
  static contextType = BatteryContext
  render(){
    const battery = this.context
    return (
      <h1>Battery:{battery}</h1>
    )
  }
}

class Middle extends React.Component{
  render(){
    return <Leaf></Leaf>
  }
}

class App extends React.Component{
  state={
    battery:60,
    online:true
  }
  render(){
    return  <BatteryContext.Provider value={this.state.battery}>
    <button type="button" onClick={()=>this.setState({battery:30})}></button>
      <Middle></Middle>
    </BatteryContext.Provider>
  }
}

// function App() {
//   state={
//     battery:60
//   }
//   return (
//     <BatteryContext.Provider value={this.state.battery}>
//     <button type="button" onClick={()=>this.setState({battery:30})}></button>
//       <Middle></Middle>
//     </BatteryContext.Provider>
//   );
// }

export default App;
