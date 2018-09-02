import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ track }) => (
  <div className="col-md-6">
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5>{track.artist_name}</h5>
        <p className="card-text">
          <strong>Track: </strong>
          {track.track_name}
          <br />
          <strong>Album: </strong> {track.album_name}
        </p>
        <Link className="btn btn-dark btn-block" to={`lyrics/track/${track.track_id}`}>
          View Lyrics
        </Link>
      </div>
    </div>
  </div>
);

export default Track;
