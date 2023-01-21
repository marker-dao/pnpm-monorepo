import Config from '@ioc:Adonis/Core/Config'
import Parser from 'rss-parser'

export default class PostsController {
  public async index () {
    try {
      const parser = new Parser()
      const feed = await parser.parseURL(Config.get('site.feed'))

      return feed.items.map(item => ({
        title: item.title,
        link: item.link,
        content: item.content,
        creator: item.creator,
      }))
    } catch (e) {
      console.log(e)
    }
  }
}

