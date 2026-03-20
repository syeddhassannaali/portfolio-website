import { ProblemSectionData } from "@/data/home-page-data";

import { Timeline } from "@/components/ui/timeline";

function ProblemSection() {
  return (
    <section className="w-full section-padding-standard bg-multi-sectional-background">
      <div className="layout-standard w-full flex flex-col gap-[6rem]">
        <div className="flex flex-col gap-6">
          <div className="px-4 py-1 rounded-full font-bold uppercase text-xs text-primary border-2 border-primary w-fit">
            Common System Challenges
          </div>

          <div>
            <h1 className="font-semibold text-heading text-5xl uppercase mb-2.5">
              If You&apos;re Facing These Problems
            </h1>

            <p className="font-medium text-sub-heading text-lg md:text-xl max-w-3xl">
              Many growing businesses struggle with systems that work at first
              but quickly become difficult to maintain, scale, or secure. These
              challenges usually come from architecture decisions made too late
              in the process.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-clip">
          <Timeline data={ProblemSectionData} />
        </div>

        <p className="font-medium text-sub-heading text-lg md:text-xl max-w-3xl">
          If these challenges sound familiar, you&apos;re not looking for just
          another developer — you&apos;re looking for structured system
          architecture. If these challenges sound familiar, you&apos;re not
          looking for just another developer — you&apos;re looking for
          structured system architecture.
        </p>
      </div>
    </section>
  );
}

export default ProblemSection;
