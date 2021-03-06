import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

class Lyrics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lyrics: '',
      track: {},
    };
  }

  componentDidMount = () => {
    const { trackId } = this.props.match.params;
    this.getLyrics(trackId);
    this.getTrack(trackId);
  };

  getLyrics = trackId => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => this.setState({ lyrics: res.data.message.body.lyrics.lyrics_body }))
      .catch(err => console.log(err));
  };

  getTrack = trackId => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${trackId}&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => this.setState({ track: res.data.message.body.track }))
      .catch(err => console.log(err));
  };

  render() {
    const { lyrics, track } = this.state;
    console.log(lyrics);
    if (track === undefined || lyrics === undefined || track === {} || lyrics === '') {
      return <Spinner />;
    }
    return (
      <React.Fragment>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go back
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track_name} by
            <span className="text-secondary"> {track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics}</p>
          </div>
        </div>
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album Id: </strong>
            {track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Song Genre: </strong>
            {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
          </li>
          <li className="list-group-item">
            <strong>Release Date: </strong>
            <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Lyrics;
