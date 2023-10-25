// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )
  const changeImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDogUrl(data.message)
      })
  }
  return (
    <>
      <header>Puppy Pixels</header>
      <section>
        <article>
          <p>犬の画像を表示するサイトです</p>
          <img src={dogUrl} alt="サンプル画像" />
          <button onClick={changeImage}>写真を更新</button>
        </article>
      </section>
    </>
  )
}
