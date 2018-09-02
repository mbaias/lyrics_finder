import React from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

const Tracks = () => (
  <Consumer>
    {value => {
      const { trackList, heading } = value;
      if (trackList === undefined || trackList.length === 0) {
        return <Spinner />;
      }
      return (
        <React.Fragment>
          <h3 className="text-center mb-4">{heading}</h3>
          <div className="row">
            {trackList.map(item => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </div>
        </React.Fragment>
      );
    }}
  </Consumer>
);

export default Tracks;
