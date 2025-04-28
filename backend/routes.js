const express = require('express');
const router = express.Router();

// Dummy in-memory storage - (later can replace with MongoDB)
let songs = [];

// Create/Add songs
router.post('/songs', (req, res) => {
    const song = req.body;
    songs.push(song);
    res.status(201).json({ message: "Song added", song });
});

// Read all songs
router.get('/songs', (req, res) => {
    res.json({ songs });
});

// Read One song based on id
router.get('/songs/:id', (req, res) => {
    const { id } = req.params;
    const song = songs.find(s => s.id === id);
    if (song) {
        res.json({ song });
    } else {
        res.status(404).json({ message: "Song not found" });
    }
});

// Update song based on id
router.put('/songs/:id', (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const index = songs.findIndex(s => s.id === id);
    if (index !== -1) {
        songs[index] = { ...songs[index], ...updatedData };
        res.json({ message: "Song updated", song: songs[index] });
    } else {
        res.status(404).json({ message: "Song not found" });
    }
});

// Delete
router.delete('/songs/:id', (req, res) => {
    const { id } = req.params;
    const index = songs.findIndex(s => s.id === id);
    if (index !== -1) {
        const deletedSong = songs.splice(index, 1);
        res.json({ message: "Song deleted", deletedSong });
    } else {
        res.status(404).json({ message: "Song not found" });
    }
});

module.exports = router;
