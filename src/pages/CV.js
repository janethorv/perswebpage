import pdf from '../downloads/test.pdf'

export default function CV() {
    return (
        <div className="CV">
            <h1>CV</h1>
            <a href = { pdf } download="test.pdf">Last ned CV (pdf)</a>
        </div>
    )
}