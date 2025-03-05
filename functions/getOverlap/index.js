const cheerio = require('cheerio')
const axios = require('axios')
// const CacheService = require('../cache-service.js')
// const ttl = 60 * 60 * 100 // cache for 1 Hour
// const cache = new CacheService(ttl) // Create a new cache service instance

const axiosInstance = axios.create({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive'
  }
})

module.exports = async function (context, req) {
  try {
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
    const result = await axiosInstance.get(`https://www.imdb.com/search/name/?roles=${req.query.ids}`)
    console.log('Done getting overlap')
    const $ = cheerio.load(result.data)
    let returnData = []
    const actorDataPromises = []
    $('.ipc-metadata-list-summary-item').each(async (i, el) => {
      const image = $(el).find('.ipc-image').attr('src')
      const link = $(el).find('a')
      const name = $(el).find('.ipc-title__text').text().trim()
      const match = link.attr('href').match(/\/([^\/]+)\/([^\/]+)\/([^\/]+)/)
      const id = match[2]

      actorDataPromises.push(axiosInstance.get(`https://www.imdb.com/name/${id}/`))
      if (image) {
        returnData.push({
          name,
          id,
          image: image.indexOf('nopicture') !== -1 ? image.replace('.png', 'V1_SY200_CR38,0,150,200_AL_.png') : image,
          link: link.attr('href')
        })
      }
    })

    console.log('loading both movie pages')
    const promises = await Promise.all(ids.map(id => axiosInstance.get(`https://www.imdb.com/title/${id}/fullcredits?ref_=tt_cl_sm#cast`)))
    console.log('done loading both movie promies')
    promises.forEach((result, i) => {

      console.log('parsing movie' + i)
      const $show = cheerio.load(result.data)
      const showId = ids[i]
      console.log(returnData)
      //const tableRows = $show('.cast_list > tbody > tr').first().nextUntil('tr:not([class])')
      returnData = returnData.map(actor => {
        if (!actor) return undefined

        console.log('finding actor link')
        const actorLink = $show(`.cast_list a[href*="${actor.id}"]`)
        console.log('found actor link')

        const actorLinkRow = actorLink.parent().parent()
        if (!actorLink.length || (!actorLinkRow.hasClass('even') && !actorLinkRow.hasClass('odd'))) return undefined
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
  catch (error) {
    console.error('Error:', error.message)
    return {
      status: 500,
      body: 'Internal Server Error'
    }
  }
}