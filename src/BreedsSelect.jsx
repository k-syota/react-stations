// @ts-check

import { useState } from 'react'

export const BreedsSelect = ({
  breeds,
  selectBreed,
  setSelectBreed,
  selectDogImageList,
  setSelectDogImageList,
}) => {
  const changeSelect = event => {
    const val = event?.target.value
    setSelectBreed(val)
    console.log(selectBreed)
  }

  const fetchSelectImage = () => {
    fetch(`https://dog.ceo/api/breed/${selectBreed}/images/random/3
    `)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSelectDogImageList(data.message)
        console.log(selectDogImageList)
      })
  }
  return (
    <>
      <select name="" id="" onChange={changeSelect}>
        {breeds.map(breed => (
          <option value={breed} key={breed}>
            {breed}
          </option>
        ))}
      </select>
      <p>選択した犬種：{selectBreed}</p>
      <button onClick={fetchSelectImage}>表示</button>
      <ul>
        {selectDogImageList.map(i => (
          <li key={i}>
            <img src={i} alt="sample" className="sample__img" />
          </li>
        ))}
      </ul>
    </>
  )
}

export default BreedsSelect
