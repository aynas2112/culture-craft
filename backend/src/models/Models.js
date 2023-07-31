const { Schema, default: mongoose } = require("mongoose");

const imageSchema = new Schema({
    imgName: {
        type: String,
        required: true,
    },
    contentType: {
        type: String,
        required: true,
    },
    data: {
        type: Buffer,
        required: true,
    },
});

const festSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	startDate: {
		type: String,
		required: true,
	},
    endDate: {
        type: String,
    },
	desc: {
		type: String,
		required: true,
	},
	img: [ imageSchema ],
});

const sareeSchema = new Schema({
	name: {
        type: String,
        required: true,
    },
    assestType: {
        type: String,
        required: true,
    }, 
	img: imageSchema,
});

const yogaSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	difficulty: { 
        type: Number,
        min: 1,
        max: 10,
        required: true,
    },
	img: imageSchema,
});

const Fest = mongoose.model("Fest", festSchema);
const Saree = mongoose.model("Saree", sareeSchema);
const Yoga = mongoose.model("Yoga", yogaSchema);

module.exports = { Fest, Saree, Yoga };
