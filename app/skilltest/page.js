import QuestionAnalysis from "@/components/QuestionAnalysis";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";
import ComparisionGraph from "@/components/ComparisionGraph";
import QuickStatistics from "@/components/QuickStatistics";
import SkillList from "@/components/SkillList";

export default function page() {
  return (
    <div>
      <h2 className="text-secondary font-semibold">Skill Test</h2>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
        {/* column 1  */}
        <div className="flex flex-col gap-4 lg:gap-7 w-full lg:max-w-[855px]">
          <SkillList />
          <QuickStatistics />
          <ComparisionGraph />
        </div>
        {/* column 2  */}
        <div className="flex flex-col gap-4 lg:gap-7 w-full lg:max-w-[618px]">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
}
