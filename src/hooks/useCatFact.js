import { useEffect, useState } from 'react'
import { getCatFact } from '../services/catFact'

export function useCatFact () {
  const [catFact, setCatFact] = useState()
  const [error, setError] = useState()

  const refreshCatFact = () => {
    const randomFact = async () => {
      try {
        const fact = await getCatFact()
        setCatFact(fact)
      } catch (err) {
        setError('Error getting a cat fact')
      }
    }
    randomFact()
  }

  useEffect(refreshCatFact, [])

  return { catFact, refreshCatFact, error }
}
