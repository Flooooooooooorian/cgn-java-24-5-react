import {Link, NavLink} from "react-router-dom";

export default function Header() {
    return <>
        <h1>My Personal Website</h1>

        <nav className="navbar">
            <Link to={"/"}>Home</Link>
            <NavLink to={"/projects"}>Projects</NavLink>
            <NavLink to={"/contact"}>ContactPage</NavLink>
        </nav>
    </>;
}
