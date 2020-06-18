/* eslint-disable */
import React from 'react';
import axios from 'axios';
import Body from '../components/card';
import Header from '../components/header';
import './popular.css';

class App extends React.Component {
    state = {
      type: [],
      currentType: 'All',
    };


  handleHeaderCallback = (type, currentType) => {
    console.log(`header send type ${type} to parent`);
    // 4. parent传递type给child2
    this.setState({ type, currentType });
  }

  handleNextPage = (page) => {
    // console.log(page)
    const { currentType } = this.state;
    console.log(`加载第${page},类型为${currentType}`);
    /**
     * todo:
     * 1. 解决冗余
     * 2. 变量命名规范
     * 3. 骨架页面（数据未加载出来的过渡动画）
     */

    // 1. 事件监听时，区别于原生的js,需要在react的基础上做监听
    // 2. 监听到底部时候，不仅要保留原有数据，还要将下一页数据push进去
    // [...type,...res.data.items] es6 解构赋值
    // res.data.items.map(i=>type.push(i))
    // 3. 切换类型的时候需要回到第一页，并清空其他数据
    // promise
    const that = this;
    const baseUrl = `https://api.github.com/search/repositories?q=stars:%3E1+language:${currentType}&sort=stars&order=desc&type=Repositories&page=${page}`;
    axios.get(baseUrl)
      .then((res) => {
        // 3. 回调parent为该child1准备的方法
        let { type } = that.state;
        // console.log(res)
        type = [...type, ...res.data.items];
        console.log(type);
        that.setState({ type });
      });
  }

  render() {
    const { type, currentType } = this.state;
    return (
      <div className="app">
        <Header callback={this.handleHeaderCallback} />
        <Body type={type} handleNextPage={this.handleNextPage} currentType={currentType} />
      </div>
    );
  }
}

// todo:
// 1. 模块分离 Component/file √
// 2. 路径目录在引用时候的简写
// 3. StrictMode

export default App;
