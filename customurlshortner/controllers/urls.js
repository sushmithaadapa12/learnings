const {pool} = require('../db.config.js');

const inserturl = async (req, res) => {
    // console.log((req));
    const { originalUrl, customShortUrl } = req.body;
    let shortUrl;
    if (customShortUrl) {
        shortUrl = customShortUrl;
    } else {
        shortUrl = generateShortUrl();
    }

    // Insert record into database
    try {

        const client = await pool.connect();
         const result = await client.query('INSERT INTO urls (original_url, short_url, custom_short_url) VALUES ($1, $2, $3)', [originalUrl, shortUrl, customShortUrl]);
         client.release();
         response = {
            status: "Success",
            message: "Url successfully created",
            url:`http://10.1.10.78:3000/${shortUrl}`
            };
            res.status(200).json(response);
    } catch (err) {
        console.error(err);
        response = {
            status: "error",
            message: "Error creating short URL",
            };
            res.status(500).json(response);
    }
}

function generateShortUrl() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let shortUrl = '';
    for (let i = 0; i < 6; i++) {
        shortUrl += chars[Math.floor(Math.random() * chars.length)];
    }
    return shortUrl;
}

const geturl = async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT original_url FROM urls WHERE short_url = $1 OR custom_short_url = $1', [shortUrl]);
        client.release();
        if (result.rows.length > 0) {
            res.redirect(result.rows[0].original_url);
        } else {
            response = {
                status: "error",
                message: "Short URL not found",
                };
                res.status(404).json(response);
            }
    } catch (err) {
        console.error(err);
        response = {
            status: "error",
            message: "Error retrieving original URL",
            };
            res.status(500).json(response);
    }
}

module.exports = {inserturl,geturl}