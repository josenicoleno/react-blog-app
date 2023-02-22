import React, { useEffect, useState } from 'react'
import './styles.css'
import { aboutMe } from '../../config/aboutMe'

const AboutMe = () => {
  const [data, setData] = useState(aboutMe);

  useEffect(() => {
    let data = aboutMe.find((data) => data.description !== '')
    setData(data.description ? data : '')
  }, []);
  
  console.log(data)
  return (
    <div className='aboutMe-wrap'>
      <h2>Sobre mí</h2>
      <div className='aboutMe-columns'>
        <img src={data.photo} alt='foto'/>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default AboutMe
