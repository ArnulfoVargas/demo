import { Link } from "react-router-dom";

const NavBar = () => {
    return <>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
    </>
}

export default NavBar;