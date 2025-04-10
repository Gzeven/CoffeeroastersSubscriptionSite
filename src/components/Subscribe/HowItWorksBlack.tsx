export default function HowItWorksBlack() {
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

  return (
    <section
      className="xl:w-[88.88%] xl:mx-auto my-[120px] md:my-[144px] xl:my-[168px] rounded-[10px] bg-[url('/images/plan/mobile/bg-steps.png')] 
              md:bg-[url('/images/plan/tablet/bg-steps.png')] 
              xl:bg-[url('/images/plan/desktop/bg-steps.png')] 
              bg-no-repeat bg-cover bg-center max-w-[1280px]"
    >
      <div className="margin-item max-w-[1105px] mx-auto flex flex-col items-center md:items-start text-center md:text-left py-[80px] md:py-[96px] xl:py-[91px]">
        <div className="hidden md:flex items-center relative my-10 w-full max-w-[689px] xl:max-w-[1200px]">
          <div className="absolute top-1/2 left-0 w-[466px] xl:w-[752px]  h-[2px] bg-pale-orange ml-[15px]" />

          <div className="relative w-full flex justify-start gap-[202px] xl:gap-[345px]">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-[31px] h-[31px] border-2 border-dark-cyan rounded-full  relative"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between w-full max-w-[689px] gap-[56px] md:gap-[10px] xl:gap-[155px]  md:pt-[0px]">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-1 md:w-[223px]">
              <span className="text-pale-orange text-[72px] font-heading">
                {step.number}
              </span>
              <h3 className="text-light-cream text-[28px] xl:text-[32px] font-heading md:mt-4">
                {step.title}
              </h3>
              <p className="mt-6 text-light-cream text-responsive font-body w-[327px] mx-auto md:w-[223px] xl:w-[285px] xl:pb-4">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
