const express = require('express');
const fs = require('fs');
const path = require('path');
const upload = require('../middleware/upload');
const { Fest } = require('../models/Models');
const router = express.Router();

// Router logic goes here

router.get('/',(req, res)=>{
    Fest.find({})
    .then((data) => {
        return res.status(200).json({data});
    })
    .catch(err => {
        return res.status(500).send({message: err.message});
    })
});

router.post('/upload', upload.array('images', 10), async (req, res)=> {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "No files uploaded!" })
    }
    
    try{
        const images = [];
        for(const file of req.files){
            const { filename,  mimetype } = file;
            const imgPath = path.join(__dirname, "../../uploads", filename);
            console.log(imgPath);
            images.push({
                imgName: filename,
                contentType: mimetype,
                data: fs.readFileSync(imgPath)
            });
            fs.unlink(imgPath, err=>{
                if (err){
                    console.log(err);
                    return res.status(500).json({ message: err.message });
                }
                
            })
        }

        const body = req.body;
        const data = new Fest({
            name: body.name,
            startDate: new Date(body.startDate),
            endDate: body.endDate? new Date(body.endDate) : null,
            desc: body.desc,
            img: images,
        })

        data.save();

        res.status(200).json({ message: "Success!" })
    } catch ( error ) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }

})

module.exports = router;