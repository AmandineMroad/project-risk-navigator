import { ProcessFlow } from "../ProcessFlow";
import { AssetsList } from "../AssetsList";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const ExplainTab = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3">
        <ProcessFlow />
      </div>
      <div className="col-span-6">
        <div className="relative p-6 rounded-lg bg-text-secondary/5 border border-border">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full p-4 bg-text-secondary/10 rounded-lg border border-border">
              <h3 className="text-lg font-semibold">Input A</h3>
            </div>
            <div className="h-8 w-0.5 bg-accent-green"></div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="w-full p-4 bg-accent-green/20 rounded-lg border border-accent-green cursor-pointer">
                  <h3 className="text-lg font-semibold text-accent-green">Task Name</h3>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-background border border-border">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Responsible</h4>
                    <button className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors">
                      Project Manager
                    </button>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Accountable</h4>
                    <button className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors">
                      Project Manager
                    </button>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Supporting</h4>
                    <div className="space-y-2">
                      <button className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors">
                        Project Team
                      </button>
                      <button className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors">
                        Project Risk Management Facilitator
                      </button>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <div className="h-8 w-0.5 bg-accent-green"></div>
            <div className="w-3/4 p-4 bg-text-secondary/10 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-center">ERiS</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <AssetsList />
      </div>
    </div>
  );
};