import { useEffect, useState } from 'react'
import { getCatImageUrl } from '../services/catImageUrl'

export function useCatUrl ({ catFact }) {
  const [catImageUrl, setCatImageUrl] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    if (!catFact) return
    const words = catFact.split(' ', 3).join(' ')
    const randomImageCatUrl = async () => {
      try {
        const url = await getCatImageUrl({ words })
        setCatImageUrl(url)
      } catch (err) {
        setError('Error getting cat image url')
      }
    }
    randomImageCatUrl()
  }, [catFact])

  return { catImageUrl, error }
}
