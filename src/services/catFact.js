const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export async function getCatFact () {
  try {
    const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const json = await response.json()
    const { fact } = json
    return fact
  } catch (err) {
    throw new Error('Error fetching cat fact')
  }
}
