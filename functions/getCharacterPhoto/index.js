const cheerio = require('cheerio')
const axios = require('axios')
const CacheService = require('../cache-service.js')
const ttl = 60 * 60 * 100 // cache for 1 Hour
const cache = new CacheService(ttl) // Create a new cache service instance

module.exports = async function (context, req) {
  if (!req.query && !req.query.link) {
    return {
      status: 400,
      body: 'Please provide a link to the IMDB character page'
    }
  }

  const result = await cache.get(`https://www.imdb.com${req.query.link}`, () =>axios.get(`https://www.imdb.com${req.query.link}`))
  const $ = cheerio.load(result.data)
  const img = $('.titlecharacters-image-grid__thumbnail-link').first().find('img')
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