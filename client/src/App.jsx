import './App.css';
import SongCard from './components/SongCard';

function App() {
  const dummySong = {
    title: "The Duck Song",
    artist: "Unknown YouTuber",
    genre: "Annoying"
  };

  return (
    <div className="app-container">
      <h1>🎧 Worst Playlist Ever</h1>
      <p>Welcome to the most ear-cringing collection of songs on the internet.</p>
      <p>This is an ASAP (As Silly As Possible) project where bad taste is the whole point!</p>

      <h2 style={{ marginTop: '2rem' }}>🎶 Featured Disaster</h2>
      <SongCard song={dummySong} />
    </div>
  );
}

export default App;
