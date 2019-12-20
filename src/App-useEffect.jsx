import React,{ useEffect,useState } from 'react';
import './App.css';
//useEffect每次渲染组件之后调用，根据自定义状态来定义调用或者不调用
//代替了coomponentDidMount\componentDidUpdate、componentWillUnmount具有Clean Callback（清除上一次调用遗留的状态）
let i = true
// class App extends React.Component{
//   state={
//     count:0,
//     size:{
//       width:0,
//       height:0
//     }
//   }
//   componentDidMount(){
//     document.title = this.state.count
//     window.addEventListener('resize',this.onResize,false)
//   }
//   onResize = ()=>{
//     this.setState({
//       size:{
//         width:document.documentElement.clientWidth,
//         height:document.documentElement.clientHeight
//       }
//     })
//   }
  
//   componentWillUnmount(){
//     window.removeEventListener('resize',this.onResize,false)
//   }
//   componentDidUpdate(){
//     document.title = this.state.count
//   }
//   render(){
//     let { count,size } = this.state
//     return <div>
//     <button type="button" onClick={()=>{this.setState({count:count+1})}}>{'add'}</button>
//     {count}
//     size:{size.width}*{size.height}
//   </div> } 
// }


function App(props){
  const [count,setCount] = useState(()=>{return props.defaultCount || 0})
  const [name,setNameFn] = useState('Mike')
  const [size,setSize] = useState({
    width:document.documentElement.clientWidth,
    height:document.documentElement.clientHeight

  })

  const onResize = ()=>{
    setSize({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      })
  }
  useEffect(() => {   //count更新则执行
    console.log("count:"+count)
    return () => {
      
    };
  },[count])    //[count]则每次count变化都会触发，['a']则只渲染第一次,[]则会比较[]只执行一次
  useEffect(()=>{    //每次都执行
    document.title = count
  })
  useEffect(() => {     //只执行一次
    window.addEventListener('resize',onResize,false)
    return () => {   //清理函数
      window.removeEventListener('resize',onResize,false)
    };
  },[])
  const click = ()=>{
    setCount(count+1)
  }

  //必须要clear移除事件，才能正常挂载各个事件，不然同id元素会冲突引起bug
  useEffect(() => {
    document.querySelector('#size').addEventListener('click',click,false)
    return (()=>{
      document.querySelector('#size').removeEventListener('click',click,false)
    })
  })
  /**
   * useEffect(fn,[])
   *  fn return fn2(fn2只在组件被卸载前触发)
   *  []必须每次都不变才不会触发useEffect执行
   *  不传{]则意味着每次渲染都执行
   * */
  
  return <div>
    <button type="button" onClick={()=>{setCount(count+1);setNameFn('xxx');i=!i}}>{name}</button>
    {count}
    size:{size.width}*{size.height}
    {
      count%2 == 0?
      <span id="size">123</span>
      :<p id="size">88888888</p>
    }
  </div>
}

export default App;
