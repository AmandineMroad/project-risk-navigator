import { Grid, FolderTree, Palette, Clock } from "lucide-react";

const navItems = [
  { icon: Grid, label: "Projects" },
  { icon: FolderTree, label: "Breakdown Structure" },
  { icon: Palette, label: "Themes" },
  { icon: Clock, label: "Timeline" },
];

export const Sidebar = () => {
  return (
    <div className="w-sidebar min-h-screen bg-text-secondary/5 border-r border-border p-4">
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/68a2c138-3e43-450a-8538-de1ee53564cb.png" alt="ESA Logo" className="h-6" />
          <h1 className="text-xl font-bold">ESA</h1>
        </div>
        <p className="text-sm text-text-secondary">Business Management System</p>
      </div>
      <nav className="space-y-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-text-secondary/10 transition-colors"
          >
            <item.icon size={24} className="text-accent-blue" />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};