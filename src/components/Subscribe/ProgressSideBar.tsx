import React from "react";

interface ProgressProps {
  activeStep: number;
  isCapsuleSelected: boolean;
  onStepClick: (stepId: number) => void; 
}



const ProgressSidebar: React.FC<ProgressProps> = ({
  activeStep,
  isCapsuleSelected,
  onStepClick,
}) => {
  const steps = [
    { id: 1, label: "Preferences" },
    { id: 2, label: "Bean Type" },
    { id: 3, label: "Quantity" },
    { id: 4, label: "Grind Option", disabled: isCapsuleSelected }, 
    { id: 5, label: "Deliveries" },
  ];
  


  return (
    <div className="w-48">

 {steps.map((step, index) => {
                   const isDisabled = step.disabled || false;
                   const isActive = step.id === activeStep;
                   const isLastStep = index === steps.length - 1; 
          

        return (
          <div
            key={step.id}
            className={`text-2xl font-heading w-[255px] flex gap-6 cursor-pointer transition-opacity h-[60px] mb-6
              ${!isLastStep ? "border-b border-opacity-25 border-grey " : ""} 
              ${
                isDisabled
                  ? "opacity-20 cursor-not-allowed"
                  : isActive
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-80"
              }
            `}
            role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !isDisabled) onStepClick(step.id);
  }}
            onClick={() => {
              if (!isDisabled) {
                onStepClick(step.id);
              }
            }}
          >
            {/* Step Number */}
            <span
              className={`
                ${step.id === 1 ? "text-dark-cyan" : "text-grey"} 
                
              `}
            >
              {step.id.toString().padStart(2, "0")}
            </span>

            {/* Step Label */}
            <span
              className={`text-dark-grey-blue
                
              `}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressSidebar;



