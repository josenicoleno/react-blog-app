import React, { useEffect, useState } from 'react'
import './styles.css'
import { aboutMe } from '../../config/aboutMe'
import { Link } from 'react-router-dom';
import MyWorkList from '../../components/AboutMe/MyWorkList';
import { workList } from '../../config/myWorks';
import Header from '../../components/AboutMe/MyWorkList/Header';

const AboutMe = () => {
  const defaultLangage = 'es'
  const e = 'es'
  const [data, setData] = useState(aboutMe);

  useEffect(() => {
    let data = aboutMe.find(data => data.language === e)
    setData(data?.description ? data : aboutMe.find(data => data.language === defaultLangage))
  }, []);

  if (data.description) {
    var doc = document.getElementById("id-description")
    doc.innerHTML = `<p>${data.description}</p>`;
  }

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span>&#8592;</span>Volver
      </Link>
      <div className='aboutMe-wrap'>
        <h2>Sobre mí</h2>
        <div id='id-about-me' className='aboutMe-columns'>
          <img src={data.photo} alt='foto' />
          <div id="id-description"></div>
        </div>
        <div className='cvSection'>
          <a href={data.urlCvSpanish} target="_blank" rel="noopener noreferrer"><img src='/assets/images/espana.png' alt='Castellano'></img></a>
          {/* <a href={data.urlCvEnglish} target="_blank" rel="noopener noreferrer"><img src='/assets/images/italia.png' alt='Italiano'></img></a> */}
          <a href={data.urlCvEnglish} target="_blank" rel="noopener noreferrer"><img src='/assets/images/inglaterra.png' alt='Inglés'></img></a>
        </div>
        <div className='myWorkList'>
          <Header/>
          <MyWorkList works={workList} />
        </div>
      </div>
    </>
  )
}

export default AboutMe
