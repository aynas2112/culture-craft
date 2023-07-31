const express = require('express');
const path = require('path');
const fs = require('fs');
const upload = require('../middleware/upload');

const { Saree } = require('../models/Models');
const router = express.Router();

// Router logic goes here

router.get('/',(req, res)=>{
    Saree.find({})
    .then((data) => {
        return res.status(200).json({data});
    })
    .catch(err => {
        return res.status(500).send({message: err.message});
    })
});

router.post('/upload', upload.single('image'), async (req, res)=> {
    if (!req.file) {
        return res.status(400).json({ message: "No files uploaded!" })
    }
    
    try{

        const { filename,  mimetype } = req.file;
        const imgPath = path.join(__dirname, "../../uploads", filename);

        const body = req.body;
        const data = new Saree({
            name: body.name,
            assestType: body.assestType,
            img: {
                imgName: filename,
                contentType: mimetype,
                data: fs.readFileSync(imgPath)
            },
        });

        data.save();

        fs.unlink(imgPath, err=>{
            if (err){
                console.log(err);
                return res.status(500).json({ message: err.message });
            }
        });

        res.status(200).json({ message: "Success!" });
    } catch ( error ) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }

})

module.exports = router;