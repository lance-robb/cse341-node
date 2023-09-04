const motorFunction = (req, res, next) => {
    res.json('MT09 is a Bitchin Bike');
};

const raceFunction = (req, res, next) => {
    res.json('I have a need.... A need for speed');
};

module.exports = {motorFunction, raceFunction};
