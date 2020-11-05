import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

// 使用类组件的方式可以这样挂载axios,但如果写成函数组件就需要将所有用到的请求封装在services文件中，
// 用到的时候再进行导入就可以了
// React.Component.prototype.$http = function() {
//   console.log('hahahahah')
// };


ReactDOM.render(<App/>, document.getElementById('root'))