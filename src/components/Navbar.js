import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {

    return (
    <nav className="nav">
        <Link to="/" className="nav-title">JAN EINAR THORVALDSEN</Link>
        <div className='navbar-links'>
            <ul>
                <CustomLink to="/about" className="link">Om meg</CustomLink>
                <CustomLink  to="/cv" className="link">CV</CustomLink>
                <CustomLink to="/contact" className="link">Kontakt</CustomLink>
            </ul>
        </div>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={ isActive ? "active" : "" }>
            <Link to={ to } {...props}>
                { children }
            </Link>
        </li>
        )
    }


