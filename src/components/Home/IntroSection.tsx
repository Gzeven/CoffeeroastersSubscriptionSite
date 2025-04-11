import Image from "next/image";
import { Button } from "../Button";

const images = [
  {
    src: "/images/home/desktop/image-hero-coffeepress.jpg",
    className: "hidden xl:block",
    minWidth: 1280,
  },
  {
    src: "/images/home/tablet/image-hero-coffeepress.jpg",
    className: "hidden md:block xl:hidden",
    minWidth: 768,
  },
  {
    src: "/images/home/mobile/image-hero-coffeepress.jpg",
    className: "block md:hidden",
    minWidth: 0,
  },
];

const IntroSection = () => {
  return (
    <section className="margin-item relative h-[500px] xl:h-[600px] flex items-center rounded-[10px] overflow-hidden max-w-[1280px]">
      <div className="absolute inset-0">
        {images.map(({ src, className, minWidth }, index) => (
          <Image
            key={index}
            src={src}
            alt=""
            fill
            className={`object-cover ${className}`}
            sizes={`(min-width: ${minWidth}px) 100vw`}
            priority
            role="presentation"
          />
        ))}
      </div>

      <div className="relative w-full">
        <div className="container mx-auto md:mx-0 md:ml-[58px] xl:ml-[85px] text-center md:text-left max-w-[500px] p-6 md:p-0 ">
          <h1 className="text-light-cream font-heading leading-tight text-[40px] md:text-5xl xl:text-7xl">
            <span className="block">Great coffee</span>
            <span className="block">made simple.</span>
          </h1>
          <p className="text-light-cream opacity-80 text-responsive mt-6 md:mt-[24px] xl:mt-[32px] mb-10 md:mb-[40px] xl:mb-[56px] mx-auto md:mx-0 max-w-[297px] md:max-w-[398px] xl:max-w-[445px]  ">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Button href="/subscribe">Create your plan</Button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
