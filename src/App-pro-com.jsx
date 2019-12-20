import React,{createContext} from 'react';
import logo from './logo.svg';
import './App.css';
//createContext不宜大为使用，会破坏组件的独立性
//createContext(defaultValue)     
//defaultValue为Consumer向上找不到Provider时默认所取的值，无对应的值也不报错
const BatteryContext = createContext()
const OnlineContext = createContext()

class Leaf extends React.Component{
  render(){
    return (
      // 不能直接在consumer渲染其他组件
      <BatteryContext.Consumer>
        {
          battery=>(<OnlineContext.Consumer>
            {
              data=> <h1>{data?'true':'false'}:{battery}</h1>
            }
          </OnlineContext.Consumer>)
         
        }
      </BatteryContext.Consumer>
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
    <OnlineContext.Provider value={this.state.online}>
    <button type="button" onClick={()=>this.setState({battery:30})}></button>
    <button type="button" onClick={()=>this.setState({online:!this.state.online})}></button>
      <Middle></Middle>
      </OnlineContext.Provider>
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
