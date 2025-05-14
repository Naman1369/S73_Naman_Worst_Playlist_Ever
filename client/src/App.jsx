import './App.css';
import SongCard from './components/SongCard';
import { useEffect, useState } from 'react';

function App() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/songs')  // replace with your actual backend URL if deployed
      .then(res => res.json())
      .then(data => {
        setSongs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching songs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <h1>🎧 Worst Playlist Ever</h1>
      <p>Welcome to the most ear-cringing collection of songs on the internet.</p>
      <p>This is an ASAP (As Silly As Possible) project where bad taste is the whole point!</p>

      {loading ? (
        <p>Loading songs...</p>
      ) : songs.length > 0 ? (
        songs.map((song) => <SongCard key={song._id} song={song} />)
      ) : (
        <p>No songs found. Try adding some!</p>
      )}
    </div>
  );
}

export default App;
