
import { useState, useEffect } from 'react'
import { obtenerHecho } from './useCat'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    obtenerHecho().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}