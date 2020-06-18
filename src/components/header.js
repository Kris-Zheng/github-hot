/* eslint-disable */
import React from 'react';
import axios from 'axios';
import './header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currenttype: 'All' };
  }

  types = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  componentDidMount() {
    this.changeType('All');
  }

  changeType = (currenttype, page = 1) => {
    // 1. 获取到当前点击的类型
    // 2. 再一次通过api获取该类型的数据
    // 3. 把获取到的数据填充进RepoList
    /*
      parent
       | child1
       | child2
      goal: child1 <-> child2
      way:
       1. child1 -> parent (callback)
       2. parent -> child2 (props)
    */

    // 1. child1 获取到需要传递给parent的值
    console.log(currenttype);
    // 2. 尝试将数组传给parent
    // 2-1. 此时传递的不再是type, 而是获取到的数据
    const baseUrl = `https://api.github.com/search/repositories?q=stars:%3E1+language:${currenttype}&sort=stars&order=desc&type=Repositories&page=${page}`;
    axios.get(baseUrl)
      .then((res) => {
        // 3. 回调parent为该child1准备的方法
        this.props.callback(res.data.items, currenttype);
      });
  }

  render() {
    return (
      <header className="header">
        <div className="list">
          <ul>
            {this.types.map((item) => <li key={item} onClick={() => this.changeType(item)}>{item}</li>)}
          </ul>
        </div>
      </header>
    );
  }
}


export default Header;
