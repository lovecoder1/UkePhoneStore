import React, { useState } from 'react'; 
import Logo from '../Assets/UkeMobiles.png';
import { Link } from "react-router-dom";
import ReorderIcon from '@material-ui/icons/Reorder';
import '../Styles/Navbar.css';

function NavBar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open": "close"}>
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/"> Uke Phones Store </Link>
                    <Link to="/menu"> Phones </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Uke Phones Store</Link>
                <Link to="/Menu">Phones</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default NavBar