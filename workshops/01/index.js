const axios = require('axios') // HTTP library

// Insert variables
const API_URL = ''
const API_KEY = ''
const USERNAME = ''
const PASSWORD = ''

// Init HTTP client
const api = axios.create({
  baseURL: API_URL,
  headers: {
    // Attach required 'x-api-key' header with every request
    'x-api-key': API_KEY
  }
})

const main = async () => {
  // Implement me!
}

// Invoke our program
main()
