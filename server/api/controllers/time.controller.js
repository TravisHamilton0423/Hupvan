function getCurrentTime(req, res) {
  res.json(new Date());
}

module.exports = {
  getCurrentTime,
};
