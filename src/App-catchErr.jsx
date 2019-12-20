import React,{ PureComponent,lazy,Suspense } from 'react';
import './App.css';

//lazy懒加载模块，suspense作为加载前填充
//lazy单独使用报错
const About = lazy(()=>import(/*webpackChunkName:"about"*/'./About.jsx'))    ///*webpackChunkName:"about"*/  可更改webpack打包后名称
// Error
class App extends React.Component{
  state = {
    hasError:false
  }
  componentDidCatch(){
    this.setState({
      hasError:true
    })
  }
  render(){
    if(this.state.hasError){
      return <div>Error</div>
    }
    return <div>
      <Suspense fallback={<div>loading</div>}>
        <About></About>
      </Suspense>
    </div>
  }
}
export default App;
