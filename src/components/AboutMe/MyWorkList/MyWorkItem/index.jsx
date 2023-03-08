import React from 'react'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom';
import Chip from '../../../common/Chip';

const MyWorkItem = ({ work }) => {
    let navigate = useNavigate();
    const routeChange = () => {
        let routeChange = `/work/${work.id}`;
        navigate(routeChange)
    }

    return (
        <div className='workItem-wrap' onClick={routeChange}>
            <img src={work.cover} alt={work.cover} className="workItem-cover"></img>
            <Chip label={work.category} />
            <h3>{work.title}</h3>
            <p className='workItem-description'>{work.description}</p>
            <footer>
                <Link to={`/work/${work.id}`} className="workItem-link">Ir →</Link>
            </footer>
        </div>
    )
}

export default MyWorkItem
