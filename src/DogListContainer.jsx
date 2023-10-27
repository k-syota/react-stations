// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectBreed, setSelectBreed] = useState('')
  const [selectDogImageList, setSelectDogImageList] = useState([])

  const fetchDogImage = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        return response.json()
      })
      .then(data => {
        const breedsArray = Object.keys(data.message)
        setBreeds(breedsArray)
      })
  }
  useEffect(() => {
    fetchDogImage()
  }, [])
  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectBreed={selectBreed}
        setSelectBreed={setSelectBreed}
        selectDogImageList={selectDogImageList}
        setSelectDogImageList={setSelectDogImageList}
      />
    </>
  )
}

export default DogListContainer
