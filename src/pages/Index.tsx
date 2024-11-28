import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { ProcessFlow } from "../components/ProcessFlow";
import { AssetsList } from "../components/AssetsList";

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <div className="p-8 grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <ProcessFlow />
          </div>
          <div className="col-span-6 space-y-8">
            <div className="p-6 rounded-lg bg-text-secondary/5 border border-border">
              <h2 className="text-xl font-bold mb-4">Identify Risks</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-text-secondary">Process Owner</span>
                <span>DUPONT Jean</span>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 rounded-lg bg-accent-blue/20 text-accent-blue">
                  Explain
                </button>
                <button className="px-4 py-2 rounded-lg bg-text-secondary/10">Similar in ESA</button>
                <button className="px-4 py-2 rounded-lg bg-text-secondary/10">Discuss</button>
                <button className="px-4 py-2 rounded-lg bg-text-secondary/10">Updates</button>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-text-secondary/5 border border-border">
              <h3 className="text-lg font-semibold mb-4">Purpose</h3>
              <p className="text-text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis pharetra
                turpis. Nullam porta orci non semper volutpat.
              </p>
            </div>
          </div>
          <div className="col-span-3">
            <AssetsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;