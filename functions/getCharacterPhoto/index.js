const cheerio = require('cheerio')
const axios = require('axios')
const CacheService = require('../cache-service.js')
const ttl = 60 * 60 * 100 // cache for 1 Hour
const cache = new CacheService(ttl) // Create a new cache service instance

const axiosInstance = axios.create({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive'
  }
})

module.exports = async function (context, req) {
  if (!req.query && !req.query.link) {
    return {
      status: 400,
      body: 'Please provide a link to the IMDB character page'
    }
  }

  const result = await cache.get(`https://www.imdb.com${req.query.link}`, () =>axiosInstance.get(`https://www.imdb.com${req.query.link}`))
  const $ = cheerio.load(result.data)
  const img = $('.ipc-image[alt="View Poster"]').first()
  if (img.length) {
    const src = img.attr('src')
    const srcset = img.attr('srcset')
  
    return {
      body: {
        src,
        srcset
      }
    }
  }
  else {
    return {
      body: {
        src: 'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/name-2135195744._CB470041852_._V1_SY100_CR38,0,100,100_AL_.png',
      }
    }
  }
}