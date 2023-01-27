import { useEffect, useState } from 'react'

export default function App () {
  const CAT_ENDPOINT_RANDOM = 'https://catfact.ninja/fact'
  // const CAT_ENDPOINT_IMG = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
  const CAT_IMG_URL = 'https://cataas.com'
  const [fact, setFact] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const firstWord = fact.split(' ', 3).join(' ')
        // console.log(firtsWord)
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImage(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={`${CAT_IMG_URL}${image}`} alt='image-cat' />}
    </main>
  )
}
