import { Search, User } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-border">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center">
          <span className="text-accent-blue">AI</span>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Ask anything about processes..."
            className="w-96 px-4 py-2 bg-text-secondary/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent-blue"
          />
          <Search className="absolute right-3 top-2.5 text-text-secondary" size={20} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span>Fabien CLY</span>
        <div className="w-10 h-10 rounded-full bg-text-secondary/20 flex items-center justify-center">
          <User className="text-text-primary" size={20} />
        </div>
      </div>
    </div>
  );
};