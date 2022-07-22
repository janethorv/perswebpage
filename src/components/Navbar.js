import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="nav-title">Jan Einar Thorvaldsen</Link>
        <ul>
            <CustomLink to="/about">Om meg</CustomLink>
            <CustomLink  to="/cv">CV</CustomLink>
            <CustomLink to="/contact">Kontakt</CustomLink>
            <CustomLink  to="/sandbox">Sandkasse</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={ isActive === to ? "active" : "" }>
            <Link to={ to } {...props}>
                { children }
            </Link>
        </li>
        )
    }
    