import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trackTitle: '',
    };
  }

  findTrack = (dispatch, e) => {
    e.preventDefault();
    const { trackTitle } = this.state;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${trackTitle}&page_size=3&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        dispatch({
          type: 'SEARCH_TRACKS',
          payload: res.data.message.body.track_list,
        });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { trackTitle } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form onSubmit={this.findTrack.bind(this, dispatch)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Song title"
                  name="trackTitle"
                  value={trackTitle}
                  onChange={this.onChange}
                />
              </div>
              <button className="btn btn-primary btn-large btn-block mb-5" type="submit">
                Search for a song
              </button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}
