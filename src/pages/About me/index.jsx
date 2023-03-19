import React, { useEffect, useState } from 'react'
import './styles.css'
import { aboutMe, cv } from '../../config/aboutMe'
import { Link } from 'react-router-dom';
import MyWorkList from '../../components/AboutMe/MyWorkList';
import { workList } from '../../config/myWorks';
import Header from '../../components/AboutMe/MyWorkList/Header';

const AboutMe = () => {
  const defaultLangage = 'es'
  const e = 'es' //esta tiene que ser context
  const [data, setData] = useState(aboutMe);
  const [resume] = useState(cv)

  useEffect(() => {
    let data = aboutMe.find(data => data.language === e)
    setData(data?.description ? data : aboutMe.find(data => data.language === defaultLangage))

  }, []);

  console.log(resume)
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
        {resume?.length > 0
          ?
          <div className="cvSection">
            <ol>
              {resume.map((cv, index) => <a key={index} href={cv.source} target="_blank" rel="noopener noreferrer" ><img src={cv.img} alt={cv.language} /></a>)}
            </ol>
          </div>
          : <></>
        }
        <div className='myWorkList'>
          <Header />
          <MyWorkList works={workList} />
        </div>
      </div>
    </>
  )
}

export default AboutMe
