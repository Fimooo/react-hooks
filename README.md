## 工具类
1. node<br/>
npm-javascript模块化规范
2. webpack<br/>
## 知识类
1. PWA<br/>
渐进式网络应用<br/>
可控的静态缓存<br/>
离线访问能力<br/>
优化载入速度<br/>
2. SPA/MPA
## 规范类
1. eslint<br/>
可自动修复格式,代码校验
2. prettier<br/>
强制代码格式,代码美化
## 效率类
1. snippets<br/>
编辑器插件,提高代码编写速率 
2. iconfont<br/>
图标库
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React新特性
1. Context <br/>
上下文，全局变量<br/>
提供了一种方式，能够让数据在组件树中传递而不必一级一级手动传递<br/>
`<Provider>`-生产者
`<Consumer>`-消费者
2. ContentType <br/>
是Context的语法糖
3. lazy <br/>
懒加载组件
4. Suspense <br/>
补充懒加载组件时的状态
5. memo<br/>
优化渲染性

## React痛点
1. 状态逻辑难以复用<br/>
缺少复用机制<br/>
渲染属性和高阶组件导致层级冗余
2. 趋向复杂难以维护<br/>
生命周期函数混杂不相干逻辑<br/>
相干逻辑分散再不同生命周期
3. this指向<br/>
内联函数过度创建新句柄<br/>
类成员函数不能保证this

## React Hooks优势
1. 函数组件无this问题
2. 自定义Hook方便复用状态逻辑
3. 副作用的关注点分离(比如绑定事件、网络请求、访问DOM等)
## 注意事项
1. eject需要当前git目录全部commit干净<br/>
初始在`package.json`中有eject命令，执行后消失，为不可逆操作

## hooks
1. useState
2. useEffect
3. useContext
4. useMemo <br/>
仅仅为优化代码不应影响业务逻辑

## redux
1. 单一数据源
2. 状态不可变
3. 纯函数修改状态

## redux-action
1. type 操作类型
2. payload 操作所需额外的数据 

## Available Scripts
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
