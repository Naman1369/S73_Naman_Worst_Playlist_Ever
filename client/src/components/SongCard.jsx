import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function SongCard({ song }) {
  return (
    <div className="song-card">
      <h2>{song.title}</h2>
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
    </div>
  );
}

SongCard.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default SongCard;
