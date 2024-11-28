import { BarChart2, FolderTree, Layout, Timeline } from "lucide-react";

const navItems = [
  { icon: Layout, label: "Projects" },
  { icon: FolderTree, label: "Breakdown Structures" },
  { icon: BarChart2, label: "Process" },
  { icon: Timeline, label: "Timeline" },
];

export const Sidebar = () => {
  return (
    <div className="w-sidebar min-h-screen bg-text-secondary/5 border-r border-border p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">ESA</h1>
        <p className="text-sm text-text-secondary">Business Management System</p>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-text-secondary/10 transition-colors"
          >
            <item.icon size={20} className="text-accent-blue" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};