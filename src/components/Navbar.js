export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="nav-title">Jan Einar Thorvaldsen</a>
        <ul>
            <li><a href="/about">Om meg</a></li>
            <li><a href="/cv">CV</a></li>
            <li><a href="/contact">Kontakt</a></li>
            <li><a href="/sandbox">Sandkasse</a></li>
        </ul>
    </nav>
}