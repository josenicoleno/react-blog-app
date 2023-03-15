import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { workList } from '../../config/myWorks';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import useScreenSize from '../../hooks/useScreenSize';
import './styles.css'

const MyWork = () => {
  const { id } = useParams();
  const [work, setWork] = useState(null);
  const { width } = useScreenSize();
  const [presentation, setPresentation] = useState('')
  let presentationOk = ''
  useEffect(() => {
    let work = workList.find((work) => work.id === parseInt(id) && work.active);
    if (work) {
      setWork(work)
      setPresentation(work.presentation)
    }
  }, [id]);

  const renderPresentation = (() =>
    width < 960
      ? (
        presentationOk = presentation.replace('width="960"', 'width="480"'),
        presentationOk = presentationOk.replace('height="569"', 'height="299"')
      )
      : (
        presentationOk = presentation.replace('width="480"', 'width="960"'),
        presentationOk = presentationOk.replace('height="299"', 'height="569"')
      )
  )

  return (
    <div>
      <Link className='work-goBack' to='/sobre-mi/'>
        <span>&#8592;</span>Volver
      </Link>
      {!work ?
        <EmptyList /> :
        <div className='work-wrap'>
          <header>
            <p className='work-date'>Publicado el {work.createdAt}</p>
            <h1 className='work-title'>{work.title}</h1>
            <div className='work-subCategory'>
              {work.subCategory.map(
                (category, index) =>
                  <div key={index}>
                    <Chip label={category} />
                  </div>
              )}
            </div>
          </header>
          <img src={work.cover} alt='cover'></img>
          <div id='id-description'>
            <div className='work-description' dangerouslySetInnerHTML={{ __html: work.description }} />
          </div>
          <div id='work-presentation'>
            <div className='work-description' dangerouslySetInnerHTML={{ __html: renderPresentation() }} />
          </div>
          <div className="work-references">
            <p className=''>Referencias</p>
            <ol>
              {work.references.map((reference, index) => <li key={index}><a href={reference.source} target="_blank" rel="noopener noreferrer">{reference.name}</a></li>)}
            </ol>
          </div>
        </div>
      }
    </div >
  )
}

export default MyWork
