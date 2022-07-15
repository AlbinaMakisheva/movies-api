import Genres from './genresData';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    const genres = await Genres.find();
    res.status(200).json(genres);
});

export default router;