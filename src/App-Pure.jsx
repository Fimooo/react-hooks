import React,{ PureComponent } from 'react';
import './App.css';

//PureComponent，采用对比算法，避免性能开销
//PureComponent可实现shouldComponentUpdate同等效果
//但是只有传入的props的第一级发生改变时才触发子组件渲染（如：person:{age:1}和person:{age:2}视为同一不变元素）
//解决上述问题，可传入callback函数，每次传入都是不一样的，触发修改
class Foo extends PureComponent{
  render(){
    console.log('Foo')
    return null
  }
}

// class Foo extends React.Component{
//   //控制子组件无用渲染
//   shouldComponentUpdate(nextProps,nextState){
//     if(nextProps.name == this.props.name){return false}
//     return true
//   }
//   render(){
//     console.log('Foo')
//     return null
//   }
// }

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
   
    <button onClick={()=>this.setState({count:this.state.count+1})}>Add</button>
      <Foo name="Mike" callback={this.callback}></Foo>
    </div>
  }
}
export default App;
