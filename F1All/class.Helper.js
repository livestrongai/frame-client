const Helper = {
  getWebSocketURL () {
    return 'wss://frame-server-x8qw.onrender.com'
  },

  getBaseURL () {
    return 'https://frame-server-x8qw.onrender.com'
  },

  // ./cache.txt vs /cache.txt
  getURLs (cache = true) {
    const baseURL = this.getBaseURL()
    return {
      articles: cache ? ('/cache.txt') : (baseURL + '/articles/get'),
      users: (baseURL + '/users/get')
    }
  },

  async fetchJSON (url, options = { credentials: 'include' }, onsuccess = this.onSuccessDefault, onfailure = this.onFailureDefault) {
    try {
      const response = await fetch(url, options)

      // idiom for fetch - check for status 200 - 299
      if (!response.ok) { throw new Error(`HTTP error with status: ${response.status}`) }

      const json = await response.json()
      onsuccess(json)
    } catch (error) {
      onfailure(error)
    }
  },

  onFailureDefault (error) {
    console.logD('DEBUG: Helper: fetch failed: ', 'red')
    console.log(error)
  },

  onSuccessDefault (json) {
  }
}

export default Helper
