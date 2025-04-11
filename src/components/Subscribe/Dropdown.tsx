import { useState, useEffect } from "react";
import Image from "next/image";

interface DropdownProps {
  id: string;
  title: string;
  options: { name: string; description: string }[];
  selected: string;
  onSelect: (value: string) => void;
  disabled?: boolean;
  open: boolean;
}

const Dropdown = ({
  id,
  title,
  options,
  selected,
  onSelect,
  disabled,
  open,
}: DropdownProps) => {
  const [enabled, setEnabled] = useState(open);

  // Sync internal state with prop
  useEffect(() => {
    setEnabled(open);
  }, [open]);

  const handleToggle = () => {
    if (!disabled) {
      setEnabled((prev) => !prev);
    }
  };

  const handleToggleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="transition-all duration-300 w-full">
      <div
        role="button"
        aria-expanded={enabled}
        aria-controls={`${id}-options`}
        tabIndex={0}
        className={`flex justify-between items-center cursor-pointer ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={handleToggle}
        onKeyDown={handleToggleKeyDown}
      >
        <h2 className="text-2xl md:text-[32px] font-heading text-grey">
          {title}
        </h2>
        <Image
          src="/images/plan/desktop/icon-arrow.svg"
          width={19}
          height={13}
          alt=""
          className={`w-[19px] h-[13px] transition-transform duration-300 ${
            enabled ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        id={`${id}-options`}
        className={`mt-8 md:mt-10 overflow-hidden transition-all duration-500 ease-in-out ${
          enabled ? "opacity-100 max-h-[500px]" : "max-h-0 opacity-0"
        } flex flex-col md:flex-row md:w-full gap-4 md:gap-[10px]`}
        role="region"
        aria-hidden={!enabled}
      >
        {options.map((option) => (
          <button
            key={option.name}
            type="button"
            tabIndex={enabled && !disabled ? 0 : -1}
            className={`p-6 md:pr-0 border h-[140px] md:h-[250px] rounded-lg text-left w-full flex flex-col transition duration-300
              ${
                selected === option.name
                  ? "bg-dark-cyan text-white"
                  : "bg-light-grey text-dark-grey-blue"
              }
              ${
                disabled
                  ? "opacity-50 cursor-not-allowed"
                  : "only-hover:bg-pale-orange"
              } cursor-pointer
            `}
            onClick={() => !disabled && onSelect(option.name)}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === " ") && !disabled) {
                e.preventDefault();
                onSelect(option.name);
              }
            }}
            disabled={disabled}
          >
            <h3 className="font-heading text-2xl md:mb-6">{option.name}</h3>
            <p className="font-body text-base mt-2 md:max-w-[172px]">
              {option.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
