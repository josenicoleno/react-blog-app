import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    {/* <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEd2CQXeG62dg/profile-displayphoto-shrink_800_800/0/1655429606299?e=2147483647&v=beta&t=KHPLYXIS_pCJE2RImnz50qWe4Ub3knIiLgRMAlTaUkc" alt="" width="30" height="24" className="d-inline-block align-text-top" /> */}
                    Home
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="sobre-mi/">Sobre mí</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="blog">Blog</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
            {/* <Link to="carrito"><CartWidget /></Link> */}
        </nav>
    );
};
export default NavBar;