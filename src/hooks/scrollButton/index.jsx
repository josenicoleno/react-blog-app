import React from 'react';
import './styles.css';

const ScrollButton = () => {
    // const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const backToTopButton = document.getElementById("ir-arriba")

        if (scrolled > 300) {
            // setVisible(true)
            backToTopButton.classList.remove("hidden")
        }
        else if (scrolled <= 300) {
            // setVisible(false)
            backToTopButton.classList.add("hidden")
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

        <i id='ir-arriba' className="ir-arriba hidden" onClick={scrollToTop} title="Volver arriba">
            <i className="fa fa-arrow-circle-up" ></i>
        </i >

    )
}

export default ScrollButton;