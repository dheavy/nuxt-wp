import axios from 'axios'

class WpApi {
  constructor(siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }

  async site(cb) {
    try {
      const {data} = await axios.get(this.apiBase)
      const {name, description, url, home, gmt_offset, timezone_string} = data

      return {
        site: {
          name,
          description,
          url,
          home,
          gmtOffset: gmt_offset,
          timezoneString: timezone_string
        }
      }
    } catch (err) {
      return cb(err)
    }
  }

  async posts(options, cb) {
    try {
      const {data} = await axios.get(`${this.apiBase}/wp/v2/posts`, {
        params: {
          page: 1,
          per_page: 10,
          ...options
        }
      })

      return {posts: data}
    } catch (err) {
      return cb(err)
    }
  }

  async authors(options) {
    try {
      const {data} = await axios.get(`${this.apiBase}/wp/v2/users`, {
        page: 1,
        per_page: 20,
        ...options
      })

      return {users: data}
    } catch (err) {
      return cb(err)
    }
  }
}

const wp = new WpApi(process.env.API_BASE || 'http://localhost')

export default wp
