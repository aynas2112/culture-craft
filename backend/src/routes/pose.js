const express = require('express');
const fs = require('fs');
const path = require('path');
const query = require('../db/poseFetcher');

const router = express.Router();

router.post('/newpose', async (req, res)=> {
    try{
        // console.log(req.body);
        const { difficulty, type, benefits } = await req.body;
        const data = await query(`poseLevel:'${difficulty}', poseCategory: '${type}', poseBenefits: '${benefits}`)
        // const data = `poseLevel:'${difficulty}', poseCategory: '${type}', poseBenefits: '${benefits}`
        console.log("it works!!", difficulty, type, benefits);
        res.status(200).json({ message: "Success!", data: data });
            } catch (error) {
                console.log(error);
            }

})

module.exports = router;
