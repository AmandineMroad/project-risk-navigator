import { Sidebar } from "../components/Sidebar";
import { Share2, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExplainTab } from "../components/tabs/ExplainTab";
import { DiscussTab } from "../components/tabs/DiscussTab";

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
            <Tabs defaultValue="explain" className="w-full">
              <TabsList className="w-full bg-text-secondary/5 p-1">
                <TabsTrigger value="explain" className="flex-1">Explain</TabsTrigger>
                <TabsTrigger value="similar" className="flex-1">Similar in ESA</TabsTrigger>
                <TabsTrigger value="discuss" className="flex-1">Discuss</TabsTrigger>
                <TabsTrigger value="updates" className="flex-1">Updates</TabsTrigger>
              </TabsList>

              <TabsContent value="explain">
                <ExplainTab />
              </TabsContent>

              <TabsContent value="similar">
                <div className="p-6 rounded-lg bg-text-secondary/5 border border-border">
                  <p className="text-text-secondary">Similar processes in ESA will be displayed here.</p>
                </div>
              </TabsContent>

              <TabsContent value="discuss">
                <DiscussTab />
              </TabsContent>

              <TabsContent value="updates">
                <div className="p-6 rounded-lg bg-text-secondary/5 border border-border">
                  <p className="text-text-secondary">Recent updates will be displayed here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;