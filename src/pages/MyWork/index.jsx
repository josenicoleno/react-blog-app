import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { workList } from '../../config/myWorks';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css'

const MyWork = () => {
  const { id } = useParams();
  const [work, setWork] = useState(null);

  useEffect(() => {
    let work = workList.find((work) => work.id === parseInt(id));
    if (work) {
      setWork(work)
    }
  }, [id]);

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
          <div className="work-references">
            <p className=''>Referencias</p>
            <ol>
              {work.references.map((reference, index) => <li key={index}><a href={reference.source}>{reference.name}</a></li>)}
            </ol>
          </div>
        </div>
      }
    </div >
  )
}

export default MyWork
