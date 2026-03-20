import { SectionBadge } from "@/components/partials/section-badge";
import { Card } from "@/components/ui/card";

import { ArrowUpRight } from "lucide-react";

function ClientsSection() {
  return (
    <section className="w-full section-padding-standard">
      <div className="layout-standard grid grid-cols-5 gap-x-4 gap-y-8">
        <Card className="border-2 border-border ring-0 outline-none rounded-none h-[12.5em] p-4 flex-center col-span-1 bg-transparent"></Card>

        <Card className="border-2 border-border ring-0 outline-none rounded-none h-[12.5em] p-4 flex-center col-span-1"></Card>

        <div className="col-span-2 relative">
          <h1 className="font-semibold text-heading text-4xl uppercase">
            Trusted by
            <br />
            Growing Businesses
          </h1>

          <SectionBadge
            text={"Our Clients"}
            classNames="absolute right-0 top-[0px]"
          />
        </div>

        <Card className="border-2 border-border ring-0 outline-none rounded-none h-[12.5em] p-4 flex-center col-span-1"></Card>

        <p className="col-span-2 md:text-lg font-medium text-foreground">
          I work with startups and growing businesses to design scalable
          software systems, backend infrastructure, and automation platforms
          that support long-term growth and operational efficiency.
        </p>

        <Card className="border-2 border-border ring-0 outline-none rounded-none h-[12.5em] p-4 flex-center col-span-1"></Card>

        <Card className="border-2 border-border ring-0 outline-none rounded-none h-[12.5em] p-4 flex-center col-span-1"></Card>

        <Card className="border-2 border-border ring-0 outline-none rounded-none h-[12.5em] p-4 flex-center col-span-1"></Card>

        <Card className="border-2 border-border ring-0 outline-none rounded-none h-[12.5em] p-4 flex-center col-span-1"></Card>

        <Card className="border-2 border-border ring-0 outline-none rounded-none h-[12.5em] p-4 flex-center col-span-1"></Card>

        <div className="col-span-1 mt-auto">
          <button className="h-[40px] flex items-center gap-2 px-[25px] rounded uppercase font-medium text-sm text-primary-foreground overflow-hidden bg-[linear-gradient(90deg,#0f172a,#5b5cf6)] animation-standard hover:px-[30px] hover:duration-300 hover:ease-in [clip-path:polygon(0_0,0_0,100%_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,15px_100%,0_100%)]">
            Discuss Project <ArrowUpRight size={20} />
          </button>
        </div>

        <Card className="border-2 border-border ring-0 outline-none rounded-none h-[12.5em] p-4 flex-center col-span-1"></Card>

        <Card className="border-2 border-border ring-0 outline-none rounded-none h-[12.5em] p-4 flex-center col-span-1"></Card>
      </div>
    </section>
  );
}

export default ClientsSection;
