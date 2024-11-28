import { ArrowRight, Diamond } from "lucide-react";

const assets = [
  { icon: Diamond, label: "ERiS", active: true },
  { icon: Diamond, label: "TEMPLATES", active: false },
  { icon: Diamond, label: "Risk management", active: true },
  { icon: Diamond, label: "[Other template]", active: true },
  { icon: Diamond, label: "REFERENCE DOCUMENTS", active: false },
  { icon: Diamond, label: "BMS - 000546167", active: true },
];

export const AssetsList = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold mb-4">Assets</h2>
      {assets.map((asset) => (
        <button key={asset.label} className="asset-button w-full">
          <div className="flex items-center gap-2">
            <asset.icon
              size={16}
              className={asset.active ? "text-accent-blue" : "text-text-secondary"}
            />
            <span className={asset.active ? "text-text-primary" : "text-text-secondary"}>
              {asset.label}
            </span>
          </div>
          <ArrowRight size={16} className="text-text-secondary" />
        </button>
      ))}
    </div>
  );
};