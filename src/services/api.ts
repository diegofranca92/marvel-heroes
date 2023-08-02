
const baseURL = import.meta.env.VITE_API_URL
const apikey = import.meta.env.VITE_PUBLIC_KEY
const hash = import.meta.env.VITE_HASH_KEY
const auth = `apikey=${apikey}&ts=1&hash=${hash}`


export async function getAll(endpoint:string) {
  await fetch(`${baseURL}${endpoint}?${auth}`)
}

export async function getById(endpoint:string, id:number, path?:string) {
  if (path) {
    await fetch(`${baseURL}${endpoint}/${id}/${path}?${auth}`)
  } else {
    await fetch(`${baseURL}${endpoint}/${id}?${auth}`)
  }
}
  
