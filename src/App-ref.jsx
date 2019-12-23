import React,{ PureComponent,createContext,useState,useRef,Component,useContext,useMemo,memo,useCallback } from 'react';
import './App.css';

// ref不能加载在function Component上
// const Files = memo(function Files(props) {
//   console.log("render")
//   const add=()=>{
//     console.log('add')
//   }
//   return <div onClick={props.onClick}>{props.count}111111111111111111111111111111111111111111111</div>
// })


// ref能加载在class Component上
class Files extends PureComponent{
  add=()=>{
    console.log('add')
  }
  render(){
    const props = this.props
  return <div onClick={props.onClick}>{props.count}111111111111111111111111111111111111111111111</div>
}
}

function App(props){
  const [count, setCount] = useState(0)
  const [clickCount, setclickCount] = useState(0)
  const double = useMemo(()=>{
    return count*2
  },[count === 3])
  //useRef可配合ref使用；也可以作静态数据仓库，不随着state更新而变化的数据仓库
  const filesRef = useRef(null)
  const stateConfig = useRef({name:'scl'})
  console.log(stateConfig)
  return <div>
    <button type="button" onClick={()=>{setCount(count+1);  filesRef.current.add()}}>add:</button>
    count:{count},double:{double},clickCount:{clickCount}
      <Files count={double} ref={filesRef}/>
  </div>
}

export default App;
