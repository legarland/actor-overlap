const cheerio = require('cheerio')
const axios = require('axios')
const CacheService = require('../cache-service.js')
const ttl = 60 * 60 * 100 // cache for 1 Hour
const cache = new CacheService(ttl) // Create a new cache service instance

module.exports = async function (context, req) {
  if (!req.query.ids) {
    return {
      status: 400,
      body: 'Missing IDs'
    }
  }

  const ids = req.query.ids.split(',')
  if (ids.length < 2) {
    return {
      status: 400,
      body: 'Need more than one ID'
    }
  }

  console.log('Getting overlap from common')
  const result = await cache.get(`https://www.imdb.com/search/name/?roles=${req.query.ids}` ,() => axios.get(`https://www.imdb.com/search/name/?roles=${req.query.ids}`))
  console.log('Done getting overlap')
  const $ = cheerio.load(result.data)
  let returnData = []
  const actorDataPromises = []
  $('.lister-item-header').each(async (i, el) => {
    const image = $(el).parent().prev().find('img').attr('src')
    const link = $(el).find('a')
    const name = link.text().trim()
    const id = link.attr('href').replace('/name/', '')

    actorDataPromises.push(axios.get(`https://www.imdb.com/name/${id}/`))
    returnData.push({
      name,
      id,
      image: image.indexOf('nopicture') !== -1 ? image.replace('.png', 'V1_SY200_CR38,0,150,200_AL_.png') : image,
      link: link.attr('href')
    })
  })

  console.log('loading both movie pages')
  const promises = await Promise.all(ids.map(id => cache.get(`https://www.imdb.com/title/${id}/fullcredits?ref_=tt_cl_sm#cast`, () => axios.get(`https://www.imdb.com/title/${id}/fullcredits?ref_=tt_cl_sm#cast`))))
  console.log('done loading both movie promies')
  promises.forEach((result, i) => {

    console.log('parsing movie' + i)
    const $show = cheerio.load(result.data)
    const showId = ids[i]
    const tableRows = $show('.cast_list > tbody > tr').first().nextUntil('tr:not([class])')
    returnData = returnData.map(actor => {
      if (!actor) return undefined
      const actorLink = tableRows.find(`a[href*="${actor.id}"]`)
      if (!actorLink.length) return undefined
      const actorName = actorLink.parent().parent().find('.character,.credit')
      actorName.find('a[class*="episodes"]').remove()
      let characterLinkEl = actorName.find('a[href*="characters"]').first()
      let characterName = characterLinkEl.text().trim()
      let characterLink = ''
      if (!characterName) characterName = actorName.text().trim()
      else characterLink = characterLinkEl.attr('href')
      return {
        ...actor,
        characters: {
          ...actor.characters,
          [showId]: {
            name: characterName,
            link: characterLink
          }
        }
      }
    })
  })
  return {
    body: { data: returnData.filter(rd => rd !== undefined) }
  }
}