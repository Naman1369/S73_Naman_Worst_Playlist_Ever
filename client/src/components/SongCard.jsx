function SongCard({ song }) {
    return (
      <div className="song-card">
        <h2>{song.title}</h2>
        <p>Artist: {song.artist}</p>
        <p>Genre: {song.genre}</p>
      </div>
    );
  }
  
  export default SongCard;
  