const fs = require("fs").promises;
const { getRandomGame } = require("../appModules/api/api-utils");
const { PATH_TO_RATING_FILE } = require("../appModules/rating");


async function gameRouteController(res) {
    try {
      const ratingFile = await fs.readFile(PATH_TO_RATING_FILE);
      const data = JSON.parse(ratingFile);
      const game = getRandomGame(data);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(game));
    } catch (error) {
      res.statusCode = 500;
      res.end("Internal server Error");
    }
  }

  module.exports = gameRouteController;  