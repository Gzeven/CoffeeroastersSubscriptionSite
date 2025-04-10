import { useState, useEffect } from "react";
// import Image from "next/image";
import ProgressSidebar from "./ProgressSideBar";
import Dropdown from "./Dropdown";
import OrderSummary from "./OrderSummary";
import OrderSummaryModal from "./OrderSummaryModal";

interface Selection {
  preference: string;
  type: string;
  amount: string;
  grind?: string;
  delivery: string;
}

const preferences = [
  {
    name: "Capsule",
    description: "Compatible with Nespresso systems and similar brewers",
  },
  {
    name: "Filter",
    description:
      "For pour over or drip methods like Aeropress, Chemex, and V60",
  },
  {
    name: "Espresso",
    description:
      "Dense and finely ground beans for an intense, flavorful experience",
  },
];

const options = {
  type: [
    {
      name: "Single Origin",
      description:
        "Distinct, high quality coffee from a specific family-owned farm",
    },
    {
      name: "Decaf",
      description:
        "Just like regular coffee, except the caffeine has been removed",
    },
    {
      name: "Blended",
      description:
        "Combination of two or three dark roasted beans of organic coffees",
    },
  ],
  amount: [
    {
      name: "250g",
      description:
        "Perfect for the solo drinker. Yields about 12 delicious cups.",
    },
    {
      name: "500g",
      description:
        "Perfect option for a couple. Yields about 40 delectable cups.",
    },
    {
      name: "1000g",
      description:
        "Perfect for offices and events. Yields about 90 delightful cups.",
    },
  ],
  grind: [
    {
      name: "Wholebean",
      description: "Best choice if you cherish the full sensory experience",
    },
    {
      name: "Filter",
      description:
        "For drip or pour-over coffee methods such as V60 or Aeropress",
    },
    {
      name: "Cafetiere",
      description:
        "Coarse ground beans specially suited for French press coffee",
    },
  ],
};

// Price mapping based on weight selection
const priceMap: Record<
  string,
  { name: string; description: string; price: number }[]
> = {
  "250g": [
    {
      name: "Every week",
      description: "$7.20 per shipment. Includes free shipping.",
      price: 7.2,
    },
    {
      name: "Every 2 weeks",
      description: "$9.60 per shipment. Includes free shipping.",
      price: 9.6,
    },
    {
      name: "Every month",
      description: "$12.00 per shipment. Includes free shipping.",
      price: 12.0,
    },
  ],
  "500g": [
    {
      name: "Every week",
      description: "$13.00 per shipment. Includes free shipping.",
      price: 13.0,
    },
    {
      name: "Every 2 weeks",
      description: "$17.50 per shipment. Includes free shipping.",
      price: 17.5,
    },
    {
      name: "Every month",
      description: "$22.00 per shipment. Includes free shipping.",
      price: 22.0,
    },
  ],
  "1000g": [
    {
      name: "Every week",
      description: "$22.00 per shipment. Includes free shipping.",
      price: 22.0,
    },
    {
      name: "Every 2 weeks",
      description: "$32.00 per shipment. Includes free shipping.",
      price: 32.0,
    },
    {
      name: "Every month",
      description: "$42.00 per shipment. Includes free shipping.",
      price: 42.0,
    },
  ],
};

export default function SubscriptionSection() {
  const [selection, setSelection] = useState({
    preference: "",
    type: "",
    amount: "",
    grind: "",
    delivery: "",
  });

  // const [deliveryOptions, setDeliveryOptions] = useState(priceMap["250g"]); // Default to 250g prices
  const deliveryOptions = priceMap[selection.amount] ?? priceMap["250g"];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeStep, setActiveStep] = useState(1);
  const isCapsuleSelected = selection.preference === "Capsule";

  const handleStepClick = (stepId: number) => {
    setTimeout(() => {
      console.log(`Attempting to scroll to step${stepId}`); // Debugging
      const targetElement = document.getElementById(`step${stepId}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.error(
          `Element #step${stepId} not found. Ensure it's rendered before scrolling.`
        );
      }
    }, 100); // Delay scroll execution slightly
  };

  useEffect(() => {
    if (selection.amount) {
      setSelection((prev) => ({ ...prev, delivery: "" })); // Reset delivery selection
      setSelection((prev: typeof selection) => ({ ...prev, delivery: "" }));
    }
  }, [selection.amount]);

  const [openSections, setOpenSections] = useState({
    preference: true, // First dropdown open by default
    type: false,
    amount: false,
    grind: false,
    delivery: false,
  });

  const STEP_CONFIG: {
    key: keyof Selection;
    id: string;
    title: string;
    options:
      | { name: string; description: string }[]
      | (() => { name: string; description: string }[]);
    show?: (selection: Selection) => boolean;
    disabled?: (selection: Selection) => boolean;
  }[] = [
    {
      key: "preference",
      id: "step1",
      title: "How do you drink your coffee?",
      options: preferences,
    },
    {
      key: "type",
      id: "step2",
      title: "What type of coffee?",
      options: options.type,
    },
    {
      key: "amount",
      id: "step3",
      title: "How much would you like?",
      options: options.amount,
    },
    {
      key: "grind",
      id: "step4",
      title: "Want us to grind them?",
      options: options.grind,
      disabled: (s) => s.preference === "Capsule",
    },
    {
      key: "delivery",
      id: "step5",
      title: "How often should we deliver?",
      options: () => deliveryOptions, // dynamic
    },
  ];

  const handleSelect = (key: keyof typeof selection, value: string) => {
    setSelection((prevSelection) => {
      const newSelection = { ...prevSelection, [key]: value };

      // Reset grind if Capsule is selected
      if (key === "preference" && value === "Capsule") {
        newSelection.grind = ""; // Clear any previous grind selection
      }

      // Determine active step
      let newStep = 1;
      if (newSelection.preference) newStep = 2;
      if (newSelection.preference === "Capsule") {
        if (newSelection.type) newStep = 3;
        if (newSelection.amount) newStep = 5; // Jump to delivery when amount is chosen
      } else {
        if (newSelection.type) newStep = 3;
        if (newSelection.amount) newStep = 4;
        if (newSelection.grind) newStep = 5;
      }
      setActiveStep(newStep);

      setOpenSections((prevOpenSections) => {
        const newOpenSections = { ...prevOpenSections, [key]: true };

        if (key === "preference") {
          newOpenSections.type = true;
          newOpenSections.grind = false; // Always keep grind closed initially when switching preferences
        }

        if (key === "type") newOpenSections.amount = true;

        if (key === "amount") {
          if (newSelection.preference !== "Capsule") {
            newOpenSections.grind = true; // Only open grind if not Capsule
          } else {
            newOpenSections.delivery = true; // If Capsule, skip grind and open delivery
          }
        }

        if (key === "grind") newOpenSections.delivery = true;

        return newOpenSections;
      });

      return newSelection;
    });
  };

  const allSelectionsMade =
    selection.preference &&
    selection.type &&
    selection.amount &&
    selection.delivery &&
    (selection.preference === "Capsule" || selection.grind); // Ignore grind if Capsule is selected

  const calculateMonthlyCost = () => {
    if (!selection.amount || !selection.delivery) return 0;
    const selectedPlan = priceMap[selection.amount].find(
      (plan) => plan.name === selection.delivery
    );
    if (!selectedPlan) return 0;

    if (selection.delivery === "Every week") return selectedPlan.price * 4;
    if (selection.delivery === "Every 2 weeks") return selectedPlan.price * 2;
    return selectedPlan.price;
  };

  return (
    <section className="px-6 md:px-[39px] xl:px-0 flex justify-between max-w-[1110px] mx-auto">
      <div className="hidden xl:block w-[355px]">
        <ProgressSidebar
          activeStep={activeStep}
          isCapsuleSelected={isCapsuleSelected}
          onStepClick={handleStepClick}
        />
      </div>
      <div className="w-full xl:w-[730px] ">
        {STEP_CONFIG.map((step) => {
          const options =
            typeof step.options === "function" ? step.options() : step.options;

          const isVisible = step.show ? step.show(selection) : true;
          const isDisabled = step.disabled ? step.disabled(selection) : false;

          if (!isVisible) return null;

          return (
            <div
              key={step.id}
              id={step.id}
              className="mb-[96px] md:mb-[100px] xl:mb-[88px]"
            >
              <Dropdown
                id={step.id}
                title={step.title}
                options={options}
                selected={selection[step.key] || ""}
                onSelect={(value) => handleSelect(step.key, value)}
                open={openSections[step.key]}
                disabled={isDisabled}
              />
            </div>
          );
        })}

        <OrderSummary selection={selection} />
        <div className="flex justify-center xl:justify-end">
          <button
            className={`w-[217px] h-14 rounded-md text-light-cream font-heading text-lg mb-[120px] md:mb-[144px] transition-all duration-300 ${
              allSelectionsMade
                ? "bg-dark-cyan hover:bg-light-blue"
                : "bg-disabled cursor-not-allowed"
            }`}
            disabled={!allSelectionsMade}
            onClick={() => setIsModalOpen(true)}
          >
            Create my plan!
          </button>
        </div>

        {isModalOpen && (
          <OrderSummaryModal
            selection={selection}
            onClose={() => setIsModalOpen(false)}
            calculateMonthlyCost={calculateMonthlyCost}
          />
        )}
      </div>
    </section>
  );
}
