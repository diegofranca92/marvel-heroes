const baseURL = import.meta.env.VITE_API_URL
const apikey = import.meta.env.VITE_PUBLIC_KEY
const hash = import.meta.env.VITE_HASH_KEY
const auth = `apikey=${apikey}&ts=1&hash=${hash}`

const api = {
  getAll: function (endpoint: string) {
    return fetch(`${baseURL}${endpoint}?${auth}`)
  },

  getById: function (endpoint: string, id: string, path?: string) {
    if (path) {
      return fetch(`${baseURL}${endpoint}/${id}/${path}?${auth}`)
    } else {
      return fetch(`${baseURL}${endpoint}/${id}?${auth}`)
    }
  }
}

export default api
