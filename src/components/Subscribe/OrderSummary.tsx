interface OrderSummaryProps {
    selection: {
      preference: string;
      type: string;
      amount: string;
      grind?: string;
      delivery: string;
    };
  }
  
  export default function OrderSummary({ selection }: OrderSummaryProps) {
    const isCapsule = selection.preference === "Capsule";
  
    const format = (value: string) =>
      value ? (
        <span className="text-dark-cyan font-heading">{value}</span>
      ) : (
        <span className="text-dark-cyan">_____</span>
      );
  
    return (
      <div
        className="text-light-cream px-6 py-8 rounded-[10px] bg-[url('/images/plan/mobile/bg-order-summary.png')] mt-[96px] md:mt-[144px] xl:mt-[88px] mb-[56px] md:mb-[40px]
          xl:bg-[url('/images/plan/desktop/bg-order-summary.png')] bg-no-repeat bg-cover bg-center"
      >
        <h3 className="text-base uppercase tracking-wide text-white opacity-50">
          Order Summary
        </h3>
        <p className="text-2xl font-heading mt-2">
          “
          {isCapsule ? (
            <>
              I drink my coffee using {format("Capsules")}, with a{" "}
              {format(selection.type)} type of bean. {format(selection.amount)} sent to me{" "}
              {format(selection.delivery)}.
            </>
          ) : (
            <>
              I drink my coffee as {format(selection.preference)}, with a{" "}
              {format(selection.type)} type of bean. {format(selection.amount)} ground ala{" "}
              {format(selection.grind ?? "")}, sent to me {format(selection.delivery)}.
            </>
          )}
          ”
        </p>
      </div>
    );
  }
  