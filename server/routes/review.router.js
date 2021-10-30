const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) =>{
    console.log('POST /review');
    const review = req.body;

    const values = [review.feeling, review.understanding, review.support, review.comments];
    
    pool.query(
        `INSERT INTO "feedback" (
        "feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`, values )
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error POST /review', error);
            res.sendStatus(500);
        })
    }
)

module.exports = router;