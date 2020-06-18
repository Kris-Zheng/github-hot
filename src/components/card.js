import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './card.css';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }

  componentDidMount() { // 监听滚动
    // 监听是否滚动到底，从而加载第二页数据
    window.addEventListener('scroll', async () => {
      console.log('scroll');
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      // 避免没有数据的时候 重复执行 scrollHeight > clientHeight
      if (scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight) {
        // 加载下一页数据
        const { handleNextPage } = this.props;
        const { page } = this.state;
        handleNextPage(page + 1);
        this.setState({ page: page + 1 });
      }
    });
  }

  render() {
    const { type } = this.props;
    // 5. 查看child2是否成功获取到数值
    console.log(`body got type ${type}`);
    // 6. 根据拿到的数值发送请求获取不同的数据
    /**
     * issue
     * 1. 页面初始化的时候发了两次请求
     * 2. 每次更改type的时候会发送很多次一模一样的请求
     * todo:
     * 1. react生命周期继续学习 (优先)
     * 2. promise对象 再去理解一下
     * 3. generator去过一遍
     */

    /**
 * 瀑布流
 * 1. 监听页面滚动到底部了
 * 2. 获取下一页数据
 * 3. 将数据填充进页面
 *   3-1. 原来使用的是setState({data})
 *   3-2. data.push('第二页的数据') -> setState({data})
 */
    const list = type.map((item, key) => (
      <div className="item" key={item.id}>
        <h2 style={{ textAlign: 'center' }}>#{key + 1}</h2>
        <div style={{ textAlign: 'center' }}><img alt="avatar" src={item.owner.avatar_url} width="50%" /></div>
        <h4 style={{
          display: 'flex', flexDirection: 'row', height: 36, justifyContent: 'center',
        }}
        >{item.name}
        </h4>
        <div><i
          className="fa fa-user"
          style={{
            display: 'inline-flex', width: 16, justifyContent: 'center', color: 'rgb(255,191,116',
          }}
        />{item.name}
        </div>
        <div><i
          className="fa fa-star"
          style={{
            display: 'inline-flex', width: 16, justifyContent: 'center', color: 'rgb(255,215,0',
          }}
        />{item.stargazers_count} stars
        </div>
        <div><i
          className="fa fa-code-fork"
          style={{
            display: 'inline-flex', width: 16, justifyContent: 'center', color: 'rgb(129, 195, 245)',
          }}
        />{item.forks} forks
        </div>
        <div><i
          className="fa fa-warning"
          style={{
            display: 'inline-flex', width: 16, justifyContent: 'center', color: 'rgb(241, 138, 147)',
          }}
        />{item.open_issues} open issues
        </div>
      </div>
    ));

    return (
      <main>
        <div className="appcontent">
          {list}
        </div>
        <div className="spinner">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </main>
    );
  }
}

export default Body;
