import React,{ PureComponent,memo } from 'react';
import './App.css';

//memo可达到与PureComponent一样的效果
const Foo = memo(function Foo(){
  return <div>{props.name}</div>
})

//每一次父组件Add都会触发子组件Foo渲染，可是Foo不需要渲染，为可优化点
class App extends React.Component{
  state={
    count:0,
    person:{
      age:1
    }
  }
  //用属性声明式避免this错误
  callback=()=>{}
  render(){
    return <div>
   
    <button onClick={()=>this.setState({count:this.state.count+1,person:{age:this.person.age+1}})}>Add</button>
      <Foo name="Mike" person={this.state.person} callback={this.callback}></Foo>
    </div>
  }
}
export default App;
