import { useState, useCallback } from 'react'

const useAsync = (asyncFunction) => {
  const [ isLoading, setLoading ] = useState(false)
  const [ result, setResult ] = useState(null)
  const [ error, setError ] = useState(null)

  const mutate = useCallback(async () => {
    setLoading('true')
    try {
      const result = await asyncFunction()
      setResult(result)
      setLoading(false)
    } catch (e) {
      setError(e)
      setLoading(null)
    }
  }, [ asyncFunction ])

  return { mutate, isLoading, result, error }
}

export default useAsync
