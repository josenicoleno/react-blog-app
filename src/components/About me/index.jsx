import React, { useEffect, useState } from 'react'
import './styles.css'
import { aboutMe } from '../../config/aboutMe'
import { Link } from 'react-router-dom';

const AboutMe = () => {
  const [data, setData] = useState(aboutMe);

  useEffect(() => {
    let data = aboutMe.find((data) => data.description !== '')
    setData(data.description ? data : '')
  }, []);

  console.log(data)
  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span>&#8592;</span>Volver
      </Link>
      <div className='aboutMe-wrap'>
        <h2>Sobre mí</h2>
        <div className='aboutMe-columns'>
          <img src={data.photo} alt='foto' />
          <p>{data.description}</p>
        </div>
      </div>
    </>
  )
}

export default AboutMe
