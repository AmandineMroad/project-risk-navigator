import { Diamond } from "lucide-react";

const steps = [
  {
    label: "Identify potential events",
    isActive: false
  },
  {
    label: "Formulate risks and opportunities",
    isActive: true
  },
  {
    label: "Evaluate Event Occurrences",
    isActive: false
  },
  {
    label: "Identify Impacts",
    isActive: false
  },
  {
    label: "Evaluate Impact Severity and Likelihood",
    isActive: false
  }
];

export const ProcessFlow = () => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold mb-4 text-left">Process Sequence</h3>
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center">
            <div 
              className={`
                process-step w-full
                ${step.isActive ? 'bg-accent-blue/20 text-accent-blue' : 'bg-text-secondary/20'}
              `}
            >
              <Diamond 
                size={20} 
                className={step.isActive ? 'text-accent-blue' : 'text-accent-green'} 
              />
              <span className="text-sm">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="process-connector my-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};