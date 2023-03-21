import React from 'react';
import './styles.css';

const ScrollButton = () => {
    // const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const backToTopButton = document.getElementById("ir-arriba")
        const pageProgressBar = document.getElementById("progress-bar")

        const scrollContainer = () => {
            return document.documentElement || document.body;
        };

        document.addEventListener("scroll", () => {
            const scrolledPercentage =
                (scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;
            pageProgressBar.style.width = `${scrolledPercentage}%`
        })

        if (scrollContainer().scrollHeight > 2000) {
            pageProgressBar.classList.remove("hidden")
        } else {
            pageProgressBar.classList.add("hidden")
        }

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
            behavior: 'smooth' //'auto'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <div id="progress-bar" className="progress-bar" />
            <i id='ir-arriba' className="ir-arriba hidden" onClick={scrollToTop} title="Volver arriba">
                <i className="fa fa-arrow-circle-up" ></i>
            </i >
        </>
    )
}

export default ScrollButton;