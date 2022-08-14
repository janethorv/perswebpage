import pdf from '../downloads/Jan_Einar_Thorvaldsen_CV.pdf'

export default function CVButton() {
    return (
        <div className="CV-button">
            <a href = { pdf } download="Jan_Einar_Thorvaldsen_CV.pdf">Last ned CV (pdf)</a>
        </div>
    )
}