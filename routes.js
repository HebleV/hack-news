const router = require('express').Router();
const requestHttp = require('request-promise-native');

router.get('/items', async (req, res) => {
  const {
    query: {
      id,
    } = {}
  } = req;
  try {
    const response = await requestHttp(`http://hn.algolia.com/api/v1/items/${id}`);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;