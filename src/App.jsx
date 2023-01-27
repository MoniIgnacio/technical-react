import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export default function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Refresh</button>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt='image-cat' />}
    </main>
  )
}
