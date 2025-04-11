import { Button } from "../Button";

const steps = [
  {
    number: "01",
    title: "Pick your coffee",
    text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    number: "02",
    title: "Choose the frequency",
    text: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: "03",
    title: "Receive and enjoy!",
    text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-[39px] xl:px-0">
      <div className="w-full max-w-[1105px] mx-auto flex flex-col items-center md:items-start text-center md:text-left py-[120px] md:py-[144px] xl:py-[200px]">
        <h2 className="text-grey text-[24px] font-heading xl:pb-[30px]">
          How it works
        </h2>

        <div className="hidden md:flex items-center relative my-10 w-full max-w-[689px] xl:max-w-[1200px]">
          <div className="absolute top-1/2 left-0 w-[466px] xl:w-[760px]  h-[2px] bg-pale-orange" />

          <div className="relative w-full flex justify-start gap-[202px] xl:gap-[349px]">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-[31px] h-[31px] border-2 border-dark-cyan rounded-full bg-white relative"
              />
            ))}
          </div>
        </div>

        {/* Steps (Tablet: Horizontal Row) */}
        <div className="flex flex-col md:flex-row md:justify-between w-full max-w-[689px] gap-[56px] md:gap-[10px] xl:gap-[155px] pt-[64px] md:pt-[0px] mb-10 md:mb-[40px] xl:mb-[56px]">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
        <Button href="/subscribe">Create your plan</Button>
      </div>
    </section>
  );
}

const StepCard = ({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) => (
  <div className="flex flex-col md:flex-1 md:w-[223px]">
    <span className="text-pale-orange text-[72px] font-heading">{number}</span>
    <h3 className="text-dark-grey-blue text-[28px] xl:text-[32px] font-heading md:mt-4">
      {title}
    </h3>
    <p className="mt-6 text-dark-grey-blue text-responsive font-body w-[327px] mx-auto md:w-[223px] xl:w-[285px]">
      {text}
    </p>
  </div>
);
