const CAT_ENDPOINT_RANDOM_IMAGE_URL = 'https://cataas.com'

export async function getCatImageUrl ({ words }) {
  try {
    const response = await fetch(`https://cataas.com/cat/says/${words}?width=300&heigth=300&json=true`)
    const json = await response.json()
    const { url } = json
    return `${CAT_ENDPOINT_RANDOM_IMAGE_URL}${url}`
  } catch (err) {
    throw new Error('Error fetching cat image')
  }
}
