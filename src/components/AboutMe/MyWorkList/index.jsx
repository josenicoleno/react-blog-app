import React from 'react'
import MyWorkItem from './MyWorkItem'
import './styles.css';

const MyWorkList = ({ works }) => {
  return (
    <div>
      <div className='workList-wrap'>
        {works
          ? works?.map(work => <MyWorkItem work={work} key={work.id} />)
          : <p>Hola, aquí van mis trabajos!</p>
        }
      </div>
    </div>
  )
}

export default MyWorkList
