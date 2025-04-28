const express = require('express');
const router = express.Router();

// Temporary array to store songs
let songs = [];

// POST: Add a new song
router.post('/songs', (req, res) => {
    const { id, title, artist } = req.body;

    if (!id || !title || !artist) {
        return res.status(400).json({ message: "Missing required fields: id, title, artist" });
    }

    const song = { id, title, artist };
    songs.push(song);
    res.status(201).json({ message: "Song added", song });
});

// GET: Get all songs
router.get('/songs', (req, res) => {
    res.json({ songs });
});

// GET: Get a song by ID
router.get('/songs/:id', (req, res) => {
    const { id } = req.params;
    const song = songs.find(s => s.id.toString() === id);

    if (!song) {
        return res.status(404).json({ message: "Song not found" });
    }

    res.json({ song });
});

// PUT: Update a song by ID
router.put('/songs/:id', (req, res) => {
    const { id } = req.params;
    const { title, artist } = req.body;

    const songIndex = songs.findIndex(s => s.id.toString() === id);

    if (songIndex === -1) {
        return res.status(404).json({ message: "Song not found" });
    }

    if (!title || !artist) {
        return res.status(400).json({ message: "Missing fields: title and artist required to update" });
    }

    songs[songIndex].title = title;
    songs[songIndex].artist = artist;

    res.json({ message: "Song updated", song: songs[songIndex] });
});

// DELETE: Delete a song by ID
router.delete('/songs/:id', (req, res) => {
    const { id } = req.params;
    const songIndex = songs.findIndex(s => s.id.toString() === id);

    if (songIndex === -1) {
        return res.status(404).json({ message: "Song not found" });
    }

    const deletedSong = songs.splice(songIndex, 1);
    res.json({ message: "Song deleted", song: deletedSong[0] });
});

module.exports = router;
