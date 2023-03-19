import React, { useState } from 'react';
import './styles.css';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        visible
            ?
            <i className="ir-arriba" onClick={scrollToTop} title="Volver arriba">
                <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            </i >
            : <></>
    )
}

export default ScrollButton;