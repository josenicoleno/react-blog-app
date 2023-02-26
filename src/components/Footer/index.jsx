import React from "react"
import { Link } from "react-router-dom";
import './styles.css'

const Footer = () => {
    return (
        <footer className="footer-wrap">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="footer-content">
                <ul className="socials">
                    <li><a href="https://www.fb.com/josenicoleno" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/jose.nicoleno/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/jose-nicoleno/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/josenicoleno" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                </ul>
                <h3>José Nicoleno</h3>
                <p>Este sitio lo realicé con JavaSript, React, Bootstrap y otras dependencias. Para más información ponte en contacto conmigo por cualquiera de mis plataformas o escríbeme a <a href="mailto:josenicoleno@gmail.com">josenicoleno@gmail.com</a></p>
            </div>
            <div className="footer-bottom">
                <p>Copyright &copy; <a href="https://www.instagram.com/jose.nicoleno/">José Nicoleno</a>  </p>
                <div className="footer-menu">
                    <ul className="f-menu">
                        <li><Link className='f-link' to='/'>Home</Link></li>
                        <li><Link className='f-link' to='/sobre-mi/'>Sobre mí</Link></li>
                        <li><Link className='f-link' to='/working/'>Contacto</Link></li>
                        {/* <li><a href="https://www.fb.com">Blog</a></li> */}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
