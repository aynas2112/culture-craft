const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.post('/newpose', async (req, res)=> {
    try{
        const { difficulty, type, description } = req.body;
        console.log(difficulty, type, description);
        res.status(200).json({ message: "Success!" });
            } catch (error) {
                res.status(409).json({message: error.message});
            }

})

module.exports = router;