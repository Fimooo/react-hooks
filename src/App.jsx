import React,{ createContext,useState,Component,useContext,useMemo,memo,useCallback } from 'react';
import './App.css';

//每一次都渲染
// function Files(props) {
//   console.log("render")
//   return <div>{props.count}</div>
// }

//优化问题：父组件的值改变引起子组件发生不必要的渲染
//当File组件无onApi函数时根据传入值有选择性渲染
//当File组件有onApi函数时每次都渲染(因为函数每次创建都是新的)
//当File组件有useMemo-onApi函数时根据传入值有选择性渲染
const Files = memo(function Files(props) {
  console.log("render")
  return <div onClick={props.onClick}>{props.count}111111111111111111111111111111111111111111111</div>
})
function App(props){
  const [count, setCount] = useState(0)
  const [clickCount, setclickCount] = useState(0)

  //类似useEffect(fn,[])
  //不同于useEffect（为渲染后执行） useMemo（渲染时完成）
  const double = useMemo(()=>{
    return count*2
  },[count === 3])
  //count 为1、2时为false，当等于3时，置为true，修改count；后来4不符合判断又置为false，修改count；之后再不变化
  
  
  //每次创建都是新的，引起子组件的渲染
  // const onApi=() => {
  //     console.log(123)
  // }

  //解决了函数每次创建都是新的，引起子组件刷新的问题
  // const onApi=useMemo(() => {
  //   return ()=>{
  //     console.log(123)
  //   }
  // }, [])

  //等价于useMemo用函数作返回
  //解决了子组件因为函数问题过多渲染的问题
  const onApi=useCallback(
    () => {
      console.log(123)
      setclickCount((clickCount)=>clickCount+1)
    },
    []
  )



  return <div>
    <button type="button" onClick={()=>{setCount(count+1);}}>add:</button>
    count:{count},double:{double},clickCount:{clickCount}
      <Files count={double} onApi={onApi}/>
  </div>
}

export default App;
