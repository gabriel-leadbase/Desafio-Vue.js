const config = {
  production: {
    apiURL: 'https://'
  },

  development: {
    apiURL: 'https://localhost:3000'
  },

  test: {

  }
}

export default config[process.env]
