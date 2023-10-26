// DO NOT DELETE

import { useState } from 'react'
import './App.css'
import Header from './Header'
import Description from './Description'
import DogImage from './DogImage'

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
      <Header />
      <Description />
      <button className="button" onClick={changeImage}>
        写真を更新
      </button>
      <DogImage url={dogUrl} />
    </>
  )
}
