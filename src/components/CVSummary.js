import CVSummaryEdu from "./CVSummaryEdu"
import CVSummaryWork from "./CVSummaryWork"
import CVSummaryQual from "./CVSummaryQual"
import CVSummaryOth from "./CVSummaryOth"

export default function CVSummary() {
    return (
        <div className="CV-summary"> 
            <CVSummaryEdu />
            <CVSummaryWork />
            <CVSummaryOth />
            <CVSummaryQual />
        </div>
    )
}