import { Sidebar } from "../components/Sidebar";
import { ProcessFlow } from "../components/ProcessFlow";
import { Share2, Plus, MessageSquare, History } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">Identify Risks</h1>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span>Process Owner</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent-blue/20" />
                  <span>HILDESINAR Fanny</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-text-secondary/20 text-sm">
                <Plus size={16} />
                <span>ADD TO FAVOURITES</span>
              </button>
              <button className="p-2 rounded-lg border border-text-secondary/20">
                <Share2 size={16} />
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue/20 text-accent-blue">
              <MessageSquare size={16} />
              <span>Explain</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-text-secondary/10">
              <span>Similar in ESA</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-text-secondary/10">
              <MessageSquare size={16} />
              <span>Discuss</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-text-secondary/10">
              <History size={16} />
              <span>Updates</span>
            </button>
          </div>
        </div>
        <div className="p-8 grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <ProcessFlow />
          </div>
          <div className="col-span-6 space-y-8">
            {/* Diagramme de séquence */}
            <div className="relative p-6 rounded-lg bg-text-secondary/5 border border-border">
              <div className="flex flex-col items-center space-y-4">
                {/* Input A */}
                <div className="w-full p-4 bg-text-secondary/10 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold">Input A</h3>
                </div>
                
                {/* Ligne de connexion */}
                <div className="h-8 w-0.5 bg-accent-green"></div>
                
                {/* Task avec HoverCard */}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="w-full p-4 bg-accent-green/20 rounded-lg border border-accent-green cursor-pointer">
                      <h3 className="text-lg font-semibold text-accent-green">Task Name</h3>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-background border border-border">
                    <div className="space-y-4">
                      {/* Responsible */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Responsible</h4>
                        <button 
                          onClick={() => console.log("Navigate to Project Manager profile")}
                          className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors"
                        >
                          Project Manager
                        </button>
                      </div>
                      
                      {/* Accountable */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Accountable</h4>
                        <button 
                          onClick={() => console.log("Navigate to Project Manager profile")}
                          className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors"
                        >
                          Project Manager
                        </button>
                      </div>
                      
                      {/* Supporting */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Supporting</h4>
                        <div className="space-y-2">
                          <button 
                            onClick={() => console.log("Navigate to Project Team profile")}
                            className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors"
                          >
                            Project Team
                          </button>
                          <button 
                            onClick={() => console.log("Navigate to Risk Management Facilitator profile")}
                            className="w-full text-left p-2 rounded-lg bg-text-secondary/10 hover:bg-text-secondary/20 transition-colors"
                          >
                            Project Risk Management Facilitator
                          </button>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                {/* Ligne de connexion */}
                <div className="h-8 w-0.5 bg-accent-green"></div>
                
                {/* ERiS */}
                <div className="w-3/4 p-4 bg-text-secondary/10 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-center">ERiS</h3>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-text-secondary/5 border border-border">
              <h3 className="text-lg font-semibold mb-4">Purpose</h3>
              <p className="text-text-secondary">
                Lorem ipsum dolor sit amet consectetur. In dignissim risus sed non lectus tortor elit. Risus porta adipiscing posuere tincidunt feugiat. Nisl a nibh cursus a. Ut scelerisque amet est sed ultrices tristique diam tellus tempor. Sed mauris at porta interdum lacus. Lobortium nam velit. Feugiat purus amet ut rutrum quam. Lectus nulla mi tempus tellus libero. Egestas eleifend consectetur ornare et sagittis suspendisse. Consectetur purus placerat purus a odio nisl amet ut.
              </p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Assets</h3>
              <div className="space-y-2">
                <button className="asset-button w-full">
                  <span>ERBS</span>
                  <span>→</span>
                </button>
                <button className="asset-button w-full">
                  <span>Risk management template</span>
                  <span className="text-accent-blue">UPDATED →</span>
                </button>
                <button className="asset-button w-full">
                  <span>[other template] - [Resource type]</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
