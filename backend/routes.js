const express = require('express');
const router = express.Router();

let songs = []; // Temporary in-memory store

// POST: Add a new song
router.post('/songs', (req, res) => {
    const { id, title, artist } = req.body;

    if (!id || !title || !artist) {
        return res.status(400).json({ message: "Missing required fields: id, title, artist" });
    }

    const existing = songs.find(s => s.id == id);
    if (existing) {
        return res.status(409).json({ message: "Song with this ID already exists" });
    }

    const song = { id, title, artist };
    songs.push(song);
    res.status(201).json({ message: "Song added", song });
});

// GET: All songs
router.get('/songs', (req, res) => {
    res.json(songs);
});

// GET: Song by ID
router.get('/songs/:id', (req, res) => {
    const { id } = req.params;
    const song = songs.find(s => s.id == id);
    if (!song) {
        return res.status(404).json({ message: "Song not found" });
    }
    res.json(song);
});

// PUT: Update song
router.put('/songs/:id', (req, res) => {
    const { id } = req.params;
    const { title, artist } = req.body;

    const song = songs.find(s => s.id == id);
    if (!song) {
        return res.status(404).json({ message: "Song not found" });
    }

    if (title) song.title = title;
    if (artist) song.artist = artist;

    res.json({ message: "Song updated", song });
});

// DELETE: Delete song
router.delete('/songs/:id', (req, res) => {
    const { id } = req.params;
    const index = songs.findIndex(s => s.id == id);
    if (index === -1) {
        return res.status(404).json({ message: "Song not found" });
    }

    const deleted = songs.splice(index, 1);
    res.json({ message: "Song deleted", song: deleted[0] });
});

module.exports = router;
