
const authApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey != process.env.API_KEY) {
        console.log(apiKey);
        return res.status(401).json({ message: "Invalid API key!" });
    }

    next();
}

module.exports = authApiKey;