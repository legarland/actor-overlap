const cheerio = require('cheerio')
const axios = require('axios')

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

  const result = await axios.get(`https://www.imdb.com/search/name/?roles=${req.query.ids}`)
  const $ = cheerio.load(result.data)
  let returnData = []
  const actorDataPromises = []
  $('.lister-item-header').each(async (i, el) => {
    const type = $(el).next('.text-muted').text().trim()
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

  const promises = await Promise.all(ids.map(id => axios.get(`https://www.imdb.com/title/${id}/fullcredits?ref_=tt_cl_sm#cast`)))
  promises.forEach((result, i) => {

    const $show = cheerio.load(result.data)
    const showId = ids[i]
    returnData = returnData.map(actor => {
      if (!actor) return undefined
      const tableRows = $show('.cast_list tr:first-child').nextUntil('tr:not([class])')
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