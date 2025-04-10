import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Selection {
  preference: string;
  type: string;
  amount: string;
  grind?: string;
  delivery: string;
}

interface OrderSummaryModalProps {
  selection: Selection;
  onClose: () => void;
  calculateMonthlyCost: () => number;
}

const OrderSummaryModal: React.FC<OrderSummaryModalProps> = ({
  selection,
  onClose,
  calculateMonthlyCost,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay to allow transition to run
    const timeout = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const isCapsule = selection.preference === "Capsule";

  const formatSelection = (value: string) =>
    value ? (
      <span className="text-dark-cyan font-heading">{value}</span>
    ) : (
      <span className="text-dark-cyan">_____</span>
    );

  return (
    <div
      className="z-9999 fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg relative z-10000 max-w-[540px] w-full mx-6 md:mx-0 transform transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[28px] md:text-[40px] py-[28px] md:py-11 px-6 md:px-14 font-heading text-white rounded-t-lg bg-[url('/images/plan/desktop/bg-modal-top.png')] bg-no-repeat bg-cover bg-center">
          Order Summary
        </h2>

        <p className="mt-10 text-2xl text-grey font-heading px-6 md:px-14">
          “
          {isCapsule ? (
            <>
              I drink my coffee using {formatSelection("Capsules")}, with a{" "}
              {formatSelection(selection.type)} type of bean.{" "}
              {formatSelection(selection.amount)} sent to me{" "}
              {formatSelection(selection.delivery)}.
            </>
          ) : (
            <>
              I drink my coffee as {formatSelection(selection.preference)}, with
              a {formatSelection(selection.type)} type of bean.{" "}
              {formatSelection(selection.amount)} ground ala{" "}
              {formatSelection(selection.grind ?? "_____")}, sent to me{" "}
              {formatSelection(selection.delivery)}.
            </>
          )}
          ”
        </p>

        <p className="mt-2 text-dark-grey-blue text-[15px] opacity-80 px-6 md:px-14">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at checkout.
        </p>

        <div className="flex justify-between items-center md:px-14 md:mb-14 md:mt-[47px] md:gap-3">
          <p className="hidden md:inline text-[32px] font-heading">
            ${calculateMonthlyCost().toFixed(2)} / mo
          </p>

          <Link
            href="/"
            className="w-full flex-1 m-6 md:m-0 md:w-auto flex justify-center items-center h-14 bg-dark-cyan text-light-cream font-heading text-lg rounded-md transition duration-300 hover:bg-light-blue"
          >
            <span>Checkout</span>
            <span className="ml-2 md:hidden">
              - ${calculateMonthlyCost().toFixed(2)} / mo
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryModal;
