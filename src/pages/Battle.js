import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './battle.css';


class Battle extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: '',
      player2: '',
      showplayer1: false,
      showplayer2: false,
      disabledplayer1: true,
      disabledplayer2: true,
    }
  }

  handlePostleft = () => {
    this.setState({ showplayer1: true });
  }

  handlePostright = () => {
    this.setState({ showplayer2: true });
  }

  leftcancel = () => {
    this.setState({ showplayer1: false });
  }

  rightcancel = () => {
    this.setState({ showplayer2: false });
  }

  onkeyupleft = (e) => {
    if (e.keyCode === 13) {
      console.log(1);
      this.handlePostleft();
    }
  }

  onkeyupright = (e) => {
    if (e.keyCode === 13) {
      this.handlePostright();
    }
  }

  handleChangeleft(e) {
    if (e.target.value === '') {
      this.setState({disabledplayer1: true});
    }
    else{
      this.setState({
        player1: e.target.value,
        disabledplayer1: false,
      });
    }
  }

  handleChangeright(e) {
    if (e.target.value === '') {
      this.setState({disabledplayer2: true});
    }
    else{
      this.setState({
        player2: e.target.value,
        disabledplayer2: false,
      });
    }
  }


  render() {
    const { showplayer1 } = this.state;
    const { showplayer2 } = this.state;
    const { player1 } = this.state;
    const { player2 } = this.state;

    return (
      <main>
        <h2 style={{ textAlign: 'center' }}>Instructions</h2>
        <div className='content'>
          <div className="tag" style={{ flex: 4 }}>
            <div>
              Enter two Github:
            </div>

            <div>
              <i className="fa fa-users" style={{ color: 'rgb(255, 191, 116)' }} />
            </div>
          </div>

          <div className="tag" style={{ flex: 2 }}>
            <div>
              Battle:
            </div>

            <div>
              <i className="fa fa-fighter-jet" style={{ color: 'gray' }} />
            </div>
          </div>

          <div className="tag" style={{ flex: 4 }}>
            <div>
              See the winner:
            </div>

            <div>
              <i className="fa fa-trophy fa-3x" style={{ color: 'yellow' }} />
            </div>
          </div>
        </div>

        <h3 style={{ textAlign: 'center' }}>Players</h3>
        <form>
          <div className='form'>
            {/* player1 */}
            <div className='player1'>
              <h3>Player One</h3>

              <div style={showplayer1 ? { display: 'none' } : { display: 'flex' }}>
                <input className="player1input" type="text" name="player1" placeholder="github username" onChange={this.handleChangeleft.bind(this)} onKeyUp={this.onkeyupleft} defaultValue={this.state.player1} />
                <button type="button" onClick={this.handlePostleft} disabled={this.state.disabledplayer1}>Submit</button>
              </div>

              {/* 变更样式 */}
              <div style={showplayer1 ? { display: 'block' } : { display: 'none' }}>
                <div style={{
                  display: 'flex', padding: 16, borderRadius: 4, backgroundColor: '#dfdfdf',
                }}
                >
                  <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                    <img alt='player1' src={`https://github.com/${player1}.png?size=200`} width="128" />
                    <span style={{ fontSize: 32, color: '#1890ff' }}>{player1}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span role="button" tabIndex={0} aria-label="cancel" className="fa-stack" onClick={this.leftcancel} onKeyUp={this.leftcancel}><i className="fa fa-circle fa-stack-2x text-danger" /><i className="fa fa-close fa-stack-1x fa-inverse" /></span>
                  </div>
                </div>

              </div>
            </div>

            {/* player2 */}
            <div className='player2'>
              <h3>Player Two</h3>

              <div style={showplayer2 ? { display: 'none' } : { display: 'flex' }}>
                <input className="player2input" type="text" name="player2" placeholder="github username" onChange={this.handleChangeright.bind(this)} onKeyUp={this.onkeyupright} defaultValue={this.state.player2} />
                <button type="button" onClick={this.handlePostright} disabled={this.state.disabledplayer2}>Submit</button>
              </div>

              {/* 变更样式 */}
              <div style={showplayer2 ? { display: 'block' } : { display: 'none' }}>
                <div style={{
                  display: 'flex', padding: 16, borderRadius: 4, backgroundColor: '#dfdfdf',
                }}
                >
                  <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                    <img alt='player2' src={`https://github.com/${player2}.png?size=200`} width="128" />
                    <span style={{ fontSize: 32, color: '#1890ff' }}>{player2}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span role="button" tabIndex={0} aria-label="cancel" className="fa-stack" onClick={this.rightcancel} onKeyUp={this.rightcancel}><i className="fa fa-circle fa-stack-2x text-danger" /><i className="fa fa-close fa-stack-1x fa-inverse" /></span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="submit" style={showplayer1 && showplayer2 ? { display: 'block' } : { display: 'none' }}>
            <button type="button"><Link to={{ pathname: `/result`, query:{player1,player2}}} style={{ textDecoration: 'none', color: 'rgba(0,0,0,0.65)' }}>Battle</Link></button>
          </div>

        </form>
      </main>
    );
  }
}

export default Battle;
