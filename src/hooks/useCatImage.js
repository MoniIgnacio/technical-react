import { useEffect, useState } from 'react'

const CAT_IMG_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [image, setImage] = useState()
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    // console.log(firtsWord)
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImage(url)
      })
  }, [fact])
  return { image: `${CAT_IMG_URL}${image}` }
}
