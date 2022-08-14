import CVSummaryEdu from "./CVSummaryEdu"
import CVSummaryWork from "./CVSummaryWork"
import CVSummaryQual from "./CVSummaryQual"
import CVSummaryOth from "./CVSummaryOth"

export default function CVSummary() {
    return (
        <div className="CV-summary"> 
            <div className="CV-summary-first-row">
                <CVSummaryEdu />
                <CVSummaryWork />
            </div>
            <div className="CV-summary-second-row">
                <CVSummaryOth />
                <CVSummaryQual />
            </div>
        </div>
    )
}