/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './result.css';

class Result extends React.Component {
  constructor() {
    super();
    this.state = {
      player1value: {},
      player2value: {},
    };
  }

  componentDidMount() {
    const { player1, player2 } = this.props.location.query;
    const url1 = `https://api.github.com/users/${player1}`;
    const url2 = `https://api.github.com/users/${player2}`;

    axios.get(url1).then((res) => {
      this.setState({
        player1value: res.data,
      });
    });

    axios.get(url2).then((res) => {
      this.setState({
        player2value: res.data,
      });
    });
  }

  render() {
    const { player1value, player2value } = this.state;
    return (
      <main>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="cardleft">
            <div style={{ display: player1value.public_repos >= 0 && player1value.public_repos !== player2value.public_repos ? 'block' : 'none' }}>
              {(player1value.public_repos > player2value.public_repos) ? <h2 style={{ textAlign: 'center' }}>Winner</h2> : <h2 style={{ textAlign: 'center' }}>Loser</h2>}
            </div>
            <div>
              <img alt="avatar" src={`${player1value.avatar_url}`} width="200" height="200" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Scores:{player1value.public_repos}</h3>
            </div>
            <div>
              <i className="fa fa-location-arrow">{player1value.location}</i>
            </div>
            <div>
              <i className="fa fa-group">{player1value.followers}</i>
            </div>
            <div>
              <i className="fa fa-user-plus">{player1value.following}</i>
            </div>
            <div>
              <i className="fa fa-code">{player1value.public_repos}</i>
            </div>

          </div>

          <div className="cardright">
            <div style={{ display: player2value.public_repos >= 0 && player2value.public_repos !== player1value.public_repos ? 'block' : 'none' }}>
              {(player2value.public_repos > player1value.public_repos) ? <h2 style={{ textAlign: 'center' }}>Winner</h2> : <h2 style={{ textAlign: 'center' }}>Loser</h2>}
            </div>
            <div>
              <img alt="avatar" src={`${player2value.avatar_url}`} width="200" height="200" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Scores:{player2value.public_repos}</h3>
            </div>
            <div>
              <i className="fa fa-location-arrow">{player2value.location}</i>
            </div>
            <div>
              <i className="fa fa-group">{player2value.followers}</i>
            </div>
            <div>
              <i className="fa fa-user-plus">{player2value.following}</i>
            </div>
            <div>
              <i className="fa fa-code">{player2value.public_repos}</i>
            </div>

          </div>
        </div>

        <div className="reset">
          <button><Link to={{ pathname: '/battle' }} style={{ textDecoration: 'none', color: 'rgba(0,0,0,0.65)' }}>RESET</Link></button>
        </div>
      </main>
    );
  }
}

export default Result;
