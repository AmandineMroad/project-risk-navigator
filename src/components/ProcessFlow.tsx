import { Diamond } from "lucide-react";

const steps = [
  "Identify potential events",
  "Formulate risks and opportunities",
  "Evaluate Event Occurrences",
  "Identify Impacts",
];

export const ProcessFlow = () => {
  return (
    <div className="space-y-2">
      {steps.map((step, index) => (
        <div key={step}>
          <div className={`process-step ${index === 1 ? "bg-accent-blue/20 text-accent-blue" : ""}`}>
            <Diamond size={20} className={index === 1 ? "text-accent-blue" : "text-accent-green"} />
            <span>{step}</span>
          </div>
          {index < steps.length - 1 && <div className="process-connector" />}
        </div>
      ))}
    </div>
  );
};