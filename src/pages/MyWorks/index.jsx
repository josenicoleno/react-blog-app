import React, { useEffect, useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom';
import { aboutMe, workList} from '../../config/myWorks'
import MyWorkList from '../../components/AboutMe/MyWorkList';

const MyWorks = () => {
    const defaultLangage = 'es'
    const e = 'es' //esta tiene que ser context
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
                <h2>Mis trabajos</h2>
                <div id='id-about-me' className='aboutMe-columns'>
                    <div id="id-description"></div>
                </div>

                <div className='myWorkList'>
                    <MyWorkList works={workList} />
                </div>
            </div>
        </>
    )
}


export default MyWorks
