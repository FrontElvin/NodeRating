const {PATH_TO_RATING_FILE, WEIGHT} = require("./config");
const makeRatingFile = require("./rating-file");
const { updateRating, createRating } = require("./calculations");


module.exports = {
    PATH_TO_RATING_FILE,
    WEIGHT,
    makeRatingFile,
    updateRating,
    createRating, 
}