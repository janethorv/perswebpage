import pdf from '../downloads/jet_eng_cv.pdf'

export default function CVButton() {
    return (
        <div className="CV-button">
            <a href = { pdf } download="jet_eng_cv.pdf">Last ned CV (pdf)</a>
        </div>
    )
}