import {
  Server,
  Workflow,
  Boxes,
  ShieldAlert,
  Rocket,
  BrainCircuit,
} from "lucide-react";

export const ProblemSectionData = [
  {
    title: "The Challenges Many Businesses Face",
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <Server className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Your system works today but starts breaking as traffic, users, or
            data grow.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Workflow className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Manual workflows and disconnected tools slow down operations and
            productivity.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Boxes className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Backend architecture becomes messy and difficult to maintain or
            extend.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <ShieldAlert className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Security, infrastructure, or system reliability start raising
            concerns.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Why These Problems Happen",
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <Rocket className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Products are often built quickly to launch an MVP without long-term
            structure.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Boxes className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Systems evolve without a clear architecture plan or scalable
            foundation.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Workflow className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Different tools and services get connected without a cohesive system
            design.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Server className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Infrastructure decisions are made reactively instead of
            strategically.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "What Businesses Actually Need",
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <BrainCircuit className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Clear system architecture before development begins.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Server className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Scalable infrastructure designed for long-term growth.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Workflow className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Automation that removes operational bottlenecks.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <BrainCircuit className="text-primary mt-1" size={20} />
          <p className="text-base font-normal md:text-lg">
            Strategic system-level thinking instead of quick technical fixes.
          </p>
        </div>
      </div>
    ),
  },
];
