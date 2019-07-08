const axios = require('axios')

module.exports = async function (context, req) {
  if (!req.query && !req.query.search) {
    return {
      status: 400,
      body: 'Please enter a valid search string'
    }
  }

  const q = req.query.search.toLowerCase()
  let response = await axios.get(`https://v2.sg.media-imdb.com/suggestion/${q.substring(0, 1)}/${q}.json`)
  return {
    body: { data: response.data.d.filter(item => item.id.indexOf('tt') !== -1).map(item => ({ id: item.id,
      title: item.l,
      type: item.q,
      year: item.y,
      image: item.i ? item.i.imageUrl : undefined })) }
  }
}