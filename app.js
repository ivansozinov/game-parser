import express from 'express';
import gplay from "google-play-scraper";
import url from "url"
  
const app = express();
  
app.get('/',(req,res) => {
    const gameLink = req.query.game;
    if(!gameLink) res.send({"error": "Pass link to game in Google Play in 'game' parameter"})
    console.log('req.query.game', req.query.game);
    const queryData = url.parse(req.query.game, true).query;
    if (queryData.id) {
        gplay.app({appId: queryData.id})
        .then((response) => {
            res.send(response);
        });
    }
})
  
const PORT = 3000;
  
app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
})