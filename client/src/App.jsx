import './App.css';
import SongCard from './SongCard';

const dummySong = {
  title: "Cringe Fest 2025",
  artist: "Off-Key Orchestra",
  genre: "Unlistenable Pop"
};

function App() {
  return (
    <div className="app-container">
      <h1>🎧 Worst Playlist Ever</h1>
      <p>Welcome to the most ear-cringing collection of songs on the internet.</p>
      <p>This is an ASAP (As Silly As Possible) project where bad taste is the whole point!</p>
      <SongCard song={dummySong} />
    </div>
  );
}

export default App;
